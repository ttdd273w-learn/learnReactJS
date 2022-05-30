import React from "react";
import Count from "./components/Count";

export default function App() {
  const [count, setCount] = React.useState(0);

  function incrCount() {
    setCount(function (oldValue) {
      return oldValue + 1;
    });
  }
  function decrCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={decrCount}>
        –
      </button>
      <Count number={count} />
      <button className="counter--plus" onClick={incrCount}>
        +
      </button>
    </div>
  );
}
