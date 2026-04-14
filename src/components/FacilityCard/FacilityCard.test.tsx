import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import FacilityCard from "./FacilityCard"

jest.mock("highcharts", () => ({
  chart: jest.fn(() => ({
    destroy: jest.fn()
  }))
}))


const mock = new MockAdapter(axios)

describe("FacilityCard API Test", () => {

  const API_URL =
    "https://69c277b27518bf8facbe717b.mockapi.io/api/v1/utility"

  const mockApiResponse = [
    {
      data: {
        organizationId: "org1",
        organizationName: "ATS",
        aggregationsStartDate: "2021-01-01",
        aggregationsEndDate: "2021-06-30",
        utilityType: "gas",
        utilityMeasurementUnit: "thm",
        utilityCostCurrency: "USD",

        regions: [
          {
            regionId: "APAC",
            regionName: "Asia Pacific",

            facilities: [
              {
                facilityId: "FAC001",
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
                    monthEndDate: "2021-01-31",
                    actualConsumption: 2000,
                    actualCost: 2000,
                    baselineConsumption: 3000,
                    baselineCost: 3000,
                    isCompleted: true,
                    consumptionProcessedDays: 15
                  },
                  {
                    monthStartDate: "2021-02-01",
                    monthEndDate: "2021-02-28",
                    actualConsumption: 2100,
                    actualCost: 2100,
                    baselineConsumption: 3000,
                    baselineCost: 3000,
                    isCompleted: true,
                    consumptionProcessedDays: 15
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

  test("calls API and renders facility data", async () => {

    mock.onGet(API_URL).reply(200, mockApiResponse)

    const { container } = render(<FacilityCard />)

    await waitFor(() => {
      expect(screen.getByText("Total Actual Consumption")).toBeInTheDocument()
    })

    expect(await screen.findByText("107")).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  test("handles API error", async () => {

    mock.onGet(API_URL).networkError()

    const errorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    render(<FacilityCard />)

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalled()
    })

    errorSpy.mockRestore()
  })

})