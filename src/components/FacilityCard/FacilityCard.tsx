import { useEffect, useRef, useState } from "react"
import Highcharts from "highcharts"
import { Card, CardContent, Typography, Box, Grid } from "@mui/material"
import axios from "axios"
interface ConsumptionData {
  month: string
  actual: number
  baseline: number
}
const FacilityCard = () => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const [facilityData, setFacilityData] = useState<any>(null)
  const [chartData, setChartData] = useState<ConsumptionData[]>([])
  useEffect(() => {
    const fetchFacilityData = async () => {
      try {
        const response = await axios.get(
          "https://69c277b27518bf8facbe717b.mockapi.io/api/v1/utility"
        )
        console.log("FacilityCard: axios response", response.data)
        const facility =
          response.data[0].data.regions[0].facilities[0]
        setFacilityData(facility)
        const formattedChartData = facility.monthwiseAggregations.map((m: any) => ({
          month: new Date(m.monthStartDate).toLocaleString("default", {
            month: "short",
            year: "numeric"
          }),
          actual: m.actualConsumption,
          baseline: m.baselineConsumption
        }))
        setChartData(formattedChartData)
      } catch (error) {
        console.error("API error:", error)
      }
    }
    fetchFacilityData()
  }, [])
  useEffect(() => {
    if (!chartRef.current || chartData.length === 0) return
    const months = chartData.map(item => item.month)
    const actual = chartData.map(item => item.actual)
    const baseline = chartData.map(item => item.baseline)
    const chart = Highcharts.chart(chartRef.current, {
      chart: {
        type: "column",
        height: 420
      },
      title: {
        text: "Monthly Consumption"
      },
      xAxis: {
        categories: months,
        crosshair: true
      },
      yAxis: {
        title: {
          text: "Consumption"
        }
      },
      tooltip: {
        shared: true,
        headerFormat: "<span style=\"font-size: 13px\">{point.key}</span><br/>"
      },
      plotOptions: {
        column: {
          borderRadius: 4,
          pointPadding: 0.15,
          groupPadding: 0.1
        }
      },
      series: [
        {
          type: "column",
          name: "Actual",
          data: actual,
          color: "#4CAF50"
        },
        {
          type: "column",
          name: "Baseline",
          data: baseline,
          color: "#6C63FF"
        },
        {
          type: "spline",
          name: "Actual Trend",
          data: actual,
          color: "#2E7D32",
          marker: {
            enabled: true
          }
        },
        {
          type: "spline",
          name: "Baseline Trend",
          data: baseline,
          color: "#3F51B5",
          marker: {
            enabled: true
          }
        }
      ]
    })
    return () => chart.destroy()
  }, [chartData])
  if (!facilityData) return null
  return (
    <Card sx={{ mb: 3, width: "100%", p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {facilityData.facilityName}
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2">Total Actual Consumption</Typography>
            <Typography variant="h6">
              {facilityData.totalAggregations.totalActualConsumption}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2">Total Baseline Consumption</Typography>
            <Typography variant="h6">
              {facilityData.totalAggregations.totalBaselineConsumption}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2">Total Actual Cost</Typography>
            <Typography variant="h6">
              ${facilityData.totalAggregations.totalActualCost}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2">Total Baseline Cost</Typography>
            <Typography variant="h6">
              ${facilityData.totalAggregations.totalBaselineCost}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2">Total Cost Savings</Typography>
            <Typography variant="h6" color="success.main">
              ${facilityData.totalAggregations.totalCostSavings}
              ({facilityData.totalAggregations.totalCostSavingsPercentage}%)
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2">Total Consumption Savings</Typography>
            <Typography variant="h6" color="success.main">
              {facilityData.totalAggregations.totalConsumptionSavings}
              ({facilityData.totalAggregations.totalConsumptionSavingsPercentage}%)
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", height: 420, mt: 4 }}>
          <div
            ref={chartRef}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}
export default FacilityCard