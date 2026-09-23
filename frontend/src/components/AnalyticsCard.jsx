import RevenueChart from './RevenueChart.jsx';

export default function AnalyticsCard({ data }) {
  return (
    <section className="card analytics-card" aria-labelledby="analytics-heading">
      <div className="card__header analytics-card__header">
        <div>
          <h2 id="analytics-heading" className="card__title">
            Revenue analytics
          </h2>
          <p className="card__subtitle">{data.context}</p>
        </div>
        <div className="chart__legend" aria-hidden="true">
          <span className="chart__legend-item">
            <span className="chart__legend-swatch chart__legend-swatch--revenue" />
            Revenue
          </span>
          <span className="chart__legend-item">
            <span className="chart__legend-swatch chart__legend-swatch--target" />
            Target
          </span>
        </div>
      </div>
      <RevenueChart data={data} />
    </section>
  );
}
