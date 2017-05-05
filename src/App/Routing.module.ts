import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TodosComponent} from './Scenes/Todos/Todos.component';
import {ArchivesComponent} from './Scenes/Archives/Archives.component';

const routes: Routes = [{
    path: 'todos',
    component: TodosComponent
}, {
    path: 'archives',
    component: ArchivesComponent
}, {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
}, {
    path: '**',
    redirectTo: 'todos'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
