import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CommonModule as MyCommonModule} from '../Common/Common.module';
import {NewTodo} from './NewTodo/NewTodo.component';
import {TodoList} from './TodoList/TodoList.component';
import {TopHeader} from './TopHeader/TopHeader.component';
import {SidebarComponent} from './Sidebar/Sidebar.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, MyCommonModule],
    declarations: [NewTodo, TopHeader, TodoList, SidebarComponent],
    exports: [NewTodo, TopHeader, TodoList, SidebarComponent]
})
export class WidgetsModule {}
