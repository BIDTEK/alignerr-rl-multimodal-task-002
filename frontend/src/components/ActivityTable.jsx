import StatusBadge from './StatusBadge.jsx';
import { formatCurrency, formatDateTime } from '../utils/format.js';

export default function ActivityTable({ rows }) {
  return (
    <section className="card activity-table-card" aria-labelledby="activity-heading">
      <div className="card__header">
        <div>
          <h2 id="activity-heading" className="card__title">
            Recent activity
          </h2>
          <p className="card__subtitle">Latest customer events across your workspace.</p>
        </div>
      </div>
      <div className="table-scroll">
        <table className="activity-table">
          <caption className="sr-only">
            Recent customer activity with status and value
          </caption>
          <thead>
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">Activity</th>
              <th scope="col">Date/time</th>
              <th scope="col">Status</th>
              <th scope="col" className="activity-table__num">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <th scope="row" className="activity-table__customer">
                  {row.customer}
                </th>
                <td>{row.activity}</td>
                <td className="activity-table__datetime">{formatDateTime(row.datetime)}</td>
                <td>
                  <StatusBadge status={row.status} />
                </td>
                <td className="activity-table__num">
                  {row.value === 0 ? '—' : formatCurrency(row.value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
