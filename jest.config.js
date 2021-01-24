module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/components'],
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/components/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
    },
  },
}
