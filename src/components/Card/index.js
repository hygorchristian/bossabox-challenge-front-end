import React, { Component } from "react";
import { Container } from "./styles";

export default class Card extends Component {
  render() {
    return <Container {...this.props}>{this.props.children}</Container>;
  }
}
