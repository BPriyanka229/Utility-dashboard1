import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FacilityCard from "./components/FacilityCard/FacilityCard"
import ConsumptionChart from "./components/ConsumptionChart/ConsumptionChart"
import MeterTable from "./components/MeterTable/MeterTable"
import { Container, Typography, CircularProgress, Alert } from "@mui/material"
import { fetchUtilityRequest } from "./redux/actions/utilityActions"
import type { ApiResponse } from "./types/utilityTypes"

interface Aggregation {
  monthStartDate: string
  actualConsumption: number
  baselineConsumption: number
}

interface RootState {
  loading: boolean
  data: ApiResponse | null
  error: string | null
}

function App() {
  const dispatch = useDispatch()
  const { loading, data, error } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(fetchUtilityRequest())
  }, [dispatch])

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Container>
    )
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ padding: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    )
  }

  if (!data || !data.data) {
    return <div>No data available</div>
  }

  const facility = data.data.regions[0].facilities[0]

  const months = facility.monthwiseAggregations.map((m: Aggregation) => {
    const date = new Date(m.monthStartDate)
    return date.toLocaleString('default', { month: 'short', year: 'numeric' })
  })

  const actual = facility.monthwiseAggregations.map((m: Aggregation) => m.actualConsumption)
  const baseline = facility.monthwiseAggregations.map((m: Aggregation) => m.baselineConsumption)

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Utility Dashboard - {data.data.organizationName}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {data.data.utilityType.toUpperCase()} | {data.data.utilityMeasurementUnit} | {data.data.utilityCostCurrency}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Period: {data.data.aggregationsStartDate} to {data.data.aggregationsEndDate}
      </Typography>

      <FacilityCard
        facilityName={facility.facilityName}
        totalAggregations={facility.totalAggregations}
      />
      
      <ConsumptionChart
        months={months}
        actual={actual}
        baseline={baseline}
      />

      <MeterTable meters={facility.utilityMeters} />
    </Container>
  )
}

export default App