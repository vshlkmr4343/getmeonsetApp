import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { UserService } from '../user.service';
import { SearchCrewComponent } from 'src/app/search/search-crew/search-crew.component';
import { ModalController } from '@ionic/angular';
import { SearchUserComponent } from 'src/app/search/search-user/search-user.component';
import { SearchProducerComponent } from 'src/app/search/search-producer/search-producer.component';
import { SearchVendorComponent } from 'src/app/search/search-vendor/search-vendor.component';
import { UtilityService } from 'src/app/utility/utility.service';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  userType: string;
  userIsAuthenticated: boolean;
  userDetails: { isLoggedin: string; sudoLoggedin: string; currentUser: string; email: string; usersId: string; id: string; fullName: string; adminusersId: string; profileComplitted: string; };
  usersId: string;
  isLoggedIn: string;
  listDetails: any = [];
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
  paginationDiv:false;
  constructor(
    private platform: Platform,
    private alert: AlertController,
    private utilityService: UtilityService,
    private modalController: ModalController,
    private userService: UserService,
    private signinService: SignInService,
    private signupService: SignUpService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('type')) {
        if (!this.userType) {
          this.userType = paramMap.get('type');
        }
      }
    })
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
    this.fetchData(this.userType)
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

  pageChange(newPage: number) {
    this.config.currentPage = newPage;
    this.start = (newPage - 1) * this.limit;
  }

  fetchData(userType) {
    switch (userType) {
      case 'talent':
        this.userService.getTalents(this.usersId)
          .subscribe(response => {
            this.listDetails = response
            this.listDetails = this.listDetails.data.talents;
            this.config = {
              itemsPerPage: this.limit,
              currentPage: 1,
              totalItems: this.totalRowCount
            };
          })
        break;
      case 'crew':
        this.userService.getCrews(this.usersId)
          .subscribe(response => {
            this.listDetails = response
            this.listDetails = this.listDetails.data.crews;
            this.config = {
              itemsPerPage: this.limit,
              currentPage: 1,
              totalItems: this.totalRowCount
            };
          })
        break;
      case 'producer':
        this.userService.getProducers(this.usersId)
          .subscribe(response => {
            this.listDetails = response
            this.listDetails = this.listDetails.data.crews;
            this.config = {
              itemsPerPage: this.limit,
              currentPage: 1,
              totalItems: this.totalRowCount
            };
          })
        break;
      case 'vendor':
        this.userService.getVendors(this.usersId)
          .subscribe(response => {
            this.listDetails = response
            this.listDetails = this.listDetails.data.vendors;
            this.config = {
              itemsPerPage: this.limit,
              currentPage: 1,
              totalItems: this.totalRowCount
            };
          })
        break;
    }

  }

  async search() {
    const modal = await this.modalController.create({
      component: this.getSearchModal()
    });
    modal.onDidDismiss()
      .then((searchForm) => {
        if (searchForm.data) {
          this.onSearch(searchForm.data);
        }
      });
    return await modal.present();
  }
  share() {
    this.utilityService.share();
  }

  getSearchModal(): import("@ionic/core").ComponentRef {
    switch (this.userType) {
      case 'talent':
        return SearchUserComponent
        break;
      case 'crew':
        return SearchCrewComponent
        break;
      case 'producer':
        return SearchProducerComponent
        break;
      case 'vendor':
        return SearchVendorComponent
        break;
    }
  }

  onSearch(searchForm) {
    switch (this.userType) {
      case 'talent':
        this.userService.searchUsers(searchForm, this.usersId).subscribe(response => {
          let searchResponse = response.data;
          this.listDetails = searchResponse.users;
        })
        break;
      case 'crew':
        this.userService.searchCrew(searchForm, this.usersId).subscribe(response => {
          let searchResponse = response.data;
          this.listDetails = searchResponse.users;
        })
        break;
      case 'producer':
        this.userService.searchProducer(searchForm, this.usersId).subscribe(response => {
          let searchResponse = response.data;
          this.listDetails = searchResponse.users;
        })
        break;
      case 'vendor':
        this.userService.searchUsers(searchForm, this.usersId).subscribe(response => {
          let searchResponse = response.data;
          this.listDetails = searchResponse.users;
        })
        break;
    }
  }

  switchUser(userType) {
    this.userType = userType;
    this.fetchData(this.userType)
  }

  addToFavorite(i, isFavourite) {
    if (isFavourite == 0) {
      this.userService.addFavorite(this.listDetails[i].usersId, this.usersId, this.userType)
        .subscribe(data => {
          let favoriteDetails = data;
          if (favoriteDetails.data.isAddedToFavourite == 1) {
            this.listDetails[i].isFavourite = 1;
          } else {
            this.utilityService.showToast('Unable to add Favorite');
          }
        })
    } else {
      this.userService.removeFavorite(this.listDetails[i].usersId, this.usersId, this.userType)
        .subscribe(data => {
          let favoriteDetails = data;
          if (favoriteDetails.data.isRemoveFromFavourite == 1) {
            this.listDetails[i].isFavourite = 0;
          } else {
            this.utilityService.showToast('Unable to remove Favorite');
          }
        })
    }
  }

  // [routerLink]="['/messages/gigchat/',listItem.usersId]"
  showMsg(userId) {
    this.usersId = userId
    if (this.isLoggedIn) {
      this.router.navigateByUrl('/messages/gigchat/' + this.usersId)
    }
    else {
      this.utilityService.showToast("Please Login to message this person")
    }
  }

  // async showmsgicon() {
  //   let alert = this.alert.create({
  //     header: ,
  //     message: messageText,
  //     buttons: [
  //       {
  //         text: 'No',
  //         role: 'cancel',
  //         handler: () => {
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           this.gigsService.gigApplicationAcceptDecline(this.usersId, this.gigId, this.action)
  //             .subscribe(
  //               data => {
  //                 this.apiResponse = data;
  //                 this.isGigApplicationAcceptDecline = this.apiResponse.data.isDone;
  //                 if (action == 'decline') {
  //                   this.gigsProfileInfo.applications[index].status = 3;
  //                 }
  //                 if (action == 'accept') {
  //                   this.actionName = 'selected';
  //                   this.gigsProfileInfo.applications[index].status = 2;
  //                 }

  //               },
  //               error => {
  //                 this.isGigApplicationAcceptDecline = 0;
  //               });
  //         }
  //       }
  //     ]
  //   });
  //   await (await alert).present()
  // }
}
