import React from 'react'
import { shallow } from 'enzyme'
import MeterTable from './MeterTable'
import { Meter } from '../../types/utilityTypes'

const mockMeters: Meter[] = [
  {
    meterId: '',
    meterNumber: 'Meter1',
    meterType: '',
    aggregations: {
      actualConsumption: 2000,
      actualCost: 2000,
      baselineConsumption: 3000,
      baselineCost: 3000,
      totalCostSavings: 11,
      totalCostSavingsPercentage: 20.7,
      totalConsumptionSavings: 11,
      totalConsumptionSavingsPercentage: 20.7
    }
  }
]

const setUp = (props = {}) => {
  const defaultProps = {
    meters: mockMeters
  }

  return shallow(<MeterTable {...defaultProps} {...props} />)
}

describe('MeterTable', () => {

  it('renders component', () => {
    const component = setUp()
    expect(component.exists()).toBe(true)
  })

  it('renders meter number', () => {
    const component = setUp()
    expect(component.text()).toContain('Meter1')
  })

  it('displays actual consumption', () => {
    const component = setUp()
    expect(component.text()).toContain('2000')
  })

  it('displays baseline consumption', () => {
    const component = setUp()
    expect(component.text()).toContain('3000')
  })

  it('displays cost savings with dollar symbol', () => {
    const component = setUp()
    expect(component.text()).toContain('$11')
  })

  it('matches snapshot', () => {
    const component = setUp()
    expect(component.debug()).toMatchSnapshot()
  })

  it('handles empty meters array', () => {
    const component = setUp({ meters: [] })
    expect(component.exists()).toBe(true)
  })

  it('renders multiple meters', () => {

    const multipleMeters: Meter[] = [
      ...mockMeters,
      {
        meterId: '',
        meterNumber: 'Meter2',
        meterType: '',
        aggregations: {
          actualConsumption: 1500,
          actualCost: 1500,
          baselineConsumption: 2500,
          baselineCost: 2500,
          totalCostSavings: 10,
          totalCostSavingsPercentage: 15,
          totalConsumptionSavings: 10,
          totalConsumptionSavingsPercentage: 15
        }
      }
    ]

    const component = setUp({ meters: multipleMeters })

    expect(component.text()).toContain('Meter1')
    expect(component.text()).toContain('Meter2')
  })

})