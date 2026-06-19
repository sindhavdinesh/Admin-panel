import { useState } from 'react'
import { Search, FolderDown, User, ChevronDown, Calendar, Download, ChevronLeft, ChevronRight } from 'lucide-react'

function ProjectsView() {
  const [activeTab, setActiveTab] = useState('all') // Default to 'all' as requested by the user

  // Tab 1: Find Project state
  const [projectName, setProjectName] = useState('')
  const [shortName, setShortName] = useState('')
  const [projectDesc, setProjectDesc] = useState('')
  const [practice, setPractice] = useState('')
  const [sourceType, setSourceType] = useState('')
  const [billingEntity, setBillingEntity] = useState('')
  const [region, setRegion] = useState('')
  
  const [budgetType, setBudgetType] = useState('Any')
  const [selectedStatusTags, setSelectedStatusTags] = useState(['In progress'])
  const [account, setAccount] = useState('')
  const [startDateFrom, setStartDateFrom] = useState('')
  const [startDateTo, setStartDateTo] = useState('')
  const [finishDateFrom, setFinishDateFrom] = useState('')
  const [finishDateTo, setFinishDateTo] = useState('')
  const [industrySelect, setIndustrySelect] = useState('')
  const [searchMode, setSearchMode] = useState('OR')
  const [searchModeQuery, setSearchModeQuery] = useState('')

  // Tab 2: All Projects list filter states
  const [activeIndustryChip, setActiveIndustryChip] = useState('All')
  const [statusFilter, setStatusFilter] = useState({
    inProgress: true,
    upcoming: true,
    suspended: false,
    completed: false,
    anticipated: false
  })

  const industries = [
    'All', 'Banking', 'Financial', 'Government', 'Healthcare', 'Hi-Tech',
    'Insurance', 'ISV', 'Logistics', 'Media', 'Pharma', 'Public', 'Retail',
    'Technology', 'Telecom', 'Utilities', 'Internal', 'Others'
  ]

  // Mock Table Data for Project List (Image 2)
  const mockProjects = Array(9).fill({
    practice: 'ENG',
    name: 'ABC app',
    shortName: 'ABCAPP',
    status: 'In progress',
    start: '11.01.2008',
    end: '11.01.2009',
    account: 'ABC',
    region: 'Latin America',
    industry: 'Utilities',
    sourceType: 'Customer',
    billingEntry: 'Corporation'
  })

  const handleClearFind = () => {
    setProjectName('')
    setShortName('')
    setProjectDesc('')
    setPractice('')
    setSourceType('')
    setBillingEntity('')
    setRegion('')
    setBudgetType('Any')
    setSelectedStatusTags(['In progress'])
    setAccount('')
    setStartDateFrom('')
    setStartDateTo('')
    setFinishDateFrom('')
    setFinishDateTo('')
    setIndustrySelect('')
    setSearchMode('OR')
    setSearchModeQuery('')
  }

  const handleRemoveStatusTag = (tag) => {
    setSelectedStatusTags(selectedStatusTags.filter(t => t !== tag))
  }

  return (
    <main className="main-content">
      {/* Top Action Tabs */}
      <div className="projects-header-tabs">
        <div
          className={`projects-tab ${activeTab === 'find' ? 'active' : 'inactive'}`}
          onClick={() => setActiveTab('find')}
        >
          <Search className="tab-icon" strokeWidth={2.5} />
          <span>Find project</span>
        </div>
        <div
          className={`projects-tab ${activeTab === 'all' ? 'active' : 'inactive'}`}
          onClick={() => setActiveTab('all')}
        >
          <FolderDown className="tab-icon" strokeWidth={2.5} />
          <span>All projects</span>
        </div>
        <div
          className={`projects-tab ${activeTab === 'accounts' ? 'active' : 'inactive'}`}
          onClick={() => setActiveTab('accounts')}
        >
          <User className="tab-icon" strokeWidth={2.5} />
          <span>Accounts</span>
        </div>
      </div>

      {/* RENDER VIEW 1: Find Project Filter Form */}
      {activeTab === 'find' && (
        <div className="filter-card">
          <h2 className="filter-title">Filter</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="filter-grid-2col">
              {/* Left Column */}
              <div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Project name</label>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search..."
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Short name</label>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search..."
                    value={shortName}
                    onChange={(e) => setShortName(e.target.value)}
                  />
                </div>
                <div className="filter-form-group" style={{ marginBottom: '14px' }}>
                  <label className="filter-form-label">Project description</label>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search..."
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                  />
                  <span className="form-help-text">Notion: Full-text searching</span>
                </div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Practice</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={practice}
                      onChange={(e) => setPractice(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="eng">ENG</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Source type</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={sourceType}
                      onChange={(e) => setSourceType(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="customer">Customer</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Billing entity</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={billingEntity}
                      onChange={(e) => setBillingEntity(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="corp">Corporation</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Region</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="latam">Latin America</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Budget type</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={budgetType}
                      onChange={(e) => setBudgetType(e.target.value)}
                    >
                      <option value="Any">Any</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Status</label>
                  <div className="tags-select-box">
                    {selectedStatusTags.map(tag => (
                      <span className="tag-badge" key={tag}>
                        {tag}
                        <button type="button" className="tag-badge-remove" onClick={() => handleRemoveStatusTag(tag)}>×</button>
                      </span>
                    ))}
                    <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                      <ChevronDown size={14} strokeWidth={3} style={{ color: '#1a73e8' }} />
                    </div>
                  </div>
                </div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Account</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={account}
                      onChange={(e) => setAccount(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="abc">ABC</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
                
                {/* Start Date Grid */}
                <div className="filter-form-group">
                  <label className="filter-form-label">Start date from:</label>
                  <div className="filter-form-row-2col">
                    <div className="date-input-wrapper">
                      <select className="filter-select" value={startDateFrom} onChange={(e) => setStartDateFrom(e.target.value)}>
                        <option value="">Select</option>
                      </select>
                      <Calendar size={14} strokeWidth={2.5} className="date-calendar-icon" />
                    </div>
                    <div className="date-input-wrapper">
                      <select className="filter-select" value={startDateTo} onChange={(e) => setStartDateTo(e.target.value)}>
                        <option value="">Select</option>
                      </select>
                      <Calendar size={14} strokeWidth={2.5} className="date-calendar-icon" />
                    </div>
                  </div>
                </div>

                {/* Finish Date Grid */}
                <div className="filter-form-group">
                  <label className="filter-form-label">Finish date from:</label>
                  <div className="filter-form-row-2col">
                    <div className="date-input-wrapper">
                      <select className="filter-select" value={finishDateFrom} onChange={(e) => setFinishDateFrom(e.target.value)}>
                        <option value="">Select</option>
                      </select>
                      <Calendar size={14} strokeWidth={2.5} className="date-calendar-icon" />
                    </div>
                    <div className="date-input-wrapper">
                      <select className="filter-select" value={finishDateTo} onChange={(e) => setFinishDateTo(e.target.value)}>
                        <option value="">Select</option>
                      </select>
                      <Calendar size={14} strokeWidth={2.5} className="date-calendar-icon" />
                    </div>
                  </div>
                </div>

                <div className="filter-form-group">
                  <label className="filter-form-label">Industry</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={industrySelect}
                      onChange={(e) => setIndustrySelect(e.target.value)}
                    >
                      <option value="">Select</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>

                {/* Search Mode OR/AND Row */}
                <div className="filter-form-group">
                  <div className="filter-radio-group-header">
                    <label className="filter-form-label">Search mode</label>
                    <div className="filter-radio-controls">
                      <label className="filter-radio-item">
                        <input type="radio" name="search-mode" checked={searchMode === 'AND'} onChange={() => setSearchMode('AND')} />
                        <span>AND</span>
                      </label>
                      <label className="filter-radio-item">
                        <input type="radio" name="search-mode" checked={searchMode === 'OR'} onChange={() => setSearchMode('OR')} />
                        <span>OR</span>
                      </label>
                    </div>
                  </div>
                  <div className="filter-select-wrapper">
                    <select className="filter-select" value={searchModeQuery} onChange={(e) => setSearchModeQuery(e.target.value)}>
                      <option value="">Search...</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Clear and Search Buttons */}
            <div className="filter-footer-buttons">
              <button type="button" className="btn-outline" onClick={handleClearFind}>
                Clear
              </button>
              <button type="button" className="btn-success">
                Search
              </button>
            </div>
          </form>
        </div>
      )}

      {/* RENDER VIEW 2: All Projects list, filters, and Project Table */}
      {activeTab === 'all' && (
        <>
          {/* Top Panel Filters */}
          <div className="projects-list-card">
            <h2 className="project-list-title">Project list</h2>
            
            {/* Industry Filter Chips */}
            <div className="industry-section">
              <span className="section-label">Industry</span>
              <div className="chips-wrapper">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className={`industry-chip ${activeIndustryChip === ind ? 'active' : 'inactive'}`}
                    onClick={() => setActiveIndustryChip(ind)}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Status checkboxes and summaries */}
            <div className="status-section-row">
              <div className="status-checkboxes">
                <span className="section-label" style={{ marginTop: '0', width: 'auto', marginRight: '24px' }}>Status</span>
                <label className="filter-checkbox-item">
                  <input
                    type="checkbox"
                    checked={statusFilter.inProgress}
                    onChange={(e) => setStatusFilter({ ...statusFilter, inProgress: e.target.checked })}
                  />
                  <span>In progress</span>
                </label>
                <label className="filter-checkbox-item">
                  <input
                    type="checkbox"
                    checked={statusFilter.upcoming}
                    onChange={(e) => setStatusFilter({ ...statusFilter, upcoming: e.target.checked })}
                  />
                  <span>Upcoming</span>
                </label>
                <label className="filter-checkbox-item">
                  <input
                    type="checkbox"
                    checked={statusFilter.suspended}
                    onChange={(e) => setStatusFilter({ ...statusFilter, suspended: e.target.checked })}
                  />
                  <span>Suspended</span>
                </label>
                <label className="filter-checkbox-item">
                  <input
                    type="checkbox"
                    checked={statusFilter.completed}
                    onChange={(e) => setStatusFilter({ ...statusFilter, completed: e.target.checked })}
                  />
                  <span>Completed</span>
                </label>
                <label className="filter-checkbox-item">
                  <input
                    type="checkbox"
                    checked={statusFilter.anticipated}
                    onChange={(e) => setStatusFilter({ ...statusFilter, anticipated: e.target.checked })}
                  />
                  <span>Anticipated</span>
                </label>
              </div>

              {/* Status summary boxes */}
              <div className="status-summary-box">
                <div className="summary-item">
                  <span>In progress</span>
                  <span className="summary-value">581</span>
                </div>
                <div className="summary-item">
                  <span>Upcoming</span>
                  <span className="summary-value">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Table Section */}
          <div className="results-card">
            <div className="results-header">
              <h2 className="results-found">Found: 5611</h2>
              <button className="excel-export-btn">
                <Download size={14} />
                <span>Export to Excel</span>
              </button>
            </div>

            {/* Table */}
            <div className="projects-table-wrapper">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>Practice</th>
                    <th>Project name</th>
                    <th>Short name</th>
                    <th>Status</th>
                    <th>Start date</th>
                    <th>End date</th>
                    <th>Account</th>
                    <th>Region</th>
                    <th>Industry</th>
                    <th>Source type</th>
                    <th>Billing entry</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProjects.map((proj, idx) => (
                    <tr key={idx}>
                      <td>{proj.practice}</td>
                      <td>{proj.name}</td>
                      <td>{proj.shortName}</td>
                      <td>{proj.status}</td>
                      <td>{proj.start}</td>
                      <td>{proj.end}</td>
                      <td>{proj.account}</td>
                      <td>{proj.region}</td>
                      <td>{proj.industry}</td>
                      <td>{proj.sourceType}</td>
                      <td>{proj.billingEntry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination footer */}
            <div className="pagination-container">
              <span className="pagination-arrow disabled">
                <ChevronLeft size={16} />
                <span>Previous</span>
              </span>
              <span className="pagination-item active">1</span>
              <span className="pagination-item">2</span>
              <span className="pagination-item">3</span>
              <span className="pagination-item">4</span>
              <span className="pagination-item">5</span>
              <span>...</span>
              <span className="pagination-item">31</span>
              <span className="pagination-link pagination-arrow">
                <span>Next</span>
                <ChevronRight size={16} />
              </span>
              <span className="pagination-link">Show all</span>
            </div>

          </div>
        </>
      )}

      {/* RENDER VIEW 3: Accounts placeholder */}
      {activeTab === 'accounts' && (
        <div className="filter-card" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: '#718096' }}>
            <User size={48} strokeWidth={1.5} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>Accounts Panel</h3>
            <p style={{ fontSize: '13px' }}>This section lists client accounts associated with projects.</p>
          </div>
        </div>
      )}
    </main>
  )
}

export default ProjectsView
