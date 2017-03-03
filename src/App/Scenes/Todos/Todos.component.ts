import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../Services/Todo.service';
import { Todo } from '../../Models/Todo';

@Component({
    selector: 'todos',
    templateUrl: './Todos.component.html',
    providers: [TodoService]
})
export class Todos {
    public todos: Todo[];
    name = 'hehehe';

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todos = this.todoService.todos;
        console.info(this.name)

        function tmp() {
            this.name = 'lalala';
        }
    }

    newTodoSubmitHandler(task: string) {
        this.todoService.add(new Todo({task}));
    }
}
