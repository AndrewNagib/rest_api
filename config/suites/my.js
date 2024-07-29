const jestConfig = require("../jest.config");

const suites = [
  "test/apiTest.ts",
];

module.exports = {
  ...jestConfig,
  ...{
    testRegex: suites,
    rootDir: "<rootDit>/../../../",
  },
};
