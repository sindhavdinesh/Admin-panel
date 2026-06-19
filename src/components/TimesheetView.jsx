import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  RotateCw,
  MinusCircle,
  Plus,
  ChevronDown,
  Info,
  ChevronUp
} from 'lucide-react'

function TimesheetView() {
  const [isFilledState, setIsFilledState] = useState(false) // Toggle state between Empty and Filled timesheet
  
  // Collapse States
  const [commentsCollapsed, setCommentsCollapsed] = useState(false)
  const [projectsCollapsed, setProjectsCollapsed] = useState(false)

  // Project assigned chips
  const assignedProjects = [
    { name: 'E_Bench_Engineering', active: true },
    { name: 'E_Interview', active: true },
    { name: 'E_Company_Web_Site', active: false },
    { name: 'E_CNSL_Corp_Events', active: false },
    { name: 'E_CNSL_Delivery_Admin', active: false },
    { name: 'E_CNSL_Delivery_Admin', active: false },
    { name: 'E_ENG_Delivery_Admin', active: false },
    { name: 'E_ENG_Corp_Events', active: false },
    { name: 'E_Performance_Evaluations', active: false },
    { name: 'E_Community_of_Practice', active: false },
    { name: 'E_Marketing and Training Support', active: false },
    { name: 'E_VFQ_Upskilling', active: false }
  ]

  // Render Day Cell helper
  const renderDayCell = (dayIndex, dayLabel, emptyStateVal, filledStateVal, cellType) => {
    // Weekend check
    const isWeekend = dayLabel === 'Sat' || dayLabel === 'Sun'

    if (!isFilledState) {
      // EMPTY TIMESHEET STATE
      if (dayIndex === 0) {
        // Mon 15 is blue workday
        return (
          <div className="timesheet-day-cell workday-blue">
            <span>{emptyStateVal}</span>
            <span className="timesheet-cell-white-dot"></span>
          </div>
        )
      }
      if (dayIndex === 1) {
        // Tue 16 is today (outlined)
        return <div className="timesheet-day-cell today-outline"></div>
      }
      // Others are grey
      return (
        <div className={`timesheet-day-cell ${isWeekend ? 'weekend-gray' : 'empty-gray'}`}></div>
      )
    } else {
      // FILLED TIMESHEET STATE
      if (isWeekend) {
        return <div className="timesheet-day-cell weekend-gray"></div>
      }
      if (dayIndex === 3) {
        // Thu 18 is green paid leave
        return (
          <div className="timesheet-day-cell dayoff-green">
            <span className="timesheet-cell-white-dot"></span>
          </div>
        )
      }
      // Mon 15, Tue 16, Wed 17, Fri 19 are blue workdays
      return (
        <div className="timesheet-day-cell workday-blue">
          <span>{filledStateVal}</span>
          <span className="timesheet-cell-white-dot"></span>
        </div>
      )
    }
  }

  return (
    <main className="main-content">
      
      {/* Dynamic State Switcher (Helper bar) */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '12px', marginBottom: '16px' }}>
        <button
          className={`btn-outline ${!isFilledState ? 'btn-success' : ''}`}
          style={{ padding: '6px 16px', fontSize: '11px', border: !isFilledState ? 'none' : '1px solid #8a9099' }}
          onClick={() => setIsFilledState(false)}
        >
          View Empty State
        </button>
        <button
          className={`btn-outline ${isFilledState ? 'btn-success' : ''}`}
          style={{ padding: '6px 16px', fontSize: '11px', border: isFilledState ? 'none' : '1px solid #8a9099' }}
          onClick={() => setIsFilledState(true)}
        >
          View Filled State
        </button>
      </div>

      {/* Top Header Card */}
      <div className="active-people-stats-card" style={{ padding: '24px 32px' }}>
        <div className="active-people-header" style={{ marginBottom: '0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <h2 className="active-people-title" style={{ fontSize: '20px' }}>My timesheet</h2>
            
            <div className="calendar-control-row">
              <span className="filter-form-label" style={{ marginBottom: '0', marginRight: '8px' }}>Select the date</span>
              <div className="year-picker-box" style={{ width: '150px' }}>
                <button className="year-picker-btn">
                  <ChevronLeft size={16} strokeWidth={2.5} />
                </button>
                <span>2019</span>
                <button className="year-picker-btn">
                  <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>
              
              {/* Calendar button */}
              <div className="year-picker-btn" style={{ backgroundColor: '#e8f0fe', borderRadius: '4px', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                <Calendar size={16} strokeWidth={2.5} style={{ margin: '0 auto', color: '#1a73e8' }} />
              </div>
              
              {/* Refresh button */}
              <div className="year-picker-btn" style={{ backgroundColor: '#f1f1f3', borderRadius: '4px', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                <RotateCw size={16} strokeWidth={2.5} style={{ margin: '0 auto', color: '#718096' }} />
              </div>
            </div>
          </div>

          <button className="excel-export-btn" style={{ height: '36px' }}>
            My timesheet's report
          </button>
        </div>
      </div>

      {/* Main Timesheet Grid Card */}
      <div className="active-people-stats-card" style={{ padding: '32px' }}>
        
        {/* Table column headers */}
        <div className="timesheet-grid-row" style={{ borderBottom: '1px solid #f1f3f5', paddingBottom: '8px' }}>
          <div className="timesheet-col-remove"></div>
          <div className="timesheet-col-project timesheet-row-label">Project</div>
          <div className="timesheet-col-role timesheet-row-label">Role</div>
          <div className="timesheet-col-activity timesheet-row-label">Activity</div>
          <div className="timesheet-col-days">
            <div className="timesheet-day-cell-wrapper">
              <span className="timesheet-day-header-lbl">15 / Mon</span>
            </div>
            <div className="timesheet-day-cell-wrapper">
              <span className="timesheet-day-header-lbl today">16 / Tue</span>
            </div>
            <div className="timesheet-day-cell-wrapper">
              <span className="timesheet-day-header-lbl">17 / Wed</span>
            </div>
            <div className="timesheet-day-cell-wrapper">
              <span className="timesheet-day-header-lbl">18 / Thu</span>
            </div>
            <div className="timesheet-day-cell-wrapper">
              <span className="timesheet-day-header-lbl">19 / Fri</span>
            </div>
            <div className="timesheet-day-cell-wrapper">
              <span className="timesheet-day-header-lbl weekend">20 / Sat</span>
            </div>
            <div className="timesheet-day-cell-wrapper">
              <span className="timesheet-day-header-lbl weekend">21 / Sun</span>
            </div>
          </div>
        </div>

        {/* Row 1: E_Interview */}
        <div className="timesheet-grid-row">
          <div className="timesheet-col-remove">
            <MinusCircle size={16} strokeWidth={2.5} style={{ color: '#3b82f6' }} />
          </div>
          <div className="timesheet-col-project">
            <div className="filter-select-wrapper">
              <select className="filter-select" value="E_Interview" onChange={() => {}}>
                <option value="E_Interview">E_Interview</option>
              </select>
              <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
            </div>
          </div>
          <div className="timesheet-col-role">
            <div className="filter-select-wrapper">
              <select className="filter-select" value={isFilledState ? 'Manager' : ''} onChange={() => {}}>
                <option value="">Select</option>
                <option value="Manager">Manager</option>
              </select>
              <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
            </div>
          </div>
          <div className="timesheet-col-activity">
            <div className="filter-select-wrapper">
              <select className="filter-select" value={isFilledState ? 'Alpha' : ''} onChange={() => {}}>
                <option value="">Select</option>
                <option value="Alpha">Alpha</option>
              </select>
              <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
            </div>
          </div>
          <div className="timesheet-col-days">
            {renderDayCell(0, 'Mon', '4.00', '4.00')}
            {renderDayCell(1, 'Tue', '', '4.00')}
            {renderDayCell(2, 'Wed', '', '4.00')}
            {renderDayCell(3, 'Thu', '', '')}
            {renderDayCell(4, 'Fri', '', '4.00')}
            {renderDayCell(5, 'Sat', '', '')}
            {renderDayCell(6, 'Sun', '', '')}
          </div>
        </div>

        {/* Row 2: E_Bench_Engineering */}
        <div className="timesheet-grid-row">
          <div className="timesheet-col-remove">
            <MinusCircle size={16} strokeWidth={2.5} style={{ color: '#3b82f6' }} />
          </div>
          <div className="timesheet-col-project">
            <div className="filter-select-wrapper">
              <select className="filter-select" value="E_Bench_Engineering" onChange={() => {}}>
                <option value="E_Bench_Engineering">E_Bench_Engineering</option>
              </select>
              <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
            </div>
          </div>
          <div className="timesheet-col-role">
            <div className="filter-select-wrapper">
              <select className="filter-select" value={isFilledState ? 'Manager' : ''} onChange={() => {}}>
                <option value="">Select</option>
                <option value="Manager">Manager</option>
              </select>
              <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
            </div>
          </div>
          <div className="timesheet-col-activity">
            <div className="filter-select-wrapper">
              <select className="filter-select" value={isFilledState ? 'Alpha' : ''} onChange={() => {}}>
                <option value="">Select</option>
                <option value="Alpha">Alpha</option>
              </select>
              <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
            </div>
          </div>
          <div className="timesheet-col-days">
            {renderDayCell(0, 'Mon', '4.00', '4.00')}
            {renderDayCell(1, 'Tue', '', '4.00')}
            {renderDayCell(2, 'Wed', '', '4.00')}
            {renderDayCell(3, 'Thu', '', '')}
            {renderDayCell(4, 'Fri', '', '4.00')}
            {renderDayCell(5, 'Sat', '', '')}
            {renderDayCell(6, 'Sun', '', '')}
          </div>
        </div>

        {/* Action Row */}
        <div className="status-section-row" style={{ marginTop: '24px', alignItems: 'center' }}>
          {/* Row add actions */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-outline" style={{ border: '1.5px solid #3b82f6', color: '#3b82f6', padding: '6px 16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
              <Plus size={14} strokeWidth={2.5} />
              <span>Add row</span>
            </button>
            <button className="btn-success" style={{ backgroundColor: '#f59e0b', padding: '7px 16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
              <Plus size={14} strokeWidth={2.5} />
              <span>Add overtime</span>
            </button>
          </div>

          {/* Form submit actions */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {!isFilledState ? (
              <>
                <button className="btn-outline" style={{ padding: '8px 24px' }}>Save</button>
                <button className="btn-outline" style={{ backgroundColor: '#e2e8f0', border: 'none', color: '#718096', padding: '8px 24px', cursor: 'default' }}>Reject</button>
                <button className="btn-success" style={{ padding: '8px 24px' }}>Submit</button>
              </>
            ) : (
              <>
                <button className="btn-outline" style={{ backgroundColor: '#e2e8f0', border: 'none', color: '#718096', padding: '8px 24px', cursor: 'default' }} disabled>Save</button>
                <button className="btn-success" style={{ backgroundColor: '#e35959', padding: '8px 24px' }}>Reject</button>
                <button className="btn-success" style={{ backgroundColor: '#cbd5e1', color: '#718096', padding: '8px 24px', cursor: 'default' }} disabled>Submit</button>
              </>
            )}
          </div>
        </div>

        {/* Footer info row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', alignItems: 'center' }}>
          <Info size={18} style={{ color: '#3b82f6', cursor: 'pointer' }} />
          <span className="timesheet-total-lbl">
            Total:{' '}
            <span className="timesheet-total-val">
              {!isFilledState ? '8.00/40.00' : '32.00/32.00'}
            </span>
          </span>
        </div>

      </div>

      {/* Comments Section */}
      <div className="active-people-stats-card" style={{ padding: '24px 32px' }}>
        <div
          className="results-header"
          style={{ marginBottom: commentsCollapsed ? '0' : '20px', cursor: 'pointer' }}
          onClick={() => setCommentsCollapsed(!commentsCollapsed)}
        >
          <h2 className="active-people-title" style={{ fontSize: '16px' }}>Comments</h2>
          {commentsCollapsed ? (
            <ChevronDown size={18} style={{ color: '#3b82f6' }} />
          ) : (
            <ChevronUp size={18} style={{ color: '#3b82f6' }} />
          )}
        </div>

        {!commentsCollapsed && (
          <div className="projects-table-wrapper">
            <table className="projects-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Project Task</th>
                  <th>Role</th>
                  <th>Activity</th>
                  <th>Hours</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 Jan</td>
                  <td style={{ fontWeight: '500' }}>Project 1</td>
                  <td>Specialist</td>
                  <td>Development</td>
                  <td>8.00</td>
                  <td>Prepared a presentation for CEO</td>
                </tr>
                <tr>
                  <td>16 Jan</td>
                  <td style={{ fontWeight: '500' }}>Project 2</td>
                  <td>Specialist</td>
                  <td>Development</td>
                  <td>8.00</td>
                  <td>Planned employees vacations</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Bottom Split: Assigned Projects & Legend Panel */}
      <div className="timesheet-bottom-split">
        
        {/* Left: Projects Assigned card */}
        <div className="active-people-stats-card assigned-projects-panel">
          <div
            className="results-header"
            style={{ marginBottom: projectsCollapsed ? '0' : '20px', cursor: 'pointer' }}
            onClick={() => setProjectsCollapsed(!projectsCollapsed)}
          >
            <h2 className="active-people-title" style={{ fontSize: '15px' }}>
              Projects you are assigned to (12)
            </h2>
            {projectsCollapsed ? (
              <ChevronDown size={18} style={{ color: '#3b82f6' }} />
            ) : (
              <ChevronUp size={18} style={{ color: '#3b82f6' }} />
            )}
          </div>

          {!projectsCollapsed && (
            <div className="chips-wrapper">
              {assignedProjects.map((proj) => (
                <span
                  className={`industry-chip ${proj.active ? 'active' : 'inactive'}`}
                  key={proj.name}
                  style={{
                    padding: '6px 14px',
                    borderColor: proj.active ? 'transparent' : '#3b82f6',
                    color: proj.active ? '#ffffff' : '#3b82f6'
                  }}
                >
                  {proj.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right: Legend Panel sidebar */}
        <div className="active-people-stats-card legend-sidebar-panel">
          <h2 className="active-people-title" style={{ fontSize: '15px', borderBottom: '1px solid #f1f3f5', paddingBottom: '8px' }}>
            Legend
          </h2>

          <div className="legend-card-list">
            <div className="legend-list-item">
              <div className="timesheet-day-cell workday-blue" style={{ width: '40px', height: '32px', fontSize: '10px' }}>
                <span>8.00</span>
                <span className="timesheet-cell-white-dot"></span>
              </div>
              <span>Workday</span>
            </div>

            <div className="legend-list-item">
              <div className="timesheet-day-cell holiday-red" style={{ width: '40px', height: '32px', fontSize: '10px' }}>
                <span>8.00</span>
                <span className="timesheet-cell-white-dot"></span>
              </div>
              <span>Holiday</span>
            </div>

            <div className="legend-list-item">
              <div className="timesheet-day-cell today-outline" style={{ width: '40px', height: '32px' }}></div>
              <span>Today</span>
            </div>

            <div className="legend-list-item">
              <div className="timesheet-day-cell dayoff-green" style={{ width: '40px', height: '32px' }}>
                <span className="timesheet-cell-white-dot"></span>
              </div>
              <span>Day off had (paid)</span>
            </div>

            <div className="legend-list-item">
              <div className="timesheet-day-cell overtime-orange" style={{ width: '40px', height: '32px', fontSize: '10px' }}>
                <span>8.00</span>
                <span className="timesheet-cell-white-dot"></span>
              </div>
              <span>Overtime/undertime</span>
            </div>
          </div>
        </div>

      </div>

    </main>
  )
}

export default TimesheetView
