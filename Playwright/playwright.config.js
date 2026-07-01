// @ts-check

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // -----------------------
  // Загальні налаштування
  // -----------------------

  testDir: './tests',

  timeout: 60 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  outputDir: 'test-results',

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  // -----------------------
  // Налаштування браузера
  // -----------------------

  use: {

    baseURL: process.env.BASE_URL || 'https://example.com',

    headless: process.env.CI ? true : false,

    viewport: {
      width: 1920,
      height: 1080,
    },

    ignoreHTTPSErrors: true,

    actionTimeout: 15000,

    navigationTimeout: 30000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    acceptDownloads: true,

    locale: 'en-US',

    timezoneId: 'Europe/Kyiv',
  },

  // -----------------------
  // Браузери
  // -----------------------

  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    // Microsoft Edge
    // {
    //   name: 'edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //   },
    // },

    // Google Chrome
    // {
    //   name: 'chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     channel: 'chrome',
    //   },
    // },
  ],

  // -----------------------
  // Локальний сервер
  // -----------------------

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});