import { NgModule } from '@angular/core';
import {UIRouterModule} from 'ui-router-ng2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoList } from './TodoList/TodoList.component';
import { NewTodo } from './NewTodo/NewTodo.component';
import { TopHeader } from './TopHeader/TopHeader.component';

@NgModule({
    imports: [CommonModule, FormsModule, UIRouterModule],
    declarations: [TodoList, NewTodo, TopHeader],
    exports: [TodoList, NewTodo, TopHeader]
})
export class WidgetsModule {}
