function App() {
  const firstName = "Joe";
  const lastName = "Schmoe";
  const date = new Date();
  const hour = date.getHours();
  let timeOfDay =
    hour < 12 ? "morning" : hour >= 12 && hour <= 17 ? "afternoon" : "evening";

  return (
    <div>
      <h1>
        Hello {firstName} {lastName} !
      </h1>
      <h1>Current hour is {date.getHours()}</h1>
      <h1>Good {timeOfDay}!</h1>
    </div>
  );
}

function addTwoNumbersTogether(a, b) {
  // return 1 + 2
  return a + b;
}

ReactDOM.render(<App />, document.getElementById("root"));
