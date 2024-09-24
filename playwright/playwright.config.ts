import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  testMatch: /.*\.spec\.ts/,
  use: {
    baseURL: "http://localhost:9000",
    headless: false,
  },
};

export default config;
