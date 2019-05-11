import React, { Component } from "react";
import {
  Container,
  TextInput,
  TextareaInput,
  Label,
  Asterisco,
  ErrorMessage
} from "./styles";

export default class Input extends Component {
  render() {
    const { className, style, label, required, error, ...rest } = this.props;
    return (
      <Container style={style} className={className}>
        {label && (
          <Label>
            {label} {required && <Asterisco error={error}>*</Asterisco>}
          </Label>
        )}
        {this.props.type === "textarea" ? (
          <TextareaInput {...rest} error={error} />
        ) : (
          <TextInput {...rest} error={error} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
}
