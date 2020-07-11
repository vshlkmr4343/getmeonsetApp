import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {

  pageContent:any =[];
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.common.getPrivacyPolicy()
    .subscribe(data => {
        this.pageContent = data; 
        this.pageContent = this.pageContent.data ;
    })
  }

}
