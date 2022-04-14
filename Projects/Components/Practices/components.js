// part 1, separate out the header component
function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px" />
        </nav>
      </header>
    </div>
  );
}

// separate out the footer and also the contents
function MainContent() {
  return (
    <div>
      <h1>Let's Learn React</h1>
      <ol>
        <li>Experience</li>
        <li>The more you know, the more flexible you can be</li>
        <li>So I won't get roasted in interviews</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <small>© 2022 TTDD Development. All rights reserved.</small>
      </footer>
    </>
  );
}

// render the header inside of the page
// this is composability in practice
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
