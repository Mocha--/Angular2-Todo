import { Component, Output, EventEmitter } from '@angular/core';
import './NewTodo.component.styl';

@Component({
    selector: 'new-todo',
    templateUrl: './NewTodo.component.html'
})
export class NewTodo {
    @Output() onSubmit = new EventEmitter<string>();
    task: string = '';

    constructor() { }

    formSubmitHandler(evt: Event) {
        evt.preventDefault();
        this.onSubmit.emit(this.task);
        this.task = '';
    }
}
