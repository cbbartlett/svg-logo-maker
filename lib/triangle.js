import Component from "./component.js";

class Triangle extends Component {
  constructor(color = "white") {
    super([]);
    this.color = color;
  }

  render() {
    return `<polygon points="0,35 150,200 300,35" fill="${this.color}" />`;
  }
}

export default Triangle;
