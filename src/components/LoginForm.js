import React, { useState } from "react";

function LoginForm() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };
  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "username is requred";
    }
    if (!values.password) {
      errors.password = "password is Requred";
    } else if (!values.password.lenght < 4) {
      errors.password = "password is less then 4 char";
    } else if (!values.password.lenght > 8) {
      errors.password = "password is less then 8 char";
    }

    return errors;
  };
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <lable>Username</lable>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <p>{errors.username}</p>
        <div>
          <lable>Password</lable>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <p>{errors.password}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
