/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  bail: false,
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
