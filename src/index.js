import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./Components/StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const ratingComments = ["Terrible", "Bad", "Okay", "Good", "Great"];
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);
