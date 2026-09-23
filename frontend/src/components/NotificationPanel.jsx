import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { notifications } from '../data/notifications.js';
import { useClickOutside } from '../hooks/useClickOutside.js';

export default function NotificationPanel({ isOpen, onClose }) {
  const panelRef = useRef(null);
  const prevOpen = useRef(isOpen);
  const [readAll, setReadAll] = useState(false);

  useClickOutside(panelRef, onClose, isOpen);

  useEffect(() => {
    if (isOpen) {
      panelRef.current?.querySelector('button')?.focus();
    } else if (prevOpen.current) {
      document.getElementById('notifications-trigger')?.focus();
    }
    prevOpen.current = isOpen;
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="notification-panel"
      ref={panelRef}
      className="popover notification-panel"
      role="dialog"
      aria-label="Notifications"
    >
      <div className="popover__header">
        <h2 className="popover__title">Notifications</h2>
        <button
          type="button"
          className="icon-btn icon-btn--sm"
          aria-label="Close notifications"
          onClick={onClose}
        >
          <Icon name="x" size={18} />
        </button>
      </div>
      <ul className="notification-list">
        {notifications.map((item) => (
          <li
            key={item.id}
            className={`notification-item${item.unread && !readAll ? ' is-unread' : ''}`}
          >
            <span className="notification-item__dot" aria-hidden="true" />
            <div className="notification-item__body">
              <p className="notification-item__title">{item.title}</p>
              <p className="notification-item__detail">{item.detail}</p>
              <p className="notification-item__time">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="popover__footer">
        <button
          type="button"
          className="btn btn--ghost btn--block"
          onClick={() => setReadAll(true)}
        >
          Mark all as read
        </button>
      </div>
    </div>
  );
}
