import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import { useClickOutside } from '../hooks/useClickOutside.js';

const menuItems = [
  { id: 'account', label: 'Account settings', icon: 'user' },
  { id: 'billing', label: 'Billing & plan', icon: 'card' },
  { id: 'team', label: 'Team members', icon: 'customers' },
  { id: 'logout', label: 'Sign out', icon: 'logout' },
];

export default function ProfileMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const prevOpen = useRef(isOpen);

  useClickOutside(menuRef, onClose, isOpen);

  useEffect(() => {
    if (isOpen) {
      menuRef.current?.querySelector('button, a')?.focus();
    } else if (prevOpen.current) {
      document.getElementById('profile-trigger')?.focus();
    }
    prevOpen.current = isOpen;
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="profile-menu"
      ref={menuRef}
      className="popover profile-menu"
      role="menu"
      aria-label="Account menu"
    >
      <div className="profile-menu__header">
        <span className="avatar avatar--lg" aria-hidden="true">
          JL
        </span>
        <div>
          <p className="profile-menu__name">Jordan Lee</p>
          <p className="profile-menu__email">jordan@pulseboard.io</p>
        </div>
      </div>
      <ul className="profile-menu__list">
        {menuItems.map((item) => (
          <li key={item.id} role="none">
            <button
              type="button"
              role="menuitem"
              className="profile-menu__item"
              onClick={onClose}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
