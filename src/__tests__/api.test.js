import { fetchUsersData, deleteUser } from "../api";

const mockUsers = require('./mockUsers.json');

describe('when testing the users api', () => {

  it('should get users data', async () => {
    const users = await fetchUsersData();

    expect(users).toEqual(mockUsers);
  });

  it('should delete user successfully', async () => {
    const userId = mockUsers[0].id;
    const response = await deleteUser(userId);

    expect(response.userId.toString()).toEqual(userId.toString());
  });

});