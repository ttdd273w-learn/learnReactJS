// import React from "react";
// import ReactDOM from "react-dom";

// const navbar = (
//   <nav>
//     <h1>My Website</h1>
//     <ul>
//       <li>About</li>
//       <li>Pricing</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(navbar, document.getElementById("root"));

//----------thought experiment-------------
const samplePage = (
  <div>
    <h1>Hello, this is a thought experiment</h1>
    <h2>This is an h2 tag</h2>
    <h3>This is an h3 tag</h3>
    <h4>I wonder if there's an h4 tag</h4>
    <p>This is a paragraph tag</p>
  </div>
);

document.getElementById("root").append(JSON.stringify(samplePage));

// we get [object Object][object Object]
// using stringify, we get the javascript object
// jsx returns plain javascript objects
// React.render actually does the interpretation

// to fix it, use import statement for ReactDom
