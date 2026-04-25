// // import Hello from "./Hello";
// // import Name from "./Name";

// import { useState } from "react";

// import { useState } from "react";

// // import Props from "./Props";
// function handleAlert() {
//   alert("Bro this is not allowded");
// }
// const App = () => {
//   let [count, setCount] = useState(0);
//   return (
//     <div>
//       {/* <h1>I am learning React seriously today 🔥</h1>
//       <Hello />
//       <Name />
//       <Props name='React'/>
//       <Props name='JavaScript'/> */}
//       <h1>❤️ {count} Likes</h1>
//       {count > 0 ? (
//         <h1>People liked this post</h1>
//       ) : (
//         <h1>No likes for this post yet</h1>
//       )}
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </button>
//       <button
//         onClick={() => {
//           count > 0 ? setCount(count - 1) : 0;
//         }}
//       >
//         Decrease
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         Reset
//       </button>

//       <button onClick={handleAlert}>ALert</button>
//     </div>
//   );
// };

// export default App;

//========================================================================================================================
// controlling the form inputs

// const App = () => {
//   let [data, setData] = useState("");

//   function handleData(e) {
//     setData(e.target.value);
//   }
//   return (
//     <div>
//       <h1>Name: </h1>
//       <input type="text" onChange={handleData} />

//       <h1>You Typed</h1>
//       {data === "" ? <h1>Please type something...</h1> : <h1>{data}</h1>}
//     </div>
//   );
// };

// export default App;

// handling the states of multiple values
// import { useState } from "react";

// const App = () => {
//   const data = {
//     name: "",
//     age: "",
//     address: "",
//   };

//   let [user, setUser] = useState(data);

//   function handleData(e) {
//     let { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   }

//   return (
//     <div>
//       <input type="text" name="name" onChange={handleData}></input>
//       <input type="text" name="age" onChange={handleData}></input>
//       <input type="text" name="address" onChange={handleData}></input>

//       <h2>Name: {user.name}</h2>
//       <h2>Age: {user.age}</h2>
//       <h2>Address: {user.address}</h2>
//     </div>
//   );
// };

// export default App;

// Rendering the list on the browser

// import { useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Varun" },
//     { id: 2, name: "Tharun" },
//     { id: 3, name: "Hari" },
//   ]);

//   function handleDelete(id) {
//     const updatedUsers = users.filter((user) => user.id != id);
//     setUsers(updatedUsers);
//   }

//   return (
//     <div>
//       <ol>
//         {users.map((user) => (
//           <h1>
//             <li key={user.id}>{user.name}</li>
//             <button
//               onClick={() => {
//                 handleDelete(user.id);
//               }}
//             >
//               Delete
//             </button>
//           </h1>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   let users = ["user", "admin", "superadmin", "manager", "ceo"];
//   return (
//     <div>
//       <ol>
//         {users.map((user, index) => (
//           <li key={index}>{user}</li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   let [data, setData] = useState("Login");

//   function handleData() {
//     setData(data === "Login" ? "Logout" : "Login");
//   }

//   return (
//     <div>
//       {data === "Logout" ? <h3>Welcome Varun 🔥</h3> : <h3>Please Login</h3>}{" "}
//       <button
//         onClick={() => {
//           handleData();
//         }}
//       >
//         {data}
//       </button>
//     </div>
//   );
// };

// export default App;

//=============================================================================

//UseEffect

// import { useState, useEffect } from "react";

// const App = () => {
//   let [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       let res = await fetch("https://jsonplaceholder.typicode.com/users");
//       let data = await res.json();

//       setUsers(data);
//     }
//     fetchData();
//   }, []);

//   function handleDelete(id) {
//     let updatedUsers = users.filter((user) => user.id != id);
//     setUsers(updatedUsers);
//   }

//   return (
//     <div>
//       <ol>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name}
//             <br></br>
//             <button
//               onClick={() => {
//                 handleDelete(user.id);
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  let [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    console.log("Timer Started!");

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Timer Stopped");
      clearInterval(timer);
    };
  }, [isRunning]);

  
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default App;
