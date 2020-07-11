import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  pageContent:any =[];
  selectedItem: any;
  constructor(public common: CommonService) { }

  ngOnInit() {
//     this.common.getFaq()
//     .subscribe(data => {
//         this.pageContent = data; 
//         this.pageContent = this.pageContent.data ;
// //console.log("faq",this.pageContent)
//     })
  }

}
