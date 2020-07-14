import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchFavouriteComponent } from '../../search/search-favourite/search-favourite.component';
import { UserService } from '../user.service'
import { UtilityService } from '../../utility/utility.service'
import { SignInService } from '../../sign-in/sign-in.service'
import { SignUpService } from '../../sign-up/sign-up.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
  public searchData = {
    moduleId: "2",
    date: '',
    radious: '101',
    gigActive: "1",
    status: "1",
  };
  removedSelectedArray = [];
  myFavoritesArray = [];
  myFavoritesToBeRemoved = [];
  userIsAuthenticated = false;
  usersId: any;
  userDetails: any;
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
  address =[]
  relatedDetail : any =[]
  noFavouriteFound: number = 0;
  paginationDiv:false;
  isLoggedIn: string;
userType=[]
  constructor(private modal: ModalController,
    private userService: UserService,
    private signinService: SignInService,
    private utility: UtilityService,
    private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("isLoggedin");
    this.userDetails = this.signinService.getAuthData();
    this.usersId = this.userDetails.usersId;
    // this.userService.favouriteList(this.usersId, this.searchData).subscribe((response) => {
    //   this.myFavoritesArray = response.data.favourites;
    //   this.address = response.data.favourites.relatedDetails.usersAddress[0]
    //   this.userType = response.data.favourites.relatedDetails.usersTypeId[0]
    // })
    this.onsearch(this.searchData)

    

  }
  async search() {
    const modal = await this.modal.create({
      component: SearchFavouriteComponent
    });
    modal.onDidDismiss()
      .then((searchData) => {
        console.log("searchdata on dismiss modal",this.searchData)
        if (searchData.data) {
          this.searchData = searchData.data
          this.onsearch(searchData.data)
        }
      });
    return await modal.present();
  }

  onsearch(searchData) {
    this.userService.favouriteList(this.usersId, this.searchData).subscribe((response) => {
      this.myFavoritesArray = response.data.favourites;
      this.address = response.data.favourites.relatedDetails.usersAddress[0]
      this.userType = response.data.favourites.relatedDetails.usersTypeId[0]
      this.noFavouriteFound = 0;
      if (this.myFavoritesArray.length == 0) { this.noFavouriteFound = 1; }
      // if(this.myFavoritesArray.length == 0){
      //   console.log("Data Not Found")
      //   this.utility.showToast("Data Not Found")
      //   this.router.navigateByUrl('/user/favorite')
      // }
        //this.address = response.data.favourites.relatedDetails.usersAddress[0]
   
      // this.config = {
      //   itemsPerPage: this.limit,
      //   currentPage: 1,
      //   totalItems: this.totalRowCount
      // };
    }, error => {
      this.noFavouriteFound = 1;
    })
  }
  gigType(gigType) {
    if (gigType == 1) {
      return ("Crew")
    }
    if (gigType == 2) {
      return ("Talent")
    }
  }
  clearData() {
    this.searchData = {
      moduleId: "2",
      date: '',
      radious: '101',
      gigActive: "1",
      status: "1",
    };
  }

  checkedSelected(favorite) {
    var obj = {
      usersId: favorite.favouriteBy,
      relatedId: favorite.relatedId,
      moduleId: favorite.moduleId,
      relatedTypeId: favorite.relatedTypeId,
    }

    if (favorite.selected) {
      this.myFavoritesToBeRemoved.push(favorite);
      this.removedSelectedArray.push(obj);
      //this.removedSelectedArray.push(favorite.favouriteId);
    } else {
      this.myFavoritesToBeRemoved.splice(this.myFavoritesToBeRemoved.indexOf(favorite), 1)
      this.removedSelectedArray.splice(this.removedSelectedArray.indexOf(obj), 1);
    }
  }

  removeSeleted() {
    this.userService.favouriteDelete(this.removedSelectedArray).subscribe((response) => {
      this.myFavoritesToBeRemoved.forEach((item, index) => {
        this.myFavoritesArray.splice(this.myFavoritesArray.indexOf(item), 1);
      })
      this.myFavoritesToBeRemoved = []
    })
  }
  pageChange(newPage: number) {
    this.config.currentPage = newPage;
    this.start = (newPage - 1) * this.limit;
    // this.onSearch();
  }
}
