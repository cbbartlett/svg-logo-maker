import Square from "../lib/square.js";

describe("Triangle", () => {
  describe("render", () => {
    it("should return a square element", () => {
      const svg = new Square();
      expect(svg.render()).toEqual(
        `<rect x="75" y="25" width="150" height="150" fill="white"/>`
      );
    });
    it("should return a blue square element", () => {
      const svg = new Square("blue");
      expect(svg.render()).toEqual(
        `<rect x="75" y="25" width="150" height="150" fill="blue"/>`
      );
    });
  });
});
