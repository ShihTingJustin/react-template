// typescript.eslint.config.js
module.exports = {
  extends: ['./base.eslint.config'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'enum',
      format: null,
      custom: {
        // enum should be uppercase and snake case and allow double underscore
        regex: '^[A-Z][A-Z0-9]*(__?[A-Z0-9]+)*$',
        match: true,
      },
    },
  ],
  '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: true }],
  // 針對 TypeScript 的 React 元件，因為已經有透過 TypeScript 進行 props 的定義，就可以把原本的 react/prop-types 的規則給關掉
  'react/prop-types': 'off',
  'no-restricted-imports': [
    'error',
    {
      name: 'react',
      importNames: ['default'],
      message: "use import { xxx } from 'react'; instead",
    },
  ],
};
