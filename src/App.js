import React, { Component } from "react";
import GlobaStyle from "./styles/global";
import Home from "./screens/Home";

export default class App extends Component {
  render() {
    return (
      <>
        <GlobaStyle />
        <Home />
      </>
    );
  }
}
