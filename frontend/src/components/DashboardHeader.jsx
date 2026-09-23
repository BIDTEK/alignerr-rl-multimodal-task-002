import FilterControl from './FilterControl.jsx';

export default function DashboardHeader({ activeRange, onRangeChange, ranges }) {
  return (
    <div className="dashboard-header">
      <div>
        <h1 className="dashboard-header__title">Overview</h1>
        <p className="dashboard-header__subtitle">
          Monitor your product key performance metrics and revenue trends.
        </p>
      </div>
      <FilterControl activeRange={activeRange} onRangeChange={onRangeChange} ranges={ranges} />
    </div>
  );
}
