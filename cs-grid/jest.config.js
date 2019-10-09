module.exports = {
    setupFiles: ["<rootDir>/test-setup.ts"],
    transform: {'.(ts|tsx)': 'ts-jest'},
    testEnvironment: 'node',
    testRegex: '/test/.*\\.test?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage:true,
    collectCoverageFrom: [
        "./src/**/*.tsx",
        "./src/**/*.ts"
    ],
    coveragePathIgnorePatterns: [
        "./interfaces",
        "./src/index.tsx"
    ]
};