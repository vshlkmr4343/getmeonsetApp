import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchGigComponent } from './search-gig/search-gig.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchCrewComponent } from './search-crew/search-crew.component'
import { SearchProducerComponent } from './search-producer/search-producer.component'
import { SearchMygigComponent } from './search-mygig/search-mygig.component';
import { SearchFavouriteComponent } from './search-favourite/search-favourite.component'
import { SearchVendorComponent } from './search-vendor/search-vendor.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SearchPageRoutingModule,
  ],
  entryComponents: [
    SearchGigComponent,
    SearchUserComponent,
    SearchCrewComponent,
    SearchProducerComponent,
    SearchMygigComponent,
    SearchFavouriteComponent,
    SearchVendorComponent
  ],
  declarations: [
    SearchGigComponent,
    SearchUserComponent,
    SearchCrewComponent,
    SearchProducerComponent,
    SearchMygigComponent,
    SearchFavouriteComponent,
    SearchVendorComponent
  ],
  exports: [
    SearchGigComponent,
    SearchUserComponent,
    SearchCrewComponent,
    SearchProducerComponent,
    SearchMygigComponent,
    SearchFavouriteComponent,
    SearchVendorComponent
  ]
})
export class SearchPageModule { }
