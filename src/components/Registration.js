import React, { useEffect, useState } from "react";

function Registration() {
  const initialValue = { username: "", email: "", password: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(formValue));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);
  const Validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "User Name Requried!";
    }
    if (!values.email) {
      errors.email = "Email is Requried!";
    } else if (!regex.text(values.email)) {
      errors.email = "This is not A Valid EmailId!";
    }
    if (!values.password) {
      errors.password = "Password is Requried!";
    } else if (values.password.length < 4) {
      errors.password = "Password must  be more then 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password must  be below 10 characters!";
    }
    return errors;
  };
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="Ui message Success"> Singnedin Successfully</div>
      ) : (
        <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
      )}

      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="App-header">
          <label>UserName</label>
          <input
            type="text"
            name="username"
            placeholder=" Enter UserName "
            value={formValue.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Id"
            value={formValue.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formValue.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
