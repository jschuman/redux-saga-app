export const fetchUsersData = async () => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const fetchUserData = async (userId) => {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (userId) => {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE'
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const patchUser = async (user) => {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (user) => {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};