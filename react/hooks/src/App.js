import React, { useState } from "react";
import Main from "./Main";
import Alert from "./Alert";

export const AlertContex = React.createContex();

function App() {
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => setAlert((prev) => !prev);
  return (
    <AlertContex.Provider value={alert}>
      <div className="container">
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContex.Provider>
  );
}

export default App;
