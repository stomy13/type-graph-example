module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: { sourceType: 'module', ecmaVersion: 2020 },
    env: { es6: true, node: true },
    globals: {},
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        },
        typescript: {},
      },
    },
    ignorePatterns: ['tests/**/*.ts'],
    rules: {
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            String: false,
            Boolean: false,
            Number: false,
            Symbol: false,
            '{}': false,
            Object: false,
            object: false,
            Function: false,
          },
          extendDefaults: true,
        },
      ],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'none',
            requireLast: false,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        },
      ],
    },
  }