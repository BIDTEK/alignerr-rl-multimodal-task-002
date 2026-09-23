import Icon from './Icon.jsx';
import { formatCurrency, formatNumber, formatPercent } from '../utils/format.js';

const formatters = {
  currency: formatCurrency,
  number: formatNumber,
  percent: formatPercent,
};

export default function KpiCard({ kpi }) {
  const format = formatters[kpi.format] ?? formatNumber;
  const isUp = kpi.trend === 'up';
  const directionText = isUp ? 'up' : 'down';

  return (
    <article className="kpi-card">
      <h3 className="kpi-card__label">{kpi.label}</h3>
      <p className="kpi-card__value">{format(kpi.value)}</p>
      <p className={`kpi-card__trend kpi-card__trend--${kpi.trend}`}>
        <Icon name={isUp ? 'arrow-up' : 'arrow-down'} size={14} />
        <span>
          {Math.abs(kpi.delta).toFixed(1)}% {directionText}
        </span>
        <span className="kpi-card__compare">{kpi.compareText}</span>
      </p>
    </article>
  );
}
