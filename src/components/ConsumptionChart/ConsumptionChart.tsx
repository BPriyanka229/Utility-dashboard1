import { useEffect, useRef } from "react"
import Highcharts from "highcharts"
import { Card, CardContent, Typography, Box } from "@mui/material"

interface ConsumptionData {
  month: string
  actual: number
  baseline: number
}

interface Props {
  data: ConsumptionData[]
}

const ConsumptionChart = ({ data }: Props) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const months = data.map((item) => item.month)
    const actual = data.map((item) => item.actual)
    const baseline = data.map((item) => item.baseline)

    Highcharts.chart(chartRef.current, {
      chart: {
        type: "line",
        height: 420,
        scrollablePlotArea: {
          minWidth: 800,
          scrollPositionX: 0
        }
      },

      title: {
        text: "Monthly Consumption",
        style: {
          fontSize: "18px",
          fontWeight: "600"
        }
      },

      xAxis: {
        categories: months,
        title: {
          text: undefined
        }
      },

      yAxis: {
        title: {
          text: "Consumption"
        }
      },

      legend: {
        layout: "horizontal",
        align: "center",
        verticalAlign: "bottom"
      },

      plotOptions: {
        line: {
          marker: {
            enabled: true
          }
        }
      },

      series: [
        {
          type: "line",
          name: "Actual",
          data: actual,
          color: "#4CAF50"
        },
        {
          type: "line",
          name: "Baseline",
          data: baseline,
          color: "#6C63FF",
          marker: {
            symbol: "diamond"
          }
        }
      ],

      credits: {
        enabled: true
      }
    })
  }, [data])

  return (
    <Card sx={{ width: "100%", mt: 3 }}>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          Monthly Consumption
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: 420
          }}
        >
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

export default ConsumptionChart