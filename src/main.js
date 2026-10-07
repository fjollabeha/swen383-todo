import { TodoController } from './TodoController.js';
import { TodoService } from "./TodoService.js";
import { TodoRenderer } from "./TodoRenderer.js";
import { LocalStorageHandler } from "./LocalStorageHandler.js";

window.addEventListener("DOMContentLoaded", () => {

  // Create the application objects
  const storage = new LocalStorageHandler();
  const service = new TodoService(storage);
  const renderer = new TodoRenderer("task-container");
  const controller = new TodoController(service, renderer);

  // Start the application
  controller.start();

  // Get the input and buttons
  const input = document.getElementById("task-input");
  const addBtn = document.getElementById("add-task-btn");
  const addUrgentBtn = document.getElementById("add-urgent-btn");

  // Add normal task
  addBtn.addEventListener("click", () => {
    const task = controller.addTask(input.value, "simple");

    if (task) {
      input.value = "";
    }
  });

  // Add urgent task
  addUrgentBtn.addEventListener("click", () => {
    const task = controller.addTask(input.value, "urgent");

    if (task) {
      input.value = "";
    }
  });

  // Press Enter to add a normal task
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });

});