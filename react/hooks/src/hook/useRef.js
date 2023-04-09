import React, { useState, useEffect, useRef } from "react";

let renderCount = 1;

function App() {
  // const [renderC, setRenderC] = useState(1);
  const [value, setValue] = useState("default");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const focus = () => inputRef.current.focus();
  const lastRef = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    lastRef.current = value;
  }, [value]);

  return (
    <div className="container">
      <p>Amount of rendering: {renderCount.current}</p>
      <p>Last value: {lastRef.current}</p>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="success" onClick={focus}>
        Click me
      </button>
    </div>
  );
}

export default App;
