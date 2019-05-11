import React, { Component } from "react";
import { Container, Form, FormInputs, Cards } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Tool from "../../components/Tool";
import ModalCreate from "../../components/ModalCreate";
import { listTools } from "../../services/api";

export default class Home extends Component {
  state = {
    modalCreateOpen: false,
    modalRemoveOpen: false,
    tools: [],
    search: ""
  };

  updateTools = async () => {
    const response = await listTools();
    const tools = response.data;
    this.setState({ tools });
  };

  componentWillMount() {
    this.updateTools();
  }

  render() {
    const { modalCreateOpen, tools, search } = this.state;

    return (
      <Container>
        <h1 style={{ marginTop: 100 }}>VUTTR</h1>
        <h3 style={{ marginTop: 20 }}>Very Useful Tools to Remeber</h3>
        <Form>
          <FormInputs>
            <Input
              placeholder="search"
              value={search}
              onChange={e => this.setState({ search: e.target.value })}
            />
          </FormInputs>
          <Button onClick={() => this.setState({ modalCreateOpen: true })}>
            Add
          </Button>
        </Form>
        <Cards>
          {tools.map(tool => (
            <Tool key={tool.id} data={tool} updateTools={this.updateTools} />
          ))}
        </Cards>
        {modalCreateOpen && (
          <ModalCreate
            close={e => {
              this.setState({ modalCreateOpen: false });
              this.updateTools();
            }}
          />
        )}
      </Container>
    );
  }
}
