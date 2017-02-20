import { Component } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
    selector: 'todo-list',
    templateUrl: './TodoList.html'
})
export class TodoList {
    newTodo: string = '';
    todos: Todo[] = [];

    formSubmitHandler() {
        this.todos.push(new Todo(this.newTodo, false));
    }
}
