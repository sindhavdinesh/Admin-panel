import { useState } from 'react'

function CompanyFactsChart({ data }) {
  const [activeSlide, setActiveSlide] = useState(0)

  if (!data) return null

  return (
    <div className="chart-container" style={{ minHeight: '220px' }}>
      <svg width="100%" height="190" viewBox="0 0 340 190" preserveAspectRatio="none" style={{ fontFamily: 'var(--font-sans)' }}>
        {/* Grid Lines */}
        <line x1="30" y1="20" x2="300" y2="20" stroke="#e2e8f0" strokeDasharray="3,3" />
        <line x1="30" y1="75" x2="300" y2="75" stroke="#e2e8f0" strokeDasharray="3,3" />
        <line x1="30" y1="130" x2="300" y2="130" stroke="#e2e8f0" strokeDasharray="3,3" />
        <line x1="30" y1="165" x2="300" y2="165" stroke="#cbd5e1" strokeWidth={1} />

        {/* Grid Labels (Right Y Axis) */}
        <text x="310" y="24" fill="#718096" fontSize="10" textAnchor="start" fontFamily="Inter, system-ui, -apple-system, sans-serif">707</text>
        <text x="310" y="79" fill="#718096" fontSize="10" textAnchor="start" fontFamily="Inter, system-ui, -apple-system, sans-serif">400</text>
        <text x="310" y="134" fill="#718096" fontSize="10" textAnchor="start" fontFamily="Inter, system-ui, -apple-system, sans-serif">200</text>
        <text x="310" y="169" fill="#718096" fontSize="10" textAnchor="start" fontFamily="Inter, system-ui, -apple-system, sans-serif">0</text>
        <text x="310" y="10" fill="#718096" fontSize="9" textAnchor="start" fontFamily="Inter, system-ui, -apple-system, sans-serif">Total</text>

        {/* 1. Paris Layer (Orange) - Drawn First (at the back) */}
        <path
          d="M 30,113 L 105,108 L 140,94 L 165,78 L 225,74 L 300,43 L 300,165 L 30,165 Z"
          fill="#ed9f6d"
          opacity="1.0"
        />
        <path
          d="M 30,113 L 105,108 L 140,94 L 165,78 L 225,74 L 300,43"
          fill="none"
          stroke="#d38350"
          strokeWidth="1.5"
        />

        {/* 2. Bangkok Layer (Teal) - Drawn Second */}
        <path
          d="M 30,120 L 105,115 L 140,123 L 165,110 L 225,112 L 300,88 L 300,165 L 30,165 Z"
          fill="#3cb09f"
          opacity="1.0"
        />
        <path
          d="M 30,120 L 105,115 L 140,123 L 165,110 L 225,112 L 300,88"
          fill="none"
          stroke="#2d9486"
          strokeWidth="1.5"
        />

        {/* 3. San Francisco Layer (Purple) - Drawn Third (on top) */}
        <path
          d="M 30,165 L 115,160 L 140,135 L 210,135 L 300,105 L 300,165 L 30,165 Z"
          fill="#8b46e0"
          opacity="1.0"
        />
        <path
          d="M 30,165 L 115,160 L 140,135 L 210,135 L 300,105"
          fill="none"
          stroke="#7433c7"
          strokeWidth="1.5"
        />

        {/* X Axis Labels */}
        <text x="55" y="184" fill="#718096" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, -apple-system, sans-serif">2016</text>
        <text x="135" y="184" fill="#718096" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, -apple-system, sans-serif">2017</text>
        <text x="215" y="184" fill="#718096" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, -apple-system, sans-serif">2018</text>
        <text x="285" y="184" fill="#718096" fontSize="10" textAnchor="middle" fontFamily="Inter, system-ui, -apple-system, sans-serif">2019</text>
      </svg>

      {/* Legends */}
      <div className="legend-row" style={{ marginTop: '16px', gap: '16px' }}>
        {data.legends.map((legend) => (
          <div key={legend.name} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: legend.color }}></span>
            <span style={{ fontSize: '11.5px', color: '#1a1a1a', fontWeight: '500' }}>{legend.name}</span>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            className={`indicator-dot ${activeSlide === idx ? 'active' : ''}`}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default CompanyFactsChart
