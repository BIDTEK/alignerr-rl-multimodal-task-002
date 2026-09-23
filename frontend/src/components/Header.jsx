import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';

export default function Header({
  pageLabel,
  isMobileNavOpen,
  onMenuClick,
  isNotificationsOpen,
  isProfileOpen,
  onToggleNotifications,
  onToggleProfile,
}) {
  const menuRef = useRef(null);
  const prevMobileNavOpen = useRef(isMobileNavOpen);

  useEffect(() => {
    if (prevMobileNavOpen.current && !isMobileNavOpen) {
      menuRef.current?.focus();
    }
    prevMobileNavOpen.current = isMobileNavOpen;
  }, [isMobileNavOpen]);

  const stopAndRun = (fn) => (event) => {
    event.stopPropagation();
    fn();
  };

  return (
    <header className="header">
      <div className="header__left">
        <button
          ref={menuRef}
          type="button"
          className="icon-btn header__menu"
          aria-label="Open navigation"
          aria-expanded={isMobileNavOpen}
          aria-controls="app-sidebar"
          onClick={stopAndRun(onMenuClick)}
        >
          <Icon name="menu" size={22} />
        </button>
        <div className="header__context">
          <span className="header__context-label">Workspace</span>
          <span className="header__context-page">{pageLabel}</span>
        </div>
      </div>
      <div className="header__right">
        <button
          id="notifications-trigger"
          type="button"
          className="icon-btn"
          aria-label="Notifications"
          aria-expanded={isNotificationsOpen}
          aria-haspopup="dialog"
          aria-controls="notification-panel"
          onClick={stopAndRun(onToggleNotifications)}
        >
          <Icon name="bell" size={20} />
          <span className="header__dot" aria-hidden="true" />
        </button>
        <button
          id="profile-trigger"
          type="button"
          className="profile-btn"
          aria-expanded={isProfileOpen}
          aria-haspopup="menu"
          aria-controls="profile-menu"
          onClick={stopAndRun(onToggleProfile)}
        >
          <span className="avatar" aria-hidden="true">JL</span>
          <span className="profile-btn__name">Jordan Lee</span>
          <Icon name="chevron-down" size={16} className="profile-btn__chevron" />
        </button>
      </div>
    </header>
  );
}
