import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import { navItems } from '../data/navigation.js';

export default function Sidebar({ activePage, isOpen, onNavigate, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <aside id="app-sidebar" className={`sidebar${isOpen ? ' is-open' : ''}`}>
      <div className="sidebar__top">
        <a
          href="#overview"
          className="sidebar__brand"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('overview');
          }}
        >
          <span className="brand-mark" aria-hidden="true">
            <Icon name="pulse" size={20} />
          </span>
          <span className="brand-name">PulseBoard</span>
        </a>
        <button
          ref={closeRef}
          type="button"
          className="icon-btn sidebar__close"
          aria-label="Close navigation"
          onClick={onClose}
        >
          <Icon name="x" size={20} />
        </button>
      </div>
      <nav className="sidebar__nav" aria-label="Primary">
        <ul className="sidebar__nav-list">
          {navItems.map((item) => {
            const isActive = item.id === activePage;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`sidebar__nav-link${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(item.id);
                  }}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="sidebar__footer">
        <div className="sidebar__status">
          <span className="sidebar__status-dot" aria-hidden="true" />
          <div>
            <p className="sidebar__status-title">All systems operational</p>
            <p className="sidebar__status-text">Last updated 2 minutes ago</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
