import React from "react";
import ReactDOM from "react-dom";

// node.className = 'red'; 
// node.style = {}; 

const foodListStyle = {
  fontSize: "10px", // font-size: 10px,

}

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
