import { validateColor } from "./colors.js";
import SVG from "./svg.js";
import Circle from "./circle.js";
import Triangle from "./triangle.js";
import Square from "./square.js";
import Text from "./text.js";
import inquirer from "inquirer";

import fs from "fs/promises";

class CLI {
  constructor() {
    this.svg = new SVG();
    this.shapes = { Circle, Triangle, Square };
    /**
     * @type {import("inquirer").QuestionCollection<import("inquirer").Answers>}
     */
    this.questions = [
      {
        name: "text",
        message: "Enter logo text:",
        validate: (input) => {
          if (input.length == 0) return "Must be at least one character long";
          if (input.length > 3) return "Must be at most 3 characters long";
          return true;
        },
      },
      {
        name: "textColor",
        message: "Enter text color:",
        validate: this.validateColorInput,
      },
      {
        name: "shape",
        message: "Choose a shape:",
        choices: ["Circle", "Triangle", "Square"],
        type: "list",
      },
      {
        name: "shapeColor",
        message: "Enter shape color:",
        validate: this.validateColorInput,
      },
    ];
  }

  validateColorInput(input) {
    if (!validateColor(input))
      return "Color must be a valid color keyword or hex color";
    return true;
  }

  async start() {
    const answers = await inquirer.prompt(this.questions);
    const shape = new this.shapes[answers.shape](answers.shapeColor);
    const text = new Text([answers.text], answers.textColor);
    const svg = new SVG([shape, text]);
    await fs.writeFile("logo.svg", svg.render());
    console.log("Generated logo.svg");
  }
}

export default CLI;
