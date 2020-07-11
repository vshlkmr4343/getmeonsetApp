import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { UserService } from '../../user.service';
import { ModalController } from '@ionic/angular';
import { SearchVendorComponent } from 'src/app/search/search-vendor/search-vendor.component';
import { UtilityService } from 'src/app/utility/utility.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  isLoggedIn: any;
  userDetails: { isLoggedin: string; sudoLoggedin: string; currentUser: string; email: string; usersId: string; id: string; fullName: string; adminusersId: string; profileComplitted: string; };
  userIsAuthenticated: boolean;
  usersId: string;
  vendorDetails: any;
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  start = 0;
  limit = 10;
  totalRowCount: number = 0;

  constructor(
    private modalController:ModalController,
    private signinService: SignInService,
    private signupService: SignUpService,
    private userService: UserService,
    private utilityService:UtilityService
  ) { }

  ngOnInit() {
    this.signinService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userDetails = this.signinService.getAuthData();
        this.usersId = this.userDetails.usersId;
        this.isLoggedIn = this.userDetails.isLoggedin;

      });
    this.signupService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userDetails = this.signupService.getAuthData();
        this.usersId = this.userDetails.usersId;
        this.isLoggedIn = this.userDetails.isLoggedin;

      });
    this.isLoggedIn = localStorage.getItem("isLoggedin");
    if (this.isLoggedIn) {
      this.userIsAuthenticated = true;
      this.userDetails = this.signinService.getAuthData();
      this.usersId = this.userDetails.usersId;
    }
    this.userService.getVendors(this.usersId)
      .subscribe(data => {
        this.vendorDetails = data;
        this.vendorDetails = this.vendorDetails.data.vendors;
        this.config = {
          itemsPerPage: this.limit,
          currentPage: 1,
          totalItems: this.totalRowCount
        };
      })
  }

  async search(){
    const modal = await this.modalController.create({
      component: SearchVendorComponent
    });
    modal.onDidDismiss()
    .then((searchForm) => {
      if(searchForm.data){
        let response = searchForm
        this.onSearch(searchForm.data);
      }
    });
    return await modal.present();
  }
  onSearch(searchFormValue) {
    this.userService.searchUsers(searchFormValue, this.usersId)
      .subscribe(
        data => {
          this.vendorDetails = data;
          this.vendorDetails = this.vendorDetails.data.users;
        },
        error => {
          this.utilityService.showToast('Unable to Serach');
        });
  }

  switchResult(gender) {
    if (gender == 1) {
      return ("Any")
    }
    if (gender == 2) {
      return ("Male")
    }
    if (gender == 3) {
      return ("Female")
    }
  }

}
