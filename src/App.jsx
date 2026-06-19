import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardView from './components/DashboardView'
import GenericView from './components/GenericView'
import PeopleView from './components/PeopleView'
import ProjectsView from './components/ProjectsView'
import CalendarView from './components/CalendarView'
import TrainingView from './components/TrainingView'
import TimesheetView from './components/TimesheetView'
import ReportsView from './components/ReportsView'
import MyDetailsView from './components/MyDetailsView'
import VacationsView from './components/VacationsView'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [activeMenu, setActiveMenu] = useState('Dashboard')
  
  // Header account dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  // Adjust display username and avatar context depending on pages
  const currentUserName = 'Dominique Ch.'

  // Login render check
  if (!isLoggedIn) {
    return (
      <div className="login-page-wrapper">
        <div className="login-container">
          {/* Brand Header */}
          <div className="brand-section">
            <h1 className="brand-logo">Camioca</h1>
            <p className="brand-subtitle">Intelligent Service</p>
          </div>

          {/* Welcome Title */}
          <h2 className="login-title">Welcome back!</h2>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} style={{ width: '100%' }}>
            {/* Email Address */}
            <div className="form-group">
              <label className="form-label" htmlFor="email-input">
                Email address
              </label>
              <div className="input-wrapper">
                <input
                  id="email-input"
                  type="email"
                  className="form-input"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label" htmlFor="password-input">
                Password
              </label>
              <div className="input-wrapper">
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input has-icon"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <Eye size={16} strokeWidth={2} />
                  ) : (
                    <EyeOff size={16} strokeWidth={2} />
                  )}
                </button>
              </div>
              <p className="form-help-text">
                Use at least 8 characters with 1 number, and one special character.
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              LOG IN
            </button>
          </form>

          {/* Forgot Password Link */}
          <a href="#forgot" className="forgot-password-link">
            Forgot password?
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-layout">
      {/* Top Header */}
      <Header 
        currentUserName={currentUserName}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* Main App Workspace */}
      <div className="app-container">
        {/* Sidebar Nav & Info */}
        <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />

        {/* Dynamic Inner Panel Switching */}
        {activeMenu === 'Dashboard' ? (
          <DashboardView />
        ) : activeMenu === 'People' ? (
          <PeopleView />
        ) : activeMenu === 'Projects' ? (
          <ProjectsView />
        ) : activeMenu === 'Calendar' ? (
          <CalendarView />
        ) : activeMenu === 'Training' ? (
          <TrainingView />
        ) : activeMenu === 'Timesheet' ? (
          <TimesheetView />
        ) : activeMenu === 'Reports' ? (
          <ReportsView />
        ) : activeMenu === 'My Details' ? (
          <MyDetailsView onNavigate={setActiveMenu} />
        ) : activeMenu === 'Vacations' ? (
          <VacationsView />
        ) : (
          <GenericView viewName={activeMenu} />
        )}
      </div>
    </div>
  )
}

export default App
