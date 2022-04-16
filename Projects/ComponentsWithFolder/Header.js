// make sure to include your imports for react, etc.

export default function Header() {
  return (
    <div>
      <header>
        <nav className="nav">
          <img className="nav-logo" src="./react-logo.png" />
          {/* adding a navigation bar under it, we will also use flexbox to align it  */}
          <ul className="nav-items">
            <li>About Me</li>
            <li>Contacts</li>
            <li>Something</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

// export default Header or put it at the top
