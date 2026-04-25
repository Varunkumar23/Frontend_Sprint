import React from "react";

const ChildComponent = (prop) => {
  console.log(prop);
  let { username, marks, image, skills } = prop;

  return (
    <div>
      <h1> Child Component</h1>
      <h1>Welcome {username}</h1>
      <h1>Your marks are {marks}</h1>
      <img src={image} alt="" />

      <h3>Skills List: </h3>
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </div>
  );
};

export default ChildComponent;
