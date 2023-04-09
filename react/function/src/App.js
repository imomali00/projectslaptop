import React, { useState } from "react";
import Timer from "./components/Timer";
import "./App.css";

const App = () => {
  const [isTimer, setTimer] = useState(false);
  return (
    <>
      <h1>React App</h1>
      <button
        onClick={() => {
          setTimer(!isTimer);
        }}
      >
        <span>Toggle</span>
      </button>
      {isTimer && <Timer />}
    </>
  );
};
export default App;
