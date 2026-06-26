const baseConfig = require("./cypress.config");

module.exports = {
  ...baseConfig,

  e2e: {
    ...baseConfig.e2e,
    baseUrl: "https://qauto2.forstudy.space/"
  },

  env: {
    email: "ss.allarma+2@gmail.com",
    password: "123123Ss"
  }
};