import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from './TodoItem/TodoItem.component';
import { TodoList } from './TodoList/TodoList.component';
import { NewTodo } from './NewTodo/NewTodo.component';
import { TopHeader } from './TopHeader/TopHeader.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TodoList, TodoItem, NewTodo, TopHeader],
    exports: [TodoList, TodoItem, NewTodo, TopHeader]
})
export class WidgetsModule {}
