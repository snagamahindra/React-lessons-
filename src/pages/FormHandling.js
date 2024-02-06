import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom"
import Menu from "../componets/Menu"; 

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
      // Reset previous errors
      setUsernameError("");
      setEmailError("");
      setPasswordError("");

      // Validate username
      if (!username || username === "" || username === undefined)
        return setUsernameError("Please enter a Username");

      // Validate email
      if (!email || email === "" || email === undefined)
        return setEmailError("Please enter an Email");

      if (!email.includes("@")) 
        return setEmailError("Email must contain @");

      // Validate password
      if (!password || password === "" || password === undefined)
        return setPasswordError("Please enter a Password");

      if (password.length < 6)
        return setPasswordError("Password must be at least 6 characters long");
  
      if (!/[A-Z]/.test(password))
        return setPasswordError("Password must contain at least one capital letter");
  
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
        return setPasswordError("Password must contain at least one symbol");  

      console.log({ username, email, password });
      setLoading(true);

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
      <Menu/>
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
            {emailError && ( <div className="text-danger">{emailError}</div>)}
          </div>

          <div className="my-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            {passwordError && (
              <div className="text-danger">{passwordError}</div>
            )}
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
