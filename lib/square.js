import Component from "./component.js";

class Square extends Component {
  constructor(color = "white") {
    super([]);
    this.color = color;
  }

  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/>`;
  }
}

export default Square;
