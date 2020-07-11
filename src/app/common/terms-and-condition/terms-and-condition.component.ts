import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss'],
})
export class TermsAndConditionComponent implements OnInit {

  pageContent:any =[];
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.common.getTermsService()
    .subscribe(data => {
        this.pageContent = data; 
        this.pageContent = this.pageContent.data ;
    })
  }

}
