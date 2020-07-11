import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router'
import { UserService } from '../../user.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  loggedInUsersId: string;
  usersId: string;
  vendorProfileInfo: any;
  reviewDetails: any;
  isShowReply = [];
  socialMediaLinksDetails: any;
  usersImagesDetails: any;
  rateArr: any;
  rate: any;
  totalUserRating: any;
  oneStarPercentage: any;

  constructor(private router:Router, private route:ActivatedRoute,private userService:UserService ) { }

  ngOnInit() {
    this.loggedInUsersId = localStorage.getItem("usersId") ;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("id")){
        this.usersId = paramMap.get("id");
    this.userService.getUserProfileInfo(this.usersId)
    .subscribe(data => {
      this.vendorProfileInfo = data; 
      this.vendorProfileInfo = this.vendorProfileInfo.data.userDetails;
      this.reviewDetails = this.vendorProfileInfo.reviews;
      this.reviewDetails.forEach((element) => {
        let replyMsg = '' ;
        if(element.ratingReplyInfo.length > 0) {
          replyMsg = element.ratingReplyInfo[0].replyText ;
        }
        this.isShowReply.push({show: false, replyMessage: replyMsg, messageReplyText: ''})
      });
      this.socialMediaLinksDetails = this.vendorProfileInfo.socialMediaLinks;
      this.usersImagesDetails = this.vendorProfileInfo.usersImages;
    })
    this.userService.getRatingValByUser(this.usersId).subscribe(data => {
      this.rateArr = data;
      this.rate = this.rateArr.data.userRatings;
      this.totalUserRating = this.rateArr.data.totalUserRating;
      // this.oneStarPercentage = this.rateArr.data.oneStarPercentage;
      // this.oneStarPercentage = this.rateArr.data.twoStarPercentage;
      // this.threeStarPercentage = this.rateArr.data.threeStarPercentage;
      // this.fourStarPercentage = this.rateArr.data.fourStarPercentage;
      // this.fiveStarPercentage = this.rateArr.data.fiveStarPercentage;
    })
  }
  });
  }

}
