import React, { Component } from "react";
import { Container, Form, FormInputs, Cards } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Tool from "../../components/Tool";
import ModalCreate from "../../components/ModalCreate";
import { listTools } from "../../services/api";
import emptyList from "./assets/empty.jpg";

export default class Home extends Component {
  state = {
    modalCreateOpen: false,
    modalRemoveOpen: false,
    tools: [],
    search: "",
    onlyTags: true
  };

  updateTools = async () => {
    const { onlyTags, search } = this.state;
    let tools = [];
    if (onlyTags && search.length > 0) {
      const response = await listTools({
        tags_like: search
      });
      tools = response.data;
    } else if (search.length > 0) {
      const response = await listTools({
        q: search
      });
      tools = response.data;
    } else {
      const response = await listTools();
      tools = response.data;
    }
    setTimeout(() => {
      this.setState({ tools });
    });
  };

  changeSearch = e => {
    const search = e.target.value;
    this.setState({ search }, () => {
      this.updateTools();
    });
  };

  changeTagsOnly = e => {
    this.setState({ onlyTags: e.target.checked }, () => {
      this.updateTools();
    });
  };

  componentWillMount() {
    this.updateTools();
  }

  render() {
    const { modalCreateOpen, tools, search, onlyTags } = this.state;

    return (
      <Container>
        <h1 style={{ marginTop: 100 }}>VUTTR</h1>
        <h3 style={{ marginTop: 20 }}>Very Useful Tools to Remeber</h3>
        <Form>
          <FormInputs>
            <Input
              placeholder="search"
              value={search}
              onChange={this.changeSearch}
            />
            <label for="only-tags">
              <input
                id="only-tags"
                type="checkbox"
                checked={onlyTags}
                onChange={this.changeTagsOnly}
              />
              <span>search in tags only</span>
            </label>
          </FormInputs>
          <Button onClick={() => this.setState({ modalCreateOpen: true })}>
            Add
          </Button>
        </Form>
        <Cards>
          {tools.map(tool => (
            <Tool
              key={tool.id}
              data={tool}
              updateTools={this.updateTools}
              search={search}
            />
          ))}
          {tools.length === 0 && (
            <>
              <img style={{ margin: "auto" }} src={emptyList} width={300} />
              <p style={{ width: "100%", textAlign: "center" }}>
                Your tools list is empty.
              </p>
            </>
          )}
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
