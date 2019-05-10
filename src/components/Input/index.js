import React, { Component } from "react";
import { Container, TextInput, Label } from "./styles";
import Asterisco from "../Asterisco";

export default class Input extends Component {
  render() {
    const { label, required, ...rest } = this.props;
    return (
      <Container>
        {label && (
          <Label>
            {label} {required && <Asterisco />}
          </Label>
        )}
        <TextInput {...rest} required />
      </Container>
    );
  }
}
