import { ChevronLeft, ChevronRight } from 'lucide-react'

function WidgetCard({
  title,
  subtitle,
  isLoading,
  showNavigation = false,
  children
}) {
  return (
    <div className="widget-card">
      {isLoading && (
        <div className="loading-overlay">
          <span>Loading data...</span>
        </div>
      )}

      {showNavigation && (
        <>
          <button className="card-nav-arrow left" aria-label="Previous">
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <button className="card-nav-arrow right" aria-label="Next">
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </>
      )}

      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {subtitle && <span className="card-subtitle">{subtitle}</span>}
      </div>

      {children}
    </div>
  )
}

export default WidgetCard
