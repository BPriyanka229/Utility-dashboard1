import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import axios from "axios"
import FacilityCard from "./FacilityCard"

jest.mock("highcharts", () => ({
  chart: jest.fn(() => ({
    destroy: jest.fn()
  }))
}))

jest.mock("axios")

const mockedAxios = axios as jest.Mocked<typeof axios>

describe("FacilityCard API Test", () => {

  const mockApiResponse = [
    {
      data: {
        regions: [
          {
            facilities: [
              {
                facilityName: "Green Heights",
                totalAggregations: {
                  totalActualConsumption: 107,
                  totalBaselineConsumption: 96,
                  totalActualCost: 107,
                  totalBaselineCost: 96,
                  totalCostSavings: 11,
                  totalCostSavingsPercentage: 20.7,
                  totalConsumptionSavings: 11,
                  totalConsumptionSavingsPercentage: 20.7
                },
                monthwiseAggregations: [
                  {
                    monthStartDate: "2021-01-01",
                    actualConsumption: 2000,
                    baselineConsumption: 3000
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]

  test("calls API and renders facility data", async () => {

    mockedAxios.get.mockResolvedValue({
      data: mockApiResponse
    })

    const { container } = render(<FacilityCard />)

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    })

    const label = await screen.findByText("Total Actual Consumption")

    expect(label).toBeInTheDocument()

    expect(
      await screen.findByText("107")
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})