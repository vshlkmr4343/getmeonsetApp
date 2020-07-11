import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import { SharedModule } from '../shared/shared.module';
import { SignInService } from './sign-in.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    SignInPageRoutingModule
  ],
  providers:[SignInService],
  declarations: [SignInPage]
})
export class SignInPageModule {}
