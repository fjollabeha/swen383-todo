
export class IdeaBox {
  constructor() {
    this.ideas = [
      "Review your lecture notes",
      "Finish your homework",
      "Organize your study materials",
      "Practice coding for 20 minutes",
      "Plan your tasks for tomorrow"
    ];
  }

  getRandomIdea() {
    const index = Math.floor(Math.random() * this.ideas.length);
    return this.ideas[index];
  }
}
