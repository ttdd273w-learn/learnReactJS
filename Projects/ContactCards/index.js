// cannot do it normally since we are using babel

// ReactDOM.render(<App />, document.getElementById("root"));
function App() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src="./images/cat1.png" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src="./images/cat2.png" />
        <h3>Fluffykins</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>fluff@me.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src="./images/cat3.png" />
        <h3>Felix</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src="./images/cat4.png" />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>pumpkin@scrimba.com</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
