// difference between JSX and JavaScript
const h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.className = "header";
console.log(h1);
// we get <h1 class="header">Hello World</h1>

const element = <h1 className="header">This is JSX</h1>;
console.log(element);

/* We get something like this 
$$typeof: Symbol(react.element)
key: null
props:
children: "This is JSX"
className: "header"
[[Prototype]]: Object
ref: null
type: "h1"
_owner: null
_store: {} */

ReactDOM.render(element, document.getElementById("root"));
