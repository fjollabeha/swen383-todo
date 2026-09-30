function createNormalTask(description) {
  return {
    id: Date.now(),
    desc: description,
    completed: false,
    priority: "normal",
    createdAt: new Date().toLocaleTimeString()
  };
}

function createUrgentTask(description) {
  return {
    id: Date.now(),
    desc: `[URGENT] ${description}`,
    completed: false,
    priority: "high",
    createdAt: new Date().toLocaleTimeString()
  };
}

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

    const task =
      type === "urgent"
        ? createUrgentTask(trimmed)
        : createNormalTask(trimmed);

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