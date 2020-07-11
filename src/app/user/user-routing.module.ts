import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MyGigComponent } from './my-gig/my-gig.component';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'crew',
  },
  // {
  //   path: 'crew',
  //   loadChildren: () => import('./crew/crew.module').then( m => m.CrewPageModule)
  // },
  // {
  //   path: 'talent',
  //   loadChildren: () => import('./talent/talent.module').then( m => m.TalentPageModule)
  // },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'list/:type',
    component: ListComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'favorite',
    component: FavouriteComponent
  },
  {
    path: 'mygig',
    component: MyGigComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: ':type/display/:id',
    component: DisplayComponent
  },
  {
    path: 'display/:id/:type',
    component: DisplayComponent
  }
  // {
  //   path: 'producer',
  //   loadChildren: () => import('./producer/producer.module').then( m => m.ProducerPageModule)
  // },
  // {
  //   path: 'vendor',
  //   loadChildren: () => import('./vendor/vendor.module').then( m => m.VendorPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}