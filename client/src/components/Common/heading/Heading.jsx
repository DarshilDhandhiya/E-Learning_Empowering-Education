import React from "react";
import "./Heading.css"; // Import your CSS file

const Heading = ({ subtitle, title }) => {
  return (
    <div className="heading-container">
      <h3>{subtitle}</h3>
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
