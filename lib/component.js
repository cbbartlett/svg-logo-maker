class Component {
  constructor(children = []) {
    this.children = children;
  }

  render() {
    throw new Error("Method must be implemented on child class");
  }

  renderInner() {
    return this.children
      .map((c) => (typeof c == "string" ? c : c.render()))
      .join("");
  }
}

export default Component;
