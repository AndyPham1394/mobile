// add jest config for nodejs

const jestConfig = {
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    transform : {},
    testTimeout: 15000,
}

module.exports = jestConfig;
