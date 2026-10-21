export class TaskBuilder {
  constructor(description) {
    this.task = {
      id: Date.now(),
      desc: description,
      completed: false,
      priority: "normal",
      createdAt: new Date().toLocaleTimeString()
    };
  }

  setPriority(priority) {
    this.task.priority = priority;
    return this;
  }

  setDescription(description) {
    this.task.desc = description;
    return this;
  }

  build() {
    return { ...this.task };
  }
}