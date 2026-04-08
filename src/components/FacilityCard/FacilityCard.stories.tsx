import type { Meta, StoryObj } from '@storybook/react'
import FacilityCard from './FacilityCard'
import { TotalAggregations } from '../../types/utilityTypes'
import ThemeProvider from '@mui/system/ThemeProvider'
import darkTheme from '../../theme'
import CssBaseline from '@mui/material/CssBaseline'

const meta: Meta<typeof FacilityCard> = {
  title: 'Components/FacilityCard',
  component: FacilityCard,

   decorators:[
    (Story)=>(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const mockTotalAggregations: TotalAggregations = {
  totalActualConsumption: 107,
  totalBaselineConsumption: 96,
  totalActualCost: 107,
  totalBaselineCost: 96,
  totalCostSavings: 11,
  totalConsumptionSavingsPercentage: 20.7,
  totalConsumptionSavings: 11,
  totalCostSavingsPercentage: 20.7
}

export const Default: Story = {
  args: {
    facilityName: 'Green Heights',
    totalAggregations: mockTotalAggregations,
    data: [
      { month: 'Jan 2021', actual: 2000, baseline: 3000 },
      { month: 'Feb 2021', actual: 1950, baseline: 2900 },
      { month: 'Mar 2021', actual: 2100, baseline: 3050 },
      { month: 'Apr 2021', actual: 2050, baseline: 3000 },
      { month: 'May 2021', actual: 1980, baseline: 2950 },
      { month: 'Jun 2021', actual: 2150, baseline: 3100 }
    ],
  },
}