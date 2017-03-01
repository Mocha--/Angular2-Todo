import { Injectable } from '@angular/core';
import { Todo } from '../Models/Todo';

@Injectable()
export class TodoService {
    public todos: Todo[];

    constructor() {
        this.todos = [
            new Todo({task: 'learn cooking'}),
            new Todo({task: 'learn eating'}),
            new Todo({task: 'learn being boring'})
        ];
    }

    add(todo: Todo) {
        this.todos.unshift(todo);
    }
}
