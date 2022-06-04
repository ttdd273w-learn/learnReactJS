import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    console.log(formData);
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submit to API
    console.log(formData);
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
    <form onSubmit={handleSubmit}>
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
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <fieldset>
        <legend>Current Employment Status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          onChange={handleChange}
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-Time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          onChange={handleChange}
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-Time</label>
        <br />
      </fieldset>

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
