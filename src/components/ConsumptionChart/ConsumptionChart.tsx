import { useEffect, useRef } from "react"
import Highcharts from "highcharts"
import { Card, CardContent, Typography, Box } from "@mui/material"

interface Props {
  months: string[]
  actual: number[]
  baseline: number[]
}

const ConsumptionChart = ({ months, actual, baseline }: Props) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    Highcharts.chart(chartRef.current, {
      chart: {
        type: "line",
        height: 420
      },

      title: {
        text: "Monthly Consumption"
      },

      xAxis: {
        categories: months
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

      series: [
        {
          type: "line",
          name: "Actual",
          data: actual
        },
        {
          type: "line",
          name: "Baseline",
          data: baseline
        }
      ]
    })
  }, [months, actual, baseline])

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