import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrewPageRoutingModule } from './crew-routing.module';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPageModule } from 'src/app/search/search.module';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    SearchPageModule,
    IonicModule,
    CrewPageRoutingModule
  ],
  declarations: [ListComponent,DisplayComponent]
})
export class CrewPageModule {}
