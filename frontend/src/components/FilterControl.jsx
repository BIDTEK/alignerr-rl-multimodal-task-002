export default function FilterControl({ activeRange, onRangeChange, ranges }) {
  return (
    <div className="filter-control" role="group" aria-label="Date range">
      {ranges.map((range) => {
        const isActive = range.id === activeRange;
        return (
          <button
            key={range.id}
            type="button"
            className={`filter-control__option${isActive ? ' is-active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onRangeChange(range.id)}
          >
            {range.label}
          </button>
        );
      })}
    </div>
  );
}
