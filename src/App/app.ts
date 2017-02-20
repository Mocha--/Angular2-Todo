import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetsModule } from './Widgets/Widgets.module';
import './app.styl';

@Component({
    selector: 'todo-app',
    templateUrl: './app.html'
})
class TodoApp { }

@NgModule({
    imports: [BrowserModule, WidgetsModule],
    declarations: [TodoApp],
    bootstrap: [TodoApp]
})
export class TodoAppModule {}
