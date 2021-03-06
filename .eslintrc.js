module.exports = {
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',

    'react/prop-types': 'off',

    'import/no-extraneous-dependencies': 'error',
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          'prismjs/**',
          'perfect-scrollbar/**',
          'react-dom/*',
          'core-js/**',
          'memoize-one/**',
          'unfetch/**',
          'raf/polyfill',
          '**/fixtures/**', // for tests
        ],
      },
    ],
  },
};
