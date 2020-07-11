import { Component, OnInit } from '@angular/core';
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
  producerProfileInfo:any = [];
  reviewDetails:any = [];
  socialMediaLinksDetails:any = [];
  usersImagesDetails:any = [];
  loggedInUsersId: string ;
  isFavorite: string = '0' ;
  favoriteDetails:any =[];
  isRemovedFavorite: string = '0' ;
  ratingDetails:any =[];
  rateArr:any = [];
  rate:any;
  totalUserRating = 0 ;
  oneStarPercentage = 0 ;
  twoStarPercentage = 0 ;
  threeStarPercentage = 0 ;
  fourStarPercentage = 0 ;
  fiveStarPercentage = 0 ;
  isRatingVerify = false;
  usersRatingText:any = '';
  usersRatingReasonText:any = '';
  lastIdRating:any;
  isratingUpdated = 0;
  isRating:string = '0';
  messageText:any;
  messageReasonText:any = '' ;
  half:any = 'half';
  showMore:any = 'Show More';
  name = 'Get me on set';
  showDiv: boolean = false;
  isShowReply: any = [];
  ratingReplyDetails:any =[];
  address: any = []
  constructor(private utility: UtilityService,
    private userService: UserService,
    private route: ActivatedRoute,) { }

  ngOnInit() { 
    this.loggedInUsersId = localStorage.getItem("usersId") ;
  this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if(paramMap.has("id")){
      this.usersId = paramMap.get("id");
  this.userService.getUserProfileInfoProducer(this.usersId,this.loggedInUsersId)
  .subscribe(data => {
    this.producerProfileInfo = data; 
    this.producerProfileInfo = this.producerProfileInfo.data.userDetails;
    this.address = this.producerProfileInfo.usersAddress[0]
    this.reviewDetails = this.producerProfileInfo.reviews;
    this.reviewDetails.forEach((element) => {
      let replyMsg = '' ;
      if(element.ratingReplyInfo.length > 0) {
        replyMsg = element.ratingReplyInfo[0].replyText ;
      }
      this.isShowReply.push({show: false, replyMessage: replyMsg, messageReplyText: ''})
    });
    this.socialMediaLinksDetails = this.producerProfileInfo.socialMediaLinks;
    this.usersImagesDetails = this.producerProfileInfo.usersImages;
  })
  this.userService.getRatingValByUserProducer(this.usersId).subscribe(data => {
    this.rateArr = data;
    this.rate = this.rateArr.data.userRatings;
    this.totalUserRating = this.rateArr.data.totalUserRating;
    this.oneStarPercentage = this.rateArr.data.oneStarPercentage;
    this.twoStarPercentage = this.rateArr.data.twoStarPercentage;
    this.threeStarPercentage = this.rateArr.data.threeStarPercentage;
    this.fourStarPercentage = this.rateArr.data.fourStarPercentage;
    this.fiveStarPercentage = this.rateArr.data.fiveStarPercentage;
  })
}
});
}
showReply(i) {
  this.isShowReply[i].show = !this.isShowReply[i].show ;
}

submitReply(i) {
  if(this.isShowReply[i].replyMessage == ''){
    this.isShowReply[i].messageReplyText = 'Reply is required';
    setTimeout(()=>{
      this.isShowReply[i].messageReplyText = '' ;
    },2000) 
    return false;
  }
  let ratingId = this.reviewDetails[i].id ;
  let ratingReply = this.isShowReply[i].replyMessage ;
  this.userService.replyRatingProducer(this.loggedInUsersId,ratingId, ratingReply)
      .subscribe(data => {
        this.ratingReplyDetails = data;
        this.isRating = this.ratingReplyDetails.data.isReply;
        if(this.isRating == '1')
        {
          this.isShowReply[i].show = false ;
        }
    })
}

addToFavorite(producers, uId){
  if(producers.isFavourite == '0'){
    this.userService.addFavoriteProducer(producers.usersId,uId)
    .subscribe(data => {
      this.favoriteDetails = data;
      this.isFavorite = this.favoriteDetails.data.isAddedToFavourite;
      if(this.isFavorite == '1'){
        producers.isFavourite = 1 ;
      }else{
        this.utility.showToast('Unable to add Favorite') ;
      }
    })
  }else{
    this.userService.removeFavoriteProducer(producers.usersId,uId)
    .subscribe(data => {
      this.favoriteDetails = data;
      this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
      if(this.isRemovedFavorite == '1'){
        producers.isFavourite = 0 ;
      }else{
        this.utility.showToast('Unable to remove Favorite') ;
      }
    })
  }
}

addRating()
{
  // this.producerprofileService.addRating(this.usersId,this.loggedInUsersId,this.rate)
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

    addRatingText()
    {
      if(this.usersRatingText == '')
      {
        this.messageText = 'Review is required';
        setTimeout(()=>{
          this.messageText = '' ;
        },2000) 
        return false;
      }
      this.userService.updateRatingTextProducer(this.lastIdRating,this.usersRatingText,this.rate)
        .subscribe(data => {
          this.ratingDetails = data;
          this.isRating = this.ratingDetails.data.isAdded;
          this.isratingUpdated = 1 ;
          setTimeout(()=>{
            this.isratingUpdated = 0 ;
            this.isRatingVerify = false;
           },2000) 
      })
    }

    addRatingAndReview(){
      if(this.usersRatingText == ''){
        this.messageText = 'Review is required';
        setTimeout(()=>{
          this.messageText = '' ;
        },2000) 
        return false;
      }
      if(this.usersRatingReasonText == ''){
        this.messageReasonText = 'Review reason is required';
        setTimeout(()=>{
          this.messageReasonText = '' ;
        },2000) 
        return false;
      }
      this.userService.addRatingAndReviewProducer(this.usersId,this.loggedInUsersId,this.usersRatingText,this.usersRatingReasonText, this.rate)
        .subscribe(data => {
          this.ratingDetails = data;
          this.isRating = this.ratingDetails.data.isAdded;
          this.isratingUpdated = 1 ;
    
          setTimeout(()=>{
            this.isratingUpdated = 0 ;
            this.isRatingVerify = false;
           },2000) 
      })
    }

    showmore()
    {
      this.half = (this.half == 'half')? 'full':'half';
      this.showMore = (this.half == 'half')? 'Show More':'Show Less';
    }
}
