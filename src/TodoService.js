import { TaskBuilder } from "./TaskBuilder.js";

export class TodoService {
  constructor(storage) {
    this.storage = storage;
    this.tasks = this.storage.load();
  }

  addTask(description, type) {
    const trimmed = description.trim();

    if (trimmed.length < 3) {
      alert("Task needs at least a few characters.");
      return false;
    }

    const builder = new TaskBuilder(trimmed);

    if (type === "urgent") {
      builder
        .setPriority("high")
        .setDescription(`[URGENT] ${trimmed}`);
    }

    const task = builder.build();

    this.tasks.push(task);
    this.storage.save(this.tasks);

    return task;
  }

  toggleComplete(id) {
    const task = this.tasks.find(t => t.id === id);

    if (!task) return;

    task.completed = !task.completed;
    this.storage.save(this.tasks);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.storage.save(this.tasks);
  }
}