const axios = require('axios');

async function getUser(id) {
  try {
    const response = await axios.get(
      `https://Task3.com/posts/${id}`
    );

    return response.data;
  } catch (error) {
    return {
      error: 'Unable to fetch user'
    };
  }
}

module.exports = getUser;