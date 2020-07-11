import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router, NavigationStart } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-aggrement',
  templateUrl: './aggrement.component.html',
  styleUrls: ['./aggrement.component.scss'],
})
export class AggrementComponent implements OnInit {
  pageContent:any;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.getCmsPage()
    .subscribe(data => {
      this.pageContent = data; 
      this.pageContent = this.pageContent.data ;
    })
  }

}
