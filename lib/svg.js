import Component from "./component.js";

class SVG extends Component {
  constructor(children = []) {
    super(children);
  }

  render() {
    return [
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`,
      this.renderInner(),
      `</svg>`,
    ].join("");
  }
}

export default SVG;
