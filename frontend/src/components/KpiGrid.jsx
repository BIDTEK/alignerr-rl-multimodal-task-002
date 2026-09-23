import KpiCard from './KpiCard.jsx';

export default function KpiGrid({ kpis }) {
  return (
    <section className="kpi-grid" aria-labelledby="kpi-heading">
      <h2 id="kpi-heading" className="sr-only">
        Key performance indicators
      </h2>
      {kpis.map((kpi) => (
        <KpiCard key={kpi.id} kpi={kpi} />
      ))}
    </section>
  );
}
