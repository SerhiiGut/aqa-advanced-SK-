import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      return config;
    }
  },

  viewportWidth: 1440,
  viewportHeight: 900,

  defaultCommandTimeout: 10000,
  requestTimeout: 15000,

  retries: {
    runMode: 2,
    openMode: 0
  },

  video: true,
  screenshotOnRunFailure: true
});