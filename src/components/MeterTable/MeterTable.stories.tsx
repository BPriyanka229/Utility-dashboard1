import type { Meta, StoryObj } from '@storybook/react'
import MeterTable from './MeterTable'
import { Meter } from '../../types/utilityTypes'
import ThemeProvider from '@mui/system/ThemeProvider'
import darkTheme from '../../theme'
import CssBaseline from '@mui/material/CssBaseline'

const meta: Meta<typeof MeterTable> = {
  title: 'Components/MeterTable',
  component: MeterTable,

  
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

const mockMeters: Meter[] = [
  {
    meterId: '',
    meterNumber: 'Meter1',
    meterType: '',
    aggregations: {
      actualConsumption: 2000,
      actualCost: 2000,
      baselineConsumption: 3000,
      baselineCost: 3000,
      totalCostSavings: 11,
      totalCostSavingsPercentage: 20.7,
      totalConsumptionSavings: 11,
      totalConsumptionSavingsPercentage: 20.7
    }
  },
  {
    meterId: '',
    meterNumber: 'Meter2',
    meterType: '',
    aggregations: {
      actualConsumption: 2000,
      actualCost: 2000,
      baselineConsumption: 3000,
      baselineCost: 3000,
      totalCostSavings: 11,
      totalCostSavingsPercentage: 20.7,
      totalConsumptionSavings: 13.3,
      totalConsumptionSavingsPercentage: 10.5
    }
  }
]

export const Default: Story = {
  args: {
    meters: mockMeters,
  },
}