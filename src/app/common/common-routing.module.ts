import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FaqComponent } from './faq/faq.component';
import { RulesComponent } from './rules/rules.component';
import { AggrementComponent } from './aggrement/aggrement.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'about-us',
    component : AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-and-condition',
    component: TermsAndConditionComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path : 'tos',
    component: AggrementComponent
  },
  {
    path : 'my-profile',
    component: MyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonPageRoutingModule {}
