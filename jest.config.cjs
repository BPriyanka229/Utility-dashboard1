module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^cheerio$': '<rootDir>/node_modules/cheerio/dist/commonjs/index.js',
    '^cheerio/lib/(.*)$': '<rootDir>/node_modules/cheerio/dist/commonjs/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.app.json', diagnostics: false }],
  },
  transformIgnorePatterns: [
    'node_modules/',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(ts|tsx|js)',
    '<rootDir>/src/**/*.(test|spec).(ts|tsx|js)',
  ],

    /* -------- CODE COVERAGE -------- */

  collectCoverage: true,

  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
  "!src/**/*.test.{ts,tsx}",
  "!src/**/*.stories.{ts,tsx}",
  "!src/main.tsx",
  "!src/vite-env.d.ts",
  "!src/store/**",
  "!src/types/**",
  "!src/utils/**"
  ],

  coverageThreshold: {
    global: {
      lines: 100
    }
  }
  
}