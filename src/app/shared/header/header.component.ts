import { Component, OnInit, Input  } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()  title;
  constructor(private location:Location,private router:Router) { }
  ngOnInit() {
  }
  back(){
    this.location.back();
  }

}
