module.exports = {
  extends: "@qa/mtu-typescript",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-useless-constructor": "warn",
    "@typescript-eslint/no-useless-constructor": "off",
  },
};
