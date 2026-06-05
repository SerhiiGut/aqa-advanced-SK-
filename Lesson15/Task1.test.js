const axios = require('axios');
const getDataWithError = require('./Task1');

jest.mock('axios');

describe('Error handling test', () => {
  test('should return error message when request fails', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    const result = await getDataWithError();

    expect(result).toEqual({
      success: false,
      message: 'Request failed'
    });
  });
});