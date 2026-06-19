import { useState } from 'react'
import {
  FileText,
  Users,
  Bookmark,
  ChevronRight,
  ChevronDown,
  Calendar,
  Info
} from 'lucide-react'

function ReportsView() {
  const [activeReportTab, setActiveReportTab] = useState('User - Projects')
  const [helpMode, setHelpMode] = useState(false) // Toggle help text inside Note Box buttons

  // Built-in reports data
  const publicReports = {
    title: 'Public reports',
    sections: [
      {
        name: 'Full list of reports',
        items: []
      },
      {
        name: 'Calendar reports',
        items: ['Company calendar', 'Working days count', 'Vacation report']
      },
      {
        name: 'Registry reports',
        items: ['Project registry', 'Active account and projects', 'People and assignments', 'People grades']
      },
      {
        name: 'Employee capability profile',
        items: ['Capability profiles - status']
      }
    ]
  }

  const restrictedReports = {
    title: 'Restricted reports',
    sections: [
      {
        name: 'Full list of reports',
        items: []
      },
      {
        name: 'Time reports',
        items: ['Detailed timesheet', 'Hours approved', 'Lost hours']
      },
      {
        name: 'Cost and expenses reports',
        items: ['Project costs and expenses', 'Project expenses']
      },
      {
        name: 'Allocation and forecast reports',
        items: ['Staff allocation', 'Resource forecast']
      }
    ]
  }

  // State values for filters
  const [branch, setBranch] = useState('All')
  const [userDivision, setUserDivision] = useState('All')
  const [user, setUser] = useState('All')
  const [account, setAccount] = useState('Other')
  const [project, setProject] = useState('Other')
  const [role, setRole] = useState('Other')
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const [capacity, setCapacity] = useState('External')

  const handleClear = () => {
    setBranch('All')
    setUserDivision('All')
    setUser('All')
    setAccount('Other')
    setProject('Other')
    setRole('Other')
    setStartDate('')
    setFinishDate('')
    setCapacity('External')
  }

  return (
    <main className="main-content">
      {/* Top section: Two columns layout (Public/Restricted lists & Help/Info box) */}
      <div className="reports-top-layout">
        
        {/* Left Side: Public & Restricted Report Lists side by side */}
        <div className="reports-lists-container">
          {/* Public Reports */}
          <div className="report-list-card">
            <h3 className="report-list-title">{publicReports.title}</h3>
            <div className="report-list-sections">
              {publicReports.sections.map((sec, idx) => (
                <div key={idx} className="report-section-group">
                  <div className="report-section-header">
                    <span className="report-section-name">{sec.name}</span>
                    {sec.items.length === 0 && (
                      <ChevronRight size={14} className="report-item-arrow" strokeWidth={3} />
                    )}
                  </div>
                  {sec.items.length > 0 && (
                    <ul className="report-items-ul">
                      {sec.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="report-item-li">
                          <span className="report-item-text">{item}</span>
                          <ChevronRight size={12} className="report-item-arrow" strokeWidth={3} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Restricted Reports */}
          <div className="report-list-card">
            <h3 className="report-list-title">{restrictedReports.title}</h3>
            <div className="report-list-sections">
              {restrictedReports.sections.map((sec, idx) => (
                <div key={idx} className="report-section-group">
                  <div className="report-section-header">
                    <span className="report-section-name">{sec.name}</span>
                    {sec.items.length === 0 && (
                      <ChevronRight size={14} className="report-item-arrow" strokeWidth={3} />
                    )}
                  </div>
                  {sec.items.length > 0 && (
                    <ul className="report-items-ul">
                      {sec.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="report-item-li">
                          <span className="report-item-text">{item}</span>
                          <ChevronRight size={12} className="report-item-arrow" strokeWidth={3} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Informational Note box */}
        <div className="report-info-box">
          <div className="report-info-note-title">Note:</div>
          <p className="report-info-note-text">
            There are two types of reports - built-in reports inside Startrack and "external" reports - reports which reside on separate reporting server.
          </p>
          <div className="report-info-buttons-row">
            <button 
              className={`report-info-btn ${helpMode ? 'active' : ''}`}
              onClick={() => setHelpMode(prev => !prev)}
            >
              {helpMode ? 'Built-in reports Help' : 'Built-in reports'}
            </button>
            <button 
              className={`report-info-btn ${helpMode ? 'active' : ''}`}
              onClick={() => setHelpMode(prev => !prev)}
            >
              {helpMode ? 'External reports Help' : 'External reports'}
            </button>
          </div>
        </div>

      </div>

      {/* Navigation tab cards */}
      <div className="report-tabs-row">
        {/* Tab 1: User - Projects */}
        <div
          className={`report-tab-card ${activeReportTab === 'User - Projects' ? 'active' : ''}`}
          onClick={() => setActiveReportTab('User - Projects')}
        >
          <div className="report-tab-icon-wrapper">
            <FileText size={24} strokeWidth={2} />
          </div>
          <span className="report-tab-label">User - Projects</span>
        </div>

        {/* Tab 2: User by role */}
        <div
          className={`report-tab-card ${activeReportTab === 'User by role' ? 'active' : ''}`}
          onClick={() => setActiveReportTab('User by role')}
        >
          <div className="report-tab-icon-wrapper">
            <Users size={24} strokeWidth={2} />
          </div>
          <span className="report-tab-label">User by role</span>
        </div>

        {/* Tab 3: Bookkeeping report */}
        <div
          className={`report-tab-card ${activeReportTab === 'Bookkeeping report' ? 'active' : ''}`}
          onClick={() => setActiveReportTab('Bookkeeping report')}
        >
          <div className="report-tab-icon-wrapper">
            <Bookmark size={24} strokeWidth={2} />
          </div>
          <span className="report-tab-label">Bookkeeping report</span>
        </div>
      </div>

      {/* Filter panel container */}
      <div className="report-filter-container">
        <h3 className="report-filter-title">Filter</h3>

        <div className="report-filter-grid">
          {/* Branch Field (All Tabs) */}
          <div className="filter-form-group">
            <label className="filter-form-label">Branch</label>
            <div className="filter-select-wrapper">
              <select 
                className="filter-select" 
                value={branch} 
                onChange={(e) => setBranch(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Paris">Paris</option>
                <option value="Bangkok">Bangkok</option>
                <option value="San Francisco">San Francisco</option>
              </select>
              <ChevronDown size={14} className="filter-select-arrow" strokeWidth={3} />
            </div>
          </div>

          {/* User division Field (All Tabs) */}
          <div className="filter-form-group">
            <label className="filter-form-label">User division</label>
            <div className="filter-select-wrapper">
              <select 
                className="filter-select" 
                value={userDivision} 
                onChange={(e) => setUserDivision(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Management">Management</option>
              </select>
              <ChevronDown size={14} className="filter-select-arrow" strokeWidth={3} />
            </div>
          </div>

          {/* User Field (User - Projects AND Bookkeeping tab) */}
          {(activeReportTab === 'User - Projects' || activeReportTab === 'Bookkeeping report') && (
            <div className="filter-form-group">
              <label className="filter-form-label">User</label>
              <div className="filter-select-wrapper">
                <select 
                  className="filter-select" 
                  value={user} 
                  onChange={(e) => setUser(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Dominique Ch.">Dominique Ch.</option>
                  <option value="Jane Doe">Jane Doe</option>
                </select>
                <ChevronDown size={14} className="filter-select-arrow" strokeWidth={3} />
              </div>
            </div>
          )}

          {/* Project Field (All Tabs but with conditional placement/name) */}
          {activeReportTab !== 'User by role' ? (
            <div className="filter-form-group">
              <label className="filter-form-label">Account</label>
              <div className="filter-select-wrapper">
                <select 
                  className="filter-select" 
                  value={account} 
                  onChange={(e) => setAccount(e.target.value)}
                >
                  <option value="Other">Other</option>
                  <option value="Internal">Internal</option>
                </select>
                <ChevronDown size={14} className="filter-select-arrow" strokeWidth={3} />
              </div>
            </div>
          ) : null}

          {/* Project Field */}
          <div className="filter-form-group">
            <label className="filter-form-label">Project</label>
            <div className="filter-select-wrapper">
              <select 
                className="filter-select" 
                value={project} 
                onChange={(e) => setProject(e.target.value)}
              >
                <option value="Other">Other</option>
                <option value="E_Interview">E_Interview</option>
                <option value="E_Bench_Engineering">E_Bench_Engineering</option>
              </select>
              <ChevronDown size={14} className="filter-select-arrow" strokeWidth={3} />
            </div>
          </div>

          {/* Role Field (User by Role Report Tab only) */}
          {activeReportTab === 'User by role' && (
            <div className="filter-form-group">
              <label className="filter-form-label">Role</label>
              <div className="filter-select-wrapper">
                <select 
                  className="filter-select" 
                  value={role} 
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Other">Other</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                  <option value="Specialist">Specialist</option>
                </select>
                <ChevronDown size={14} className="filter-select-arrow" strokeWidth={3} />
              </div>
            </div>
          )}
        </div>

        {/* Date fields (Bookkeeping tab only) */}
        {activeReportTab === 'Bookkeeping report' && (
          <div className="report-date-row">
            <div className="filter-form-group" style={{ maxWidth: '200px' }}>
              <label className="filter-form-label">Start date:</label>
              <div className="date-input-wrapper">
                <input 
                  type="text" 
                  className="date-text-input" 
                  placeholder="Select" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <Calendar size={16} className="date-calendar-icon" strokeWidth={2.5} />
              </div>
            </div>

            <div className="filter-form-group" style={{ maxWidth: '200px' }}>
              <label className="filter-form-label">Finish date:</label>
              <div className="date-input-wrapper">
                <input 
                  type="text" 
                  className="date-text-input" 
                  placeholder="Select" 
                  value={finishDate}
                  onChange={(e) => setFinishDate(e.target.value)}
                />
                <Calendar size={16} className="date-calendar-icon" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        )}

        {/* Capacity radio boxes (Bookkeeping tab only) */}
        {activeReportTab === 'Bookkeeping report' && (
          <div className="report-capacity-section">
            <span className="filter-form-label">Capacity</span>
            <div className="capacity-radio-group">
              <label className="capacity-radio-label">
                <input 
                  type="radio" 
                  name="capacity" 
                  value="External" 
                  checked={capacity === 'External'}
                  onChange={() => setCapacity('External')}
                />
                <span className="custom-radio-circle"></span>
                <span className="radio-text">External</span>
              </label>
              <label className="capacity-radio-label">
                <input 
                  type="radio" 
                  name="capacity" 
                  value="Internal" 
                  checked={capacity === 'Internal'}
                  onChange={() => setCapacity('Internal')}
                />
                <span className="custom-radio-circle"></span>
                <span className="radio-text">Internal</span>
              </label>
            </div>
          </div>
        )}

        {/* Dynamic Warning Notes inside Filter box */}
        {activeReportTab === 'User by role' && (
          <div className="report-warning-note">
            <span className="warning-note-title">Note:</span>
            <p className="warning-note-text">
              All fields are selected separately and conjuncted with AND operator when generating report; No selection = "Any" (no filtration by this field)
            </p>
          </div>
        )}

        {activeReportTab === 'Bookkeeping report' && (
          <div className="report-warning-note">
            <span className="warning-note-title">Note:</span>
            <p className="warning-note-text">
              Either users or projects (not both!) need to be selected.
            </p>
          </div>
        )}

        {/* Form action buttons */}
        <div className="report-buttons-row">
          <button className="btn-outline" onClick={handleClear}>Clear</button>
          <button className="btn-success">Generate</button>
        </div>

      </div>
    </main>
  )
}

export default ReportsView
