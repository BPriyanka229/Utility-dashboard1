import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Typography
} from "@mui/material"
import type { Meter } from "../../types/utilityTypes"
import { useEffect, useState } from "react"
import axios from "axios"
const API_URL = "https://69c277b27518bf8facbe717b.mockapi.io/api/v1/utility"
const MeterTable = () => {
  const [meters, setMeters] = useState<Meter[]>([])
  useEffect(() => {
    const fetchMeters = async () => {
      const response = await axios.get(API_URL)
      const meterData =
        response.data[0].data.regions[0].facilities[0].utilityMeters
      setMeters(meterData)
      console.log("Meter table: axios response", response.data)
    }
    fetchMeters()
  }, [])
  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>Utility Meters</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Meter Number</TableCell>
            <TableCell>Actual Consumption</TableCell>
            <TableCell>Baseline Consumption</TableCell>
            <TableCell>Actual Cost</TableCell>
            <TableCell>Baseline Cost</TableCell>
            <TableCell>Cost Savings</TableCell>
            <TableCell>Consumption Savings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meters.map((meter) => (
            <TableRow key={meter.meterNumber}>
              <TableCell>{meter.meterNumber}</TableCell>
              <TableCell>{meter.aggregations.actualConsumption}</TableCell>
              <TableCell>{meter.aggregations.baselineConsumption}</TableCell>
              <TableCell>${meter.aggregations.actualCost}</TableCell>
              <TableCell>${meter.aggregations.baselineCost}</TableCell>
              <TableCell>
                ${meter.aggregations.totalCostSavings} ({meter.aggregations.totalCostSavingsPercentage}%)
              </TableCell>
              <TableCell>
                {meter.aggregations.totalConsumptionSavings} ({meter.aggregations.totalConsumptionSavingsPercentage}%)
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default MeterTable