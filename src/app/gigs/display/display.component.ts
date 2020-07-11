import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { GigsService } from '../gigs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/utility/utility.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})

export class DisplayComponent implements OnInit {
  typeName = 'Talent';
  isFavorite = false;
  rate: any;
  rateArr: any = [];
  loggedInUsersId: string;
  userIsAuthenticated: boolean;
  userDetails: {
    isLoggedin: string;
    sudoLoggedin: string;
    currentUser: string;
    email: string;
    usersId: string;
    id: string;
    fullName: string;
    adminusersId: string;
    profileComplitted: string;
  };
  usersId: string;
  isLoggedIn: string;
  gigsType: any;
  gigId: string;
  gigDescription: string;
  gigsProfileInfo: any;
  isProducer: boolean;
  castingRoles: any;
  gigsTypeName: string;
  socialMediaLinksDetails: any;
  applyGigForm: FormGroup;
  reviewGigForm:FormGroup;
  submitted = false;
  apiResponse: any;
  isGigApplied: any;
  description: string;
  action: any;
  currentIndex: any;
  favoriteDetails: any;
  isRemovedFavorite: any;
  isGigApplicationAcceptDecline: any;
  actionName: string;
  usersRatingText:any;
  lastIdRating:any;
  isRatingVerify: boolean;
  reviewFormSubmitted: boolean;
  showRoleIndex: any;
  constructor(
    private alert: AlertController,
    private router: Router,
    private utility: UtilityService,
    private formBuilder: FormBuilder,
    private gigsService: GigsService,
    private signupService: SignUpService,
    private signinService: SignInService,
    private route: ActivatedRoute,
    private platform: Platform) { }
  ngOnInit() {
    if (localStorage.getItem("usersId")) {
      this.userIsAuthenticated = true;
      this.userDetails = this.signinService.getAuthData();
      this.usersId = this.userDetails.usersId;
      this.isLoggedIn = this.userDetails.isLoggedin;
    }

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
    this.gigDescription = localStorage.getItem("gigDescription");

    this.route.paramMap.subscribe((paramMap) => {
      this.typeName = paramMap.get('type');
      this.gigsType = paramMap.get('typeId');
      this.gigId = paramMap.get('id');
      this.gigsService.getGigInfo(this.gigId, this.gigsType, this.usersId).subscribe(response => {
        this.gigsProfileInfo = response;
        this.gigsProfileInfo = this.gigsProfileInfo.data.gig;
        if (this.usersId === this.gigsProfileInfo.producerId) {
          this.isProducer = true;
        }
        if (this.gigsType == 2) {
          this.castingRoles = this.gigsProfileInfo.castingRoles[0];
          if (!this.gigsProfileInfo.castingRoles[0]) {
            this.castingRoles = '';
          }
          this.gigsTypeName = 'Talent';
        }
        else {
          this.gigsTypeName = 'Crew';
        }
        this.socialMediaLinksDetails = this.gigsProfileInfo.producerInfo.socialMediaLinks;
      })

      this.gigsService.getRatingValByUser(this.usersId, this.gigId).subscribe(data => {
        // console.log('Response rate:',data)
        this.rateArr = data;
        this.rate = this.rateArr.data.userRatings;
        //  console.log(this.rate);
      })
      this.applyGigForm = this.formBuilder.group({
        description: ['', [Validators.required]],
      });

      this.reviewGigForm = this.formBuilder.group({
        usersRatingText: ['', [Validators.required]],
        usersRatingReasonText: ['', [Validators.required]]
      })
    })
  }
  viewRole(i){
    if(this.showRoleIndex == i){
      this.showRoleIndex = undefined;
    }
    else{
      this.showRoleIndex = i
    }
  }
  
  get f() { return this.applyGigForm.controls; }

  get r() { return this.reviewGigForm.controls;}

  share() {
    if (this.platform.is("cordova")) {
      window['plugins'].socialsharing.share('GMOS', null, '', null)
    }
  }

  applyGig() {
    this.submitted = true;
    if (this.applyGigForm.invalid) {
      return;
    }

    this.gigsService.applyGig(this.applyGigForm.value, this.usersId, this.gigId, this.gigsType)
      .subscribe(
        data => {
          this.apiResponse = data;
          this.isGigApplied = this.apiResponse.data.isDone;
          this.showGigAppliedToast(this.isGigApplied)
          //  setTimeout(()=>{
          //   this.isGigApplied = 5 ;
          //  },3000);
          this.description = " ";
        },
        error => {
          this.isGigApplied = 0;
        });
  }

  showGigAppliedToast(isGigApplied: any) {
    switch (isGigApplied) {
      case 1:
        this.utility.showToast('You have successfully applied for the gig.');
        break;
      case 0:
        this.utility.showToast('Something went wrong please try again.');
        break;
      case 2:
        this.utility.showToast('You have already applied for this gig.');
        break;
      case 3:
        this.utility.showToast('Before apply for this gig, please complete ' + this.gigsTypeName + 'profile.');
        break;
    }
  }

  confirmAcceptDecline(usersId, action, index) {
    this.usersId = usersId;
    this.action = action;
    this.currentIndex = index;
  }

  async applicationAcceptDecline(messageText, usersId, action, index,headerText) {
    this.usersId = usersId;
    this.action = action;
    this.currentIndex = index;
    let alert = this.alert.create({
      header: headerText,
      message: messageText,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.gigsService.gigApplicationAcceptDecline(this.usersId, this.gigId, this.action)
              .subscribe(
                data => {
                  this.apiResponse = data;
                  this.isGigApplicationAcceptDecline = this.apiResponse.data.isDone;
                  if (action == 'decline') {
                    this.gigsProfileInfo.applications[index].status = 3;
                  }
                  if (action == 'accept') {
                    this.actionName = 'selected';
                    this.gigsProfileInfo.applications[index].status = 2;
                  }

                },
                error => {
                  this.isGigApplicationAcceptDecline = 0;
                });
          }
        }
      ]
    });
    await (await alert).present()
  }

  favorite() {
    this.isFavorite = !this.isFavorite;

    if (this.isFavorite) {
      this.gigsService.addFavorite(this.gigId, this.gigsType, this.usersId)
        .subscribe(data => {
          this.favoriteDetails = data;
          this.isFavorite = (this.favoriteDetails.data.isAddedToFavourite == '1');
          if (this.isFavorite) {
            //gigDetails.isFavourite = 1 ;
            this.isFavorite = true;
          } else {
            this.utility.showToast('Unable to add Favorite');
          }
        })
    } else {
      this.gigsService.removeFavorite(this.gigId, this.gigsType, this.usersId)
        .subscribe(data => {
          this.favoriteDetails = data;
          this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
          if (this.isRemovedFavorite == '1') {
            this.isFavorite = false;
          } else {
            this.utility.showToast('Unable to remove Favorite')
          }
        })
    }
  }
   
  addRating(){
    if(this.isLoggedIn){
      this.isRatingVerify = true;
    }
  }

  addRatingAndReview(){
    this.reviewFormSubmitted = true;
    if(this.reviewGigForm.invalid){
      setTimeout(() => {
        this.isRatingVerify = false;
      }, 2000)
      return
    }
    else{
      this.gigsService.addRatingAndReview(this.usersId, this.loggedInUsersId, this.reviewGigForm.value.usersRatingText, this.reviewGigForm.value.usersRatingReasonText, this.rate, this.gigId)
      .subscribe(data => {
        this.isRatingVerify = false;
        this.utility.showToast('Review successfully submitted.')
        // this.ratingDetails = data;
        // this.isRating = this.ratingDetails.data.isAdded;
        // this.isratingUpdated = 1;
        // setTimeout(() => {
        //   this.isratingUpdated = 0;
        //   this.isRatingVerify = false;
        // }, 2000)
    })
    }

  }

}
