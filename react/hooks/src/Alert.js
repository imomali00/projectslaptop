import React, { useContext } from "react";
import AlertContex from "./App";

function Alert() {
  const alert = useContext(AlertContex);
  if (!alert) return null;

  return (
    <div
      style={{
        background: "crimson",
        padding: "20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h6>This message is very important</h6>
    </div>
  );
}

export default Alert;
