// import React, { useState } from "react";
// // import User from "./User";
// // import Data from "./Data";

// // const App = () => {
// //   const [count, setCount] = useState(0);

// //   const increment = () => {
// //     setCount(count + 1);
// //   };

// //   const decrement = () => {
// //     count <= 0 ? setCount(0) : setCount(count - 1);
// //   };

// //   return (
// //     <div>
// //       <h1>Counter App</h1>
// //       <h2>{count}</h2>
// //       <div>
// //         <button onClick={increment}> Increment</button>
// //         <button onClick={decrement}> Decrement</button>
// //       </div>

// //       {/* <User /> */}
// //       <Data/>
// //     </div>
// //   );
// // };

// // export default App;

// // import { useState } from "react";

// // const App = () => {
// //   const [user, setUser] = useState({
// //     userName: "Sarabu Varun Kumar",
// //     marks: 100,
// //   });

// //   console.log(user);

// //   const updateMarks = () => {
// //     setUser({ ...user, marks: user.marks + 1 });
// //   };

// //   const decrementMarks = () => {
// //     setUser({ ...user, marks: user.marks - 1 });
// //   };

// //   return (
// //     <div>
// //       <h2>
// //         {user.userName} : {user.marks}
// //       </h2>
// //       <button onClick={updateMarks}>Increment Marks</button>
// //       <button onClick={decrementMarks}>Decrement Marks</button>
// //     </div>

// //   );
// // };

// // export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [bgColor, setBgColor] = useState("white");

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundColor: bgColor,
//         textAlign: "center",
//         paddingTop: "50px",
//       }}
//     >
//       <h1>Background Color Changer</h1>

//       <button onClick={() => setBgColor("red")} style={{ margin: "10px" }}>
//         Red
//       </button>

//       <button onClick={() => setBgColor("blue")} style={{ margin: "10px" }}>
//         Blue
//       </button>

//       <button onClick={() => setBgColor("green")} style={{ margin: "10px" }}>
//         Green
//       </button>

//       <button onClick={() => setBgColor("yellow")} style={{ margin: "10px" }}>
//         Yellow
//       </button>

//       <button
//         onClick={() => setBgColor("black")}
//         style={{ margin: "10px", color: "black" }}
//       >
//         Black
//       </button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useState } from "react";

const App = () => {
  let [role, setRole] = useState("");

  return (
    <div>
      <button onClick={() => setRole("guest")}>Guest Button</button>
      <button onClick={() => setRole("user")}>User Button</button>
      <button onClick={() => setRole("admin")}>Admin Button</button>

      { 
        role==="guest" && <h1>You are a Guest</h1>
      }
       {
        role==="user" && <h1>You are a User</h1>
      }
      {
        role==="admin" && <h1>You are a Admin</h1>
      }

    </div>
  );
};

export default App;
