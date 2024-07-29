const jestConfig = require("jest.config");

const suites = [
  "test/**/*.test.ts",
];

module.exports = {
  ...jestConfig,
  ...{
    testRegex: suites,
    rootDir: "<rootDit>/../../../",
  },
};
