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