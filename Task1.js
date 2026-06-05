const axios = require('axios');

async function getDataWithError() {
  try {
    await axios.get('https://wrong-url-for-testing.com/data');

    return {
      success: true
    };
  } catch (error) {
    return {
      success: false,
      message: 'Request failed'
    };
  }
}

module.exports = getDataWithError;