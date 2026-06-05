const axios = require('axios');

async function customRequest() {
  return axios.get('https://Task2.com/posts', {
    headers: {
      Authorization: 'Bearer test-token',
      'Content-Type': 'application/json'
    },
    params: {
      userId: 1
    }
  });
}

module.exports = customRequest;