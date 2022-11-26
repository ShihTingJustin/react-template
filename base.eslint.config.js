module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    // new JSX transform
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // customized rules
    'no-console': 'off',
  },
};
