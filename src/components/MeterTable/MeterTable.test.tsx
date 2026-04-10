import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import axios from "axios"
import MeterTable from "./MeterTable"
jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>
describe("MeterTable API Test", () => {
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
  test("fetches API data and renders meters", async () => {
    mockedAxios.get.mockResolvedValue({
      data: mockApiResponse
    })
    render(<MeterTable />)
    // Wait for UI update
    expect(await screen.findByText("Meter1")).toBeInTheDocument()
    expect(await screen.findByText("Meter2")).toBeInTheDocument()
  })
})