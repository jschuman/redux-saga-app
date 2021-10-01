const fetchData = async () => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export default fetchData;