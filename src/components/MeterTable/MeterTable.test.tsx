import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import MeterTable from "./MeterTable"

const mock = new MockAdapter(axios)

describe("MeterTable API Test", () => {

  const API_URL =
    "https://69c277b27518bf8facbe717b.mockapi.io/api/v1/utility"

  const mockApiResponse = [
    {
      data: {
        regions: [
          {
            facilities: [
              {
                utilityMeters: [
                  {
                    meterNumber: "Meter1",
                    aggregations: {
                      actualConsumption: 2000,
                      baselineConsumption: 3000,
                      actualCost: 2000,
                      baselineCost: 3000,
                      totalCostSavings: 11,
                      totalCostSavingsPercentage: 20.7,
                      totalConsumptionSavings: 11,
                      totalConsumptionSavingsPercentage: 20.7
                    }
                  },
                  {
                    meterNumber: "Meter2",
                    aggregations: {
                      actualConsumption: 2000,
                      baselineConsumption: 3000,
                      actualCost: 2000,
                      baselineCost: 3000,
                      totalCostSavings: 11,
                      totalCostSavingsPercentage: 20.7,
                      totalConsumptionSavings: 13.3,
                      totalConsumptionSavingsPercentage: 10.5
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]

  afterEach(() => {
    mock.reset()
  })

  test("fetches API data and renders meters", async () => {

    mock.onGet(API_URL).reply(200, mockApiResponse)

    render(<MeterTable />)

    expect(await screen.findByText("Meter1")).toBeInTheDocument()
    expect(await screen.findByText("Meter2")).toBeInTheDocument()

  })

  test("handles API error", async () => {

    mock.onGet(API_URL).networkError()

    render(<MeterTable />)

    expect(await screen.findByText(/no data/i)).toBeInTheDocument()

  })

})