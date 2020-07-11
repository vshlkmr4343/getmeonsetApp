import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchUserComponent } from 'src/app/search/search-user/search-user.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service'
import { UtilityService } from '../../../utility/utility.service'
import { SignInService } from '../../../sign-in/sign-in.service'
import { SignUpService } from '../../../sign-up/sign-up.service'
import { SearchCrewComponent } from 'src/app/search/search-crew/search-crew.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  crewDetails:any =[];
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
  submitted = false;
  jobInterestedInArr = [];
  jobInterested =[];
  isLoggedIn:any ;
  userIsAuthenticated = false;
  usersId: any;
  userDetails:any;
  isFavorite: string = '0' ;
  favoriteDetails:any =[];
  isRemovedFavorite: string = '0' ;
  selectedGenderArray = [];
  actorDetails: any = [];
  constructor(private modalController:ModalController,
    private router:Router,
    public userService: UserService,
    private signinService: SignInService,
    private signupService: SignUpService,
    ) { }

  ngOnInit() {
    this.userService.getCrews(this.usersId)
    .subscribe(data => {
      this.crewDetails = data;
      this.crewDetails = this.crewDetails.data.crews;
      this.config = {
        itemsPerPage: this.limit,
        currentPage: 1,
        totalItems: this.totalRowCount
      };
    })
  }
  
  async search(){
    const modal = await this.modalController.create({
      component: SearchCrewComponent
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
    this.userService.searchCrew(searchForm, this.usersId).subscribe(response => {
      let actorResponse = response.data
      this.actorDetails = actorResponse.users;
      this.totalItem = response.data.users.length;
      this.crewDetails = this.actorDetails
    })
  }
  openproducer(){
    this.router.navigateByUrl('/user/producer')
   }
  openTalent(){
    this.router.navigateByUrl('/user/talent')
   }
  //  profile(){
  //   this.router.navigateByUrl('/user/crew/display')
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
    // this.onSearch();
  }
}
