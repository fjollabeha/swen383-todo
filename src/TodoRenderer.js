export class TodoRenderer {

  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(tasks, service) {
    if (!this.container) return;

    let html = "";

    for (const task of tasks) {
      html += this.buildTaskRow(task);
    }

    this.container.innerHTML = html;

    const buttons = this.container.querySelectorAll("[data-toggle]");

    for (const button of buttons) {
      button.addEventListener("click", () => {
        service.toggleComplete(Number(button.dataset.toggle));
        this.render(service.tasks, service);
      });
    }

    const deleteButtons = this.container.querySelectorAll("[data-delete]");

    for (const button of deleteButtons) {
      button.addEventListener("click", () => {
        service.deleteTask(Number(button.dataset.delete));
        this.render(service.tasks, service);
      });
    }
  }

  buildTaskRow(task) {
    return `
      <li data-row="${task.id}">
        <span>${task.desc}</span>
        <span>${task.createdAt}</span>
        <button data-toggle="${task.id}">
          ${task.completed ? "Undo" : "Done"}
        </button>
        <button data-delete="${task.id}">Delete</button>
      </li>
    `;
  }

}