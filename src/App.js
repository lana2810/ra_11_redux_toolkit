import React from "react";
import "./App.css";
import FactsList from "./components/FactsList";
import Field from "./components/Field";

function App() {
  return (
    <div className="container">
      <Field />
      <FactsList />
    </div>
  );
}

export default App;
