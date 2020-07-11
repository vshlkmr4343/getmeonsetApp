import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UtilityService } from '../../utility/utility.service'
@Component({
  selector: 'app-back-header',
  templateUrl: './back-header.component.html',
  styleUrls: ['./back-header.component.scss'],
})
export class BackHeaderComponent implements OnInit {
  constructor(private location:Location,
    private utility :UtilityService) { }
  ngOnInit() {}
  back(){
    // this.utility.presentLoader(0)
    this.location.back();
    
  }
}
