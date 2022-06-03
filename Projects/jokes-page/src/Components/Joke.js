import React from "react";

export default function Jokes(props) {
  const [isShown, setShown] = React.useState(false);

  function handleClick() {
    setShown((prevState) => !prevState);
  }

  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {isShown && <p>Punchline: {props.punchline}</p>}

      <button onClick={handleClick}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>

      <hr />
    </div>
  );
}
