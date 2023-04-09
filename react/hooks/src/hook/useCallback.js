import React, { useState, useCallback } from "react";
import ItemList from "./ItemList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(0);
  const styles = {
    color: colored ? "crimson" : "white",
  };

  const generateItem = useCallback(() => {
    return new Array(count).fill("").map((_, index) => `Element ${index + 1}`);
  }, [count]);

  return (
    <div className="container">
      <p style={styles}>Amount of count: {count}</p>
      <button className="success" onClick={() => setCount((prev) => prev + 1)}>
        Add count
      </button>
      <button className="danger" onClick={() => setColored((prev) => !prev)}>
        Change
      </button>
      <ItemList getItems={generateItem} />
    </div>
  );
}

export default App;
