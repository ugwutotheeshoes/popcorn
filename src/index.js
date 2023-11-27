import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// import App from './App';
import App from './App-v1';
// import App from './App-v2';
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} color="blue" />
    <StarRating maxRating={10} size={50} color="orange" />
    <StarRating size={30} /> */}
  </React.StrictMode>
);
