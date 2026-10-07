export class TodoRenderer {

  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.actions = {
      onToggle() {},
      onDelete() {}
    };
  }

  bindActions(actions) {
    this.actions = actions;
  }

  render(tasks, service) {
    if (!this.container) return;

    let html = "";

    for (const task of tasks) {
      html += this.buildTaskRow(task);
    }

this.container.innerHTML = `
    <p>${service.getWorkloadSummary()}</p>
    ${html}
`;
    const buttons = this.container.querySelectorAll("[data-toggle]");

    for (const button of buttons) {
      button.addEventListener("click", () => {
        this.actions.onToggle(
          Number(button.dataset.toggle)
        );
      });
    }

    const deleteButtons =
      this.container.querySelectorAll("[data-delete]");

    for (const btn of deleteButtons) {
      btn.addEventListener("click", () => {
        this.actions.onDelete(
          Number(btn.dataset.delete)
        );
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

        <button data-delete="${task.id}">
          Delete
        </button>
      </li>
    `;
  }

}