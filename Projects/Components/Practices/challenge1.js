/* Create a page of your own using cusom page component
   It should return an ordered list, and render your list to the page 
 */

// we need the imports, but since we can't get it to work just yet, we
// will just stick to what we have

function Page() {
  return (
    <ol>
      <li>Experience</li>
      <li>The more you know, the more flexible you can be</li>
      <li>So I won't get roasted in interviews</li>
    </ol>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
