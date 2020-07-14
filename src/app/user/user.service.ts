import { Injectable, EventEmitter } from '@angular/core';
import { UtilityService } from '../utility/utility.service';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { EditprofileModel, ChangepasswordModel, TalentModel, CrewModel, ProducerModel, MyGigsModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authStatusListener = new Subject<boolean>();
  constructor(private utility: UtilityService) { }
  
  updateUser(id: any, user: EditprofileModel) {
    let data = user;
    data['usersId'] = id;
    data['api_key'] = environment.API_KEY_VALUE;
    data['heading'] = "Primary address";
    data['type'] = "1";
    return this.utility.requestHttp(environment.API_URL + 'user/editProfile', data);
  }

  updateTalent(id: any, user: EditprofileModel) {
    let data = user;
    data['usersId'] = id;
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL + 'user/updateTalent', data);
  }

  updateCrew(id: any, user: EditprofileModel) {
    let data = user;
    data['usersId'] = id;
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL + 'user/updateCrew', data);
  }

  updateVendor(id:any,user: EditprofileModel) { 
    let data = user;
    data['usersId'] = id;
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL+'user/updateVendor',data);
  }

  uploadImage(uploadData: any, id: any) {
    const data = {
      profileImage: uploadData,
      usersId: id,
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/uploadProfileImage', data);
  }

  uploadResume(uploadData: any, id: any) {
    const data = {
      file: uploadData,
      usersId: id,
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/uploadResume', data);
  }

  uploadAdditionalImage(uploadData: any, id: any) {
    const data = {
      image: uploadData,
      usersId: id,
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/uploadAdditionalImage', data);
  }

  deleteAdditionalImage(id:any, uid: any) {
    const data = {        
        imageId: id,
        usersId: uid,
        api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL+'user/deleteAdditionalImage',data);
  }

  uploadFullBodyImage(uploadData: any, id: any) {
    const data = {
      image: uploadData,
      usersId: id,
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/uploadFullBodyImage', data);
  }

  verifyEmail(email: any, usersId: any) {
    const data = {
      email: email,
      usersId: usersId,
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/verifyEmail', data);
  }

  verifyPhone(phone: any, usersId: any) {
    const data = {
      phone: phone,
      usersId: usersId,
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/verifyPhone', data);
  }

  otpPhoneVerified(otp: any, usersId: any) {
    const data = {
      otp: otp,
      usersId: usersId,
      verificationFor: 'phone',
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/otpVerified', data);
  }

  otpEmailVerified(otp: any, usersId: any) {
    const data = {
      otp: otp,
      usersId: usersId,
      verificationFor: 'email',
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/otpVerified', data);
  }

  getUserEmailNotificationMap(usersId: any, usersTypeId) {
    const data = {
      usersId: usersId,
      usersTypeId: ["3","4","5","6"],
      api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL + 'user/getUserEmailNotificationMap', data);
  }

  updateUserEmailNotifications(usersId:any, status, mapId, notificationId, relatedVal) {
    const data = {        
        usersId: usersId,
        status: status,
        mapId: mapId,
        notificationId: notificationId,
        relatedVal: relatedVal,
        api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL+'user/updateUserEmailNotifications',data);
  }

  //Forgot Password
  recoverPassword(email: string) {
    let data = email;
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL + 'user/forgetPassword', data);
  }

  changePassword(user: ChangepasswordModel, userEmail: any) {
    //newPassword
    let data = user;
    data['userEmail'] = userEmail;
    data['api_key'] = environment.API_KEY_VALUE;

    return this.utility.requestHttp(environment.API_URL + 'user/changePassword', data);
  }

  getTalents(usersId) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId
    };
    return this.utility.requestHttp(environment.API_URL + 'user/getTalents', (data));
  }

  getCrews(usersId) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId
    };
    return this.utility.requestHttp(environment.API_URL + 'user/getCrews', (data));
  }
  
  getProducers(usersId) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId
    };
    return this.utility.requestHttp(environment.API_URL + 'user/getProducers', (data));
  }

  getVendors(usersId) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId
    };
    return this.utility.requestHttp(environment.API_URL + 'user/getVendors', (data));
  }

  searchUsers(user: TalentModel, usersId: any) {
    let data = user;
    data['usersId'] = usersId;
    data['usersType'] = '3';
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL + 'search/searchUsers', (data));
  }

  searchCrew(user: CrewModel, usersId: any) {
    let data = user;
    data['usersId'] = usersId;
    data['usersType'] = '5';
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL + 'search/searchUsers', (data));
  }

  searchProducer(user: ProducerModel, usersId: any) {
    let data = user;
    data['usersId'] = usersId;
    data['usersType'] = '4';
    data['api_key'] = environment.API_KEY_VALUE;
    return this.utility.requestHttp(environment.API_URL + 'search/searchUsers', (data));
  }


  getUserProfileInfoTalent(usersId: any, loggedInUsersId: string) {
    const data = {
      usersId: usersId,
      usersType: 'Talent',
      api_key: environment.API_KEY_VALUE,
      loggedInUsersId: loggedInUsersId
    };
    return this.utility.requestHttp(environment.API_URL + 'user/getUserProfileInfo', (data));
  }

  addFavoriteTalent(talentId, usersId, moduleId?, relatedTypeId?) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      moduleId: moduleId,
      relatedId: talentId,
      relatedTypeId: relatedTypeId,
      usersId: usersId,
    };
    return this.utility.requestHttp(environment.API_URL + 'favourite/addToFavourite', (data), 1);
  }

  removeFavoriteTalent(talentId, usersId, moduleId?, relatedTypeId?) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      moduleId: moduleId,
      relatedId: talentId,
      relatedTypeId: relatedTypeId,
      usersId: usersId,
    };
    return this.utility.requestHttp(environment.API_URL + 'favourite/removeFromFavourite', (data), 1);
  }

  getRatingValByUserTalent(usersId: any) {
    const data = {
      usersId: usersId,
      api_key: environment.API_KEY_VALUE
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/getRatingValByUser', (data));
  }

  addRatingTalent(usersId, ratingBy, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingBy: ratingBy,
      ratingVal: ratingVal,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/addRating', (data));
  }

  updateRatingTextTalent(ratingId, ratingText, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      ratingId: ratingId,
      ratingText: ratingText,
      ratingVal: ratingVal,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/updateRatingText', (data));
  }

  addRatingAndReviewTalent(usersId, ratingBy, ratingText, ratingReasonText, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingBy: ratingBy,
      ratingText: ratingText,
      ratingReasonText: ratingReasonText,
      ratingVal: ratingVal
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/addRatingAndReview', (data));
  }

  replyRatingTalent(usersId, ratingId, ratingReply) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingId: ratingId,
      ratingReply: ratingReply,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/replyRating', (data));
  }

  getUserProfileInfoCrew(usersId: any, loggedInUsersId?) {
    const data = {
      usersId: usersId,
      usersType: 'Crew',
      api_key: environment.API_KEY_VALUE,
      loggedInUsersId: loggedInUsersId
    };
    return this.utility.requestHttp(environment.API_URL + 'user/getUserProfileInfo', (data));
  }

  getRatingValByUserCrew(usersId: any) {
    const data = {
      usersId: usersId,
      api_key: environment.API_KEY_VALUE
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/getRatingValByUser', (data));
  }

  addRatingCrew(usersId, ratingBy, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingBy: ratingBy,
      ratingVal: ratingVal,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/addRating', (data));
  }

  replyRatingCrew(usersId, ratingId, ratingReply) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingId: ratingId,
      ratingReply: ratingReply,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/replyRating', (data));
  }

  updateRatingTextCrew(ratingId, ratingText, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      ratingId: ratingId,
      ratingText: ratingText,
      ratingVal: ratingVal,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/updateRatingText', (data));
  }

  addRatingAndReviewCrew(usersId, ratingBy, ratingText, ratingReasonText, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingBy: ratingBy,
      ratingText: ratingText,
      ratingReasonText: ratingReasonText,
      ratingVal: ratingVal
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/addRatingAndReview', (data));
  }

  getUserProfileInfoProducer(usersId: any, loggedInUsersId) {
    const data = {
      usersId: usersId,
      usersType: 'Producer',
      api_key: environment.API_KEY_VALUE,
      loggedInUsersId: loggedInUsersId
    };
    return this.utility.requestHttp(environment.API_URL + 'user/getUserProfileInfo', (data));
  }

  addFavoriteProducer(poducerId, usersId) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      moduleId: 1,
      relatedId: poducerId,
      relatedTypeId: 4,
      usersId: usersId,
    };
    return this.utility.requestHttp(environment.API_URL + 'favourite/addToFavourite', (data));
  }

  removeFavoriteProducer(poducerId, usersId) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      moduleId: 1,
      relatedId: poducerId,
      relatedTypeId: 4,
      usersId: usersId,
    };
    return this.utility.requestHttp(environment.API_URL + 'favourite/removeFromFavourite', (data));
  }

  getRatingValByUserProducer(usersId: any) {
    const data = {
      usersId: usersId,
      api_key: environment.API_KEY_VALUE
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/getRatingValByUser', (data));
  }

  addRatingProducer(usersId, ratingBy, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingBy: ratingBy,
      ratingVal: ratingVal,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/addRating', (data));
  }

  updateRatingTextProducer(ratingId, ratingText, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      ratingId: ratingId,
      ratingText: ratingText,
      ratingVal: ratingVal,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/updateRatingText', (data));
  }

  addRatingAndReviewProducer(usersId, ratingBy, ratingText, ratingReasonText, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingBy: ratingBy,
      ratingText: ratingText,
      ratingReasonText: ratingReasonText,
      ratingVal: ratingVal
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/addRatingAndReview', (data));
  }

  replyRatingProducer(usersId, ratingId, ratingReply) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingId: ratingId,
      ratingReply: ratingReply,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/replyRating', (data));
  }
  MyGiglist(usersId, myGigsType) {
    const data = {
      myGigsType: myGigsType,
      api_key: environment.API_KEY_VALUE,
      usersId: usersId
    };
    return this.utility.requestHttpGet(environment.API_URL + `user/getUserGigs&api_key=${environment.API_KEY_VALUE}&usersId=${usersId}&myGigsType=${myGigsType}`);
  }

  favouriteList(usersId, searchData) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      moduleId: searchData.moduleId,
      date: searchData.date,
      radious: searchData.radious,
      gigActive: searchData.gigActive,
      status: searchData.status,
    };

    return this.utility.requestHttpGet(environment.API_URL + `favourite/getFavourites&${this.favouriteObjectToUrlString(data)}`);
  }

  favouriteDelete(removedSelectedArray) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      removedSelectedArray,
    };
    return this.utility.requestHttp(environment.API_URL + `favourite/removeFavourites`, data);
  }

  favouriteObjectToUrlString(obj) {
    let arr = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key + '=' + obj[key]);
      }
    };
    return arr.join('&');
  }


  //VENDROR PROFILE SERVICE

  getUserProfileInfo(usersId: any, loggedInUsersId?) {
    const data = {
      usersId: usersId,
      usersType: 'Vendor',
      loggedInUsersId: loggedInUsersId,
      api_key: environment.API_KEY_VALUE,
    };

    return this.utility.requestHttp(environment.API_URL + 'user/getUserProfileInfo', data);
  }

  getRatingValByUser(usersId: any) {
    const data = {
      usersId: usersId,
      api_key: environment.API_KEY_VALUE
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/getRatingValByUser', data);
  }

  addRating(usersId, ratingBy, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingBy: ratingBy,
      ratingVal: ratingVal,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/addRating', data);
  }

  replyRating(usersId, ratingId, ratingReply) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingId: ratingId,
      ratingReply: ratingReply,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/replyRating', data);
  }

  updateRatingText(ratingId, ratingText, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      ratingId: ratingId,
      ratingText: ratingText,
      ratingVal: ratingVal,
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/updateRatingText', data);
  }

  addRatingAndReview(usersId, ratingBy, ratingText, ratingReasonText, ratingVal) {
    const data = {
      api_key: environment.API_KEY_VALUE,
      usersId: usersId,
      ratingBy: ratingBy,
      ratingText: ratingText,
      ratingReasonText: ratingReasonText,
      ratingVal: ratingVal
    };
    return this.utility.requestHttp(environment.API_URL + 'rating/addRatingAndReview', data);
  }

  addFavorite(crewId, usersId, userType?) {
    let relatedTypeId;
    switch (userType) {
      case 'talent':
        relatedTypeId = 3;
        break;
      case 'crew':
        relatedTypeId = 5;
        break;
      case 'producer':
        relatedTypeId = 4;
        break;
      case 'vendor':
        break;
    }
    const data = {
      api_key: environment.API_KEY_VALUE,
      moduleId: 1,
      relatedId: crewId,
      relatedTypeId: relatedTypeId,
      usersId: usersId,
    };
    return this.utility.requestHttp(environment.API_URL + 'favourite/addToFavourite', data);
  }

  removeFavorite(crewId, usersId, userType) {
    let relatedTypeId;
    switch (userType) {
      case 'talent':
        relatedTypeId = 3;
        break;
      case 'crew':
        relatedTypeId = 5;
        break;
      case 'producer':
        relatedTypeId = 4;
        break;
      case 'vendor':
        break;
    }
    const data = {
      api_key: environment.API_KEY_VALUE,
      moduleId: 1,
      relatedId: crewId,
      relatedTypeId: relatedTypeId,
      usersId: usersId,
    };
    return this.utility.requestHttp(environment.API_URL + 'favourite/removeFromFavourite', data);
  }

  uploadVideo(uploadData: any, id:any) {
    const data = {        
        video: uploadData,
        usersId: id,
        api_key: environment.API_KEY_VALUE,
    };
    return this.utility.requestHttp(environment.API_URL+'user/uploadVideo',(data));
}
getAllVideos(id:any) {
  const data = {        
      usersId: id,
      api_key: environment.API_KEY_VALUE,
  };
  return this.utility.requestHttp(environment.API_URL+'user/getAllVideos',(data));
}
}
