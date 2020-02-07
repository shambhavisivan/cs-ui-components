module.exports = {
    setupFiles: ["<rootDir>/test-setup.ts"],
    transform: {'.(ts|tsx)': 'ts-jest'},
    testEnvironment: 'jsdom',
    testRegex: '/test/.*\\.test?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        "node_modules/(?!(DatePicker)/)"
    ],
    collectCoverage:true,
    collectCoverageFrom: [
        "./src/**/*.tsx",
        "./src/**/*.ts"
    ],
    coveragePathIgnorePatterns: [
        "./interfaces",
        "./src/index.tsx"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileMock.ts",
        "\\.(css|less)$": "<rootDir>/styleMock.ts"
    }
};