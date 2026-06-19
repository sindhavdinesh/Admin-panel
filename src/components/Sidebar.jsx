import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Calendar,
  Monitor,
  Hourglass,
  MessageSquare,
  Settings,
  HelpCircle
} from 'lucide-react'

function Sidebar({ activeMenu, onMenuChange }) {
  const sidebarItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={16} strokeWidth={2.5} /> },
    { name: 'People', icon: <Users size={16} strokeWidth={2.5} /> },
    { name: 'Projects', icon: <ClipboardList size={16} strokeWidth={2.5} /> },
    { name: 'Calendar', icon: <Calendar size={16} strokeWidth={2.5} /> },
    { name: 'Training', icon: <Monitor size={16} strokeWidth={2.5} /> },
    { name: 'Timesheet', icon: <Hourglass size={16} strokeWidth={2.5} /> },
    { name: 'Reports', icon: <MessageSquare size={16} strokeWidth={2.5} /> },
    { name: 'Administration', icon: <Settings size={16} strokeWidth={2.5} /> },
    { name: 'Help', icon: <HelpCircle size={16} strokeWidth={2.5} /> }
  ]

  return (
    <div className="left-column">
      <aside className="sidebar">
        {sidebarItems.map((item) => (
          <div
            key={item.name}
            className={`menu-item ${activeMenu === item.name ? 'active' : ''}`}
            onClick={() => onMenuChange(item.name)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </aside>

      {/* Footer Version Info Card */}
      <div className="sidebar-footer">
        <div className="footer-logo">Camioca</div>
        <div className="footer-version">Version: 1.0.0.11</div>
      </div>
    </div>
  )
}

export default Sidebar
