import React from "react";
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
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={incrCount}>
        +
      </button>
    </div>
  );
}
