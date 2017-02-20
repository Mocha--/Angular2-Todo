import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoList } from './TodoList/TodoList';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TodoList, TodoItem],
    exports: [TodoList, TodoItem]
})
export class WidgetsModule {}
