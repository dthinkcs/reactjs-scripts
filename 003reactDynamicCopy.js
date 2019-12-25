import React from "react";
import ReactDOM from "react-dom";

const name = "rishabh"
const currentYear = new Date().getFullYear()
ReactDOM.render(
  <div>
  <p>Hi I am {name}</p>
  <p>&copy; {currentYear}</p> 
  </div>
  ,
document.getElementById("root"));
