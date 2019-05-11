import React, { Component } from "react";
import ModalDOM from "../ModalDOM";
import { Container, CloseContainer, ButtonsContainer } from "./styles";
import Close from "../../assets/icons/Close";
import Card from "../Card";
import Button from "../Button";
import { deleteTool } from "../../services/api";

export default class ModalRemove extends Component {
  delete = async () => {
    const { toolID, close } = this.props;
    await deleteTool(toolID);
    close();
  };

  render() {
    const { close } = this.props;

    return (
      <ModalDOM>
        <Container>
          <Card elevation={3} style={{ padding: "30px" }}>
            <CloseContainer onClick={close}>
              <Close />
            </CloseContainer>
            <h4>Remove tool</h4>
            <p>
              Are you sure you want to remove <strong>hotel</strong>?
            </p>
            <ButtonsContainer>
              <Button style={{ marginRight: 30 }} onClick={close}>
                Cancel
              </Button>
              <Button className="danger" onClick={this.delete}>
                Yes, remove
              </Button>
            </ButtonsContainer>
          </Card>
        </Container>
      </ModalDOM>
    );
  }
}
