
export class LoggingTodoServiceDecorator {
  constructor(todoService) {
    this.todoService = todoService;
  }

  get tasks() {
    return this.todoService.tasks;
  }

  addTask(description, type) {
    console.log(`[Todo Log] Adding task: "${description}" (type: ${type})`);

    const task = this.todoService.addTask(description, type);

    if (task) {
      console.log(`[Todo Log] Task added successfully:`, task);
    } else {
      console.log("[Todo Log] Task was not added.");
    }

    return task;
  }

  toggleComplete(id) {
    return this.todoService.toggleComplete(id);
  }

  deleteTask(id) {
    return this.todoService.deleteTask(id);
  }
}
