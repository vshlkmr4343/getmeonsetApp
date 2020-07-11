import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorPageRoutingModule } from './vendor-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';
import { SearchPageModule } from 'src/app/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VendorPageRoutingModule
  ],
  declarations: [ListComponent,DisplayComponent]
})
export class VendorPageModule {}
