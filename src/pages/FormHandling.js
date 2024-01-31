import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const FormHandling = () => {
  // Define state variables for form fields and errors
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // useEffect for form validation
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Function to validate form fields
  const validateForm = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    // Add your validation logic here
    if (formData.username.trim() === "") {
      usernameError = "Username is required";
    }

    // A simple email validation example
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      emailError = "Invalid email address";
    }

    if (formData.password.length < 6) {
      passwordError = "Password must be at least 6 characters long";
    }

    // Set the errors in the state
    setErrors({
      username: usernameError,
      email: emailError,
      password: passwordError,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username || username === "" || username === undefined)
        return setUsernameError("Please enter a Username");

      console.log({ username, email, password });
      setLoading(true);
      
      setUsernameError("")
      setTimeout(() => {
        setLoading(false);
      }, 3000);

      return;
      // Add your form submission logic here
      // console.log("Form submitted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-light">
      <div className="container py-5">
        <form onSubmit={handleSubmit} className="card p-5 shadow">
          <div className="my-3">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
            {usernameError && (
              <div className="text-danger">{usernameError}</div>
            )}
          </div>

          <div className="my-3">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
            <div className="text-danger">{errors.email}</div>
          </div>

          <div className="my-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            <div className="text-danger">{errors.password}</div>
          </div>

          {loading ? (
            <div className="d-flex">
              <Spinner className="text-warning mx-auto" />
            </div>
          ) : (
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormHandling;
