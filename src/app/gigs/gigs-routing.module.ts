import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DisplayComponent } from './display/display.component';
import { AddaroleComponent } from './addarole/addarole.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id/:typeId',
    component: EditComponent
  },
  {
    path: 'display/:id/:typeId',
    component: DisplayComponent
  },
  {
    path: 'add-role',
    component: AddaroleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GigsPageRoutingModule {}
