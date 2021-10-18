const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "./paths.json"
      }
    }
  ],
  jest: {
    configure: {
      coverageReporters: ['json-summary', 'lcov'],
      collectCoverageFrom: [
        '!src/index.tsx',
      ],
      testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}']
    }
  }
};
