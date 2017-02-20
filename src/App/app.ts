import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import todoAppTemplate from './app.html';

@Component({
    selector: 'todo-app',
    templateUrl: './app.html'
})
class TodoApp {
    name: string = 'Todo World'
}

@NgModule({
    imports: [BrowserModule],
    declarations: [TodoApp],
    bootstrap: [TodoApp]
})
export class TodoAppModule {}
