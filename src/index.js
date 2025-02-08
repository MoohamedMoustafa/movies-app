import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./Components/StarRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const ratingComments = ["Terrible", "Bad", "Okay", "Good", "Great"];
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={ratingComments}
      defaultRating={2}
      
    />
    <StarRating
      maxRating={5}
      size={28}
      color="red"
      className={""}
      messages={ratingComments}
    />
  </React.StrictMode>
);
