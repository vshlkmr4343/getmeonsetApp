import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UtilityService } from '../../../utility/utility.service';
import { UserService } from '../../user.service'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {

  // @ViewChild('addThisDiv') addThisDiv: ElementRef;

  private usersId: string;
  talentProfileInfo: any = [];
  reviewDetails: any = [];
  socialMediaLinksDetails: any = [];
  usersImagesDetails: any = [];
  loggedInUsersId: string;
  isFavorite: string = '0';
  isRating: string = '0';
  favoriteDetails: any = [];
  ratingDetails: any = [];
  isRemovedFavorite: string = '0';
  rateArr: any = [];
  rate: any;
  totalUserRating = 0;
  oneStarPercentage = 0;
  twoStarPercentage = 0;
  threeStarPercentage = 0;
  fourStarPercentage = 0;
  fiveStarPercentage = 0;
  isRatingVerify = false;
  usersRatingText: any = '';
  usersRatingReasonText: any = '';
  lastIdRating: any;
  isratingUpdated = 0;
  piercings: any;
  tattoos: any;
  messageText: any;
  messageReasonText: any = '';
  showDiv: boolean = false;
  half: any = 'half';
  showMore = 'Show More';
  name = 'Get me on set';
  isShowReply: any = [];
  ratingReplyDetails: any = [];

  address: any = []

  // isFavorite := false;
  constructor(private utility: UtilityService,
    private userService: UserService,
    private route: ActivatedRoute,) { }
  ngOnInit() {
    this.loggedInUsersId = localStorage.getItem("usersId");
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.usersId = paramMap.get("id");
        this.userService.getRatingValByUserTalent(this.usersId).subscribe(data => {
          this.rateArr = data;
          this.rate = this.rateArr.data.userRatings;
          this.totalUserRating = this.rateArr.data.totalUserRating;
          this.oneStarPercentage = this.rateArr.data.oneStarPercentage;
          this.twoStarPercentage = this.rateArr.data.twoStarPercentage;
          this.threeStarPercentage = this.rateArr.data.threeStarPercentage;
          this.fourStarPercentage = this.rateArr.data.fourStarPercentage;
          this.fiveStarPercentage = this.rateArr.data.fiveStarPercentage;
        })
        this.userService.getUserProfileInfoTalent(this.usersId, this.loggedInUsersId)
          .subscribe(data => {
            this.talentProfileInfo = data;
            this.talentProfileInfo = this.talentProfileInfo.data.userDetails;
            this.address = this.talentProfileInfo.usersAddress[0]
            this.reviewDetails = this.talentProfileInfo.reviews;
            this.reviewDetails.forEach((element) => {
              let replyMsg = '';
              if (element.ratingReplyInfo.length > 0) {
                replyMsg = element.ratingReplyInfo[0].replyText;
              }
              this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' })
            });
            this.socialMediaLinksDetails = this.talentProfileInfo.socialMediaLinks;
            this.usersImagesDetails = this.talentProfileInfo.usersImages;
            this.piercings = this.talentProfileInfo.piercings;
            if (this.piercings == '1') {
              this.piercings = 'Yes';
            } else {
              this.piercings = 'No';
            }
            this.tattoos = this.talentProfileInfo.tattoos;
            if (this.tattoos == '1') {
              this.tattoos = 'Yes';
            } else {
              this.tattoos = 'No';
            }
          })
      }
    });

  }
  // favorite(){
  //   this.isFavorite = !this.isFavorite;
  //  }
  share() {
    this.utility.share();
  }

  showReply(i) {
    this.isShowReply[i].show = !this.isShowReply[i].show;
  }

  submitReply(i) {
    if (this.isShowReply[i].replyMessage == '') {
      this.isShowReply[i].messageReplyText = 'Reply is required';
      setTimeout(() => {
        this.isShowReply[i].messageReplyText = '';
      }, 2000)
      return false;
    }
    let ratingId = this.reviewDetails[i].id;
    let ratingReply = this.isShowReply[i].replyMessage;
    this.userService.replyRatingTalent(this.loggedInUsersId, ratingId, ratingReply)
      .subscribe(data => {
        this.ratingReplyDetails = data;
        this.isRating = this.ratingReplyDetails.data.isReply;
        if (this.isRating == '1') {
          this.isShowReply[i].show = false;
        }
      })
  }

  addToFavorite(talents, uId) {
    if (talents.isFavourite == '0') {
      this.userService.addFavoriteTalent(talents.usersId, uId)
        .subscribe(data => {
          this.favoriteDetails = data;
          this.isFavorite = this.favoriteDetails.data.isAddedToFavourite;
          if (this.isFavorite == '1') {
            talents.isFavourite = 1;
          } else {
            this.utility.showToast('Unable to add Favorite');
          }
        })
    } else {
      this.userService.removeFavoriteTalent(talents.usersId, uId)
        .subscribe(data => {
          this.favoriteDetails = data;
          this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
          if (this.isRemovedFavorite == '1') {
            talents.isFavourite = 0;
          } else {
            this.utility.showToast('Unable to remove Favorite');
          }
        })
    }
  }

  addRating() {
    // this.talentprofileService.addRating(this.usersId,this.loggedInUsersId,this.rate)
    //   .subscribe(data => {
    //     this.ratingDetails = data;
    //     this.isRating = this.ratingDetails.data.isAdded;
    //     if(this.isRating == '1')
    //     {
    //       this.isRatingVerify = true;
    //       this.lastIdRating = this.ratingDetails.data.lastId;
    //       this.usersRatingText = this.ratingDetails.data.ratingText;
    //     }
    // })
    this.isRatingVerify = true;
  }

  addRatingText() {
    if (this.usersRatingText == '') {
      this.messageText = 'Review is required';
      setTimeout(() => {
        this.messageText = '';
      }, 2000)
      return false;
    }
    this.userService.updateRatingTextTalent(this.lastIdRating, this.usersRatingText, this.rate)
      .subscribe(data => {
        this.ratingDetails = data;
        this.isRating = this.ratingDetails.data.isAdded;
        this.isratingUpdated = 1;
        setTimeout(() => {
          this.isratingUpdated = 0;
          this.isRatingVerify = false;
        }, 2000)
      })
  }

  addRatingAndReview() {
    if (this.usersRatingText == '') {
      this.messageText = 'Review is required';
      setTimeout(() => {
        this.messageText = '';
      }, 2000)
      return false;
    }
    if (this.usersRatingReasonText == '') {
      this.messageReasonText = 'Review reason is required';
      setTimeout(() => {
        this.messageReasonText = '';
      }, 2000)
      return false;
    }
    this.userService.addRatingAndReviewTalent(this.usersId, this.loggedInUsersId, this.usersRatingText, this.usersRatingReasonText, this.rate)
      .subscribe(data => {
        this.ratingDetails = data;
        this.isRating = this.ratingDetails.data.isAdded;
        this.isratingUpdated = 1;

        setTimeout(() => {
          this.isratingUpdated = 0;
          this.isRatingVerify = false;
        }, 2000)
      })
  }

  showmore() {
    this.half = (this.half == 'half') ? 'full' : 'half';
    this.showMore = (this.half == 'half') ? 'Show More' : 'Show Less';
  }
}
