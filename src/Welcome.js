import React from "react";
import "./styles.css";

export default function Welcome(prop) {
  return (
    <>
      <h1>Hey {prop.name}!</h1>
      <h2>Welcome to Newton School.</h2>
    </>
  );
}
