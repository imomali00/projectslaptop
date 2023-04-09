import React, { useState, useEffect, useMemo } from "react";

function complete(num) {
  let i = 1;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(8);

  const computed = useMemo(() => {
    return complete(number);
  }, [number]);

  const [colored, setClored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? "crimson" : "white",
    };
  }, [colored]);

  return (
    <div className="container">
      <p style={styles}>Amount : {computed}</p>
      <button className="success" onClick={() => setNumber((prev) => prev + 1)}>
        Add
      </button>
      <button className="danger" onClick={() => setNumber((prev) => prev - 1)}>
        Delete
      </button>
      <button className="secondary" onClick={() => setClored((prev) => !prev)}>
        Edit
      </button>
    </div>
  );
}

export default App;
