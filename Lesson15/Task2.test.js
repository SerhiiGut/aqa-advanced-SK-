const axios = require('axios');
const customRequest = require('./Task2');

jest.mock('axios');

describe('Headers and Params test', () => {
  test('should send correct headers and params', async () => {
    axios.get.mockResolvedValue({
      data: []
    });

    await customRequest();

    expect(axios.get).toHaveBeenCalledWith(
      'https://Task2.com/posts',
      {
        headers: {
          Authorization: 'Bearer test-token',
          'Content-Type': 'application/json'
        },
        params: {
          userId: 1
        }
      }
    );
  });
});