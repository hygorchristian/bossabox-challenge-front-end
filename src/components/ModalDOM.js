import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ModalDOM extends Component {
  setupView = () => {
    this.modalTarget = document.createElement("div");
    this.modalTarget.className = "modal";
    document.body.appendChild(this.modalTarget);
    this._render();
  };

  componentDidMount() {
    this.setupView();
  }

  componentWillUpdate() {
    setTimeout(() => {
      this._render();
    });
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    ReactDOM.render(<div>{this.props.children}</div>, this.modalTarget);
  }

  render() {
    return <noscript />;
  }
}
