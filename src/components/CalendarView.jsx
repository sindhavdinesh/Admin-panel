import { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

function CalendarView() {
  const [branch, setBranch] = useState('Paris')
  const [year, setYear] = useState(2019)

  // 2019 Months Database
  const monthsData = [
    { name: 'January', days: 31, startOffset: 1, working: 19, nonWorking: 12 },   // Starts on Tuesday (1)
    { name: 'February', days: 28, startOffset: 4, working: 20, nonWorking: 8 },   // Starts on Friday (4)
    { name: 'March', days: 31, startOffset: 4, working: 21, nonWorking: 10 },     // Starts on Friday (4)
    { name: 'April', days: 30, startOffset: 0, working: 22, nonWorking: 8 },      // Starts on Monday (0)
    { name: 'May', days: 31, startOffset: 2, working: 22, nonWorking: 9 },        // Starts on Wednesday (2)
    { name: 'June', days: 30, startOffset: 5, working: 20, nonWorking: 10 },      // Starts on Saturday (5)
    { name: 'July', days: 31, startOffset: 0, working: 23, nonWorking: 8 },       // Starts on Monday (0)
    { name: 'August', days: 31, startOffset: 3, working: 22, nonWorking: 9 },     // Starts on Thursday (3)
    { name: 'September', days: 30, startOffset: 6, working: 21, nonWorking: 9 },  // Starts on Sunday (6)
    { name: 'October', days: 31, startOffset: 1, working: 23, nonWorking: 8 },    // Starts on Tuesday (1)
    { name: 'November', days: 30, startOffset: 4, working: 20, nonWorking: 10 },  // Starts on Friday (4)
    { name: 'December', days: 31, startOffset: 6, working: 22, nonWorking: 9 }    // Starts on Sunday (6)
  ]

  // Weekdays header labels
  const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  // Holiday check in 2019
  const isRedDay = (monthIdx, day, weekdayIndex) => {
    // Weekends (Sa = 5, Su = 6)
    if (weekdayIndex === 5 || weekdayIndex === 6) return true

    // Weekday holidays in 2019
    if (monthIdx === 0 && day === 1) return true // Jan 1 (New Year)
    if (monthIdx === 2 && day === 8) return true // Mar 8 (Women's Day)
    if (monthIdx === 4 && (day === 1 || day === 9 || day === 10)) return true // May 1, 9, 10
    if (monthIdx === 5 && day === 12) return true // Jun 12 (Russia Day)
    if (monthIdx === 10 && day === 4) return true // Nov 4 (Unity Day)

    return false
  }

  // Render Calendar Month Component
  const renderMonth = (month, monthIdx) => {
    const totalCells = [];
    
    // Empty cells for offset
    for (let i = 0; i < month.startOffset; i++) {
      totalCells.push({ day: null, isEmpty: true })
    }

    // Days cells
    for (let day = 1; day <= month.days; day++) {
      const weekdayIndex = (month.startOffset + day - 1) % 7
      const isWeekend = isRedDay(monthIdx, day, weekdayIndex)
      const isSelected = monthIdx === 0 && day === 22 // Highlight Jan 22
      
      totalCells.push({
        day,
        isEmpty: false,
        isWeekend,
        isSelected
      })
    }

    return (
      <div className="month-card" key={month.name}>
        <h3 className="month-card-title">{month.name}</h3>
        
        {/* Weekday Labels */}
        <div className="month-weekdays-row">
          {weekdays.map(d => (
            <span className="month-weekday-label" key={d}>{d}</span>
          ))}
        </div>

        {/* Days grid */}
        <div className="month-days-grid">
          {totalCells.map((cell, idx) => {
            if (cell.isEmpty) {
              return <span className="month-day-cell empty" key={`empty-${idx}`}></span>
            }
            return (
              <span
                className={`month-day-cell ${cell.isWeekend ? 'weekend' : 'weekday'} ${cell.isSelected ? 'selected' : ''}`}
                key={`day-${cell.day}`}
              >
                {cell.day}
              </span>
            )
          })}
        </div>

        {/* Month Summary Box */}
        <div className="month-summary-box">
          <div className="month-summary-row working">
            <span>Working days:</span>
            <span>{month.working}</span>
          </div>
          <div className="month-summary-row non-working">
            <span>Non-working days:</span>
            <span>{month.nonWorking}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="main-content">
      {/* Large White Container Wrapper */}
      <div className="filter-card" style={{ padding: '32px' }}>
        
        {/* Header section with Selectors and Stats */}
        <div className="calendar-header-section">
          <div className="calendar-controls-col">
            <h2 className="filter-title" style={{ marginBottom: '16px' }}>Time management</h2>
            
            {/* Branch dropdown */}
            <div className="filter-form-group" style={{ marginBottom: '16px' }}>
              <label className="filter-form-label">Branch</label>
              <div className="filter-select-wrapper" style={{ width: '164px' }}>
                <select
                  className="filter-select"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="Paris">Paris</option>
                  <option value="London">London</option>
                </select>
                <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
              </div>
            </div>

            {/* Select Date Row */}
            <div className="filter-form-group">
              <label className="filter-form-label">Select the date</label>
              <div className="calendar-control-row">
                <div className="year-picker-box">
                  <button className="year-picker-btn" onClick={() => setYear(year - 1)} aria-label="Previous year">
                    <ChevronLeft size={16} strokeWidth={2.5} />
                  </button>
                  <span>{year}</span>
                  <button className="year-picker-btn" onClick={() => setYear(year + 1)} aria-label="Next year">
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
                {/* Blue calendar icon button */}
                <div
                  className="year-picker-btn"
                  style={{
                    backgroundColor: '#e8f0fe',
                    borderRadius: '4px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifycontent: 'center',
                    padding: '0'
                  }}
                >
                  <Calendar size={16} strokeWidth={2.5} style={{ margin: '0 auto', color: '#1a73e8' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Card (Right side) */}
          <div className="calendar-stats-card">
            <div className="calendar-stats-col">
              <span className="calendar-stats-num">247</span>
              <span className="calendar-stats-lbl">working<br />days</span>
            </div>
            <div className="calendar-stats-divider"></div>
            <div className="calendar-stats-col" style={{ color: '#e35959' }}>
              <span className="calendar-stats-num" style={{ color: '#e35959' }}>118</span>
              <span className="calendar-stats-lbl" style={{ color: '#e35959' }}>non-working<br />days</span>
            </div>
          </div>
        </div>

        {/* 12 Months Grid */}
        <div className="calendar-grid-12months">
          {monthsData.map((month, idx) => renderMonth(month, idx))}
        </div>

      </div>
    </main>
  )
}

export default CalendarView
