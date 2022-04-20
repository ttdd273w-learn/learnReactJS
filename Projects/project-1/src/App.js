import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React from "react";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
