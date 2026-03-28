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

interface Props {
  meters: Meter[]
}

const MeterTable = ({ meters }: Props) => {
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
              <TableCell>${meter.aggregations.totalCostSavings} ({meter.aggregations.totalCostSavingsPercentage}%)</TableCell>
              <TableCell>{meter.aggregations.totalConsumptionSavings} ({meter.aggregations.totalConsumptionSavingsPercentage}%)</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MeterTable