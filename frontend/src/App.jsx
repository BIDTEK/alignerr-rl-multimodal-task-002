import { useCallback, useEffect, useState } from 'react';
import AppShell from './components/AppShell.jsx';
import DashboardHeader from './components/DashboardHeader.jsx';
import KpiGrid from './components/KpiGrid.jsx';
import AnalyticsCard from './components/AnalyticsCard.jsx';
import ActivityTable from './components/ActivityTable.jsx';
import PagePlaceholder from './components/PagePlaceholder.jsx';
import NotificationPanel from './components/NotificationPanel.jsx';
import ProfileMenu from './components/ProfileMenu.jsx';
import { navItems } from './data/navigation.js';
import { kpisByRange } from './data/kpis.js';
import { chartSeriesByRange } from './data/chartSeries.js';
import { activityRows } from './data/activity.js';
import { useEscapeKey } from './hooks/useEscapeKey.js';

const RANGES = [
  { id: '7d', label: '7 days' },
  { id: '30d', label: '30 days' },
  { id: '90d', label: '90 days' },
  { id: '12m', label: '12 months' },
];

export default function App() {
  const [activePage, setActivePage] = useState('overview');
  const [activeRange, setActiveRange] = useState('30d');
  const [openPopover, setOpenPopover] = useState(null);

  const closePopovers = useCallback(() => setOpenPopover(null), []);
  useEscapeKey(closePopovers);

  const page = navItems.find((item) => item.id === activePage) ?? navItems[0];

  useEffect(() => {
    document.title = `PulseBoard — ${page.label}`;
  }, [page.label]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const onChange = (event) => {
      if (event.matches) {
        setOpenPopover((current) => (current === 'mobileNav' ? null : current));
      }
    };
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  const togglePopover = (name) => {
    setOpenPopover((current) => (current === name ? null : name));
  };

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    setOpenPopover(null);
  };

  const isDashboard = activePage === 'overview';

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <AppShell
        activePage={activePage}
        pageLabel={page.label}
        isMobileNavOpen={openPopover === 'mobileNav'}
        onToggleMobileNav={() => togglePopover('mobileNav')}
        onCloseMobileNav={closePopovers}
        onNavigate={handleNavigate}
        isNotificationsOpen={openPopover === 'notifications'}
        isProfileOpen={openPopover === 'profile'}
        onToggleNotifications={() => togglePopover('notifications')}
        onToggleProfile={() => togglePopover('profile')}
      >
        {isDashboard ? (
          <>
            <DashboardHeader
              activeRange={activeRange}
              onRangeChange={setActiveRange}
              ranges={RANGES}
            />
            <KpiGrid kpis={kpisByRange[activeRange]} />
            <div className="dashboard-grid">
              <AnalyticsCard data={chartSeriesByRange[activeRange === '12m' ? '90d' : activeRange]} />
              <ActivityTable rows={activityRows} />
            </div>
          </>
        ) : (
          <PagePlaceholder page={page} />
        )}
      </AppShell>
      <NotificationPanel isOpen={openPopover === 'notifications'} onClose={closePopovers} />
      <ProfileMenu isOpen={openPopover === 'profile'} onClose={closePopovers} />
    </>
  );
}
