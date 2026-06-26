const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/qauto2",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://qauto2.forstudy.space/",
  },

  env: {
    email: "ss.allarma+2@gmail.com",
    password: "123123Ss"
  }

});