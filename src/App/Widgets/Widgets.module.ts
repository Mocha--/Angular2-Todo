import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CommonModule as MyCommonModule} from '../Common/Common.module';
import {NewTodo} from './NewTodo/NewTodo.component';
import {TodoList} from './TodoList/TodoList.component';
import {TopHeader} from './TopHeader/TopHeader.component';
import {Sidebar} from './Sidebar/Sidebar.component';

@NgModule({
    imports: [CommonModule, FormsModule, MyCommonModule],
    declarations: [NewTodo, TopHeader, TodoList, Sidebar],
    exports: [NewTodo, TopHeader, TodoList, Sidebar]
})
export class WidgetsModule {}
