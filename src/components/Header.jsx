import { useState, useRef, useEffect } from 'react'
import { Bell, Search, ChevronDown } from 'lucide-react'
import avatarImg from '../assets/avatar.png'
import janeAvatarImg from '../assets/jane_avatar.png'

function Header({ 
  currentUserName, 
  currentUserAvatar, 
  dropdownOpen, 
  setDropdownOpen, 
  activeMenu, 
  setActiveMenu 
}) {
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setDropdownOpen])

  const menuItems = [
    { name: 'My details', view: 'My Details' },
    { name: 'My calendar', view: 'Calendar' },
    { name: 'Vacations', view: 'Vacations' },
    { name: 'Corporate CV', view: 'Corporate CV' },
    { name: 'Performance review', view: 'Performance review' }
  ]

  const handleItemClick = (view) => {
    setActiveMenu(view)
    setDropdownOpen(false)
  }

  return (
    <header className="top-header">
      {/* Left group: profile + search bar together */}
      <div className="header-left-group">
        <div 
          className="header-left" 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          ref={dropdownRef}
          style={{ position: 'relative' }}
        >
          <img 
            src={currentUserName === 'Jane S.' ? janeAvatarImg : avatarImg} 
            alt={currentUserName} 
            className="user-avatar" 
          />
          <span className="user-name">{currentUserName}</span>
          <ChevronDown 
            size={14} 
            className="dropdown-icon" 
            strokeWidth={3} 
            style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}
          />

          {/* Dropdown Card */}
          {dropdownOpen && (
            <div className="account-dropdown-card">
              {menuItems.map((item) => (
                <div 
                  key={item.name} 
                  className="dropdown-card-item"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleItemClick(item.view)
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search bar — right next to profile, same row */}
        <div className="search-wrapper">
          <Search size={13} className="search-icon" strokeWidth={2.5} />
          <input type="text" className="search-input" placeholder="Quick search" />
        </div>
      </div>

      <div className="header-right">
        <button className="notification-btn" aria-label="Notifications">
          <Bell size={18} strokeWidth={2.5} />
          <span className="notification-badge"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
