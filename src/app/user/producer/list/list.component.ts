import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchUserComponent } from 'src/app/search/search-user/search-user.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service'
import { UtilityService } from '../../../utility/utility.service'
import { SignInService } from '../../../sign-in/sign-in.service'
import { SignUpService } from '../../../sign-up/sign-up.service'
import { SearchProducerComponent } from '../../../search/search-producer/search-producer.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  producerDetails:any =[];
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
  usersId: any;
  userDetails:any;
  isFavorite: string = '0' ;
  favoriteDetails:any =[];
  isRemovedFavorite: string = '0' ;
  submitted = false;
  selectedGenderArray = [];
  name = 'Get me on set';
  isProducerFound = 1 ;
  actorDetails: any = [];
  constructor(private modalController:ModalController,
    private router:Router,
     public userService: UserService,
     private utility: UtilityService,) { }
 
  ngOnInit() {
    this.userService.getProducers(this.usersId)
    .subscribe(data => {
      this.producerDetails = data;
      this.producerDetails = this.producerDetails.data.crews;
      this.config = {
        itemsPerPage: this.limit,
        currentPage: 1,
        totalItems: this.totalRowCount
      };
      if(this.producerDetails.length == 0) {
        this.isProducerFound = 0 ;
      }
    })
  }
  async search(){
    const modal = await this.modalController.create({
      component: SearchProducerComponent
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
    this.userService.searchProducer(searchForm, this.usersId).subscribe(response => {
      let actorResponse = response.data
      this.actorDetails = actorResponse.users;
      this.totalItem = response.data.users.length;
      this.producerDetails = this.actorDetails
    })
  }
  openTalent(){
    this.router.navigateByUrl('/user/talent')
   }
   opencrew(){
    this.router.navigateByUrl('/user')
   }
  //  profile(){
  //   this.router.navigateByUrl('/user/producer/display')
  // }
  
  pageChange(newPage: number) {
    this.config.currentPage = newPage;
    this.start = (newPage - 1) * this.limit;
    // this.onSearch();
  }
}
