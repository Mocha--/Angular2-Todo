import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from './TodoItem/TodoItem.component';
import { TodoList } from './TodoList/TodoList.component';
import { NewTodo } from './NewTodo/NewTodo.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TodoList, TodoItem, NewTodo],
    exports: [TodoList, TodoItem, NewTodo]
})
export class WidgetsModule {}
