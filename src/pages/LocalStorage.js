
import React, { useState } from "react";

// Custom hook for persisting state in local storage
const useLocalStorage = (key, initialValue) => {
  // Retrieve the stored value from local storage or use the initial value
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  // State to hold the current value
  const [value, setValue] = useState(storedValue);

  // Update the local storage whenever the state changes
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

// Component using the custom hook
const LocalStorage = () => {
  // Use the custom hook to manage state in local storage
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div className="container py-5 bg-light">
      <h5>Count: {count}</h5>
      <div className="d-flex">
      <div className="p-2">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div className="p-2">
        <button className="btn btn-warning" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div className="p-2">
        <button className="btn btn-info" onClick={() => setCount(count + 2)}>Double Increment</button>
      </div>

      <div className="p-2">
        <button className="btn btn-danger" onClick={() => setCount(count - 2)}>Double Decrement</button>
      </div>

      <div className="p-2">
        <button className="btn btn-light" onClick={() => setCount(0)}>Zero</button>
      </div>

      <div className="p-2">
        <button className="btn btn-dark" onClick={() => setCount(0/1)}>Infinity</button>
      </div>
    </div>
      </div>
  );
};

export default LocalStorage;


