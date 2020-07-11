import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TalentPageRoutingModule } from './talent-routing.module';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPageModule } from 'src/app/search/search.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TalentPageRoutingModule
  ],
  declarations: [ListComponent,DisplayComponent]
})
export class TalentPageModule {}
