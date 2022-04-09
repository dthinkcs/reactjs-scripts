import React from "react";
import ReactDOM from "react-dom";

// node.className = 'red'; 
// node.style = {}; 

const foodListStyle = {
  fontSize: "10px", // font-size: 10px,
}

const customStyle = {
  color: "red", // vs color: red; simicolon-> colon red->"red"
  fontSize: "20px", // ke-bab case vs camelCase
  border: "1px solid black" // note: this should be string in JSX
};


ReactDOM.render(
  <div>
    <h1 style={{color: 'red'}}>My Favourite Foods</h1>
    <ul>
      <li style={foodListStyle}>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
