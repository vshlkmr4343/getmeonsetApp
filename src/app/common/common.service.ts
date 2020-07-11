import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { CommonModel } from './common-model'
import { UtilityService } from '../utility/utility.service'
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private router: Router, private http: HttpClient, private utility: UtilityService) {

  }

  getHowItWorks() {
    const data = {
      api_key: environment.API_KEY_VALUE,
      pageName: 'how_it_works'
    };
    return this.utility.requestHttp(environment.API_URL + 'common/getCmsPageByName', (data));
  }

  getAboutUs() {
    const data = {
      api_key: environment.API_KEY_VALUE,
      pageName: 'about_us'
    };
    return this.utility.requestHttp(environment.API_URL + 'common/getCmsPageByName', (data));
  }
  getPrivacyPolicy() {
    const data = {
      api_key: environment.API_KEY_VALUE,
      pageName: 'privacy_policy'
    };
    return this.utility.requestHttp(environment.API_URL + 'common/getCmsPageByName', (data));
  }

  getTermsService() {
    const data = {
      api_key: environment.API_KEY_VALUE,
      pageName: 'terms_service'
    };
    return this.utility.requestHttp(environment.API_URL + 'common/getCmsPageByName', (data));
  }

  // getFaq() { 
  //   const data = {        
  //     api_key: environment.API_KEY_VALUE,
  //   };
  //   return this.utility.requestHttp(environment.API_URL+'common/getAllFaqs',(data));
  // }

  getRule() {
    const data = {
      api_key: environment.API_KEY_VALUE,
      pageName: 'rules'
    };
    return this.utility.requestHttp(environment.API_URL + 'common/getCmsPageByName', (data));
  }

  sendemail(user: CommonModel) {
    let data = user;
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL + 'common/contactUs', (data));
  }

  getCmsPage() {
    const data = {
      api_key: environment.API_KEY_VALUE,
      pageName: 'terms_service'
    };
    return this.utility.requestHttp(environment.API_URL+'common/getCmsPageByName',(data));
  }
  getCmsPageWhyUs(pageName:any) { 
    const data = {        
        api_key: environment.API_KEY_VALUE,
        pageName: pageName
    };
    return this.utility.requestHttp(environment.API_URL+'common/getCmsPageByName',(data));
}
}
