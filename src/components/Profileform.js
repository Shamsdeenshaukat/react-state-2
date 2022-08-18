import React, { useState } from "react";

function Profileform({ submit }) {
  const [profile, setprofile] = useState({
    firstname: "",
    lastname: "",
    emai: "",
    phone: "",
  });

  const handler = (event) => {
    setprofile((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(profile);
  };

  return (
    <div className="formcontainer">
      <h3>profile form</h3>
      <form onSubmit={handleForm}>
        <fieldset>
          <legend>Bio data</legend>
          <div className="names">
            <label>
              First Name:
              <input
                name="firstname"
                value={profile.firstname}
                type="text"
                onChange={handler}
              />
            </label>
            <label>
              Last Name:
              <input
                name="lastname"
                value={profile.lastname}
                type="text"
                onChange={handler}
              />
            </label>
          </div>
          <div className="names">
            <label>
              email:
              <input
                name="email"
                value={profile.email}
                type="email"
                onChange={handler}
              />
            </label>
            <label>
              Phone:
              <input
                name="phone"
                value={profile.phone}
                type="tel"
                onChange={handler}
              />
            </label>
          </div>
        </fieldset>
        <button className="form" type="submit">
          Add Profile
        </button>
      </form>
    </div>
  );
}

export default Profileform;
