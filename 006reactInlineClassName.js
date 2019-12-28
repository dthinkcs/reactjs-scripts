//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react"
import ReactDOM from "react-dom"

const currentHour = (new Date()).getHours();
// const currentHour = (new Date(2019, 1, 1, 18)).getHours();


var greeting = "";
var greetingStyle = {};
if (currentHour < 12) {
  greeting = "Good morning";
  greetingStyle.color = "red";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
  greetingStyle.color = "green";
} else {
  greeting = "Good evening";
  greetingStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={greetingStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
