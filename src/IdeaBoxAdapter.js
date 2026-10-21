
import { IdeaBox } from "./IdeaBox.js";

export class IdeaBoxAdapter {
  constructor() {
    this.ideaBox = new IdeaBox();
  }

  getSuggestion() {
    return this.ideaBox.getRandomIdea();
  }
}
