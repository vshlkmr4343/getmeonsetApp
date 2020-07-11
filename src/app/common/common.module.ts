import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonPageRoutingModule } from './common-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { SharedModule } from '../shared/shared.module';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { RulesComponent } from './rules/rules.component';
import { AggrementComponent } from './aggrement/aggrement.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    CommonPageRoutingModule
  ],
  declarations: [
    AggrementComponent,
    RulesComponent,
    HomeComponent,
    AboutUsComponent,
    FaqComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionComponent,
    HowItWorksComponent,
    FaqComponent]
})
export class CommonPageModule {}
