import React, { Component } from "react";
import { Container, TextInput, Label, Asterisco, ErrorMessage } from "./styles";

export default class Input extends Component {
  render() {
    const { label, required, error, ...rest } = this.props;
    return (
      <Container>
        {label && (
          <Label>
            {label} {required && <Asterisco error={error}>*</Asterisco>}
          </Label>
        )}
        <TextInput {...rest} error={error} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
}
