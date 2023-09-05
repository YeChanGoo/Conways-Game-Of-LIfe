import { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    testMatch: ["**/*.test.(js|jsx|ts|tsx)"],
    testEnvironment: "jsdom",
  };
};
