import { useState } from 'react'
import {
  CalendarDays,
  Search,
  FileText,
  HelpCircle,
  ClipboardCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Frown,
  Smile,
  Plus,
  Edit2
} from 'lucide-react'

function TrainingView() {
  const [activeSubTab, setActiveSubTab] = useState('timetable') // Default to 'timetable' as shown in the first image

  // Sub Tab 2: Find Training state
  const [fieldOfKnowledge, setFieldOfKnowledge] = useState('All')
  const [trainingDropdown, setTrainingDropdown] = useState('All')
  const [instructorDropdown, setInstructorDropdown] = useState('All')
  const [periodSelect, setPeriodSelect] = useState('Other')
  const [periodRadio, setPeriodRadio] = useState('actual')
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const [showInactive, setShowInactive] = useState(false)

  // Sub Tab 3: Feedback passed trainings list (Image 3)
  const [feedbackYear, setFeedbackYear] = useState(2019)
  const mockFeedbackRows = [
    { date: '24 Apr', title: 'Security Awareness', instructor: "Keithlyn O'Hara", hours: '1.00' },
    { date: '16 Feb', title: 'Induction program: Office user manual', instructor: 'Matthew Brandstock', hours: '1.00' },
    { date: '16 Feb', title: 'Induction program: Security', instructor: 'Chris Columbus', hours: '1.00' },
    { date: '11 Feb', title: 'Induction program: Capability profile and corporate CV. Dashboard Overview', instructor: 'Chris Columbus', hours: '1.50' },
    { date: '03 Feb', title: 'Induction program: Career development in company', instructor: 'Arnold Harris', hours: '2.00' },
    { date: '01 Feb', title: 'Induction program: Office policy', instructor: 'Arnold Harris', hours: '0.50' }
  ]

  // Sub Tab 4: Quizzes lists (Image 4)
  const [quizzesPassedYear, setQuizzesPassedYear] = useState(2019)
  const [quizzesIndepYear, setQuizzesIndepYear] = useState(2019)
  
  const mockPassedQuizzes = [
    { date: '24 Apr', title: 'Security Awareness', name: 'Quiz 1', passedDate: '25 Apr', single: 'No', passed: true },
    { date: '16 Feb', title: 'Induction program: Office user manual', name: 'Quiz 1', passedDate: '16 Feb', single: 'No', passed: true },
    { date: '16 Feb', title: 'Induction program: Security', name: 'Quiz 1', passedDate: '16 Feb', single: 'No', passed: true },
    { date: '11 Feb', title: 'Induction program: Capability profile and corporate CV. Dashboard Overview', name: 'Quiz 1', passedDate: '12 Feb', single: 'No', passed: false },
    { date: '03 Feb', title: 'Induction program: Career development in company', name: 'Quiz 1', passedDate: '03 Feb', single: 'No', passed: true },
    { date: '01 Feb', title: 'Induction program: Office policy', name: 'Quiz 1', passedDate: '02 Feb', single: 'No', passed: true }
  ]

  const mockIndepQuizzes = [
    { date: '24 Apr', name: 'Hibernate 3.0', single: 'Yes', time: 'Infinitive', count: '49' },
    { date: '16 Feb', name: 'EJB', single: 'Yes', time: 'Infinitive', count: '5' },
    { date: '16 Feb', name: 'SP Introduction', single: 'No', time: 'Infinitive', count: '21' },
    { date: '11 Feb', name: 'SP management processes', single: 'Yes', time: 'Infinitive', count: '33' },
    { date: '03 Feb', name: 'JSF', single: 'No', time: 'Infinitive', count: '21' },
    { date: '01 Feb', name: 'Java programming - Build tools & Unit testing', single: 'Yes', time: 'Infinitive', count: '54' }
  ]

  // Sub Tab 5: Training registration (Image 5)
  const [regYear, setRegYear] = useState(2019)
  const [regFieldFilter, setRegFieldFilter] = useState('Field')
  
  const mockAvailableTrainings = [
    { title: 'Security Awareness', initiator: 'Andrew Blick', owner: '25 Apr', lang: 'EN', field: 'Process' },
    { title: 'Induction program: Office user manual', initiator: '', owner: '16 Feb', lang: 'EN', field: 'Process' },
    { title: 'Induction program: Security', initiator: '', owner: '16 Feb', lang: 'RU', field: 'Process' },
    { title: 'Induction program: Capability profile and corporate CV. Dashboard Overview', initiator: '', owner: '12 Feb', lang: 'RU', field: 'Soft Skills' },
    { title: 'Induction program: Career development in company', initiator: '', owner: '03 Feb', lang: 'RU', field: 'Process' },
    { title: 'Induction program: Office policy', initiator: 'Hans Fillipinho', owner: '20 Jan', lang: 'FR', field: 'Process' },
    { title: 'Risk management', initiator: '', owner: '18 Jan', lang: 'FR', field: 'Testing' },
    { title: 'Product development', initiator: '', owner: '14 Jan', lang: 'FR', field: 'Dev' },
    { title: 'SCRUM', initiator: '', owner: '05 Jan', lang: 'FR', field: 'Support' }
  ]

  // Timetable days generator (starts on Mon 1 July 2019)
  const timetableDays = [
    { day: 1, month: 'July', label: 'Monday', current: true },
    { day: 2, month: 'July', label: 'Tuesday', current: true },
    { day: 3, month: 'July', label: 'Wednesday', current: true },
    { day: 4, month: 'July', label: 'Thursday', current: true },
    { day: 5, month: 'July', label: 'Friday', current: true },
    { day: 6, month: 'July', label: 'Saturday', current: true },
    { day: 7, month: 'July', label: 'Sunday', current: true },
    { day: 8, month: 'July', label: 'Monday', current: true },
    { day: 9, month: 'July', label: 'Tuesday', current: true },
    {
      day: 10,
      month: 'July',
      label: 'Wednesday',
      current: true,
      event: {
        time: '10:00',
        title: 'Management in Parliament',
        dayBadge: '10',
        tags: [
          { name: 'paris', class: 'green' },
          { name: 'online', class: 'blue' }
        ]
      }
    },
    { day: 11, month: 'July', label: 'Thursday', current: true },
    { day: 12, month: 'July', label: 'Friday', current: true },
    { day: 13, month: 'July', label: 'Saturday', current: true },
    { day: 14, month: 'July', label: 'Sunday', current: true },
    { day: 15, month: 'July', label: 'Monday', current: true },
    { day: 16, month: 'July', label: 'Tuesday', current: true },
    { day: 17, month: 'July', label: 'Wednesday', current: true },
    { day: 18, month: 'July', label: 'Thursday', current: true },
    { day: 19, month: 'July', label: 'Friday', current: true },
    { day: 20, month: 'July', label: 'Saturday', current: true },
    { day: 21, month: 'July', label: 'Sunday', current: true },
    { day: 22, month: 'July', label: 'Monday', current: true },
    { day: 23, month: 'July', label: 'Tuesday', current: true },
    { day: 24, month: 'July', label: 'Wednesday', current: true },
    {
      day: 25,
      month: 'July',
      label: 'Thursday',
      current: true,
      event: {
        time: '10:00',
        title: 'Qualification P.1',
        tags: [
          { name: 'paris', class: 'green' }
        ]
      }
    },
    { day: 26, month: 'July', label: 'Friday', current: true },
    { day: 27, month: 'July', label: 'Saturday', current: true },
    { day: 28, month: 'July', label: 'Sunday', current: true },
    { day: 29, month: 'July', label: 'Monday', current: true },
    { day: 30, month: 'July', label: 'Tuesday', current: true },
    { day: 31, month: 'July', label: 'Wednesday', current: true },
    { day: 1, month: 'August', label: 'Thursday', current: false },
    { day: 2, month: 'August', label: 'Friday', current: false },
    { day: 3, month: 'August', label: 'Saturday', current: false },
    { day: 4, month: 'August', label: 'Sunday', current: false }
  ]

  return (
    <main className="main-content">
      {/* Top action tabs */}
      <div className="projects-header-tabs" style={{ gap: '14px' }}>
        <div
          className={`projects-tab ${activeSubTab === 'timetable' ? 'active' : 'inactive'}`}
          onClick={() => setActiveSubTab('timetable')}
        >
          <CalendarDays className="tab-icon" strokeWidth={2.5} />
          <span>Training timetable</span>
        </div>
        <div
          className={`projects-tab ${activeSubTab === 'find' ? 'active' : 'inactive'}`}
          onClick={() => setActiveSubTab('find')}
        >
          <Search className="tab-icon" strokeWidth={2.5} />
          <span>Find training</span>
        </div>
        <div
          className={`projects-tab ${activeSubTab === 'feedback' ? 'active' : 'inactive'}`}
          onClick={() => setActiveSubTab('feedback')}
        >
          <FileText className="tab-icon" strokeWidth={2.5} />
          <span>Feedback</span>
        </div>
        <div
          className={`projects-tab ${activeSubTab === 'quizzes' ? 'active' : 'inactive'}`}
          onClick={() => setActiveSubTab('quizzes')}
        >
          <HelpCircle className="tab-icon" strokeWidth={2.5} />
          <span>Quizzes</span>
        </div>
        <div
          className={`projects-tab ${activeSubTab === 'registration' ? 'active' : 'inactive'}`}
          onClick={() => setActiveSubTab('registration')}
        >
          <ClipboardCheck className="tab-icon" strokeWidth={2.5} />
          <span>Training registration</span>
        </div>
      </div>

      {/* ====================================================================
         PAGE 1: Training Timetable
         ==================================================================== */}
      {activeSubTab === 'timetable' && (
        <div className="filter-card">
          <h2 className="filter-title">Filter</h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            {/* Control Selectors column */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
              
              {/* Select Date carousel */}
              <div className="filter-form-group" style={{ marginBottom: '0' }}>
                <label className="filter-form-label">Select the date</label>
                <div className="calendar-control-row">
                  <div className="year-picker-box">
                    <button className="year-picker-btn" aria-label="Previous month">
                      <ChevronLeft size={16} strokeWidth={2.5} />
                    </button>
                    <span>July 2019</span>
                    <button className="year-picker-btn" aria-label="Next month">
                      <ChevronRight size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                  <div className="year-picker-btn" style={{ backgroundColor: '#e8f0fe', borderRadius: '4px', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                    <Calendar size={16} strokeWidth={2.5} style={{ margin: '0 auto', color: '#1a73e8' }} />
                  </div>
                </div>
              </div>

              {/* Branch */}
              <div className="filter-form-group" style={{ marginBottom: '0' }}>
                <label className="filter-form-label">Branch</label>
                <div className="filter-select-wrapper" style={{ width: '150px' }}>
                  <select className="filter-select" value="Paris" onChange={() => {}}>
                    <option value="Paris">Paris</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                </div>
              </div>

              {/* Field of Knowledge */}
              <div className="filter-form-group" style={{ marginBottom: '0' }}>
                <label className="filter-form-label">Field of knowledge</label>
                <div className="filter-select-wrapper" style={{ width: '150px' }}>
                  <select className="filter-select" value="All" onChange={() => {}}>
                    <option value="All">All</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                </div>
              </div>

              {/* Language */}
              <div className="filter-form-group" style={{ marginBottom: '0' }}>
                <label className="filter-form-label">Language</label>
                <div className="filter-select-wrapper" style={{ width: '150px' }}>
                  <select className="filter-select" value="All" onChange={() => {}}>
                    <option value="All">All</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                </div>
              </div>
            </div>

            {/* Note box on right */}
            <div className="training-note-box">
              <div className="note-header">Note:</div>
              <span>Training time is displayed in your local time</span>
            </div>
          </div>

          {/* Timetable calendar header */}
          <div className="timetable-grid-header">
            <span className="timetable-header-day">Monday</span>
            <span className="timetable-header-day">Tuesday</span>
            <span className="timetable-header-day">Wednesday</span>
            <span className="timetable-header-day">Thursday</span>
            <span className="timetable-header-day">Friday</span>
            <span className="timetable-header-day">Saturday</span>
            <span className="timetable-header-day">Sunday</span>
          </div>

          {/* Timetable calendar body */}
          <div className="timetable-days-grid">
            {timetableDays.map((dayData, index) => (
              <div className="timetable-day-cell" key={index}>
                <span className="timetable-cell-num">{dayData.day}</span>
                
                {/* Event placement check */}
                {dayData.event && (
                  <div className="timetable-event-container">
                    <div className="timetable-event-card">
                      <div className="event-time-row">
                        <span className="event-time">{dayData.event.time}</span>
                        {dayData.event.dayBadge && (
                          <span className="event-num-badge">{dayData.event.dayBadge}</span>
                        )}
                      </div>
                      <div className="event-title-text">{dayData.event.title}</div>
                      <div className="event-badges-row">
                        {dayData.event.tags.map((tag, idx) => (
                          <span className={`tag-label-badge ${tag.class}`} key={idx}>
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Draw month indicator text */}
                {(dayData.day === 1 || dayData.day === 7 || index === 0 || index === 7) && (
                  <span className="timetable-cell-month">{dayData.month}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
         PAGE 2: Find Training Filters
         ==================================================================== */}
      {activeSubTab === 'find' && (
        <div className="filter-card">
          <h2 className="filter-title">Filter</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="filter-grid-2col" style={{ gap: '0 40px' }}>
              {/* Left Side */}
              <div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Field of knowledge</label>
                  <div className="filter-select-wrapper">
                    <select className="filter-select" value={fieldOfKnowledge} onChange={(e) => setFieldOfKnowledge(e.target.value)}>
                      <option value="All">All</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>

                <div className="filter-form-group">
                  <label className="filter-form-label">Training</label>
                  <div className="filter-select-wrapper">
                    <select className="filter-select" value={trainingDropdown} onChange={(e) => setTrainingDropdown(e.target.value)}>
                      <option value="All">All</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>

                <div className="filter-form-group">
                  <label className="filter-form-label">Instructors</label>
                  <div className="filter-select-wrapper">
                    <select className="filter-select" value={instructorDropdown} onChange={(e) => setInstructorDropdown(e.target.value)}>
                      <option value="All">All</option>
                    </select>
                    <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div>
                <div className="filter-form-group">
                  <label className="filter-form-label">Period</label>
                  <div className="filter-form-row-2col" style={{ gridTemplateColumns: '1.2fr 1.8fr', alignItems: 'center' }}>
                    <div className="filter-select-wrapper">
                      <select className="filter-select" value={periodSelect} onChange={(e) => setPeriodSelect(e.target.value)}>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                    </div>
                    <div className="filter-radio-controls" style={{ gap: '16px' }}>
                      <label className="filter-radio-item">
                        <input type="radio" name="period-radio" checked={periodRadio === 'actual'} onChange={() => setPeriodRadio('actual')} />
                        <span>actual dates</span>
                      </label>
                      <label className="filter-radio-item">
                        <input type="radio" name="period-radio" checked={periodRadio === 'planned'} onChange={() => setPeriodRadio('planned')} />
                        <span>planned</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="filter-form-group">
                  <div className="filter-form-row-2col">
                    <div>
                      <label className="filter-form-label">Start date:</label>
                      <div className="date-input-wrapper">
                        <select className="filter-select" value={startDate} onChange={(e) => setStartDate(e.target.value)}>
                          <option value="">Select</option>
                        </select>
                        <Calendar size={14} strokeWidth={2.5} className="date-calendar-icon" />
                      </div>
                    </div>
                    <div>
                      <label className="filter-form-label">Finish date:</label>
                      <div className="date-input-wrapper">
                        <select className="filter-select" value={finishDate} onChange={(e) => setFinishDate(e.target.value)}>
                          <option value="">Select</option>
                        </select>
                        <Calendar size={14} strokeWidth={2.5} className="date-calendar-icon" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-form-group" style={{ marginTop: '24px' }}>
                  <label className="filter-checkbox-item">
                    <input type="checkbox" checked={showInactive} onChange={(e) => setShowInactive(e.target.checked)} />
                    <span>Show inactive trainings</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="filter-footer-buttons">
              <button type="button" className="btn-outline" onClick={() => { setStartDate(''); setFinishDate(''); setShowInactive(false); }}>
                Clear
              </button>
              <button type="submit" className="btn-success">
                Search
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ====================================================================
         PAGE 3: Passed Trainings Feedback Table
         ==================================================================== */}
      {activeSubTab === 'feedback' && (
        <div className="results-card">
          <div className="results-header" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="results-found" style={{ fontSize: '18px' }}>Passed trainings:</span>
              <div className="year-picker-box" style={{ width: '130px', height: '32px', padding: '0 8px' }}>
                <button className="year-picker-btn" onClick={() => setFeedbackYear(feedbackYear - 1)}>
                  <ChevronLeft size={14} strokeWidth={2.5} />
                </button>
                <span>{feedbackYear}</span>
                <button className="year-picker-btn" onClick={() => setFeedbackYear(feedbackYear + 1)}>
                  <ChevronRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
            <button className="year-picker-btn" aria-label="Expand">
              <ChevronDown size={18} strokeWidth={2.5} style={{ transform: 'rotate(180deg)', color: '#3b82f6' }} />
            </button>
          </div>

          <div className="projects-table-wrapper">
            <table className="projects-table">
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>Date</th>
                  <th style={{ width: '50%' }}>Training</th>
                  <th style={{ width: '25%' }}>Instructor</th>
                  <th style={{ width: '10%' }}>Hours</th>
                  <th style={{ width: '5%', textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockFeedbackRows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td style={{ fontWeight: '500' }}>{row.title}</td>
                    <td>{row.instructor}</td>
                    <td>{row.hours}</td>
                    <td style={{ textAlign: 'center' }}>
                      <Edit2 size={13} className="table-action-pencil" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ====================================================================
         PAGE 4: Passed & Independent Quizzes
         ==================================================================== */}
      {activeSubTab === 'quizzes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* SECTION 1: Passed Quizzes */}
          <div className="results-card">
            <div className="results-header" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span className="results-found" style={{ fontSize: '18px' }}>Passed quizzes:</span>
                <div className="year-picker-box" style={{ width: '130px', height: '32px', padding: '0 8px' }}>
                  <button className="year-picker-btn" onClick={() => setQuizzesPassedYear(quizzesPassedYear - 1)}>
                    <ChevronLeft size={14} strokeWidth={2.5} />
                  </button>
                  <span>{quizzesPassedYear}</span>
                  <button className="year-picker-btn" onClick={() => setQuizzesPassedYear(quizzesPassedYear + 1)}>
                    <ChevronRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              <button className="year-picker-btn" aria-label="Expand">
                <ChevronDown size={18} strokeWidth={2.5} style={{ transform: 'rotate(180deg)', color: '#3b82f6' }} />
              </button>
            </div>

            <div className="projects-table-wrapper">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Training</th>
                    <th>Quiz name</th>
                    <th>Passed date</th>
                    <th>Single pass</th>
                    <th style={{ textAlign: 'center' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPassedQuizzes.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.date}</td>
                      <td style={{ fontWeight: '500' }}>{row.title}</td>
                      <td>{row.name}</td>
                      <td>{row.passedDate}</td>
                      <td>{row.single}</td>
                      <td style={{ textAlign: 'center' }}>
                        {row.passed ? (
                          <Smile size={16} className="quiz-status-smiley green" />
                        ) : (
                          <Frown size={16} className="quiz-status-smiley red" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 2: Independent Quizzes */}
          <div className="results-card">
            <div className="results-header" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span className="results-found" style={{ fontSize: '18px' }}>Independent quizzes:</span>
                <div className="year-picker-box" style={{ width: '130px', height: '32px', padding: '0 8px' }}>
                  <button className="year-picker-btn" onClick={() => setQuizzesIndepYear(quizzesIndepYear - 1)}>
                    <ChevronLeft size={14} strokeWidth={2.5} />
                  </button>
                  <span>{quizzesIndepYear}</span>
                  <button className="year-picker-btn" onClick={() => setQuizzesIndepYear(quizzesIndepYear + 1)}>
                    <ChevronRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              <button className="year-picker-btn" aria-label="Expand">
                <ChevronDown size={18} strokeWidth={2.5} style={{ transform: 'rotate(180deg)', color: '#3b82f6' }} />
              </button>
            </div>

            <div className="projects-table-wrapper">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Quiz name</th>
                    <th>Single pass</th>
                    <th>Quiz time</th>
                    <th>Qs count</th>
                  </tr>
                </thead>
                <tbody>
                  {mockIndepQuizzes.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.date}</td>
                      <td style={{ fontWeight: '500' }}>{row.name}</td>
                      <td>{row.single}</td>
                      <td>{row.time}</td>
                      <td>{row.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
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

        </div>
      )}

      {/* ====================================================================
         PAGE 5: Training Registration empty state & list table
         ==================================================================== */}
      {activeSubTab === 'registration' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top empty state box */}
          <div className="registration-empty-card">
            <ClipboardCheck className="empty-illustration-icon" strokeWidth={1.2} />
            <span className="empty-illustration-text">There are no training registrations.</span>
          </div>

          {/* Available Trainings Box */}
          <div className="results-card">
            <div className="results-header" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span className="results-found" style={{ fontSize: '18px' }}>Available trainings:</span>
                <div className="year-picker-box" style={{ width: '130px', height: '32px', padding: '0 8px' }}>
                  <button className="year-picker-btn" onClick={() => setRegYear(regYear - 1)}>
                    <ChevronLeft size={14} strokeWidth={2.5} />
                  </button>
                  <span>{regYear}</span>
                  <button className="year-picker-btn" onClick={() => setRegYear(regYear + 1)}>
                    <ChevronRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Field dropdown selector */}
                <div className="filter-select-wrapper" style={{ width: '130px' }}>
                  <select
                    className="filter-select"
                    style={{ height: '32px', fontSize: '12px' }}
                    value={regFieldFilter}
                    onChange={(e) => setRegFieldFilter(e.target.value)}
                  >
                    <option value="Field">Field</option>
                  </select>
                  <ChevronDown size={14} strokeWidth={3} className="filter-select-arrow" />
                </div>
                
                <button className="year-picker-btn" aria-label="Expand">
                  <ChevronDown size={18} strokeWidth={2.5} style={{ transform: 'rotate(180deg)', color: '#3b82f6' }} />
                </button>
              </div>
            </div>

            {/* List Table */}
            <div className="projects-table-wrapper">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>Training</th>
                    <th>Initiator</th>
                    <th>Owner</th>
                    <th>Language</th>
                    <th>Field</th>
                    <th style={{ width: '5%', textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAvailableTrainings.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: '500' }}>{row.title}</td>
                      <td>{row.initiator}</td>
                      <td>{row.owner}</td>
                      <td>{row.lang}</td>
                      <td>{row.field}</td>
                      <td style={{ textAlign: 'center' }}>
                        <Plus size={16} strokeWidth={2.5} className="table-action-pencil" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
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

        </div>
      )}
    </main>
  )
}

export default TrainingView
