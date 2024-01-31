import React, { useState } from "react";

function Landing() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const doubleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const doubleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const restart = () => {
    setCounter(0);
  };

  const infinity = () => {
    setCounter(1 / 0);
  };

  return (
    <div className="container p-5">
      <div className="d-flex">
        <div className="p-2">
          <button className="btn btn-primary" onClick={increment}>
            Increment
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-dark" onClick={decrement}>
            Decrement
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-success" onClick={doubleIncrement}>
            Double Increment
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-danger" onClick={doubleDecrement}>
            Double Decrement
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-warning" onClick={restart}>
            Restart
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-secondary" onClick={infinity}>
            Infinity
          </button>
        </div>
      </div>
      <div className="display-2">{counter}</div>
    </div>
  );
}

export default Landing;



