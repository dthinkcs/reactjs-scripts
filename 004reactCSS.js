import React from "react";
import ReactDOM from "react-dom";
// 1. camel case class in html but className in JS
// for linting purposes in index.js use: type=text/JSX not text/javascript 
// aside: global HTML attributes below can be used on any HTML element.
// 2. script type='text/JSX'
// alt key required by linter

ReactDOM.render(
  <div>
    <h1 className="myClass" contentEditable="true" spellCheck="false">
      My Favourite Languages
    </h1>
    <div>
      <img
        className="langImg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
        alt="Python"
      />
      <img
        className="langImg"
        src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png"
        alt="C++"
      />
      <img
        className="langImg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
        alt="JavaScript"
      />
    </div>
  </div>,
  document.getElementById("root")
);
