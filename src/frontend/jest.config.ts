import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest/presets/default-esm",
    globals: {
        "ts-jest": {
            useESM: true,
        },
    },
    testEnvironment: "jsdom",
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    moduleDirectories: ["node_modules", "./src"],
    rootDir: "./src",
    moduleNameMapper: {
        "^@core(.*)$": "<rootDir>/core$1",
        "^@presentation(.*)$": "<rootDir>/presentation$1",
        "\\.(scss|css|sass)$": "<rootDir>/__mocks__/styleMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    collectCoverageFrom: ["<rootDir>/**/*.(ts|tsx)"],
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/mocks/",
    ],
    coverageThreshold: {
        global: {
            statements: 56.5,
            branches: 48.4,
            functions: 44.2,
            lines: 56.3,
        },
    },
    transform: {
            '\\.svg$': '<rootDir>/svgTransform.cjs',
    },
    
};

export default config;
