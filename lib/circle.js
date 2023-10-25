import Component from "./component.js";

class Circle extends Component {
  constructor(color = "white") {
    super([]);
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
  }
}

export default Circle;
