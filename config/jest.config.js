module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "/test/.*.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: false,
  reporters: ["./node_modules/jest-simple-dot-reporter"],
  testRunner: "jest-jasmine2",
  maxWorkers: 4,
};
