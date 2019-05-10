import React from "react";
import Input from "./components/Input";

function App() {
  return (
    <div
      className="App"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        paddingTop: 300
      }}
    >
      <Input
        label="Input here"
        type="text"
        placeholder="Required..."
        required
      />
    </div>
  );
}

export default App;
