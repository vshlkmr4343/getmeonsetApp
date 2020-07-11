import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPageRoutingModule } from './user-routing.module';

import { FavouriteComponent } from './favourite/favourite.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EditComponent } from './edit/edit.component';
import { DisplayComponent } from './display/display.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyGigComponent } from './my-gig/my-gig.component'
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    UserPageRoutingModule
  ],
  declarations: [
    ForgotPasswordComponent,
    ChangePasswordComponent,
    FavouriteComponent,
    EditComponent,
    DisplayComponent,
    MyGigComponent,
    ListComponent
  ],

})
export class UserPageModule {}
