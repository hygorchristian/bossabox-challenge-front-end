import React, { Component } from "react";
import { Container, ButtonText } from "./styles";

export default class Button extends Component {
  render() {
    return (
      <Container {...this.props}>
        <ButtonText>{this.props.children}</ButtonText>
      </Container>
    );
  }
}
