import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  pageContent:any =[];
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.common.getAboutUs()
    .subscribe(data => {
        this.pageContent = data; 
        this.pageContent = this.pageContent.data ;
    })

  }

}
