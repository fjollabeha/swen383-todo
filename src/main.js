
import { TodoService } from "./TodoService.js";
import { TodoRenderer } from "./TodoRenderer.js";
import { StorageFactory } from "./StorageFactory.js";
import { TodoController } from "./TodoController.js";
import { IdeaBoxAdapter } from "./IdeaBoxAdapter.js";
import { LoggingTodoServiceDecorator } from "./LoggingTodoServiceDecorator.js";

window.addEventListener("DOMContentLoaded", () => {
  const storage = StorageFactory.createStorage("local");
  const baseService = new TodoService(storage);
  const service = new TodoService(storage);
  const ideaBoxAdapter = new IdeaBoxAdapter();
  const renderer = new TodoRenderer("task-container");

  renderer.render(service.tasks, service);

  const input = document.getElementById("task-input");
  const addBtn = document.getElementById("add-task-btn");
  const addUrgentBtn = document.getElementById("add-urgent-btn");
  const suggestionBtn = document.getElementById("get-suggestion-btn");

  addBtn.addEventListener("click", () => {
    const task = service.addTask(input.value, "simple");

    if (task) {
      input.value = "";
      renderer.render(service.tasks, service);
    }
  });

  addUrgentBtn.addEventListener("click", () => {
    const task = service.addTask(input.value, "urgent");

    if (task) {
      input.value = "";
      renderer.render(service.tasks, service);
    }
  });

  suggestionBtn.addEventListener("click", () => {
    input.value = ideaBoxAdapter.getSuggestion();
    input.focus();
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });
});
