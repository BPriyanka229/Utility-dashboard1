import type { Meta, StoryObj } from "@storybook/react"
import ConsumptionChart from "./ConsumptionChart"
import { ThemeProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import darkTheme from "../../theme"
const meta: Meta<typeof ConsumptionChart> = {
  title: "Components/ConsumptionChart",
  component: ConsumptionChart,

  decorators:[
    (Story)=>(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ],

  argTypes: {
    data: {
      control: "object",
      description: "Monthly consumption data"
    }
  },

  parameters: {
    layout: "fullscreen",

    viewport: {
      defaultViewport: "responsive"
    },

    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" }
      ]
    },

    actions: {
      argTypesRegex: "^on.*"
    },

    a11y: {
      element: "#root"
    }
  },

  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: [
      { month: "Jan 2021", actual: 2000, baseline: 3000 },
      { month: "Feb 2021", actual: 2000, baseline: 3000 },
      { month: "Mar 2021", actual: 2000, baseline: 3000 },
      { month: "Apr 2021", actual: 2000, baseline: 3000 },
      { month: "May 2021", actual: 2000, baseline: 3000 },
      { month: "Jun 2021", actual: 2000, baseline: 3000 }
    ]
  }
}