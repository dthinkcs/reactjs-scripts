// NOTE: 
// 1> Only Use single div(top-level div) in ReactDOM.render
// 2>  JS inside HTML allowed in JSX (like templating software like eJS/Jinja)
import React from "react";
import ReactDOM from "react-dom";

// const React = require("react");
// const ReactDOM = require("react-dom");

const firstName = "Robert";
const middleName = "Downey";
const lastName = "Jr";

ReactDOM.render(
  <div>
    <h1>
      {firstName} {middleName} {lastName} says hi
    </h1>
    <p>Lucky Die Number: {Math.floor(Math.random() * (6 - 1)) + 1}</p>
  </div>,
  document.getElementById("root")
);

// expression v. statements
// evaluation allowed not todosomework
// see some vid

// ES6 template literal
// { ` {firstName} {middleName} {lastName} ` }
