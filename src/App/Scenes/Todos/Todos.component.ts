import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../Services/Todo.service';
import {Todo} from '../../Models/Todo';
import './Todo.component.styl';

@Component({
    selector: 'todos',
    templateUrl: './Todos.component.html',
    providers: [TodoService]
})
export class TodosComponent implements OnInit {
    public todos: Todo[];

    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.todos = this.todoService.todos;
    }

    newTodoSubmitHandler(task: string) {
        this.todos = !!task ? [...this.todoService.add(new Todo({task}))] : this.todos;
    }
}
