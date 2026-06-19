import { useState, useEffect } from 'react'
import { Plus } from 'lucide-react'
import WidgetCard from './WidgetCard'
import CompanyFactsChart from './CompanyFactsChart'
import StatisticsDonutChart from './StatisticsDonutChart'
import { fetchCompanyFacts, fetchStatistics } from '../services/api'

function DashboardView() {
  const [factsData, setFactsData] = useState(null)
  const [statsData, setStatsData] = useState(null)
  const [loadingFacts, setLoadingFacts] = useState(true)
  const [loadingStats, setLoadingStats] = useState(true)

  useEffect(() => {
    fetchCompanyFacts()
      .then((data) => {
        setFactsData(data)
        setLoadingFacts(false)
      })
      .catch(() => setLoadingFacts(false))

    fetchStatistics()
      .then((data) => {
        setStatsData(data)
        setLoadingStats(false)
      })
      .catch(() => setLoadingStats(false))
  }, [])

  return (
    <main className="main-content">
      {/* Top action row */}
      <div className="content-header">
        <button className="add-widget-btn">
          <Plus size={16} strokeWidth={2.5} />
          <span>Add widget</span>
        </button>
      </div>

      {/* Grid containing all 4 Widgets */}
      <div className="widgets-grid">
        
        {/* Widget 1: Company Facts */}
        <WidgetCard
          title="Company Facts"
          subtitle="Employees"
          isLoading={loadingFacts}
          showNavigation={true}
        >
          <CompanyFactsChart data={factsData} />
        </WidgetCard>

        {/* Widget 2: Statistics */}
        <WidgetCard
          title="Statistics"
          isLoading={loadingStats}
          showNavigation={true}
        >
          <StatisticsDonutChart data={statsData} />
        </WidgetCard>

        {/* Widget 3: Assigned Risks */}
        <WidgetCard title="Assigned Risks">
          <div className="card-body-centered">
            <span>There are no risks assigned.</span>
          </div>
        </WidgetCard>

        {/* Widget 4: Assigned Action Items */}
        <WidgetCard title="Assigned Action Items">
          <div className="card-body-centered">
            <span>There are no action items assigned.</span>
          </div>
        </WidgetCard>

      </div>
    </main>
  )
}

export default DashboardView
