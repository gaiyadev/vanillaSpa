import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>Welcome back, Dom</h1>
            <p>
            THIS IS THE LADNING PAGE
            </p>
            <p>
            helo
            </p>
        `;
  }
}
