import React, { Component } from "react";
import ModalDOM from "../ModalDOM";
import { Container, CloseContainer, ButtonsContainer } from "./styles";
import Close from "../../assets/icons/Close";
import Card from "../Card";
import Button from "../Button";

export default class ModalRemove extends Component {
  render() {
    const { close } = this.props;

    return (
      <ModalDOM>
        <Container>
          <Card elevation={3} style={{ padding: "30px" }}>
            <CloseContainer>
              <Close onClick={e => close(e)} />
            </CloseContainer>
            <h4>Remove tool</h4>
            <p>
              Are you sure you want to remove <strong>hotel</strong>?
            </p>
            <ButtonsContainer>
              <Button style={{ marginRight: 30 }}>Cancel</Button>
              <Button className="danger">Yes, remove</Button>
            </ButtonsContainer>
          </Card>
        </Container>
      </ModalDOM>
    );
  }
}
