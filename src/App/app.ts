import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetsModule } from './Widgets/Widgets.module';
import { TodoService } from './Services/Todo.service';
import { Todo } from './Models/Todo';
import './app.styl';

@Component({
    selector: 'todo-app',
    templateUrl: './app.html',
    providers: [TodoService]
})
class TodoApp implements OnInit {
    public todos: Todo[];

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todos = this.todoService.todos;
    }

    newTodoSubmitHandler(task: string) {
        this.todoService.add(new Todo({task}));
    }
}

@NgModule({
    imports: [BrowserModule, WidgetsModule],
    declarations: [TodoApp],
    bootstrap: [TodoApp]
})
export class TodoAppModule {}
