const warningLevel = 'warn';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:prettier/recommended',
    // 'plugin:jsx-a11y/strict',
  ],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'no-debugger': warningLevel,
    'react-hooks/exhaustive-deps': warningLevel,
    'no-var': warningLevel,
    'react/jsx-key': warningLevel,
    'no-unused-vars': warningLevel,
    'brace-style': warningLevel,
    'prefer-template': warningLevel,
    radix: warningLevel,
    'react/prop-types': warningLevel,

    'import/prefer-default-export': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/no-non-null-assertion': warningLevel,
    // 'prettier/prettier': warningLevel,
    'prefer-const': warningLevel,
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': warningLevel,
    'space-before-blocks': warningLevel,
    // suppress errors for missing 'import React' in files
    // 'jsx-a11y/click-events-have-key-events': warningLevel,
    // 'jsx-a11y/interactive-supports-focus': warningLevel,
    // 'jsx-a11y/alt-text': warningLevel,
    // 'jsx-a11y/no-noninteractive-element-interactions': warningLevel,
    // 'jsx-a11y/no-static-element-interactions': warningLevel,
  },
  overrides: [
    {
      // files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.tsx', '**/*.spec.js', '**/*.spec.jsx', '**/*.spec.tsx'],
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
    // {
    //   files: ['**/*.tsx'],
    //   rules: {
    //     'react/prop-types': 'off',
    //   },
    // },
  ],
};
