module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: [
    '@typescript-eslint', // @typescript-eslint/parser
    'import', // eslint-plugin-import
  ],
  plugins: [
    'react', // eslint-plugin-react
    'prettier',
  ],
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
