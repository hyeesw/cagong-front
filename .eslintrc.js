module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
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
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-script-url': 0,
    'arrow-body-style': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
      },
    ],
    'object-shorthand': 0,
  },
};
