# Utility Dashboard

A React TypeScript application for displaying utility consumption data using Material-UI and Highcharts.

## Features

- **TypeScript**: Fully typed components and data structures
- **Material-UI**: Modern UI components for consistent design
- **Highcharts**: Interactive charts for consumption data visualization
- **Storybook**: Component documentation and demo
- **Jest & Enzyme**: Unit testing setup

## Components

- **FacilityCard**: Displays facility information and total aggregations
- **ConsumptionChart**: Monthly consumption chart with actual vs baseline
- **MeterTable**: Table showing meter-level data

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

### Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view component stories.

### Testing

```bash
npm test
```

### Build

```bash
npm run build
```

## Data Structure

The application expects API response data in the following format:

```json
{
  "data": {
    "organizationId": "string",
    "organizationName": "string",
    "aggregationsStartDate": "string",
    "aggregationsEndDate": "string",
    "utilityType": "string",
    "utilityMeasurementUnit": "string",
    "utilityCostCurrency": "string",
    "regions": [
      {
        "regionId": "string",
        "regionName": "string",
        "facilities": [
          {
            "facilityId": "string",
            "facilityName": "string",
            "totalAggregations": {
              "totalActualConsumption": number,
              "totalBaselineConsumption": number,
              "totalActualCost": number,
              "totalBaselineCost": number,
              "totalCostSavings": number,
              "totalConsumptionSavingsPercentage": number,
              "totalConsumptionSavings": number,
              "totalCostSavingsPercentage": number
            },
            "monthwiseAggregations": [
              {
                "actualConsumption": number,
                "actualCost": number,
                "baselineConsumption": number,
                "baselineCost": number,
                "monthStartDate": "string",
                "monthEndDate": "string",
                "isCompleted": boolean,
                "consumptionProcessedDays": number
              }
            ],
            "utilityMeters": [
              {
                "meterId": "string",
                "meterNumber": "string",
                "meterType": "string",
                "aggregations": {
                  "actualConsumption": number,
                  "actualCost": number,
                  "baselineConsumption": number,
                  "baselineCost": number,
                  "totalCostSavings": number,
                  "totalCostSavingsPercentage": number,
                  "totalConsumptionSavings": number,
                  "totalConsumptionSavingsPercentage": number
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Material-UI
- Highcharts
- Storybook
- Jest
- Enzyme
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
