
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
const LocalStorageComponent = () => {
  // Use the custom hook to manage state in local storage
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div>
      <p>Count: {count}</p>
      <div className="p-2">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div className="p-2">
        <button className="btn btn-warning" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default LocalStorageComponent;


