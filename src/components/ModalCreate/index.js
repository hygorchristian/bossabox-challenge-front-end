import React, { Component } from "react";
import ModalDOM from "../ModalDOM";
import { Container, CloseContainer, ButtonsContainer, Form } from "./styles";
import Close from "../../assets/icons/Close";
import Card from "../Card";
import Button from "../Button";
import Input from "../Input";
import { createTool } from "../../services/api";

export default class ModalCreate extends Component {
  state = {
    errorName: false,
    errorLink: false,
    errorDescription: false,
    errorTags: false
  };

  submit = async () => {
    this.setState({
      errorName: false,
      errorLink: false,
      errorDescription: false,
      errorTags: false
    });

    const { close } = this.props;

    const name = document.getElementById("tool-name").value;
    const link = document.getElementById("tool-link").value;
    const desc = document.getElementById("tool-description").value;
    const tags = document.getElementById("tool-tags").value;

    if (name.length === 0) {
      this.setState({ errorName: "The field name is required" });
      return;
    }

    if (link.length === 0) {
      this.setState({ errorLink: "The field link is required" });
      return;
    }

    if (desc.length === 0) {
      this.setState({ errorDescription: "The field description is required" });
      return;
    }

    if (tags.length === 0) {
      this.setState({ errorTags: "The field tags is required" });
      return;
    }

    const data = {
      title: name,
      link,
      description: desc,
      tags: tags.split(" ")
    };

    await createTool(data);
    close();
  };

  render() {
    const { close } = this.props;
    const { errorName, errorLink, errorDescription, errorTags } = this.state;

    return (
      <ModalDOM>
        <Container>
          <Card elevation={3} style={{ padding: "30px" }}>
            <CloseContainer onClick={close}>
              <Close />
            </CloseContainer>
            <h4>Add new tool</h4>
            <Form>
              <Input
                id="tool-name"
                className="input-create"
                label="Tool Name"
                placeholder="e.g. Google"
                required
                error={errorName}
              />
              <Input
                id="tool-link"
                className="input-create"
                label="Tool Link"
                placeholder="e.g. http://www.google.com"
                required
                error={errorLink}
              />
              <Input
                id="tool-description"
                className="input-create"
                label="Tool description"
                type="textarea"
                required
                error={errorDescription}
              />
              <Input
                id="tool-tags"
                className="input-create"
                label="Tags"
                placeholder="e.g. web google developer"
                required
                error={errorTags}
              />
            </Form>
            <ButtonsContainer onClick={this.submit}>
              <Button>Add tool</Button>
            </ButtonsContainer>
          </Card>
        </Container>
      </ModalDOM>
    );
  }
}
