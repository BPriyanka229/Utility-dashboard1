import { Card, CardContent, Typography, Grid } from "@mui/material"
import type { TotalAggregations } from "../../types/utilityTypes"

interface Props {
  facilityName: string
  totalAggregations: TotalAggregations
}

const FacilityCard = ({ facilityName, totalAggregations }: Props) => {
  return (
    <Card
      sx={{
        mb: 3,
        width: "100%",
        p: 2
      }}
    >
      <CardContent>

        <Typography variant="h5" gutterBottom>
          {facilityName}
        </Typography>

        <Grid container spacing={4}>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Total Actual Consumption
            </Typography>
            <Typography variant="h6">
              {totalAggregations.totalActualConsumption}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Total Baseline Consumption
            </Typography>
            <Typography variant="h6">
              {totalAggregations.totalBaselineConsumption}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Total Actual Cost
            </Typography>
            <Typography variant="h6">
              ${totalAggregations.totalActualCost}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Total Baseline Cost
            </Typography>
            <Typography variant="h6">
              ${totalAggregations.totalBaselineCost}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Total Cost Savings
            </Typography>
            <Typography variant="h6" color="success.main">
              ${totalAggregations.totalCostSavings} ({totalAggregations.totalCostSavingsPercentage}%)
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Total Consumption Savings
            </Typography>
            <Typography variant="h6" color="success.main">
              {totalAggregations.totalConsumptionSavings} ({totalAggregations.totalConsumptionSavingsPercentage}%)
            </Typography>
          </Grid>

        </Grid>

      </CardContent>
    </Card>
  )
}

export default FacilityCard