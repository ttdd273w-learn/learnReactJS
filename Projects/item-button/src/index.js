import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

//code that updates the state
function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);
  function addSomething() {
    const newThing = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThing]);
  }
  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div>
      <button onClick={addSomething}>Add Item</button>
      {thingsElements}
    </div>
  );
}

// code that doesn't update the state
// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"];
//   // map over the array and produce a p tag
//   const things = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

//   function addSomething() {
//     thingsArray.push(`Thing ${thingsArray.length + 1}`);
//     console.log(thingsArray);
//   }
//   return (
//     <div>
//       <button onClick={addSomething}>Add Item</button>
//       {things}
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
