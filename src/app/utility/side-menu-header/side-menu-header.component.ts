import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-side-menu-header',
  templateUrl: './side-menu-header.component.html',
  styleUrls: ['./side-menu-header.component.scss'],
})
export class SideMenuHeaderComponent implements OnInit {
  userData: any = [];
  name: any;
  email: any;
  profile_pic: any;
  previous_Id:any;
  isLoggedIn:boolean;
  usersId:any;
  @Output() onCheckLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  constructor(private storage:Storage) { }
  ngOnInit() {
    setInterval(() => {
      this.setHeaderData();
    }, 1000);
    //this.setHeaderData();
  }

  setHeaderData() {
    this.storage.get('userData').then(data => {
      this.check();
      this.userData = data;
      if (data) {
        this.email = this.userData.email;
        this.name = this.userData.fullName;
        this.profile_pic=this.userData.profileImage;
        this.previous_Id =this.userData.usersId;
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
    })
  }

  public check() {
   let  emitedData = {'isLoggedIn':this.isLoggedIn,'usersId':this.previous_Id }
    this.onCheckLoggedIn.emit(emitedData);
  }
}
