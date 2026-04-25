import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  let username = "Sarabu Varun Kumar";
  let marks = 18;
  let image = "/images/Glnf3NcakaAs-Xf.jpeg";

  let skills = ["Java", "Python", "React", "Spring"];

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent
        username={username}
        marks={marks}
        image={image}
        skills={skills}
      />
    </div>
  );
};

export default ParentComponent;
