ReactDOM.render(
  <h1 className="header">Hello</h1>,
  document.getElementById("root")
);
// recreate the above line with vanilla JS
// create a new h1 element, give it some textContent
// give it a class name of "header"
// append it as a child of the div#root
const h1 = document.createElement("h1");
h1.textContent = "This is imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);
