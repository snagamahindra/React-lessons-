import React, { useState, useEffect } from 'react';

const FormHandlingComponent = () => {
  // Define state variables for form fields and errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // useEffect for form validation
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to validate form fields
  const validateForm = () => {
    let usernameError = '';
    let emailError = '';
    let passwordError = '';

    // Add your validation logic here
    if (formData.username.trim() === '') {
      usernameError = 'Username is required';
    }

    // A simple email validation example
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      emailError = 'Invalid email address';
    }

    if (formData.password.length < 6) {
      passwordError = 'Password must be at least 6 characters long';
    }

    // Set the errors in the state
    setErrors({
      username: usernameError,
      email: emailError,
      password: passwordError,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    console.log('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <div className="error">{errors.username}</div>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="error">{errors.email}</div>
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="error">{errors.password}</div>
      </div>

      <button className="btn btn-secondary"  type="submit">Submit</button>
    </form>
  );
};

export default FormHandlingComponent;




