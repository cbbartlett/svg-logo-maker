import SVG from "../lib/svg.js";

describe("SVG", () => {
  describe("render", () => {
    it("should return an empty svg element", () => {
      const svg = new SVG();
      expect(svg.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
      );
    });
  });
});
