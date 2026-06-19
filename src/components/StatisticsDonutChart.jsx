import { useState } from 'react'

function StatisticsDonutChart({ data }) {
  const [activeSlide, setActiveSlide] = useState(0)

  if (!data) return null

  // Mathematical helper to convert polar coordinates to cartesian coordinates
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    }
  }

  // Helper to generate a mathematically perfect donut slice path
  const getDonutPath = (centerX, centerY, innerRadius, outerRadius, startAngle, endAngle) => {
    // Add small gap padding between slices
    const gapPadding = 0.8
    const start = startAngle + gapPadding
    const end = endAngle - gapPadding

    const startOuter = polarToCartesian(centerX, centerY, outerRadius, start)
    const endOuter = polarToCartesian(centerX, centerY, outerRadius, end)
    const startInner = polarToCartesian(centerX, centerY, innerRadius, start)
    const endInner = polarToCartesian(centerX, centerY, innerRadius, end)

    const largeArcFlag = end - start <= 180 ? '0' : '1'

    return [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
      'Z'
    ].join(' ')
  }

  // 12 o'clock is 0 degrees, going clockwise
  // Red/Purple divides exactly at 0 degrees (12 o'clock)
  // Violet/Blue divides exactly at 180 degrees (6 o'clock)
  const segments = [
    { name: 'Other', stroke: '#8a4ce5', start: 0, end: 70 },
    { name: 'Daimler', stroke: '#4bd471', start: 70, end: 138 },
    { name: 'American Express', stroke: '#ae56e7', start: 138, end: 180 }, // Ends at 6 o'clock
    { name: 'Lukoil', stroke: '#288fe3', start: 180, end: 224 },          // Starts at 6 o'clock
    { name: 'Aeroflot', stroke: '#12a0b6', start: 224, end: 258 },
    { name: 'KLM', stroke: '#9b3756', start: 258, end: 296 },
    { name: 'FIAT-Chrysler LLC', stroke: '#dda11d', start: 296, end: 328 },
    { name: 'KFC', stroke: '#e35959', start: 328, end: 360 }               // Ends at 12 o'clock
  ]

  return (
    <div className="chart-container" style={{ minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="220" height="220" viewBox="0 0 200 200" style={{ fontFamily: 'var(--font-sans)' }}>
        {segments.map((seg, idx) => (
          <path
            key={idx}
            d={getDonutPath(100, 100, 56, 88, seg.start, seg.end)}
            fill={seg.stroke}
          />
        ))}

        {/* Center label */}
        <text x="100" y="98" fill="#000000" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, -apple-system, sans-serif">
          Projects by
        </text>
        <text x="100" y="115" fill="#000000" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="Inter, system-ui, -apple-system, sans-serif">
          account
        </text>
      </svg>

      {/* Legends */}
      <div className="legend-container" style={{ maxWidth: '340px' }}>
        <div className="legend-row">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#e35959' }}></span>
            <span>KFC</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#dda11d' }}></span>
            <span>FIAT-Chrysler LLC</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#9b3756' }}></span>
            <span>KLM</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#12a0b6' }}></span>
            <span>Aeroflot</span>
          </div>
        </div>
        <div className="legend-row">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#288fe3' }}></span>
            <span>Lukoil</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#ae56e7' }}></span>
            <span>American Express</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#4bd471' }}></span>
            <span>Daimler</span>
          </div>
        </div>
      </div>

      <div className="carousel-indicators" style={{ marginTop: '16px' }}>
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

export default StatisticsDonutChart
