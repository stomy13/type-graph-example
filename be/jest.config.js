module.exports = {
    testMatch: ['**/tests/**/*.(spec|test).[jt]s?(x)', '/**/*.(spec|test).[jt]s'],
    moduleFileExtensions: ['ts', 'js'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
  }