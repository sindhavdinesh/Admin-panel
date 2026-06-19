function GenericView({ viewName }) {
  return (
    <main className="main-content">
      <div className="generic-view-card">
        <h2 className="generic-view-title">{viewName} Panel</h2>
        <p className="generic-view-desc">
          This is a placeholder for the {viewName.toLowerCase()} section. Dynamic controls will load here.
        </p>
      </div>
    </main>
  )
}

export default GenericView
