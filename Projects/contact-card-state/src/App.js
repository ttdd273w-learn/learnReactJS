import React from "react";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => {
      return { ...prevContact, isFavorite: !prevContact.isFavorite };
    });
    // setContact((prevContact) => {
    //   prevContact.isFavorite = !prevContact.isFavorite;
    //   return prevContact;
    // });
  }

  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

  return (
    <main>
      <article className="card">
        <img src="../images/user.png" className="card--image" alt="user" />
        <div className="card--info">
          <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
            alt="star"
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
