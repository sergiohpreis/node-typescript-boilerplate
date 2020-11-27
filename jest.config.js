module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
    },
  },
  moduleNameMapper: {
    '^@server(.*)$': '<rootDir>/src/server/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '.mock.ts$'],
};
