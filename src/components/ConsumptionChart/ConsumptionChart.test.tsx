import React from 'react'
import { mount } from 'enzyme'
import ConsumptionChart from './ConsumptionChart'
import Highcharts from "highcharts"

jest.mock("highcharts", () => ({
  chart: jest.fn()
}))

const months = ['Jan 2021', 'Feb 2021']
const actual = [2000, 2000]
const baseline = [3000, 3000]

const setUp = (props = {}) => {
  const defaultproperties = {
    months, actual, baseline
  }
  return mount(<ConsumptionChart {...defaultproperties} {...props} />);

}

describe('ConsumptionChart', () => {


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
    expect(comp.props().months).toEqual(months)
    expect(comp.props().actual).toEqual(actual)
    expect(comp.props().baseline).toEqual(baseline)
  })
})