import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);


// <Login /> is dispalyed if is not loggedIn 
function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />} 
      {/*AND Operator SAME AS null*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
