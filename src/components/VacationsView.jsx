import { useState } from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Plus, 
  Edit2, 
  Trash2 
} from 'lucide-react'

function VacationsView() {
  const [year, setYear] = useState('2019')

  const plannedVacations = [
    { status: 'approved', dates: '12.08.2019 - 22.08.2019', days: '14', workdays: '10', holidays: '4', approved: 'Michael Bluemans' },
    { status: 'approved', dates: '21.12.2019 - 31.12.2019', days: '7', workdays: '5', holidays: '2', approved: 'Michael Bluemans' }
  ]

  const actualVacations = [
    { status: 'approved', dates: '12.08.2019 - 22.08.2019', days: '14', workdays: '10', holidays: '4', comments: 'Approved and paid' },
    { status: 'approved', dates: '21.12.2019 - 31.12.2019', days: '7', workdays: '5', holidays: '2', comments: 'In processing' }
  ]

  return (
    <main className="main-content">
      {/* Date Picker Header Card */}
      <div className="active-people-stats-card" style={{ padding: '16px 24px', marginBottom: '24px', width: 'max-content' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span className="filter-form-label" style={{ marginBottom: 0, fontSize: '11px', color: '#718096' }}>Select the date</span>
          
          <div className="year-picker-box" style={{ width: '130px', height: '32px' }}>
            <button className="year-picker-btn" onClick={() => setYear(y => String(Number(y) - 1))}>
              <ChevronLeft size={14} strokeWidth={2.5} />
            </button>
            <span style={{ fontSize: '12px', fontWeight: '700' }}>{year}</span>
            <button className="year-picker-btn" onClick={() => setYear(y => String(Number(y) + 1))}>
              <ChevronRight size={14} strokeWidth={2.5} />
            </button>
          </div>

          <button className="year-picker-btn" style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#e8f0fe', color: '#1a73e8', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Calendar size={14} strokeWidth={2.5} style={{ margin: '0 auto' }} />
          </button>
        </div>
      </div>

      {/* Planned Vacations Table Card */}
      <div className="active-people-stats-card" style={{ padding: '24px 32px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 className="active-people-title" style={{ fontSize: '16px', margin: 0 }}>Planned vacations</h2>
          <button className="btn-outline" style={{ borderColor: '#3b82f6', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 14px', fontSize: '11px' }}>
            <Plus size={12} strokeWidth={3} />
            <span>Add row</span>
          </button>
        </div>

        <div className="projects-table-wrapper">
          <table className="projects-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>Status</th>
                <th>Dates</th>
                <th>Duration in days</th>
                <th>Workdays</th>
                <th>Holidays</th>
                <th>Approved</th>
                <th style={{ width: '100px' }}></th>
              </tr>
            </thead>
            <tbody>
              {plannedVacations.map((vac, idx) => (
                <tr key={idx}>
                  <td>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#24b47e', margin: '0 auto' }}></span>
                  </td>
                  <td style={{ fontWeight: '600' }}>{vac.dates}</td>
                  <td>{vac.days}</td>
                  <td>{vac.workdays}</td>
                  <td>{vac.holidays}</td>
                  <td>{vac.approved}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                      <Edit2 size={13} className="table-action-pencil" strokeWidth={2.5} />
                      <Trash2 size={13} style={{ color: '#e35959', cursor: 'pointer' }} strokeWidth={2.5} />
                    </div>
                  </td>
                </tr>
              ))}
              {/* Totals Row */}
              <tr style={{ backgroundColor: '#ffffff', fontWeight: '700' }}>
                <td></td>
                <td style={{ textAlign: 'right', paddingRight: '24px' }}>Totals</td>
                <td>21</td>
                <td>15</td>
                <td>6</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Actual Vacations Table Card */}
      <div className="active-people-stats-card" style={{ padding: '24px 32px' }}>
        <h2 className="active-people-title" style={{ fontSize: '16px', margin: '0 0 20px 0' }}>Actual vacations</h2>

        <div className="projects-table-wrapper">
          <table className="projects-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>Status</th>
                <th>Dates</th>
                <th>Duration in days</th>
                <th>Workdays</th>
                <th>Holidays</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {actualVacations.map((vac, idx) => (
                <tr key={idx}>
                  <td>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#24b47e', margin: '0 auto' }}></span>
                  </td>
                  <td style={{ fontWeight: '600' }}>{vac.dates}</td>
                  <td>{vac.days}</td>
                  <td>{vac.workdays}</td>
                  <td>{vac.holidays}</td>
                  <td style={{ fontStyle: 'normal', color: '#1a1a1a', fontWeight: '500' }}>{vac.comments}</td>
                </tr>
              ))}
              {/* Totals Row */}
              <tr style={{ backgroundColor: '#ffffff', fontWeight: '700' }}>
                <td></td>
                <td style={{ textAlign: 'right', paddingRight: '24px' }}>Totals</td>
                <td>21</td>
                <td>15</td>
                <td>6</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </main>
  )
}

export default VacationsView
