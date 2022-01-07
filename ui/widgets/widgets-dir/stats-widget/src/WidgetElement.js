import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class WidgetElement extends HTMLElement {
  connectedCallback() {
    this.mountPoint = document.createElement("div");
    this.appendChild(this.mountPoint);
    ReactDOM.render(<App />, this.mountPoint);
  }
}

customElements.define("stats-widget", WidgetElement);

export default WidgetElement;
