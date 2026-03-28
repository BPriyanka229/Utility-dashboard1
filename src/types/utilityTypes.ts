export interface MonthAggregation {
  actualConsumption: number
  actualCost: number
  baselineConsumption: number
  baselineCost: number
  monthStartDate: string
  monthEndDate: string
  isCompleted: boolean
  consumptionProcessedDays: number
}

export interface Meter {
  meterId: string
  meterNumber: string
  meterType: string
  aggregations: {
    actualConsumption: number
    actualCost: number
    baselineConsumption: number
    baselineCost: number
    totalCostSavings: number
    totalCostSavingsPercentage: number
    totalConsumptionSavings: number
    totalConsumptionSavingsPercentage: number
  }
}

export interface TotalAggregations {
  totalActualConsumption: number
  totalBaselineConsumption: number
  totalActualCost: number
  totalBaselineCost: number
  totalCostSavings: number
  totalConsumptionSavingsPercentage: number
  totalConsumptionSavings: number
  totalCostSavingsPercentage: number
}

export interface Facility {
  facilityId: string
  facilityName: string
  totalAggregations: TotalAggregations
  monthwiseAggregations: MonthAggregation[]
  utilityMeters: Meter[]
}

export interface Region {
  regionId: string
  regionName: string
  facilities: Facility[]
}

export interface ApiResponse {
  data: {
    organizationId: string
    organizationName: string
    aggregationsStartDate: string
    aggregationsEndDate: string
    utilityType: string
    utilityMeasurementUnit: string
    utilityCostCurrency: string
    regions: Region[]
  }
}