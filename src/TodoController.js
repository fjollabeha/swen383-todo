export class TodoController {

    constructor(todoService, todoRenderer) {
        this.todoService = todoService;
        this.todoRenderer = todoRenderer;

        this.todoRenderer.bindActions({
            onToggle: (id) => this.toggleTask(id),
            onDelete: (id) => this.deleteTask(id)
        });
    }

    start() {
        this.todoRenderer.render(
            this.todoService.tasks,
            this.todoService
        );
    }

    addTask(description, type) {
        const newId = this.todoService.addTask(description, type);

        if (newId) {
            this.todoRenderer.render(
                this.todoService.tasks,
                this.todoService
            );
        }

        return newId;
    }

    toggleTask(id) {
        this.todoService.toggleComplete(id);

        this.todoRenderer.render(
            this.todoService.tasks,
            this.todoService
        );
    }

    deleteTask(id) {
        this.todoService.deleteTask(id);

        this.todoRenderer.render(
            this.todoService.tasks,
            this.todoService
        );
    }
}