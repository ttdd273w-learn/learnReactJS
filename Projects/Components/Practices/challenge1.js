/* Create a page of your own using cusom page component
   It should return an ordered list, and render your list to the page 
 */

// we need the imports, but since we can't get it to work just yet, we
// will just stick to what we have

/* Part 2:
 Add a header element with a nested nav element
 Inside the nav, include an img element with the image of react logo, and 
 make sure to set the width
 Add an h1 element to describe the page, place it above the ordered list
 Add a footer 
 */

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px" />
        </nav>
      </header>
      <h1>Let's Learn React</h1>
      <ol>
        <li>Experience</li>
        <li>The more you know, the more flexible you can be</li>
        <li>So I won't get roasted in interviews</li>
      </ol>
      <footer>
        <small>© 2022 TTDD Development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
