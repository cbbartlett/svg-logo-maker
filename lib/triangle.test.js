import Triangle from "../lib/triangle.js";

describe("Triangle", () => {
  describe("render", () => {
    it("should return a triangle element", () => {
      const svg = new Triangle();
      expect(svg.render()).toEqual(
        `<polygon points="0,35 150,200 300,35" fill="white" />`
      );
    });
    it("should return a blue triangle element", () => {
      const svg = new Triangle("blue");
      expect(svg.render()).toEqual(
        `<polygon points="0,35 150,200 300,35" fill="blue" />`
      );
    });
  });
});
