// Mock API service simulating dynamic backend data loading with pixel-perfect screenshot colors

export const fetchCompanyFacts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        years: ['2016', '2017', '2018', '2019'],
        legends: [
          { name: 'Paris', color: '#ed9f6d', data: [115, 95, 75, 45] },
          { name: 'Bangkok', color: '#3cb09f', data: [120, 122, 112, 85] },
          { name: 'San Francisco', color: '#8b46e0', data: [170, 165, 135, 100] }
        ]
      })
    }, 400)
  })
}

export const fetchStatistics = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'KFC', color: '#e35959', value: 6 },
        { name: 'FIAT-Chrysler LLC', color: '#dda11d', value: 6 },
        { name: 'KLM', color: '#9b3756', value: 8 },
        { name: 'Aeroflot', color: '#12a0b6', value: 8 },
        { name: 'Lukoil', color: '#288fe3', value: 12 },
        { name: 'American Express', color: '#ae56e7', value: 10 },
        { name: 'Daimler', color: '#4bd471', value: 20 },
        { name: 'Other', color: '#8a4ce5', value: 30 }
      ])
    }, 500)
  })
}
