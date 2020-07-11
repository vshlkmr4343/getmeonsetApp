import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent implements OnInit {
  userType: string;
  pageContent: any = [];
  selectedItem: any;
  constructor(public common: CommonService) { }
  ngOnInit() {
    this.fetchData(this.userType)
    if (this.userType = 'talent') {
      this.common.getCmsPageWhyUs('why_us_talent')
      .subscribe(data => {
        this.pageContent = data;
        this.pageContent = this.pageContent.data;
      })
    }


  }


  fetchData(userType) {
    switch (userType) {
      case 'talent':
        this.common.getCmsPageWhyUs('why_us_talent')
          .subscribe(data => {
            this.pageContent = data;
            this.pageContent = this.pageContent.data;
          })
        break;
      case 'crew':
        this.common.getCmsPageWhyUs('why_us_crew')
          .subscribe(data => {
            this.pageContent = data;
            this.pageContent = this.pageContent.data;
          })
        break;
      case 'producer':
        this.common.getCmsPageWhyUs('why_us_producer')
          .subscribe(data => {
            this.pageContent = data;
            this.pageContent = this.pageContent.data;
          })
        break;
    }

  }
  select(userType) {
    this.userType = userType;

    this.fetchData(this.userType)
  }
}
