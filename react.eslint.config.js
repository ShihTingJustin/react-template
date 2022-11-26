// react.eslint.config.js
module.exports = {
    extends: [
      // 載入 base 的設定
      './base.eslint.config',
  
      // 套用針對 react 想要使用的設定
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    rules: {
      // new JSX transform
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  };