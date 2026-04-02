import React from "react"
import { mount } from "enzyme"
import ConsumptionChart from "./ConsumptionChart"
import Highcharts from "highcharts"

jest.mock("highcharts", () => ({
  chart: jest.fn()
}))

const data = [
  { month: "Jan 2021", actual: 2000, baseline: 3000 },
  { month: "Feb 2021", actual: 2000, baseline: 3000 }
]

const setUp = (props = {}) => {
  const defaultProperties = {
    data
  }

  return mount(<ConsumptionChart {...defaultProperties} {...props} />)
}

describe("ConsumptionChart", () => {

  it("matches snapshot", () => {
    const comp = setUp()
    expect(comp.debug()).toMatchSnapshot()
  })

  it("calls Highcharts.chart when component mounts", () => {
    setUp()
    expect(Highcharts.chart).toHaveBeenCalled()
  })

  it("passes correct props to component", () => {
    const comp = setUp()
    expect(comp.props().data).toEqual(data)
  })

})