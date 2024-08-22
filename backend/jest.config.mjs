/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  coveragePathIgnorePatterns: ['routes/fixtures'],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};