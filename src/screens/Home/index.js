import React, { Component } from "react";
import { Container } from "./styles";
import Input from "../../components/Input";
import ModalRemove from "../../components/ModalRemove";
import ModalCreate from "../../components/ModalCreate";

export default class Home extends Component {
  state = {
    modalCreateOpen: false,
    modalRemoveOpen: false
  };

  render() {
    const { modalRemoveOpen, modalCreateOpen } = this.state;

    return (
      <Container>
        <h1 style={{ marginTop: 100 }}>VUTTR</h1>
        <h3 style={{ marginTop: 20 }}>Very Useful Tools to Remeber</h3>
        <div />
        {modalCreateOpen && (
          <ModalCreate
            close={e => {
              console.log(e);
            }}
          />
        )}
        {modalRemoveOpen && (
          <ModalRemove
            close={e => {
              console.log(e);
            }}
          />
        )}
      </Container>
    );
  }
}
