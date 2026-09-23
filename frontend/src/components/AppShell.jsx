import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';

export default function AppShell({
  activePage,
  pageLabel,
  isMobileNavOpen,
  onToggleMobileNav,
  onCloseMobileNav,
  onNavigate,
  isNotificationsOpen,
  isProfileOpen,
  onToggleNotifications,
  onToggleProfile,
  children,
}) {
  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        isOpen={isMobileNavOpen}
        onNavigate={onNavigate}
        onClose={onCloseMobileNav}
      />
      {isMobileNavOpen && (
        <button
          type="button"
          className="backdrop"
          aria-label="Close navigation"
          onClick={onCloseMobileNav}
        />
      )}
      <Header
        pageLabel={pageLabel}
        isMobileNavOpen={isMobileNavOpen}
        onMenuClick={onToggleMobileNav}
        isNotificationsOpen={isNotificationsOpen}
        isProfileOpen={isProfileOpen}
        onToggleNotifications={onToggleNotifications}
        onToggleProfile={onToggleProfile}
      />
      <main id="main-content" className="main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
