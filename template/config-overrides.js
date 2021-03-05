const {alias, aliasJest, configPaths} = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.paths.json')

module.exports = function override(config) {
  const modifiedConfig = alias(aliasMap)(config)

  return modifiedConfig
}

module.exports.jest = function override(config) {
  const modifiedConfig = aliasJest(aliasMap)(config);

  return {
    ...modifiedConfig,
    coverageReporters: ['json-summary', 'lcov'],
    collectCoverageFrom: [
      'src/App.tsx',
      '!src/styles/*',
      '!<rootDir>/node_modules/'
    ],
    coverageThreshold: {
      global: {
        statements: 85,
        branches: 80,
        functions: 85,
        lines: 85
      }
    },
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}']
  }
}
