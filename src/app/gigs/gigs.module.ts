import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GigsPageRoutingModule } from './gigs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DisplayComponent } from './display/display.component';
import { SearchPageModule } from '../search/search.module';
import { AddaroleComponent } from './addarole/addarole.component';

@NgModule({
  imports: [
    SearchPageModule,
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GigsPageRoutingModule
  ],
  declarations: [ListComponent,CreateComponent,EditComponent,DisplayComponent,AddaroleComponent]
})
export class GigsPageModule {}
