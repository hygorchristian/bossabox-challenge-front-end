import React from "react";
import Input from "./components/Input";

function App() {
  return (
    <div
      className="App"
      style={{
        width: 500,
        margin: "auto",
        paddingTop: 300
      }}
    >
      <Input
        label="Input here"
        type="text"
        placeholder="Required..."
        required
        error="Não pode"
      />
    </div>
  );
}

export default App;
