export class TodoController {
  constructor(service, renderer) {
    this.service = service;
    this.renderer = renderer;
  }

  start() {
    this.renderer.render(this.service.tasks, this.service);
  }

  addTask(description, type) {
    const task = this.service.addTask(description, type);

    if (task) {
      this.renderer.render(this.service.tasks, this.service);
    }

    return task;
  }
}