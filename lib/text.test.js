import Text from "../lib/text.js";

describe("Text", () => {
  describe("render", () => {
    it("should return an empty text element", () => {
      const svg = new Text();
      expect(svg.render()).toEqual(
        `<text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="central" fill="white"></text>`
      );
    });
    it("should return a text element with text", () => {
      const svg = new Text(["something"]);
      expect(svg.render()).toEqual(
        `<text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="central" fill="white">something</text>`
      );
    });
    it("should return a text element with black text", () => {
      const svg = new Text(["something"], "black");
      expect(svg.render()).toEqual(
        `<text x="50%" y="50%" font-size="60" text-anchor="middle" alignment-baseline="central" fill="black">something</text>`
      );
    });
  });
});
