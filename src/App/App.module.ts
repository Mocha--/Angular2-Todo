import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from './Routing.module';
import {WidgetsModule} from './Widgets/Widgets.module';
import {TodoAppComponent} from './Scenes/Scene.component';
import {TodosComponent} from './Scenes/Todos/Todos.component';
import {ArchivesComponent} from './Scenes/Archives/Archives.component';

@NgModule({
    imports: [BrowserModule, WidgetsModule, RoutingModule],
    declarations: [TodoAppComponent, TodosComponent, ArchivesComponent],
    bootstrap: [TodoAppComponent]
})
export class AppModule {}
