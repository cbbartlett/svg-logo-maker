import Component from "../lib/component.js";

describe("Component", () => {
  describe("render", () => {
    it("should throw an error", () => {
      const component = new Component();
      expect(() => component.render()).toThrow();
    });
  });

  describe("renderInner", () => {
    it("should return an empty string", () => {
      const component = new Component();
      expect(component.renderInner()).toEqual("");
    });
  });
});
