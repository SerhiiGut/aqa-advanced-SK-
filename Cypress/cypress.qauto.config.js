const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/qauto",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://qauto.forstudy.space/",
  },

  env: {
    email: "ss.allarma+1@gmail.com",
    password: "123123Ss"
  }

});