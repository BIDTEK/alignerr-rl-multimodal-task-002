import Icon from './Icon.jsx';

export default function PagePlaceholder({ page }) {
  return (
    <div className="placeholder">
      <div className="placeholder__card">
        <span className="placeholder__icon" aria-hidden="true">
          <Icon name={page.icon} size={28} />
        </span>
        <h1 className="placeholder__title">{page.label}</h1>
        <p className="placeholder__text">
          This area of PulseBoard is ready for {page.label.toLowerCase()} content.
        </p>
        <p className="placeholder__hint">
          Use the sidebar to return to the live Overview dashboard.
        </p>
      </div>
    </div>
  );
}
