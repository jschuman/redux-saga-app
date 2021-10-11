import { fetchUsersData } from "../api";

const mockUsers = require('./mockUsers.json');

describe('when testing the users api', () => {

  it('should get users data', async () => {
    const users = await fetchUsersData();

    expect(users).toEqual(mockUsers);
  });

});