module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  coverageReporters: ['json', 'html', 'text', 'text-summary', 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1"
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.js'],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!quasar-framework)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "test/e2e"
  ],
  // snapshotSerializers: [
  //   "<rootDir>/node_modules/jest-serializer-vue"
  // ]
}