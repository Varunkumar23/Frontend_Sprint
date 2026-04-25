// import React, { useEffect, useState } from "react";

// const App = () => {
//   let [count, setCount] = useState(0);

//runs only when count changes
//   console.log("Component Mounted!");
//   useEffect(() => {
//     console.log("useEffect Executed!");
//   }, [count]);

// runs every time
//   console.log("Component Mounted!");
//   useEffect(() => {
//     console.log("useEffect Executed!");
//   });

//   //runs only once
//   console.log("Component Mounted!");
//   useEffect(() => {
//     console.log("useEffect Executed!");
//   }, []);

//   return (
//     <div>
//       {count}
//       <br></br>
//       <br></br>
//       <button onClick={() => setCount(count + 1)}>increase</button>
//     </div>
//   );
// };

// export default App;

//=======================================================================================================================================>

// import React, { useEffect, useState } from "react";

// const App = () => {
//   let [count, setCount] = useState(0);
//   let [data, setData] = useState([]);

//   useEffect(() => {
//     let fetchUsers = async () => {
//       try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data = await res.json();
//         setData(data);
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <br></br>
//       <br></br>
//       <button onClick={() => setCount(count + 1)}>increase</button>

//       <ol>
//         {data.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Child from "./Child";

// const App = () => {
//   let [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide child" : "Show Child"}
//       </button>
//       {show && <Child />}
//     </div>
//   );
// };

// export default App;

// axios

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const App = () => {
//   let [user, setUser] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => setUser(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       {user.map((u) => (
//         <p key={u.id}>{u.name}</p>
//       ))}
//     </div>
//   );
// };

// export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  let [user, setUser] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {user.map((u) => (
        <h1 key={u.id}>{u.name}</h1>
      ))}
    </div>
  );
};

export default App;
