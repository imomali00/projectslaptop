import React, { useState } from "react";

function randomNumber() {
  console.log("Calculate...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [number, setNumber] = useState(() => {
    return randomNumber();
  });

  const [state, setState] = useState({
    text: "Number",
    date: Date.now(),
  });

  function incr() {
    setNumber(number + 1);
  }

  function decr() {
    setNumber(number - 1);
  }

  function resetNumber(prev) {
    setNumber((prev) => (prev = 0));
  }

  function uploadObject() {
    setState((prev) => {
      return {
        ...prev,
        text: "New text",
      };
    });
  }

  return (
    <div className="container">
      <div className="btn-group">
        <p>Number: {number}</p>
        <button onClick={incr} className="success">
          Add{" "}
        </button>
        <button onClick={decr} className="danger">
          Delete
        </button>

        <button onClick={uploadObject} className="secondary">
          Change
        </button>
        <button onClick={resetNumber}>Reset</button>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
