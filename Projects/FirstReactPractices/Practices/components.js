function MainComponent() {
  return (
    <body>
      <h1>Hello World!</h1>
      <ul>
        <li>Hello</li>
        <li>What's up</li>
      </ul>
    </body>
  );
}

// putting unordered items in it
ReactDOM.render(<MainComponent />, document.getElementById("root"));
