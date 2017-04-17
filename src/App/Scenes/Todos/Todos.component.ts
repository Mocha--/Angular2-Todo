import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../Services/Todo.service';
import {Todo} from '../../Models/Todo';
import './Todo.component.styl';

@Component({
    selector: 'todos',
    templateUrl: './Todos.component.html',
    providers: [TodoService]
})
export class Todos {
    public todos: Todo[];

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todos = [...this.todoService.todos];
    }

    newTodoSubmitHandler(task: string) {
        console.info(task)
        if (!!task) {
            this.todos = [...this.todoService.add(new Todo({task}))];
            console.info(this.todos)
        }
    }
}
