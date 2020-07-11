import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { Camera} from '@ionic-native/camera/ngx';
import { CalendarModule } from "ion2-calendar";
//import { UtilityService } from '../utilities/utility.service';
import { BackHeaderComponent } from './back-header/back-header.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AppRoutingModule } from '../app-routing.module';
import { SharedRoutingModule } from './shared-routing.module';
//import { SocialSharing } from '@ionic-native/social-sharing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModalComponent } from '../utility/calendar-modal/calendar-modal.component';
import { ReportAdminComponent } from '../utility/report-admin/report-admin.component';
import { PhoneMaskDirective } from '../utility/phone-mask.directive';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgxPaginationModule} from 'ngx-pagination';
import { ProgressBarModule} from "angular-progress-bar"

//Pipe
import { GigtypePipe } from '../pipes/gigtype.pipe';
import { GendertypePipe } from '../pipes/gendertype.pipe';
import { ReharsalpaymentPipe } from '../pipes/reharsalpayment.pipe';
import { IsnudityPipe } from '../pipes/isnudity.pipe';
import { ViewmorePipe } from '../pipes/viewmore.pipe';
import { PhonePipe } from '../pipes/phone.pipe'
import { BarRatingModule } from "ngx-bar-rating";
import { FooterComponent } from '../utility/footer/footer.component';
@NgModule({
  declarations: [
    GigtypePipe,
    GendertypePipe,
    PhonePipe,
    ReharsalpaymentPipe,
    IsnudityPipe,
    ViewmorePipe,
    ReportAdminComponent,
    HeaderComponent,
    BackHeaderComponent,
    CalendarModalComponent,
    PhoneMaskDirective,
    FooterComponent  
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CalendarModule,
    AngularMultiSelectModule,
    SharedRoutingModule,
    GooglePlaceModule,
    BarRatingModule,
    ProgressBarModule
  ],
  entryComponents: [CalendarModalComponent,ReportAdminComponent],
  exports:[
    GigtypePipe,
    GendertypePipe,
    PhonePipe,
    ReharsalpaymentPipe,
    IsnudityPipe,
    ViewmorePipe,
    NgxPaginationModule,
    GooglePlaceModule,
    PhoneMaskDirective,
    ReportAdminComponent,
    CalendarModalComponent,
    FormsModule,
    BarRatingModule,
    ReactiveFormsModule,
    HeaderComponent,
    CalendarModule,
    BackHeaderComponent,
    ProgressBarModule,
    FooterComponent,
    AngularMultiSelectModule],
  providers:[Camera]
})
export class SharedModule { }
