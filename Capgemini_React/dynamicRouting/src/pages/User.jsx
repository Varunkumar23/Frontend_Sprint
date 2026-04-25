import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();

  let [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1>User Page</h1>
      {/* <h3>User ID :{id}</h3> */}
      {user && <h1>{user.name}</h1>}
      <Link to="./">Back to Home</Link>
    </div>
  );
};

export default User;
