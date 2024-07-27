// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
    parserOptions: {
      ecmaVersion: 2021, // Allows for the use of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the use of JSX
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
      'plugin:prettier/recommended', // Integrates Prettier with ESLint
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'prettier/prettier': ['error', {
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'always',
      }],
      'react/no-unescaped-entities': 'off', // Disable rule for unescaped entities
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused vars
      'no-console': 'warn', // Warn about console logs
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  };
  