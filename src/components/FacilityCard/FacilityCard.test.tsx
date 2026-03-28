import React from 'react'
import { shallow } from 'enzyme'
import FacilityCard from './FacilityCard'
import { TotalAggregations } from '../../types/utilityTypes'

const mockTotalAggregations: TotalAggregations = {
  totalActualConsumption: 107,
  totalBaselineConsumption: 96,
  totalActualCost: 107,
  totalBaselineCost: 96,
  totalCostSavings: 11,
  totalConsumptionSavingsPercentage: 20.7,
  totalConsumptionSavings: 11,
  totalCostSavingsPercentage: 20.7
}

const facilityName = "Green Heights"

const setUp = (props = {}) => {
  const defaultProps = {
    facilityName,
    totalAggregations: mockTotalAggregations
  }

  return shallow(<FacilityCard {...defaultProps} {...props} />)
}

describe("FacilityCard", () => {

  it("renders component", () => {
    const component = setUp()
    expect(component.exists()).toBe(true)
  })

  it("renders facility name", () => {
    const component = setUp()
    expect(component.text()).toContain("Green Heights")
  })

  it("displays actual consumption", () => {
    const component = setUp()
    expect(component.text()).toContain("107")
  })

  it("displays baseline consumption", () => {
    const component = setUp()
    expect(component.text()).toContain("96")
  })

  it("displays cost values with dollar symbol", () => {
    const component = setUp()
    expect(component.text()).toContain("$107")
    expect(component.text()).toContain("$96")
  })

  it("displays total cost savings", () => {
    const component = setUp()
    expect(component.text()).toContain("$11")
  })

  it("displays savings percentage", () => {
    const component = setUp()
    expect(component.text()).toContain("20.7%")
  })

  it("matches snapshot", () => {
    const component = setUp()
    expect(component.debug()).toMatchSnapshot()
  })

  it("handles zero values", () => {

    const zeroAggregations: TotalAggregations = {
      totalActualConsumption: 0,
      totalBaselineConsumption: 0,
      totalActualCost: 0,
      totalBaselineCost: 0,
      totalCostSavings: 0,
      totalConsumptionSavingsPercentage: 0,
      totalConsumptionSavings: 0,
      totalCostSavingsPercentage: 0
    }

    const component = setUp({
      totalAggregations: zeroAggregations
    })

    expect(component.text()).toContain("0")
  })

  it("handles negative savings values", () => {

    const negativeAggregations: TotalAggregations = {
      ...mockTotalAggregations,
      totalCostSavings: -5,
      totalCostSavingsPercentage: -10
    }

    const component = setUp({
      totalAggregations: negativeAggregations
    })

    expect(component.text()).toContain("-5")
    expect(component.text()).toContain("-10%")
  })

})