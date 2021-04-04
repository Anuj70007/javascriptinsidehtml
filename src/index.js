import React from "react";
import ReactDOM from "react-dom";
const fname = "Anuj";
const lname = "Chaudhary";
const num = Math.floor(Math.random() * 10);
ReactDOM.render(
  <div>
    <h1>My name is {fname + " " + lname}</h1>
    <p>My luck number is {num} </p>
  </div>,
  document.getElementById("root")
);
