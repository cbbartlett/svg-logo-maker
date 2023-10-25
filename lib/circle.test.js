import Circle from "../lib/circle.js";

describe("Circle", () => {
  describe("render", () => {
    it("should return a circle element", () => {
      const svg = new Circle();
      expect(svg.render()).toEqual(
        `<circle cx="150" cy="100" r="75" fill="white" />`
      );
    });
    it("should return a blue circle element", () => {
      const svg = new Circle("blue");
      expect(svg.render()).toEqual(
        `<circle cx="150" cy="100" r="75" fill="blue" />`
      );
    });
  });
});
