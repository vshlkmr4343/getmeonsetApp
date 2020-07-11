import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'display/:id',
    component : DisplayComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalentPageRoutingModule {}
