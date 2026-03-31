import type { Meta, StoryObj } from '@storybook/react'
import ConsumptionChart from './ConsumptionChart'

const meta: Meta<typeof ConsumptionChart> = {
  title: 'Components/ConsumptionChart',
  component: ConsumptionChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    months: ['Jan 2021', 'Feb 2021', 'Mar 2021', 'Apr 2021', 'May 2021', 'Jun 2021'],
    actual: [2000, 2000, 2000, 2000, 2000, 2000],
    baseline: [3000, 3000, 3000, 3000, 3000, 3000],
  },
}