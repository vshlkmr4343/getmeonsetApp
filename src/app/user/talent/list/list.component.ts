import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchUserComponent } from 'src/app/search/search-user/search-user.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service'
import { UtilityService } from '../../../utility/utility.service'
import { SignInService } from '../../../sign-in/sign-in.service'
import { SignUpService } from '../../../sign-up/sign-up.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  talentDetails: any = [];
  usersId: any
  actorDetails: any = [];
  totalItem: any
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  start = 0;
  limit = 10;
  totalRowCount: number = 0;
  requestData = {
    limit: this.limit,
    start: this.start,
  }
  searchForm : FormGroup;
  isLoggedIn:any ;
  userIsAuthenticated = false;
  userDetails:any;
  isFavorite: string = '0' ;
  favoriteDetails:any =[];
  isRemovedFavorite: string = '0' ;
  constructor(private modalController: ModalController,
    private router: Router,
    private formBuilder: FormBuilder,
    public userService: UserService,
    private utility: UtilityService,
    private signinService: SignInService,
    private signupService: SignUpService) { }

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
    if(this.isLoggedIn){
      this.userIsAuthenticated = true;
      this.userDetails = this.signinService.getAuthData();
      this.usersId = this.userDetails.usersId;
    }
    this.userService.getTalents(this.usersId)
      .subscribe(data => {
        this.talentDetails = data
        this.talentDetails = this.talentDetails.data.talents;
        this.config = {
          itemsPerPage: this.limit,
          currentPage: 1,
          totalItems: this.totalRowCount
        };
      })
  }

  async search() {
    const modal = await this.modalController.create({
      component: SearchUserComponent
    });
    modal.onDidDismiss()
      .then((searchForm) => {
        if(searchForm.data){
          this.onSearch(searchForm.data);
        }
      });
    return await modal.present();
  }
  onSearch(searchForm) {
    this.userService.searchUsers(searchForm, this.usersId).subscribe(response => {
      let actorResponse = response.data
      this.actorDetails = actorResponse.users;
      this.totalItem = response.data.users.length;
      this.talentDetails = this.actorDetails
    })
  }
  opencrew() {
    this.router.navigateByUrl('/user')
  }
  openproducer(){
    this.router.navigateByUrl('/user/producer')
   }

  // profile(usersId) {
  //   return this.router.navigateByUrl('/user/talent/display',this.talentDetails.usersId)
  // }


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

  pageChange(newPage: number) {
    this.config.currentPage = newPage;
    this.start = (newPage - 1) * this.limit;
  }
}
