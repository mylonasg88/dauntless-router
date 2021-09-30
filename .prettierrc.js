module.exports = {
  printWidth: 140,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
