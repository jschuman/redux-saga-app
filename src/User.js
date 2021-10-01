const user = ({ user }) => (
  <div key={user.id}>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    <p>{user.street}</p>
    <p>{user.address.city}, {user.address.zipcode}</p>
    <a href={user.website}>My Website</a>
    <hr />
  </div>
);

export default user;
