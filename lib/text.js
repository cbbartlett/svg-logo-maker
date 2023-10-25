import Component from "./component.js";

class Text extends Component {
  constructor(children = [], color = "white") {
    super(children);
    this.color = color;
  }

  render() {
    return [
      `<text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="central" fill="${this.color}">`,
      this.renderInner(),
      `</text>`,
    ].join("");
  }
}

export default Text;
