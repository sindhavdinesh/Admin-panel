import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MoreHorizontal, 
  Calendar, 
  Clock, 
  FileText, 
  Edit,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import avatarImg from '../assets/avatar.png'

function MyDetailsView({ onNavigate }) {
  const [collapsed, setCollapsed] = useState(false)
  const [filterText, setFilterText] = useState('Filter')

  const projects = [
    { status: 'active', task: 'Project 1', role: 'Specialist', desc: 'Management', date: '11.06.2019', cap: '35%' },
    { status: 'active', task: 'Project 2', role: 'Specialist', desc: 'Support', date: '12.02.2019', cap: '65%' }
  ]

  return (
    <main className="main-content">
      {/* Upper Profile Container */}
      <div className="active-people-stats-card" style={{ padding: '32px', marginBottom: '24px', position: 'relative' }}>
        
        {/* Main Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 className="active-people-title" style={{ fontSize: '20px', margin: 0 }}>My details</h2>
            <button className="year-picker-btn" style={{ padding: '6px', borderRadius: '4px', backgroundColor: '#e8f0fe', color: '#1a73e8', border: 'none', cursor: 'pointer' }}>
              <Edit size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* User profile picture details card */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'absolute', right: '32px', top: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img 
                src={avatarImg} 
                alt="Dominique Charpentier" 
                className="user-avatar" 
                style={{ width: '80px', height: '80px', marginBottom: '8px', border: '2px solid #cbd5e1' }} 
              />
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#1a1a1a' }}>Dominique Charpentier</span>
              <span style={{ fontSize: '10px', fontWeight: '600', color: '#a0aec0', marginTop: '2px' }}>CEO</span>
              
              {/* Contact / Action buttons */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <button style={{ width: '28px', height: '28px', borderRadius: '4px', border: 'none', backgroundColor: '#e8f0fe', color: '#1a73e8', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer' }}>
                  <Mail size={12} strokeWidth={2.5} style={{ margin: '0 auto' }} />
                </button>
                <button style={{ width: '28px', height: '28px', borderRadius: '4px', border: 'none', backgroundColor: '#e8f0fe', color: '#1a73e8', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer' }}>
                  <Phone size={12} strokeWidth={2.5} style={{ margin: '0 auto' }} />
                </button>
                <button style={{ width: '28px', height: '28px', borderRadius: '4px', border: 'none', backgroundColor: '#e8f0fe', color: '#1a73e8', display: 'flex', alignItems: 'center', justifyCenter: 'center', cursor: 'pointer' }}>
                  <MoreHorizontal size={12} strokeWidth={2.5} style={{ margin: '0 auto' }} />
                </button>
              </div>

              {/* Quick links list */}
              <div className="report-info-box" style={{ width: '160px', marginTop: '16px', padding: '12px', gap: '8px', border: '1px solid #e2e8f0' }}>
                <div 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: '#1a73e8', fontWeight: '700', cursor: 'pointer' }}
                  onClick={() => onNavigate('Calendar')}
                >
                  <Calendar size={12} strokeWidth={2.5} />
                  <span>Calendar</span>
                </div>
                <div 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: '#1a73e8', fontWeight: '700', cursor: 'pointer' }}
                  onClick={() => onNavigate('Vacations')}
                >
                  <Clock size={12} strokeWidth={2.5} />
                  <span>Vacations</span>
                </div>
                <div 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: '#1a73e8', fontWeight: '700', cursor: 'pointer' }}
                  onClick={() => onNavigate('Timesheet')}
                >
                  <Clock size={12} strokeWidth={2.5} />
                  <span>Timesheet</span>
                </div>
                <div 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: '#1a73e8', fontWeight: '700', cursor: 'pointer' }}
                  onClick={() => onNavigate('Corporate CV')}
                >
                  <FileText size={12} strokeWidth={2.5} />
                  <span>Corporate CV</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Input Forms Row 1 */}
        <div style={{ display: 'flex', gap: '16px', width: 'calc(100% - 220px)', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Name</label>
            <input type="text" className="form-input" value="Dominique Charpentier" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Title</label>
            <input type="text" className="form-input" value="CEO" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
        </div>

        {/* Input Forms Row 2 */}
        <div style={{ display: 'flex', gap: '16px', width: 'calc(100% - 220px)', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Practice</label>
            <input type="text" className="form-input" value="Finance" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Branch</label>
            <div className="filter-select-wrapper" style={{ height: '38px', backgroundColor: '#f1f1f3', borderRadius: '4px' }}>
              <select className="filter-select" disabled value="Paris" style={{ color: '#1a1a1a', fontWeight: '500' }}>
                <option value="Paris">Paris</option>
              </select>
              <ChevronDown size={14} className="filter-select-arrow" strokeWidth={3} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Contract</label>
            <input type="text" className="form-input" value="Employee" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Grade</label>
            <input type="text" className="form-input" value="MG3" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
        </div>

        {/* Input Forms Row 3 */}
        <div style={{ display: 'flex', gap: '16px', width: 'calc(100% - 220px)', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Division</label>
            <input type="text" className="form-input" value="Moonlight - Paris" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Division manager</label>
            <input type="text" className="form-input" value="" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
        </div>

        {/* Input Forms Row 4 */}
        <div style={{ display: 'flex', gap: '16px', width: 'calc(100% - 220px)', marginBottom: '0' }}>
          <div style={{ flex: 2 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Login</label>
            <input type="text" className="form-input" value="id/ceo" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Status history</label>
            <input type="text" className="form-input" value="Activated" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label" style={{ color: '#718096', fontSize: '10px' }}>Date</label>
            <input type="text" className="form-input" value="13/05/2009" disabled style={{ backgroundColor: '#f1f1f3', color: '#1a1a1a', fontWeight: '500' }} />
          </div>
        </div>

      </div>

      {/* Projects Table Container */}
      <div className="active-people-stats-card" style={{ padding: '24px 32px' }}>
        <div 
          className="results-header" 
          style={{ marginBottom: collapsed ? '0' : '20px', cursor: 'pointer' }}
          onClick={() => setCollapsed(!collapsed)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h2 className="active-people-title" style={{ fontSize: '16px', margin: 0 }}>Projects</h2>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} onClick={(e) => e.stopPropagation()}>
            <div className="filter-select-wrapper" style={{ width: '130px', height: '32px' }}>
              <select className="filter-select" style={{ fontSize: '11px', padding: '0 8px' }} value={filterText} onChange={(e) => setFilterText(e.target.value)}>
                <option value="Filter">Filter</option>
              </select>
              <ChevronDown size={14} className="filter-select-arrow" strokeWidth={3} />
            </div>
            
            <button 
              className="year-picker-btn" 
              style={{ border: 'none', backgroundColor: 'transparent', color: '#1a73e8', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </button>
          </div>
        </div>

        {!collapsed && (
          <div className="projects-table-wrapper">
            <table className="projects-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Status</th>
                  <th>Project Task</th>
                  <th>Role</th>
                  <th>Task</th>
                  <th>Start date</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((proj, idx) => (
                  <tr key={idx}>
                    <td>
                      <span className="dot-active" style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#24b47e', margin: '0 auto' }}></span>
                    </td>
                    <td style={{ fontWeight: '500', color: '#1a73e8', cursor: 'pointer' }}>{proj.task}</td>
                    <td>{proj.role}</td>
                    <td>{proj.desc}</td>
                    <td>{proj.date}</td>
                    <td style={{ fontWeight: '600' }}>{proj.cap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </main>
  )
}

export default MyDetailsView
