import React from "react";
import "./styles.css";
import Welcome from "./Welcome";

export default function App() {
  const name = "sharique";
  return (
    <div className="App">
      <Welcome name={name} />
    </div>
  );
}
