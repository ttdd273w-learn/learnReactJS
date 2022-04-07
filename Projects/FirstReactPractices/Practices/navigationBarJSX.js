/* challenge: create a navigation bar in JSX 
    - Use the semantic 'nav' element as the parent wrapper 
    - Have an h1 element with the brand name of your "website"
    - Insert an unodered list for the other nav elements
        - Inside an unordered list, have three li's for "Pricing", "About", and "Contact"
    - Don't worry about styling just yet
*/

/* ----------- my solution ------------
const nav = (
  <div>
    <h1>My Website</h1>
    <ul>
      <li>About</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  </div>
);
--------------------*/

// correct solution
const navbar = (
  <nav>
    <h1>My Website</h1>
    <ul>
      <li>About</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
