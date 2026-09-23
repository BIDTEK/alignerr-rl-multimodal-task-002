import Icon from './Icon.jsx';

const STATUS_CONFIG = {
  completed: { label: 'Completed', icon: 'check', className: 'status-badge--completed' },
  pending: { label: 'Pending', icon: 'clock', className: 'status-badge--pending' },
  failed: { label: 'Failed', icon: 'alert', className: 'status-badge--failed' },
};

export default function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.pending;

  return (
    <span className={`status-badge ${config.className}`}>
      <Icon name={config.icon} size={14} />
      {config.label}
    </span>
  );
}
