import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  pageContent:any =[];
  selectedItem: any;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.common.getRule()
    .subscribe(data => {
        this.pageContent = data; 
        this.pageContent = this.pageContent.data ;
console.log("rule",this.pageContent)
    })
  }

}
