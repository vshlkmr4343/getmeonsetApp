import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import { UtilityService } from 'src/app/utility/utility.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  loggedInUsersId: string;
  usersId: string;
  userType: any;
  rateArr: any;
  rate: any;
  userProfileInfo: any;
  address: any;
  reviewDetails: any;
  isShowReply = [];
  piercings: any;
  socialMediaLinksDetails: any;
  usersImagesDetails: any;
  tattoos: any;
  half: any = 'half';
  showMore = 'Show More';
  isLoggedIn: string;
  favoriteDetails: any;
  isFavorite: any;
  isRemovedFavorite: any;
  showDiv = false;
  totalUserRating: any;
  oneStarPercentage: number;
  twoStarPercentage: number;
  threeStarPercentage: number;
  fourStarPercentage: number;
  fiveStarPercentage: number;
  isRatingVerify = false;
  usersRatingText: string;
  messageText: string;
  ratingDetails: any;
  isRating: any;
  isratingUpdated: number;
  usersRatingReasonText: string;
  messageReasonText: string;
  lastIdRating: any;
  constructor(
    private utility: UtilityService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.loggedInUsersId = localStorage.getItem("usersId");
    this.isLoggedIn = localStorage.getItem("isLoggedin");
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.usersId = paramMap.get("id");
        this.userType = paramMap.get("type");
        this.getRatingValue(this.usersId);
        this.getUserProfileInfo(this.usersId, this.loggedInUsersId)
      }
    });
  }
  getUserProfileInfo(usersId: string, loggedInUsersId: string) {
    switch (this.userType) {
      case 'talent':
        this.userService.getUserProfileInfoTalent(this.usersId, this.loggedInUsersId)
          .subscribe(data => {
            this.userProfileInfo = data;
            this.userProfileInfo = this.userProfileInfo.data.userDetails;
            this.address = this.userProfileInfo.usersAddress[0]
            this.reviewDetails = this.userProfileInfo.reviews;
            this.reviewDetails.forEach((element) => {
              let replyMsg = '';
              if (element.ratingReplyInfo.length > 0) {
                replyMsg = element.ratingReplyInfo[0].replyText;
              }
              this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' })
            });
            this.socialMediaLinksDetails = this.userProfileInfo.socialMediaLinks;
            this.usersImagesDetails = this.userProfileInfo.usersImages;
            this.piercings = this.userProfileInfo.piercings;
            if (this.piercings == '1') {
              this.piercings = 'Yes';
            } else {
              this.piercings = 'No';
            }
            this.tattoos = this.userProfileInfo.tattoos;
            if (this.tattoos == '1') {
              this.tattoos = 'Yes';
            } else {
              this.tattoos = 'No';
            }
          })
        break
      case 'crew':
        this.userService.getUserProfileInfoCrew(this.usersId, this.loggedInUsersId)
          .subscribe(data => {
            this.userProfileInfo = data;
            this.userProfileInfo = this.userProfileInfo.data.userDetails;
            this.address = this.userProfileInfo.usersAddress[0]
            this.reviewDetails = this.userProfileInfo.reviews;
            this.reviewDetails.forEach((element) => {
              let replyMsg = '';
              if (element.ratingReplyInfo.length > 0) {
                replyMsg = element.ratingReplyInfo[0].replyText;
              }
              this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' })
            });
            this.socialMediaLinksDetails = this.userProfileInfo.socialMediaLinks;
            this.usersImagesDetails = this.userProfileInfo.usersImages;
          })
        break
      case 'producer':
        this.userService.getUserProfileInfoProducer(this.usersId, this.loggedInUsersId)
          .subscribe(data => {
            this.userProfileInfo = data;
            this.userProfileInfo = this.userProfileInfo.data.userDetails;
            this.address = this.userProfileInfo.usersAddress[0]
            this.reviewDetails = this.userProfileInfo.reviews;
            this.reviewDetails.forEach((element) => {
              let replyMsg = '';
              if (element.ratingReplyInfo.length > 0) {
                replyMsg = element.ratingReplyInfo[0].replyText;
              }
              this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' })
            });
            this.socialMediaLinksDetails = this.userProfileInfo.socialMediaLinks;
            this.usersImagesDetails = this.userProfileInfo.usersImages;
          })
        break
      case 'vendor':
        this.userService.getUserProfileInfo(this.usersId, this.loggedInUsersId)
          .subscribe(data => {
            this.userProfileInfo = data;
            this.userProfileInfo = this.userProfileInfo.data.userDetails;
            this.reviewDetails = this.userProfileInfo.reviews;
            this.address = this.userProfileInfo.usersAddress[0]
            this.reviewDetails.forEach((element) => {
              let replyMsg = '';
              if (element.ratingReplyInfo.length > 0) {
                replyMsg = element.ratingReplyInfo[0].replyText;
              }
              this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' })
            });
            this.socialMediaLinksDetails = this.userProfileInfo.socialMediaLinks;
            this.usersImagesDetails = this.userProfileInfo.usersImages;
          })
        break
    }
  }
  getRatingValue(usersId) {
    switch (this.userType) {
      case 'talent':
        this.userService.getRatingValByUserTalent(this.usersId).subscribe(data => {
          this.rateArr = data;
          this.rate = this.rateArr.data.userRatings;
          this.totalUserRating = this.rateArr.data.totalUserRating;
          this.oneStarPercentage = this.rateArr.data.oneStarPercentage / 100;
          this.twoStarPercentage = this.rateArr.data.twoStarPercentage / 100;
          this.threeStarPercentage = this.rateArr.data.threeStarPercentage / 100;
          this.fourStarPercentage = this.rateArr.data.fourStarPercentage / 100;
          this.fiveStarPercentage = this.rateArr.data.fiveStarPercentage / 100;

        })
        break
      case 'crew':
        this.userService.getRatingValByUserCrew(this.usersId).subscribe(data => {
          this.rateArr = data;
          this.rate = this.rateArr.data.userRatings;
          this.totalUserRating = this.rateArr.data.totalUserRating;
          this.oneStarPercentage = this.rateArr.data.oneStarPercentage / 100;
          this.twoStarPercentage = this.rateArr.data.twoStarPercentage / 100;
          this.threeStarPercentage = this.rateArr.data.threeStarPercentage / 100;
          this.fourStarPercentage = this.rateArr.data.fourStarPercentage / 100;
          this.fiveStarPercentage = this.rateArr.data.fiveStarPercentage / 100;
          // console.log('oneStarPercentage',this.oneStarPercentage)
          // console.log('twoStarPercentage',this.twoStarPercentage)
          // console.log('threeStarPercentage',this.threeStarPercentage)
          // console.log('fourStarPercentage',this.fourStarPercentage)
          // console.log('fiveStarPercentage',this.fiveStarPercentage)
        })
        break
      case 'producer':
        this.userService.getRatingValByUserProducer(this.usersId).subscribe(data => {
          this.rateArr = data;
          this.rate = this.rateArr.data.userRatings;
          this.totalUserRating = this.rateArr.data.totalUserRating;
          this.oneStarPercentage = this.rateArr.data.oneStarPercentage / 100;
          this.twoStarPercentage = this.rateArr.data.twoStarPercentage / 100;
          this.threeStarPercentage = this.rateArr.data.threeStarPercentage / 100;
          this.fourStarPercentage = this.rateArr.data.fourStarPercentage / 100;
          this.fiveStarPercentage = this.rateArr.data.fiveStarPercentage / 100;
        })
        break
      case 'vendor':
        this.userService.getRatingValByUser(this.usersId).subscribe(data => {
          this.rateArr = data;
          this.rate = this.rateArr.data.userRatings;
          this.totalUserRating = this.rateArr.data.totalUserRating;
          this.oneStarPercentage = this.rateArr.data.oneStarPercentage / 100;
          this.twoStarPercentage = this.rateArr.data.twoStarPercentage / 100;
          this.threeStarPercentage = this.rateArr.data.threeStarPercentage / 100;
          this.fourStarPercentage = this.rateArr.data.fourStarPercentage / 100;
          this.fiveStarPercentage = this.rateArr.data.fiveStarPercentage / 100;
        })
        break
    }
  }
  showmore() {
    this.half = (this.half == 'half') ? 'full' : 'half';
    this.showMore = (this.half == 'half') ? 'Show More' : 'Show Less';
  }

  addToFavorite() {
    switch (this.userType) {
      case 'talent':
        if (this.userProfileInfo.isFavourite == 0) {
          this.userService.addFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 3)
            .subscribe(data => {
              this.favoriteDetails = data;
              this.isFavorite = this.favoriteDetails.data.isAddedToFavourite;
              if (this.isFavorite == '1') {
                this.userProfileInfo.isFavourite = 1;
              } else {
                this.utility.showToast('Unable to add Favorite');
              }
            })
        } else {
          this.userService.removeFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 3)
            .subscribe(data => {
              this.favoriteDetails = data;
              this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
              if (this.isRemovedFavorite == '1') {
                this.userProfileInfo.isFavourite = 0;
              } else {
                this.utility.showToast('Unable to remove Favorite');
              }
            })
        }
        break;
      case 'crew':
        if (this.userProfileInfo.isFavourite == 0) {
          this.userService.addFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 3)
            .subscribe(data => {
              this.favoriteDetails = data;
              this.isFavorite = this.favoriteDetails.data.isAddedToFavourite;
              if (this.isFavorite == '1') {
                this.userProfileInfo.isFavourite = 1;
              } else {
                this.utility.showToast('Unable to add Favorite');
              }
            })
        } else {
          this.userService.removeFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 3)
            .subscribe(data => {
              this.favoriteDetails = data;
              this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
              if (this.isRemovedFavorite == '1') {
                this.userProfileInfo.isFavourite = 0;
              } else {
                this.utility.showToast('Unable to remove Favorite');
              }
            })
        }
        break;
      case 'producer':
        if (this.userProfileInfo.isFavourite == 0) {
          this.userService.addFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 4)
            .subscribe(data => {
              this.favoriteDetails = data;
              this.isFavorite = this.favoriteDetails.data.isAddedToFavourite;
              if (this.isFavorite == '1') {
                this.userProfileInfo.isFavourite = 1;
              } else {
                this.utility.showToast('Unable to add Favorite');
              }
            })
        } else {
          this.userService.removeFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 4)
            .subscribe(data => {
              this.favoriteDetails = data;
              this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
              if (this.isRemovedFavorite == '1') {
                this.userProfileInfo.isFavourite = 0;
              } else {
                this.utility.showToast('Unable to remove Favorite');
              }
            })
        }
        break;
      case 'vendor':
        if (this.userProfileInfo.isFavourite == 0) {
          this.userService.addFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 6)
            .subscribe(data => {
              this.favoriteDetails = data;
              this.isFavorite = this.favoriteDetails.data.isAddedToFavourite;
              if (this.isFavorite == '1') {
                this.userProfileInfo.isFavourite = 1;
              } else {
                this.utility.showToast('Unable to add Favorite');
              }
            })
        } else {
          this.userService.removeFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 6)
            .subscribe(data => {
              this.favoriteDetails = data;
              this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
              if (this.isRemovedFavorite == '1') {
                this.userProfileInfo.isFavourite = 0;
              } else {
                this.utility.showToast('Unable to remove Favorite');
              }
            })
        }
        break
    }
  }

  addRating() {
    this.isRatingVerify = true;
  }

  addRatingText() {
    if (this.usersRatingText == '') {
      this.messageText = 'Review is required';
      setTimeout(()=>{
        this.messageText = '' ;
       },2000) 
      return false;
    }
    this.userService.updateRatingText(this.lastIdRating, this.usersRatingText, this.rate)
      .subscribe(data => {
        this.ratingDetails = data;
        this.isRating = this.ratingDetails.data.isAdded;
        this.isratingUpdated = 1;
         setTimeout(()=>{
          this.isratingUpdated = 0 ;
          this.isRatingVerify = false;
         },2000) 
      })
  }
  

  addRatingAndReview() {
    if (this.usersRatingReasonText == undefined && this.usersRatingText == undefined) {
      this.messageText = 'Review is required';
      this.messageReasonText = 'Review reason is required';
      return false;
    }

    if (this.usersRatingText == undefined) {
      this.messageText = 'Review is required';
      return false;
    }
    if (this.usersRatingReasonText == undefined) {
      this.messageReasonText = 'Review reason is required';
      return false;
    }
    
    
    this.userService.addRatingAndReview(this.usersId, this.loggedInUsersId, this.usersRatingText, this.usersRatingReasonText, this.rate)
      .subscribe(data => {
        this.messageText = undefined;
        this.messageReasonText = undefined;
        this.ratingDetails = data;
        this.isRating = this.ratingDetails.data.isAdded;
        this.isratingUpdated = 1;
        this.utility.showToast('Review successfully submitted.')
        setTimeout(() => {
          this.isratingUpdated = 0;
          this.isRatingVerify = false;
        }, 2000)
      })
  }
  // titleCaseWord(word) {
  //   if (!word) return word;
  //   return word[0].toUpperCase() + word.substr(1).toLowerCase();
  // }

  share() {
    this.utility.share();
  }
}
