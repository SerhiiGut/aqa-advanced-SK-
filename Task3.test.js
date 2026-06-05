const axios = require('axios');
const getUser = require('./Task3');

jest.mock('axios');

describe('Mocking Axios requests', () => {

  test('should return user data on success', async () => {
    const mockedUser = {
      id: 1,
      name: 'John Doe'
    };

    axios.get.mockResolvedValue({
      data: mockedUser
    });

    const result = await getUser(1);

    expect(result).toEqual(mockedUser);
  });

  test('should return error object on failure', async () => {
    axios.get.mockRejectedValue(
      new Error('Server Error')
    );

    const result = await getUser(1);

    expect(result).toEqual({
      error: 'Unable to fetch user'
    });
  });

});