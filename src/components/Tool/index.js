import React, { Component } from "react";
import Card from "../Card";
import ModalRemove from "../ModalRemove";
import { Container, SmallButton } from "./styles";

export default class Tool extends Component {
  state = {
    modalRemoveOpen: false
  };

  render() {
    const { modalRemoveOpen } = this.state;
    const { updateTools, search, data: tool } = this.props;

    return (
      <Card elevation={1} style={{ padding: 20 }}>
        <Container>
          <SmallButton
            onClick={() => {
              this.setState({ modalRemoveOpen: true });
            }}
          >
            <span>remove</span>
          </SmallButton>
          <a href={tool.link} target="_blank" rel="noopener noreferrer">
            {tool.title}
          </a>
          <p>{tool.description}</p>
          <div className="tags">
            {tool.tags.map(tag => {
              const match = new RegExp(search, "i");
              if (match.exec(tag) && search.length > 0) {
                return (
                  <span className="highlight" key={tag}>
                    #{tag}
                  </span>
                );
              }

              return <span key={tag}>#{tag}</span>;
            })}
          </div>
        </Container>

        {modalRemoveOpen && (
          <ModalRemove
            toolID={tool.id}
            toolName={tool.title}
            close={e => {
              this.setState({ modalRemoveOpen: false });
              updateTools();
            }}
          />
        )}
      </Card>
    );
  }
}
