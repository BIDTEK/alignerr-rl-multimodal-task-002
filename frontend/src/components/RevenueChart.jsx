import { useEffect, useRef, useState } from 'react';
import { formatCompactCurrency, formatCurrency } from '../utils/format.js';

const HEIGHT = 280;
const PADDING = { top: 16, right: 16, bottom: 36, left: 56 };

function niceCeiling(value) {
  const magnitude = 10 ** Math.floor(Math.log10(value));
  const normalized = value / magnitude;

  let nice;
  if (normalized <= 1) nice = 1;
  else if (normalized <= 2) nice = 2;
  else if (normalized <= 2.5) nice = 2.5;
  else if (normalized <= 5) nice = 5;
  else nice = 10;

  return nice * magnitude;
}

export default function RevenueChart({ data }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setWidth(Math.floor(entries[0].contentRect.width));
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { points } = data;
  const maxValue = Math.max(...points.map((point) => Math.max(point.revenue, point.target)));
  const yMax = niceCeiling(maxValue);
  const plotWidth = Math.max(width - PADDING.left - PADDING.right, 0);
  const plotHeight = HEIGHT - PADDING.top - PADDING.bottom;

  const xFor = (index) =>
    PADDING.left + (points.length <= 1 ? plotWidth / 2 : (index / (points.length - 1)) * plotWidth);
  const yFor = (value) => PADDING.top + plotHeight - (value / yMax) * plotHeight;

  const ticks = [0, 0.25, 0.5, 0.75, 1].map((fraction) => yMax * fraction);

  const linePath = (key) =>
    points
      .map((point, index) => `${index === 0 ? 'M' : 'L'} ${xFor(index).toFixed(2)} ${yFor(point[key]).toFixed(2)}`)
      .join(' ');

  const revenuePath = linePath('revenue');
  const targetPath = linePath('target');
  const areaPath = `${revenuePath} L ${xFor(points.length - 1).toFixed(2)} ${yFor(0).toFixed(2)} L ${xFor(0).toFixed(2)} ${yFor(0).toFixed(2)} Z`;

  const labelEvery = width < 520 && points.length > 8 ? 2 : 1;

  if (width === 0) {
    return <div ref={containerRef} className="chart" style={{ height: HEIGHT }} />;
  }

  return (
    <div ref={containerRef} className="chart">
      <svg
        className="chart__svg"
        width={width}
        height={HEIGHT}
        viewBox={`0 0 ${width} ${HEIGHT}`}
        role="img"
        aria-labelledby="chart-title chart-desc"
      >
        <title id="chart-title">Revenue chart — {data.label}</title>
        <desc id="chart-desc">{data.summary}</desc>

        {ticks.map((tick, index) => (
          <g key={index}>
            <line
              className="chart__grid-line"
              x1={PADDING.left}
              x2={width - PADDING.right}
              y1={yFor(tick)}
              y2={yFor(tick)}
            />
            <text
              className="chart__axis-label"
              x={PADDING.left - 10}
              y={yFor(tick) + 4}
              textAnchor="end"
            >
              {formatCompactCurrency(tick)}
            </text>
          </g>
        ))}

        {points.map((point, index) => {
          if (index % labelEvery !== 0 && index !== points.length - 1) {
            return null;
          }
          return (
            <text
              key={`${point.label}-${index}`}
              className="chart__axis-label"
              x={xFor(index)}
              y={HEIGHT - 10}
              textAnchor="middle"
            >
              {point.label}
            </text>
          );
        })}

        <path className="chart__area" d={areaPath} />
        <path className="chart__line chart__line--target" d={targetPath} />
        <path className="chart__line chart__line--revenue" d={revenuePath} />

        {points.map((point, index) => (
          <circle
            key={`dot-${point.label}-${index}`}
            className="chart__dot"
            cx={xFor(index)}
            cy={yFor(point.revenue)}
            r={3.5}
          />
        ))}
      </svg>

      <table className="sr-only">
        <caption>Revenue and target for {data.label}</caption>
        <thead>
          <tr>
            <th scope="col">Period</th>
            <th scope="col">Revenue</th>
            <th scope="col">Target</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point) => (
            <tr key={point.label}>
              <td>{point.label}</td>
              <td>{formatCurrency(point.revenue)}</td>
              <td>{formatCurrency(point.target)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
