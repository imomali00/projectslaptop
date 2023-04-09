import React, { useState } from "react";
import { usePrevious } from "./hook/usePrevious";

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="container">
      <h1>Mahsus hooklar</h1>
      <p>Current : {count}</p>
      <p>Previous : {prevCount}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>button</button>
    </div>
  );
}

export default App;
