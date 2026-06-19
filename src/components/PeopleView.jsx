import { useState } from 'react'
import { Search, Users, ChevronDown, Download, ChevronLeft, ChevronRight } from 'lucide-react'

function PeopleView() {
  const [activeTab, setActiveTab] = useState('all') // Default to 'all' as requested in the new image

  // Tab 1: Find Person State
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [branch, setBranch] = useState('')
  const [oneCId, setOneCId] = useState('')
  const [practice, setPractice] = useState('')
  const [userType, setUserType] = useState('Any')
  const [userContractType, setUserContractType] = useState('Any')
  
  const [cvSearch, setCvSearch] = useState('')
  const [cvOptions, setCvOptions] = useState({
    capability: true,
    technology: true,
    certificate: true,
    course: true
  })
  
  const [capabilitiesType, setCapabilitiesType] = useState('OR')
  const [capabilitiesSearch, setCapabilitiesSearch] = useState('')
  
  const [technologyType, setTechnologyType] = useState('OR')
  const [technologySearch, setTechnologySearch] = useState('')
  
  const [certificatesType, setCertificatesType] = useState('OR')
  const [certificatesSearch, setCertificatesSearch] = useState('')
  
  const [courcesType, setCourcesType] = useState('OR')
  const [courcesSearch, setCourcesSearch] = useState('')
  
  const [educationSelect, setEducationSelect] = useState('')
  const [specializationSearch, setSpecializationSearch] = useState('')
  
  const [showUserDetails, setShowUserDetails] = useState(true)
  const [showSkypeDetails, setShowSkypeDetails] = useState(false)
  const [showCurrentAssignments, setShowCurrentAssignments] = useState(false)
  const [includeTerminated, setIncludeTerminated] = useState(false)

  // Tab 2: All People Sidebar Filter State
  const [regionFilters, setRegionFilters] = useState({
    uk: true,
    us: false,
    france: false
  })
  const [branchFilters, setBranchFilters] = useState({
    london: true,
    liverpool: true,
    manchester: true,
    leeds: true,
    cardiff: false
  })
  const [divisionFilters, setDivisionFilters] = useState({
    management: true,
    finance: true,
    legal: true,
    operation: true,
    it: false
  })

  // Table rows for Tab 2
  const mockPeopleRows = [
    { name: 'Konstantin Konstantinopolsky', branch: 'London', division: 'Management', type: 'Delivery billable', contract: 'Employee', date: '12.01.2013', id: '14321' },
    { name: 'Andrew Salgado', branch: 'London', division: 'Management', type: 'Delivery billable', contract: 'Employee', date: '21.04.2014', id: '21345' },
    { name: 'Magdalena Edinborough', branch: 'Liverpool', division: 'Operation', type: 'Delivery billable', contract: 'Subcontractor', date: '02.11.2015', id: '1894' },
    { name: 'Matt Travis', branch: 'Liverpool', division: 'Management', type: 'Delivery billable', contract: 'Employee', date: '02.11.2016', id: '135567' },
    { name: 'Daniel Wellington', branch: 'Manchester', division: 'Operation', type: 'Delivery billable', contract: 'Employee', date: '02.11.2012', id: '10973' },
    { name: 'Lucia Mirosini', branch: 'Leeds', division: 'Finance', type: 'Delivery billable', contract: 'Employee', date: '02.11.2011', id: '6324' },
    { name: 'Anette Brown', branch: 'London', division: 'Operation', type: 'Delivery billable', contract: 'Employee', date: '02.11.2005', id: '4322' },
    { name: 'Christian Lambrou', branch: 'London', division: 'Finance', type: 'Delivery billable', contract: 'Employee', date: '02.11.2009', id: '4521' },
    { name: 'Phil Collins', branch: 'Manchester', division: 'Finance', type: 'Delivery billable', contract: 'Subcontractor', date: '02.11.2008', id: '1422' },
    { name: 'Winston Holliday', branch: 'London', division: 'Operation', type: 'Delivery billable', contract: 'Employee', date: '02.11.2017', id: '45667' },
    { name: 'Carla Andrade', branch: 'London', division: 'Operation', type: 'Delivery billable', contract: 'Employee', date: '02.11.2017', id: '98871' }
  ]

  const handleClearFind = () => {
    setName('')
    setEmail('')
    setLogin('')
    setBranch('')
    setOneCId('')
    setPractice('')
    setUserType('Any')
    setUserContractType('Any')
    setCvSearch('')
    setCapabilitiesSearch('')
    setTechnologySearch('')
    setCertificatesSearch('')
    setCourcesSearch('')
    setEducationSelect('')
    setSpecializationSearch('')
  }

  const handleClearSidebarFilters = () => {
    setRegionFilters({ uk: false, us: false, france: false })
    setBranchFilters({ london: false, liverpool: false, manchester: false, leeds: false, cardiff: false })
    setDivisionFilters({ management: false, finance: false, legal: false, operation: false, it: false })
  }

  return (
    <main className="main-content">
      {/* Top Tabs */}
      <div className="people-tabs-container">
        <div
          className={`people-tab ${activeTab === 'find' ? 'active' : 'inactive'}`}
          onClick={() => setActiveTab('find')}
        >
          <Search className="tab-icon" strokeWidth={2.5} />
          <span>Find person</span>
        </div>
        <div
          className={`people-tab ${activeTab === 'all' ? 'active' : 'inactive'}`}
          onClick={() => setActiveTab('all')}
        >
          <Users className="tab-icon" strokeWidth={2.5} />
          <span>All people</span>
        </div>
      </div>

      {/* VIEW 1: Find Person Form View (matches first image) */}
      {activeTab === 'find' && (
        <div className="filter-card">
          <h2 className="filter-title">Filter</h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="filter-grid-2col">
              
              {/* Left Column */}
              <div className="left-form-column">
                <div className="filter-form-group">
                  <label className="filter-form-label" htmlFor="name-input">Name</label>
                  <input
                    id="name-input"
                    type="text"
                    className="filter-input"
                    placeholder="Andrew Salgado"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="filter-form-group">
                  <label className="filter-form-label" htmlFor="email-input">Email address</label>
                  <input
                    id="email-input"
                    type="email"
                    className="filter-input"
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="filter-form-group">
                  <div className="filter-form-row-2col">
                    <div>
                      <label className="filter-form-label">Login</label>
                      <input
                        type="text"
                        className="filter-input"
                        placeholder="Login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="filter-form-label">Branch</label>
                      <div className="filter-select-wrapper">
                        <select
                          className="filter-select"
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="london">London</option>
                        </select>
                        <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-form-group">
                  <div className="filter-form-row-2col">
                    <div>
                      <label className="filter-form-label">1C id</label>
                      <input
                        type="text"
                        className="filter-input"
                        placeholder="Id"
                        value={oneCId}
                        onChange={(e) => setOneCId(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="filter-form-label">Practice</label>
                      <div className="filter-select-wrapper">
                        <select
                          className="filter-select"
                          value={practice}
                          onChange={(e) => setPractice(e.target.value)}
                        >
                          <option value="">Select</option>
                        </select>
                        <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-form-group">
                  <label className="filter-form-label">User type</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <option value="Any">Any</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>

                <div className="filter-form-group">
                  <label className="filter-form-label">User contract type</label>
                  <div className="filter-select-wrapper">
                    <select
                      className="filter-select"
                      value={userContractType}
                      onChange={(e) => setUserContractType(e.target.value)}
                    >
                      <option value="Any">Any</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="right-form-column">
                <div className="filter-form-group half-margin">
                  <label className="filter-form-label">CV</label>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search..."
                    value={cvSearch}
                    onChange={(e) => setCvSearch(e.target.value)}
                  />
                  <div className="filter-checkbox-row">
                    <label className="filter-checkbox-item">
                      <input
                        type="checkbox"
                        checked={cvOptions.capability}
                        onChange={(e) => setCvOptions({ ...cvOptions, capability: e.target.checked })}
                      />
                      <span>Capability</span>
                    </label>
                    <label className="filter-checkbox-item">
                      <input
                        type="checkbox"
                        checked={cvOptions.technology}
                        onChange={(e) => setCvOptions({ ...cvOptions, technology: e.target.checked })}
                      />
                      <span>Technology</span>
                    </label>
                    <label className="filter-checkbox-item">
                      <input
                        type="checkbox"
                        checked={cvOptions.certificate}
                        onChange={(e) => setCvOptions({ ...cvOptions, certificate: e.target.checked })}
                      />
                      <span>Certificate</span>
                    </label>
                    <label className="filter-checkbox-item">
                      <input
                        type="checkbox"
                        checked={cvOptions.course}
                        onChange={(e) => setCvOptions({ ...cvOptions, course: e.target.checked })}
                      />
                      <span>Course</span>
                    </label>
                  </div>
                </div>

                <div className="filter-form-group">
                  <div className="filter-radio-group-header">
                    <label className="filter-form-label">Capabilities</label>
                    <div className="filter-radio-controls">
                      <label className="filter-radio-item">
                        <input type="radio" name="cap" checked={capabilitiesType === 'AND'} onChange={() => setCapabilitiesType('AND')} />
                        <span>AND</span>
                      </label>
                      <label className="filter-radio-item">
                        <input type="radio" name="cap" checked={capabilitiesType === 'OR'} onChange={() => setCapabilitiesType('OR')} />
                        <span>OR</span>
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search..."
                    value={capabilitiesSearch}
                    onChange={(e) => setCapabilitiesSearch(e.target.value)}
                  />
                </div>

                <div className="filter-form-group">
                  <div className="filter-radio-group-header">
                    <label className="filter-form-label">Technology</label>
                    <div className="filter-radio-controls">
                      <label className="filter-radio-item">
                        <input type="radio" name="tech" checked={technologyType === 'AND'} onChange={() => setTechnologyType('AND')} />
                        <span>AND</span>
                      </label>
                      <label className="filter-radio-item">
                        <input type="radio" name="tech" checked={technologyType === 'OR'} onChange={() => setTechnologyType('OR')} />
                        <span>OR</span>
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search..."
                    value={technologySearch}
                    onChange={(e) => setTechnologySearch(e.target.value)}
                  />
                </div>

                <div className="filter-form-group">
                  <div className="filter-radio-group-header">
                    <label className="filter-form-label">Certificates</label>
                    <div className="filter-radio-controls">
                      <label className="filter-radio-item">
                        <input type="radio" name="cert" checked={certificatesType === 'AND'} onChange={() => setCertificatesType('AND')} />
                        <span>AND</span>
                      </label>
                      <label className="filter-radio-item">
                        <input type="radio" name="cert" checked={certificatesType === 'OR'} onChange={() => setCertificatesType('OR')} />
                        <span>OR</span>
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search..."
                    value={certificatesSearch}
                    onChange={(e) => setCertificatesSearch(e.target.value)}
                  />
                </div>

                <div className="filter-form-group">
                  <div className="filter-radio-group-header">
                    <label className="filter-form-label">Cources</label>
                    <div className="filter-radio-controls">
                      <label className="filter-radio-item">
                        <input type="radio" name="crse" checked={courcesType === 'AND'} onChange={() => setCourcesType('AND')} />
                        <span>AND</span>
                      </label>
                      <label className="filter-radio-item">
                        <input type="radio" name="crse" checked={courcesType === 'OR'} onChange={() => setCourcesType('OR')} />
                        <span>OR</span>
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="filter-input"
                    placeholder="Search..."
                    value={courcesSearch}
                    onChange={(e) => setCourcesSearch(e.target.value)}
                  />
                </div>

                <div className="filter-form-group">
                  <label className="filter-form-label">Education</label>
                  <div className="filter-form-row-2col">
                    <div className="filter-select-wrapper">
                      <select className="filter-select" value={educationSelect} onChange={(e) => setEducationSelect(e.target.value)}>
                        <option value="">Select</option>
                      </select>
                      <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                    </div>
                    <input
                      type="text"
                      className="filter-input"
                      placeholder="Search for specialization"
                      value={specializationSearch}
                      onChange={(e) => setSpecializationSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>

            </div>

            <div className="filter-footer-checkboxes">
              <div>
                <label className="filter-checkbox-item" style={{ marginBottom: '12px' }}>
                  <input type="checkbox" checked={showUserDetails} onChange={(e) => setShowUserDetails(e.target.checked)} />
                  <span>Show User Type, Login, Start Date, 1C Id</span>
                </label>
                <label className="filter-checkbox-item">
                  <input type="checkbox" checked={showSkypeDetails} onChange={(e) => setShowSkypeDetails(e.target.checked)} />
                  <span>Show Skype, Office phone, Mobile phone, Room number, Title</span>
                </label>
              </div>
              <div>
                <label className="filter-checkbox-item" style={{ marginBottom: '12px' }}>
                  <input type="checkbox" checked={showCurrentAssignments} onChange={(e) => setShowCurrentAssignments(e.target.checked)} />
                  <span>Show current assignments</span>
                </label>
                <label className="filter-checkbox-item">
                  <input type="checkbox" checked={includeTerminated} onChange={(e) => setIncludeTerminated(e.target.checked)} />
                  <span>Include terminated employees</span>
                </label>
              </div>
            </div>

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

      {/* VIEW 2: All People Stats & Details Split View (matches new image) */}
      {activeTab === 'all' && (
        <>
          {/* Active People Stats Card */}
          <div className="active-people-stats-card">
            <div className="active-people-header">
              <h2 className="active-people-title">List of active people</h2>
              <button className="excel-export-btn">
                <Download size={14} />
                <span>Export to Excel</span>
              </button>
            </div>

            {/* Stats Table */}
            <div className="stats-table-wrapper">
              <table className="stats-table">
                <thead>
                  <tr>
                    <th>Delivery billable</th>
                    <th>Delivery unbillable</th>
                    <th>Administration</th>
                    <th>CEO</th>
                    <th>Sales</th>
                    <th>Marketing</th>
                    <th>Finance</th>
                    <th>HR</th>
                    <th>IT</th>
                    <th>Legal</th>
                    <th>PPS</th>
                    <th>L & D</th>
                    <th>OG</th>
                    <th>OBS</th>
                    <th>EBO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>233</td>
                    <td>11</td>
                    <td>8</td>
                    <td>1</td>
                    <td>15</td>
                    <td>11</td>
                    <td>8</td>
                    <td>4</td>
                    <td>3</td>
                    <td>2</td>
                    <td>15</td>
                    <td>1</td>
                    <td>5</td>
                    <td>2</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Active People Summaries */}
            <div className="stats-overall-summary">
              <div className="stats-summary-item">
                <span>Delivery:</span>
                <span className="stats-summary-bold">581</span>
              </div>
              <div className="stats-summary-item">
                <span>Non-delivery:</span>
                <span className="stats-summary-bold">132</span>
              </div>
              <div className="stats-summary-item">
                <span>Total:</span>
                <span className="stats-summary-bold" style={{ fontSize: '13px' }}>713</span>
              </div>
            </div>
          </div>

          {/* Split Filters & Table View */}
          <div className="people-split-container">
            
            {/* Left sidebar narrow filter card */}
            <aside className="people-filter-sidebar">
              <h3 className="filter-title" style={{ fontSize: '16px', marginBottom: '12px' }}>Filter</h3>
              
              {/* Regions */}
              <div className="filter-section">
                <h4 className="filter-section-title">Regions</h4>
                <div className="filter-checkbox-column">
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={regionFilters.uk}
                      onChange={(e) => setRegionFilters({ ...regionFilters, uk: e.target.checked })}
                    />
                    <span>UK (111)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={regionFilters.us}
                      onChange={(e) => setRegionFilters({ ...regionFilters, us: e.target.checked })}
                    />
                    <span>US (98)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={regionFilters.france}
                      onChange={(e) => setRegionFilters({ ...regionFilters, france: e.target.checked })}
                    />
                    <span>France (45)</span>
                  </label>
                </div>
              </div>

              {/* Branches */}
              <div className="filter-section">
                <h4 className="filter-section-title">Branches</h4>
                <div className="filter-checkbox-column">
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={branchFilters.london}
                      onChange={(e) => setBranchFilters({ ...branchFilters, london: e.target.checked })}
                    />
                    <span>London (111)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={branchFilters.liverpool}
                      onChange={(e) => setBranchFilters({ ...branchFilters, liverpool: e.target.checked })}
                    />
                    <span>Liverpool (12)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={branchFilters.manchester}
                      onChange={(e) => setBranchFilters({ ...branchFilters, manchester: e.target.checked })}
                    />
                    <span>Manchester (5)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={branchFilters.leeds}
                      onChange={(e) => setBranchFilters({ ...branchFilters, leeds: e.target.checked })}
                    />
                    <span>Leeds (3)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={branchFilters.cardiff}
                      onChange={(e) => setBranchFilters({ ...branchFilters, cardiff: e.target.checked })}
                    />
                    <span>Cardiff (1)</span>
                  </label>
                </div>
              </div>

              {/* Divisions */}
              <div className="filter-section">
                <h4 className="filter-section-title">Divisions</h4>
                <div className="filter-checkbox-column">
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={divisionFilters.management}
                      onChange={(e) => setDivisionFilters({ ...divisionFilters, management: e.target.checked })}
                    />
                    <span>Management (43)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={divisionFilters.finance}
                      onChange={(e) => setDivisionFilters({ ...divisionFilters, finance: e.target.checked })}
                    />
                    <span>Finance (10)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={divisionFilters.legal}
                      onChange={(e) => setDivisionFilters({ ...divisionFilters, legal: e.target.checked })}
                    />
                    <span>Legal (1)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={divisionFilters.operation}
                      onChange={(e) => setDivisionFilters({ ...divisionFilters, operation: e.target.checked })}
                    />
                    <span>Operation (1)</span>
                  </label>
                  <label className="filter-checkbox-item">
                    <input
                      type="checkbox"
                      checked={divisionFilters.it}
                      onChange={(e) => setDivisionFilters({ ...divisionFilters, it: e.target.checked })}
                    />
                    <span>IT (1)</span>
                  </label>
                </div>
              </div>

              {/* Clear button */}
              <button
                type="button"
                className="btn-outline"
                style={{ width: '100%', marginTop: '12px' }}
                onClick={handleClearSidebarFilters}
              >
                Clear
              </button>
            </aside>

            {/* Right side results data table card */}
            <section className="people-results-panel">
              <div className="results-header" style={{ marginBottom: '16px' }}>
                <h2 className="results-found">Found: 110</h2>
              </div>

              {/* Data Table */}
              <div className="people-table-container">
                <table className="people-data-table">
                  <thead>
                    <tr>
                      <th>Full name</th>
                      <th>Branch</th>
                      <th>Division</th>
                      <th>User type</th>
                      <th>Contract type</th>
                      <th>Start date</th>
                      <th>ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPeopleRows.map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: '500' }}>{row.name}</td>
                        <td>{row.branch}</td>
                        <td>{row.division}</td>
                        <td>{row.type}</td>
                        <td>{row.contract}</td>
                        <td>{row.date}</td>
                        <td>{row.id}</td>
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
            </section>

          </div>
        </>
      )}
    </main>
  )
}

export default PeopleView
