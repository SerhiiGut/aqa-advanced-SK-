const baseConfig = require("./cypress.config");

module.exports = {
  ...baseConfig,

  e2e: {
    ...baseConfig.e2e,
    baseUrl: "https://qauto.forstudy.space/"
  },

  env: {
    email: "ss.allarma+1@gmail.com",
    password: "123123Ss"
  }
};