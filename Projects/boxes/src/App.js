import boxes from "./boxes";
import React from "react";
import Box from "./components/Box";

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);

  const squareElts = squares.map((box) => <Box key={box.id} on={box.on} />);

  return (
    <main>
      <h1>{squareElts}</h1>
    </main>
  );
}
