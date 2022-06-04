import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    console.log(formData);
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  //   function handleChangeFirst(event) {
  //     // event object is passed into it, it will return a SnytheticBaseEvent
  //     console.log(event.target.value);
  //     setFirstName(() => event.target.value);
  //   }
  //   function handleChangeLast(event) {
  //     setLastName(() => event.target.value);
  //   }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
    </form>
  );
}
