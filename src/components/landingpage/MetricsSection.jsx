

const metrics = [
  {
    name: 'NO OF PROPERTIES',
    value: 180
  },
  {
    name: 'NO OF UNITS',
    value: 1800
  },
  {
    name: 'PLANS/METHODS YOU CAN PURCHASE YOUR HOME',
    value: 32
  },
]
const MetricsSection = () => {
  return (
    <div className="giddaa-bg-light-accent-green min-h-20 py-5">
      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex flex-col items-center py-3">
            <h1 className="giddaa-heading-one-millik giddaa-primary">{metric.value}</h1>
            <span className="giddaa-small-text-one">{metric.name }</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MetricsSection