/* eslint-disable */

module.exports =
  {
    'globals': {
      '__DEV__': true
    },
    'verbose': true,
    'testURL': 'http://localhost/',
    'testEnvironment': 'jsdom',
    'testPathIgnorePatterns': [
      '<rootDir>/components/coverage/',
      '<rootDir>/test/cypress/',
      '<rootDir>/test/coverage/',
      '<rootDir>/dist/',
      '<rootDir>/node_modules/'
    ],
    'transformIgnorePatterns': [
      "node_modules/(?!quasar-framework)"
    ],
    'moduleFileExtensions': [
      'js',
      'json',
      'vue'
    ],
    'moduleNameMapper': {
      '^@/(.*)$': '<rootDir>/src/$1',
      'quasar': 'quasar-framework/dist/umd/quasar.mat.umd.min.js'
    },
    'resolver': null,
    'transformIgnorePatterns': [
      'node_modules/core-js',
      'node_modules/babel-runtime',
      'node_modules/lodash',
      'node_modules/vue'
    ],
    'transform': {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    'snapshotSerializers': [
      '<rootDir>/node_modules/jest-serializer-vue'
    ],
    'setupTestFrameworkScriptFile': '<rootDir>/src/setupJest.js'
  }
