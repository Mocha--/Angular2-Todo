import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../Services/Todo.service';
import {Todo} from '../../Models/Todo';

@Component({
    selector: 'archives',
    templateUrl: './Archives.component.html',
    providers: [TodoService]
})
export class Archives implements OnInit {
    archives: Todo[];

    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.archives = this.todoService.todos;
    }
}
