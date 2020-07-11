import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProducerPageRoutingModule } from './producer-routing.module';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProducerPageRoutingModule
  ],
  declarations: [ListComponent,DisplayComponent]
})
export class ProducerPageModule {}
