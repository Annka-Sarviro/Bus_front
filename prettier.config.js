// prettier.config.js
const config = {
  plugins: ["simple-import-sort", "import"],

  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "avoid",
  proseWrap: "always",

  tailwindFunctions: ["cn"],
};

export default config;
