import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from 'ui-router-ng2';
import { WidgetsModule } from './Widgets/Widgets.module';
import { TodoApp } from './Scenes/Scene.component';
import { Todos as TodosComponent } from './Scenes/Todos/Todos.component';
import { Archives as ArchivesComponent } from './Scenes/Archives/Archives.component';

@NgModule({
    imports: [
        BrowserModule,
        WidgetsModule,
        UIRouterModule.forRoot({
            states: [{
                name: 'todos',
                url: '/todos',
                component: TodosComponent
            }, {
                name: 'archives',
                url: '/archives',
                component: ArchivesComponent
            }],
            useHash: true,
            otherwise: '/todos'
        })
    ],
    declarations: [TodoApp, TodosComponent, ArchivesComponent],
    bootstrap: [TodoApp]
})
export class TodoAppModule {}
