(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password/change-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password/change-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<ion-content style=\"--background: #F5F5F5 !important;\">\r\n\t<div class=\"flex-shrink-0 mb-5\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12 mt-3\">\r\n\t\t\t\t\t<h5 class=\"size-font\">Change Password </h5>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"\" style=\" width: 100%;\">\r\n\t\t\t\t\t\t\t<div class=\"border-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\" style=\"background: #F5F5F5 !important;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"resetForm\" (submit)=\"onSubmit()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"\" class=\"size-font\">New Password *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" formControlName=\"newPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.newPassword.errors }\" autocomplete=\"off\"/>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.newPassword.errors\" class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.newPassword.errors.required\"  class=\"text-danger\">Password is Required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.newPassword.errors.minlength\" class=\"text-danger\">Password must be at least 6 characters</div>\r\n\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"\" class=\"size-font\">Confirm Password *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" autocomplete=\"off\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"form-group\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.confirmPassword.errors.required\"  class=\"text-danger\">Confirm Password is Required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.confirmPassword.errors.mustMatch\" class=\"text-danger\">Confirm Password must match with password </div> \r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary shadow-sm\">Change\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPassword</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-3 text-muted size-font \">* marked fields are mandatory</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/display/display.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/display/display.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-back-header></app-back-header>\r\n<ion-content>\r\n\t<div *ngIf=\"userProfileInfo\">\r\n\t\t<div><img class=\"profileimg\" [src]=\"userProfileInfo.profileImage\">\r\n\t\t\t<div class=\"profile_col\" *ngIf=\"profileVideo != null\">\r\n\t\t\t\t<video height=\"212\"  class=\"profile_video w-100\" controls disabled=\"true\" #videoPlayer>\r\n\t\t\t\t  <source [src]=\"profileVideo\" type=\"video/mp4\">\r\n\t\t\t\t</video>\r\n\t\t\t   </div>\r\n\t\t\t<ion-row style=\"margin-top: 5px;\">\r\n\t\t\t\t<!-- <ion-col size=\"2\">\r\n\t\t\t\t\t<a *ngIf=\"userProfileInfo.email\" href=\"mailto:{{userProfileInfo.email}}\" target=\"_top\" class=\"p-3\"\r\n\t\t\t\t\t\tdata-toggle=\"tooltip\" data-placement=\"top\" title=\"Email now\"><i\r\n\t\t\t\t\t\t\tclass=\"fas fa-envelope fa-1x text-secondary\"></i></a>\r\n\t\t\t\t</ion-col> -->\r\n\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t<a *ngIf=\"userProfileInfo.phone\" href=\"tel:{{userProfileInfo.phone}}\" class=\"p-3\"\r\n\t\t\t\t\t\tdata-toggle=\"tooltip\" data-placement=\"top\" title=\"Call now\"><i\r\n\t\t\t\t\t\t\tclass=\"fas fa-phone   fa-rotate-90 text-secondary\"></i></a>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t<span class=\"p-3\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n\t\t\t\t\t\tdata-original-title=\"Share profile\" (click)=\"share()\"><i\r\n\t\t\t\t\t\t\tclass=\"fas fa-share-alt fa-1x text-secondary\"></i></span>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t<span class=\"p-3\" [routerLink]=\"['/messages/gigchat/',userProfileInfo.usersId]\"\r\n\t\t\t\t\t\t*ngIf=\"loggedInUsersId\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n\t\t\t\t\t\tdata-original-title=\"Message now\"><i class=\"fas fa-comments fa-1x text-secondary\"></i></span>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"4\">\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"2\" (click)=\"addToFavorite()\" *ngIf=\"isLoggedIn\">\r\n\t\t\t\t\t<span class=\"p-3\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n\t\t\t\t\t\tdata-original-title=\"Message now\">\r\n\t\t\t\t\t\t<i class=\"far fa-heart fa-1x text-dark\" *ngIf=\"userProfileInfo.isFavourite == 0\"></i>\r\n\t\t\t\t\t\t<i class=\"fas fa-heart fa-1x text-danger\" *ngIf=\"userProfileInfo.isFavourite == 1\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</div>\r\n\t\t<div style=\"padding: 3px\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h5 class=\"card-title\" style=\"margin-bottom: 0px ; margin-top: 8px;\">\r\n\t\t\t\t\t{{userProfileInfo.fullName}}\r\n\t\t\t\t</h5>\r\n\t\t\t\t<div class=\"mt-2\">\r\n\t\t\t\t\t<!-- <span class=\"size-font\">{{userProfileInfo.age}},{{userProfileInfo.gender | gendertype}},\r\n\t\t\t\t\t\t{{userProfileInfo.heightInFeet}},\r\n\t\t\t\t\t\t{{userProfileInfo.weight}} lb</span> -->\r\n\r\n\t\t\t\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t\t\t\t<ion-col size=\"2\" *ngIf=\"userProfileInfo.age\" style=\"padding: 0px;\"><span class=\"size-font\">{{userProfileInfo.age}}Yrs,</span></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\" *ngIf=\"userProfileInfo.gender\" style=\"padding: 0px;\"><span class=\"size-font\">{{userProfileInfo.gender | gendertype}},</span></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\" *ngIf=\"userProfileInfo.height\" style=\"padding: 0px;\"><span class=\"size-font\">{{userProfileInfo.heightInFeet}},</span></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\" *ngIf=\"userProfileInfo.weight\" style=\"padding: 0px;\"><span class=\"size-font\">{{userProfileInfo.weight}}lb</span></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"4\"></ion-col>\r\n\t\t\t\t\t\t  </ion-row>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t<bar-rating [(rate)]=\"rate\" *ngIf=\"loggedInUsersId != null\" (rateChange)=\"addRating()\" [max]=\"5\" >\r\n\t\t\t\t\t</bar-rating>\r\n\t\t\t\t\t<bar-rating [(rate)]=\"rate\" *ngIf=\"loggedInUsersId == null\" [max]=\"5\" ></bar-rating>\r\n\t\t\t\t\t<i class=\"fas fa-info-circle fa-lg text-dark ml-2\" style=\"margin-top: 20px;\"\r\n\t\t\t\t\t\t(click)=\"showDiv = !showDiv\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\" *ngIf=\"isRatingVerify\">\r\n\t\t\t\t\t<div class=\"my-3\">\r\n\t\t\t\t\t\t<textarea class=\"form-control\" [ngClass]=\"{ 'inValid': messageText}\"\r\n\t\t\t\t\t\t\t[(ngModel)]=\"usersRatingText\"></textarea>\r\n\t\t\t\t\t\t<input [(ngModel)]=\"lastIdRating\" type=\"hidden\">\r\n\t\t\t\t\t\t<div *ngIf=\"messageText\">\r\n\t\t\t\t\t\t\t<ion-label color=\"danger\"> {{messageText}}</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"my-3\">\r\n\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"How do you know this person?\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'inValid': messageReasonText}\" [(ngModel)]=\"usersRatingReasonText\"></textarea>\r\n\t\t\t\t\t\t<div *ngIf=\"messageReasonText\">\r\n\t\t\t\t\t\t\t<ion-label color=\"danger\">{{messageReasonText}}</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"my-3\">\r\n\t\t\t\t\t\t<ion-button (click)=\"addRatingAndReview()\">SUBMIT</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"showDiv\">\r\n\t\t\t\t\t<div class=\"h6\">{{rate | number : '1.1-1'}} out of 5</div>\r\n\t\t\t\t\t<div *ngIf=\"totalUserRating > '1'\">{{totalUserRating | number : '1.0-0'}} users ratings</div>\r\n\t\t\t\t\t<div *ngIf=\"totalUserRating == '1'\">{{totalUserRating | number : '1.0-0'}} user rating</div>\r\n\t\t\t\t\t<div class=\"mb-2\">\r\n\t\t\t\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t5 Star\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t\t\t<ion-progress-bar color=\"warning\" style=\"padding-top: 14px;\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{fiveStarPercentage}}\" buffer=\"1\"></ion-progress-bar>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t{{fiveStarPercentage * 100 | number : '1.0-0'}}%\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t4 Star\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t\t\t<ion-progress-bar color=\"warning\" style=\"padding-top: 14px;\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{fourStarPercentage}}\" buffer=\"1\"></ion-progress-bar>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t{{fourStarPercentage * 100 | number : '1.0-0'}}%\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t3 Star\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t\t\t<ion-progress-bar color=\"warning\" style=\"padding-top: 14px;\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{threeStarPercentage}}\" buffer=\"1\"></ion-progress-bar>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t{{threeStarPercentage | number : '1.0-0'}}%\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t2 Star\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t\t\t<ion-progress-bar color=\"warning\" style=\"padding-top: 14px;\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{twoStarPercentage}}\" buffer=\"1\"></ion-progress-bar>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t{{twoStarPercentage * 100 | number : '1.0-0'}}%\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t1 Star\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t\t\t<ion-progress-bar color=\"warning\" style=\"padding-top: 14px;\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{oneStarPercentage}}\" buffer=\"1\"></ion-progress-bar>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t\t\t{{oneStarPercentage * 100 | number : '1.0-0'}}%\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"size-font\">{{address.fullAddress}}</span>\r\n\t\t\t\t<!-- <div>\r\n\t\t\t\t\r\n\t\t\t\t\t<span class=\"size-font\">Age:{{userProfileInfo.age}}</span>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<!-- <div>\r\n\t\t\t\t\t<span class=\"size-font\">Gender:{{userProfileInfo.gender | gendertype}}</span>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<!-- <div>\r\n\t\t\t\t\t<span class=\"size-font\">Height:{{userProfileInfo.heightInFeet}}</span>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<!-- <div>\r\n\t\t\t\t\t<span class=\"size-font\">Weight:\r\n\t\t\t\t\t\t{{userProfileInfo.weight}} lb</span>\r\n\t\t\t\t</div> -->\r\n\r\n\t\t\t\t<br>\r\n\t\t\t\t<span class=\"size-font\"\r\n\t\t\t\t\t*ngIf=\"userProfileInfo.usersBio && showMore == 'Show More' && userProfileInfo.usersBio.length > 200\">\r\n\t\t\t\t\t{{userProfileInfo.usersBio | viewmore:'half' | titlecase}}\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"size-font\"\r\n\t\t\t\t\t*ngIf=\"userProfileInfo.usersBio && showMore == 'Show Less' || !(userProfileInfo.usersBio.length >  200)\">\r\n\t\t\t\t\t{{userProfileInfo.usersBio}}\r\n\t\t\t\t</span>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.usersBio.length > 200\">\r\n\t\t\t\t\t<ion-label color=\"primary\" (click)=\"showmore()\" [innerHtml]=\"showMore\"></ion-label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style=\"margin-top: 8px;\">\r\n\t\t\t\t\t<span class=\"size-font\">Joined on {{userProfileInfo.registerDateTime}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style=\"margin-top: 8px;\">\r\n\t\t\t\t\t<div *ngFor=\"let socialMediaLinks of socialMediaLinksDetails; let i = index\">\r\n\t\t\t\t\t\t<span class=\"size-font\" *ngIf=\"socialMediaLinks.socialMediaLink\">\r\n\t\t\t\t\t\t\tIMDB Link : <a href=\"{{socialMediaLinks.socialMediaLink}}\"\r\n\t\t\t\t\t\t\t\ttarget=\"_blank\">{{socialMediaLinks.socialMediaLink}}</a>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"userProfileInfo.websiteLink\">\r\n\t\t\t\t\t\t<span class=\"size-font\">\r\n\t\t\t\t\t\t\tWebsite : <a href=\"{{userProfileInfo.websiteLink}}\"\r\n\t\t\t\t\t\t\t\ttarget=\"_blank\">{{userProfileInfo.websiteLink}}</a>\r\n\t\t\t\t\t\t\t<ion-icon slot=\"end\" name=\"open\" color=\"medium\" style=\"font-size: 15px;\r\n\t\t\t\t\t\t\t\tmargin-left: 5px;\">\r\n\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"userProfileInfo.resume\">\r\n\t\t\t\t\t\t<span class=\"size-font\">\r\n\t\t\t\t\t\t\tResume : <a href=\"{{userProfileInfo.resume}}\" target=\"_blank\">Click To Download</a>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12 mt-4\" *ngIf=\"userProfileInfo.usersTypeId.indexOf('6') != -1\">\r\n\t\t\t\t<h5 class=\"card-title\">Vendor info</h5>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.equipmentRentalDetails\">\r\n\t\t\t\t\t<span class=\"size-font\"> Equipment Rentals : {{userProfileInfo.equipmentRentalDetails}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.accounting != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Accounting / Payroll : {{userProfileInfo.accounting == '1' ? 'Yes' : 'No'}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.audio != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Audio / Sound : {{userProfileInfo.audio == '1' ? 'Yes' : 'No'}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.catering != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Catering : {{userProfileInfo.catering == '1' ? 'Yes' : 'No'}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.distribution  != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Distribution : {{userProfileInfo.distribution == '1' ? 'Yes' : 'No'}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.insurance != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Insurance : {{userProfileInfo.insurance == '1' ? 'Yes' : 'No'}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.legal  != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Legal : {{userProfileInfo.legal == '1' ? 'Yes' : 'No'}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.postProduction != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Post Production : {{userProfileInfo.postProduction == '1' ? 'Yes' : 'No'}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.propsRental != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Props Rental & Supplies : {{userProfileInfo.propsRental == '1' ? 'Yes' : 'No'}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.security != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Security : {{userProfileInfo.security == '1' ? 'Yes' : 'No'}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.stagesStudios != ''\" class=\"m-0\">\r\n\t\t\t\t\t<span class=\"size-font\"> Stages & Studios : {{userProfileInfo.stagesStudios == '1' ? 'Yes' : 'No'}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.talentCasting != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Talent / Casting : {{userProfileInfo.talentCasting == '1' ? 'Yes' : 'No'}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.transportation != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Transportation : {{userProfileInfo.transportation == '1' ? 'Yes' : 'No'}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.travelAccommodations != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Travel / Accommodations : {{userProfileInfo.travelAccommodations == '1' ? 'Yes' : 'No'}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.wardrobeCostumes != ''\">\r\n\t\t\t\t\t<span class=\"size-font\"> Wardrobe / Costumes : {{userProfileInfo.wardrobeCostumes == '1' ? 'Yes' : 'No'}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12 mt-4\" *ngIf=\"userProfileInfo.usersTypeId.indexOf('5') != -1\">\r\n\t\t\t\t<h5 class=\"card-title\">Crew info</h5>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.jobInterestedInDetails\">\r\n\t\t\t\t\t<span class=\"size-font\">Job interested in : {{userProfileInfo.jobInterestedInDetails}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.experiencedInDetails\">\r\n\t\t\t\t\t<span class=\"size-font\">Experienced in : {{userProfileInfo.experiencedInDetails}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.equipmentOwned\">\r\n\t\t\t\t\t<span class=\"size-font\">Equipment Owned : {{userProfileInfo.equipmentOwnedText}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12 mt-4\" *ngIf=\"userProfileInfo.usersTypeId.indexOf('3') != -1\">\r\n\t\t\t\t<h5 class=\"card-title\">Talent info</h5>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.hairColor\">\r\n\t\t\t\t\t<span class=\"size-font\"> Hair Color : {{userProfileInfo.hairColor | titlecase}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"piercings\">\r\n\t\t\t\t\t<span class=\"size-font\">Piercings : {{piercings}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"tattoos\">\r\n\t\t\t\t\t<span class=\"size-font\">Tattoos : {{tattoos}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.willingToTravelDetails\">\r\n\t\t\t\t\t<span class=\"size-font\">Willing To Travel? : {{userProfileInfo.willingToTravelDetails}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.unionDetails\">\r\n\t\t\t\t\t<span class=\"size-font\">Union? : {{userProfileInfo.unionDetails}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"userProfileInfo.race\">\r\n\t\t\t\t\t<span class=\"size-font\">Race : {{userProfileInfo.race | titlecase}} </span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12 mt-4\">\r\n\t\t\t\t<h5 class=\"card-title\">Photos/Videos</h5>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"3\" *ngFor=\"let usersImages of usersImagesDetails; let i = index\">\r\n\t\t\t\t\t\t<img [src]=\"usersImages.image\" class=\"subImg\">\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<div *ngIf=\"usersImagesDetails.length == 0\" class=\"alert alert-danger alert-dismissible fade show\"\r\n\t\t\t\t\trole=\"alert\">\r\n\t\t\t\t\tNo photos or videos found.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12 mt-4\">\r\n\t\t\t\t<h5 class=\"card-title\">Rating & Reviews</h5>\r\n\t\t\t\t<div class=\"mb-3\" *ngFor=\"let reviews of reviewDetails; let i = index\">\r\n\t\t\t\t\t<small class=\"bg-success text-light rounded-sm p-1\">{{reviews.ratingVal}}<i\r\n\t\t\t\t\t\t\tclass=\"fas fa-star ml-1\"></i></small>\r\n\t\t\t\t\t<strong class=\"ml-2 size-font\"><span>{{reviews.ratingByInfo.fullName}}</span>, Plainfield,\r\n\t\t\t\t\t\t{{reviews.createdAt * 1000 | date:'dd/MM/yyyy'}}</strong><br>\r\n\t\t\t\t\t<span class=\"size-font\">{{reviews.ratingText}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<ion-content>\r\n\t<div class=\"fixed-heading\">\r\n\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t<!-- <ion-col class=\"tabItem\" size=\"3\" [ngClass]=\"{'highlightedTab': showTab === 'editTab'}\"\r\n\t\t\t\t(click)=\"changeTab('editTab')\">\r\n\t\t\t\t<img src=\"assets/images/basic_info.svg\">\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col class=\"tabItem\" size=\"2\" [ngClass]=\"{'highlightedTab': showTab === 'additionalPhotoTab'}\"\r\n\t\t\t\t(click)=\"changeTab('additionalPhotoTab')\">\r\n\t\t\t\t<img src=\"assets/images/additional_photos.svg\">\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col class=\"tabItem\" size=\"2\" [ngClass]=\"{'highlightedTab': showTab === 'uploadVideo'}\"\r\n\t\t\t\t(click)=\"changeTab('uploadVideo')\">\r\n\t\t\t\t<img src=\"assets/images/upload_video.svg\">\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col class=\"tabItem\" size=\"2\" (click)=\"changeTab('notificationTab')\"\r\n\t\t\t\t[ngClass]=\"{'highlightedTab': showTab === 'notificationTab'}\">\r\n\t\t\t\t<img src=\"assets/images/email_notification.svg\">\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col class=\"tabItem\" size=\"3\" [ngClass]=\"{'highlightedTab': showTab === 'profileTab'}\" [routerLink]=\"['/user/display',usersId,usersType]\">\r\n\t\t\t\t<img src=\"assets/images/view_profile.svg\">\r\n\t\t\t</ion-col> -->\r\n\r\n\t\t\t<div class=\"tabItem\" [ngClass]=\"{'highlightedTab': showTab === 'editTab'}\" (click)=\"changeTab('editTab')\">\r\n\t\t\t\t<img src=\"assets/images/basic_info.svg\"></div>\r\n\t\t\t<div class=\"tabItem\" [ngClass]=\"{'highlightedTab': showTab === 'additionalPhotoTab'}\"\r\n\t\t\t\t(click)=\"changeTab('additionalPhotoTab')\"><img src=\"assets/images/additional_photos.svg\" ></div>\r\n\t\t\t<div class=\"tabItem\" [ngClass]=\"{'highlightedTab': showTab === 'uploadVideo'}\"\r\n\t\t\t\t(click)=\"changeTab('uploadVideo')\"> <img src=\"assets/images/upload_video.svg\" style=\"height: 22px;\r\n\t\t\t\twidth: 28px;\"></div>\r\n\t\t\t<div class=\"tabItem\" (click)=\"changeTab('notificationTab')\"\r\n\t\t\t\t[ngClass]=\"{'highlightedTab': showTab === 'notificationTab'}\"> <img\r\n\t\t\t\t\tsrc=\"assets/images/email_notification.svg\"></div>\r\n\t\t\t<div class=\"tabItem\" [ngClass]=\"{'highlightedTab': showTab === 'profileTab'}\"\r\n\t\t\t\t[routerLink]=\"['/user/display',usersId,usersType]\"> <img src=\"assets/images/view_profile.svg\"></div>\r\n\t\t</ion-row>\r\n\t</div>\r\n\t<div class=\"flex-shrink-0 \">\r\n\t\t<div class=\"container\" *ngIf=\"showTab == 'editTab'\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-9 mt-3\">\r\n\t\t\t\t\t\t\t<div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n\t\t\t\t\t\t\t\t<div class=\"tab-pane fade show active\" id=\"v-pills-basic\" role=\"tabpanel\"\r\n\t\t\t\t\t\t\t\t\taria-labelledby=\"v-pills-basic-tab\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card shadow-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body pb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"editform\" (submit)=\"onUpdate()\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tenctype=\"multipart/form-data\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row mt-2 \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-row style=\"width: 100%;padding-left: 12px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-form-label \">Referral\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcode</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">{{referralCode}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Use\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taccount as</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"width: 92%;\" class=\"ml-3 \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<angular2-multiselect [data]=\"dropdownList\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersType\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onSelect)=\"toggleUser($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onDeSelect)=\"toggleDeSelectUser($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onSelectAll)=\"onSelectAll($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onDeSelectAll)=\"onDeSelectAll($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[settings]=\"dropdownSettings\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</angular2-multiselect>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 offset-lg-4 col-sm-6 offset-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-file custom-file-photo\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-file-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inputGroupFile02\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"profileImage\" #imageInput\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addPhoto('profileImage')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-file-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inputGroupFile02\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"inputGroupFileAddon02\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!profileImage\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/talent1.png\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"rounded float-left\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talt=\"Upload your photo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width:80px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"profileImage\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc={{profileImage}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"rounded float-left\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talt=\"Upload your photo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width:80px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Full\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"fullName\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.fullName\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.fullName.errors }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tuppercase>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.fullName.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.fullName.errors.required\">Full Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Email\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taddress *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"email\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.email\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.email.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.email.errors.required\">Email address\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Display\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\temail publicly</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customSwitch1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"isEmailPublic\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.isEmailPublic\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customSwitch1\"></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-secondary\">Email address will be\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplayed publicly if the switch is on.</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Phone\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnumber *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"phone\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.phone\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tappPhoneMask>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.phone.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.phone.errors.required\">Phone number\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.phone.errors.maxlength\">Phone number\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmust be at most 10 characters</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"isPhoneVerify\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Please enter the phone verified code\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control mt-3\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"phoneVerify\" id=\"phoneVerify\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"otpPhone\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"my-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"otpPhoneVerified()\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary shadow-sm btn-sm\">Verify\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnow</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"!isPhoneVerify\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'closeLink': closePhoneLink }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label offset-sm-6 offset-lg-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" (click)=\"verifyPhone()\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"text-link\">Verify now</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Display\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tphone publicly</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customSwitch2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"isPhonePublic\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.isPhonePublic\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customSwitch2\"></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-secondary\">Phone number will be\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplayed publicly if the switch is on.</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Gender\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"gender\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.gender\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Any</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Male</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Female</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted &&  f.gender.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.gender.errors.required\">Gender is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Location\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\" style=\"position: relative;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"locationInput\" ngx-google-places-autocomplete\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[options]=\"{types: [],componentRestrictions: { country: 'USA' } }\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(onAddressChange)=\"handleAddressChange($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"fullAddress\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"fullAddress\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.fullAddress.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.fullAddress.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.fullAddress.errors.required\">Address\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tis required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Display\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taddress publicly</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customSwitch3\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"isAddressPublic\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.isAddressPublic\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customSwitch3\"></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-secondary\">Address will be displayed\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpublicly if the switch is on.</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">User\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trating/Link to all reviews </label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"usersRating\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.usersRating\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">BIO\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"usersBio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.usersBio\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div formArrayName=\"imdbLink\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let imdb of imdbForms.controls; let i=index;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">IMDB/Social\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmedia link</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4 d-flex\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"https://example.com\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" formControlName=\"link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"imdbForms.controls.length == i + 1 \"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"shadow-sm btn btn-primary\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addImdb(); $event.preventDefault();\"><i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-plus\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"i > 0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"shadow-sm btn btn-danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"deleteImdb(i)\"><i\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-times\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Website\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlink</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"https://example.com\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" formControlName=\"websiteLink\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.websiteLink\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Upload\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresume</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"uploadResume('resume')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-file\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input class=\"custom-file-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inputGroupFile02\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"resume\" #resumeInput> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"custom-file-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inputGroupFile02\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"resume\" #resumeInput\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"uploadResume(resumeInput)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-file-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inputGroupFile02\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"inputGroupFileAddon02\">Choose\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfile</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div><small\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"uploadedFile\">{{uploadedFile}}</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-secondary\">File type: doc, pdf |\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMax\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfile size: 5mb</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row submit_basic_info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-8 offset-lg-4 offset-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body pt-0\" *ngIf=\"vendorTab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"vendorEditform\" (submit)=\"vendorUpdate()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Accounting\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/ Payroll *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"accounting\" id=\"inlineRadio3\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.accounting\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.accounting.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio3\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"accounting\" id=\"inlineRadio4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.accounting\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.accounting.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio4\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Audio\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/ Sound *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"audio\" id=\"inlineRadio13\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" [(ngModel)]=\"usersDetails.audio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.audio.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio13\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"audio\" id=\"inlineRadio14\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\" [(ngModel)]=\"usersDetails.audio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.audio.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio14\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Catering\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"catering\" id=\"inlineRadio15\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" [(ngModel)]=\"usersDetails.catering\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.catering.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio15\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"catering\" id=\"inlineRadio16\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\" [(ngModel)]=\"usersDetails.catering\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.catering.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio16\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Distribution\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"distribution\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio17\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.distribution\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.distribution.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio17\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"distribution\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio18\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.distribution\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.distribution.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio18\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Equipment\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRentals</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of equipmentRentalArray\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectEquimentRendalData($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.selected\" type=\"checkbox\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"defaultCheck1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.label}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Insurance\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"insurance\" id=\"inlineRadio19\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" [(ngModel)]=\"usersDetails.insurance\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.insurance.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio19\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"insurance\" id=\"inlineRadio20\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\" [(ngModel)]=\"usersDetails.insurance\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.insurance.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio20\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Legal\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"legal\" id=\"inlineRadio21\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" [(ngModel)]=\"usersDetails.legal\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.legal.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio21\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"legal\" id=\"inlineRadio22\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\" [(ngModel)]=\"usersDetails.legal\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.legal.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio22\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Post\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"postProduction\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio23\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.postProduction\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.postProduction.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio23\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"postProduction\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio24\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.postProduction\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.postProduction.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio24\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Props\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRental & Supplies *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"propsRental\" id=\"inlineRadio25\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" [(ngModel)]=\"usersDetails.propsRental\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.propsRental.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio25\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"propsRental\" id=\"inlineRadio26\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\" [(ngModel)]=\"usersDetails.propsRental\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.propsRental.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio26\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Security\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"security\" id=\"inlineRadio27\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" [(ngModel)]=\"usersDetails.security\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.security.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio27\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"security\" id=\"inlineRadio28\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\" [(ngModel)]=\"usersDetails.security\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.security.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio28\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Stages\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t& Studios *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"stagesStudios\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio29\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.stagesStudios\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.stagesStudios.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio29\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"stagesStudios\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio30\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.stagesStudios\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.stagesStudios.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio30\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Talent\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/ Casting *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"talentCasting\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio31\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.talentCasting\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.talentCasting.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio31\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"talentCasting\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio32\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.talentCasting\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.talentCasting.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio32\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Transportation\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"transportation\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio33\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.transportation\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.transportation.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio33\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"transportation\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio34\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.transportation\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.transportation.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio34\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Travel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/ Accommodations *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"travelAccommodations\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio35\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.travelAccommodations\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.travelAccommodations.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio35\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"travelAccommodations\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio36\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.travelAccommodations\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.travelAccommodations.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio36\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Wardrobe\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/ Costumes *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"wardrobeCostumes\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio37\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.wardrobeCostumes\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.wardrobeCostumes.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio37\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"wardrobeCostumes\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio38\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.wardrobeCostumes\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': vendorSubmitted && d.wardrobeCostumes.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio38\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body pt-0\" *ngIf=\"crewTab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"creweditform\" (submit)=\"crewUpdate()\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tenctype=\"multipart/form-data\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Jobs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tinterested in</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of jobInterestedInArray\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectjobinterestedData($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.selected\" type=\"checkbox\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"defaultCheck1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.label}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Experienced\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tin</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of experiencedInArray\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectexperiencedData($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.selected\" type=\"checkbox\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"defaultCheck1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.label}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Equipment\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\towned </label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"equipmentOwned\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.equipmentOwned\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio1\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"toggleEquipmentOwnedDescription($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio1\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"equipmentOwned\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.equipmentOwned\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio2\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"toggleEquipmentOwnedDescription($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio2\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea *ngIf=\"equipmentOwnedDescriptionChecked\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control mt-2\" placeholder=\"Description\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"equipmentOwnedDescription\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.equipmentOwnedDescription\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row submit_crew_info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-8 offset-lg-4 offset-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body pt-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"talenteditform\" (submit)=\"profileUpdate()\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tenctype=\"multipart/form-data\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentTab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Full\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbody pic <br><small>(Must be within five\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tyears)</small></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-file custom-file-photo\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"custom-file-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inputGroupFile05\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"fullBodyImage\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#fullbodyimageInput\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addPhoto('fullBodyImage')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-file-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inputGroupFile05\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-describedby=\"inputGroupFileAddon05\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!fullBodyPic\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"assets/images/talent1.png\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"rounded float-left\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talt=\"Upload your photo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width:80px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"fullBodyPic\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"{{fullBodyPic}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"rounded float-left\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talt=\"Upload your photo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width:80px;\"></label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Age\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"age\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.age\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentSubmitted && t.age.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option _ngcontent-c8=\"\" value=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-reflect-value=\"\">Select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let age of getValues(20, 60);\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"age\">{{age}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentSubmitted && t.age.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.age.errors.required\">Age required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Race\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"race\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.race\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentSubmitted && t.race.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option _ngcontent-c8=\"\" value=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-reflect-value=\"\">Select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let race of raceArray;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"race\">{{race}} </option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentSubmitted && t.race.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.race.errors.required\">Race\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Physical\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCharacteristics *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"physicalCharacteristics\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.physicalCharacteristics\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentSubmitted && t.physicalCharacteristics.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option _ngcontent-c8=\"\" value=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-reflect-value=\"\">Select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let physicalCharacteristics of physicalCharacteristicsArray;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"physicalCharacteristics\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{physicalCharacteristics}} </option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentSubmitted && t.physicalCharacteristics.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"t.physicalCharacteristics.errors.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPhysical Characteristics required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Height\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"height\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.height\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentSubmitted && t.height.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option _ngcontent-c8=\"\" value=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-reflect-value=\"\">Select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"36\">3'</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"37\">3'1\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"38\">3'2\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"39\">3'3\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"40\">3'4\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"41\">3'5\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"42\">3'6\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"43\">3'7\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"44\">3'8\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"45\">3'9\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"46\">3'10\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"47\">3'11\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"48\">4'</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"49\">4'1\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"50\">4'2\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"51\">4'3\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"52\">4'4\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"53\">4'5\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"54\">4'6\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"55\">4'7\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"56\">4'8\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"57\">4'9\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"58\">4'10\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"59\">4'11\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"60\">5'</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"61\">5'1\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"62\">5'2\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"63\">5'3\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"64\">5'4\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"65\">5'5\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"66\">5'6\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"67\">5'7\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"68\">5'8\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"69\">5'9\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"70\">5'10\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"71\">5'11\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"72\">6'</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"73\">6'1\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"74\">6'2\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"75\">6'3\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"76\">6'4\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"77\">6'5\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"78\">6'6\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"79\">6'7\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"80\">6'8\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"81\">6'9\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"82\">6'10\"</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"84\">7'</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentSubmitted && t.height.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.height.errors.required\">Height\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Weight\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"weight\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.weight\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentSubmitted && t.weight.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option _ngcontent-c8=\"\" value=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-reflect-value=\"\">Select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let weight of getValues(40, 300);\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"weight\">{{weight}} lb</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentSubmitted && t.weight.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.weight.errors.required\">Weight\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trequired</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right\">Hair\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"hairColor\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.hairColor\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentSubmitted && t.hairColor.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option _ngcontent-c8=\"\" value=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tng-reflect-value=\"\">Select</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"black\">Black</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"blonde\">Blonde</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"brown\">Brown</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"grey\">Grey</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"red\">Red</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentSubmitted && t.hairColor.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.hairColor.errors.required\">Hair\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Tattoos\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"tattoos\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.tattoos\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio1\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"toggletattoosDescription($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio1\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"tattoos\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.tattoos\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio2\" value=\"0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"toggletattoosDescription($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio2\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea *ngIf=\"tattoosDescriptionChecked\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control mt-2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Description\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"tattoosDescription\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.tattoosDescription\"></textarea>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Piercings\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"piercings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.piercings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio3\" value=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio3\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" checked\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"radio\" formControlName=\"piercings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usersDetails.piercings\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"inlineRadio4\" value=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"inlineRadio4\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Willing\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tto travel?</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of willingToTravelArray\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectData($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.selected\" type=\"checkbox\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"defaultCheck1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.label}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-6 col-lg-4 col-form-label text-sm-right pt-0\">Union?</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-check\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of unionArray\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectUnionData($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.selected\" type=\"checkbox\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"defaultCheck1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{data.label}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row submit_talent_info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-8 offset-lg-4 offset-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary shadow-sm\">SUBMIT</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-3 text-muted\">* marked fields are mandatory</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"tab-pane fade\" id=\"v-pills-producer\" role=\"tabpanel\"\r\n\t\t\t\t\t\t\t\t\taria-labelledby=\"v-pills-producer-tab\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card shadow-sm\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\tFields\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"showTab == 'notificationTab'\">\r\n\t\t\t<div style=\"margin-top: 50px;\">\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<div class=\"card shadow-sm\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<div *ngFor=\"let notification of emailNotifications; let i = index\">\r\n\t\t\t\t\t\t\t\t<ion-row style=\"width: 100%\">\r\n\t\t\t\t\t\t\t\t\t<ion-col size=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-switch\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"notification.notificationStatus =='1'\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"switchClicked($event, notification.emailNotificationId, notification.emailNotificationMapId)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customSwitch1{{i}}\"></label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t<ion-col size=\"11\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;{{notification.notificationText}}\r\n\t\t\t\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"notification.emailNotificationId =='1' || notification.emailNotificationId =='2'\">within\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select name=\"miles{{i}}\" [(ngModel)]=\"notification.relatedVal\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"25\">25</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"50\">50</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"75\">75</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"100\">100</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>&nbsp;miles\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"showTab == 'additionalPhotoTab'\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<ion-row style=\"width: 100%;margin-top: 40px;\">\r\n\t\t\t\t\t<ion-col *ngFor=\"let img of usersImages\" size=\"4\">\r\n\t\t\t\t\t\t<div style=\"position: absolute; height:90px ; width:100%;margin: auto;\">\r\n\t\t\t\t\t\t\t<img src={{img.image}} class=\"addimg\" alt=\"Upload additional Image\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ion-buttons style=\"position: relative; margin-top: 0px; margin-left: 90px;\"\r\n\t\t\t\t\t\t\t(click)=\"deleteAdditionalImages(img.imageId)\">\r\n\t\t\t\t\t\t\t<ion-button>\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"trash-outline\"></ion-icon>\r\n\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t</ion-buttons>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"showTab == 'uploadVideo'\">\r\n\t\t\t<div style=\"margin-top: 30px;\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"input-group mb-4\">\r\n\t\t\t\t\t\t<div class=\"custom-file\">\r\n\t\t\t\t\t\t\t<!-- <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" aria-describedby=\"inputGroupFileAddon01\"> -->\r\n\t\t\t\t\t\t\t<!-- <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile04\" name=\"additioanalImage\" #additional1Input (change)=\"uploadAdditionalImage(additional1Input)\" >\r\n\t\t\t\t\t\t<label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label> -->\r\n\t\t\t\t\t\t\t<input type=\"file\" accept=\"video/mp4\" class=\"custom-file-input\" id=\"inputGroupFile04\"\r\n\t\t\t\t\t\t\t\tname=\"additioanalvideo\" #additional1Input (change)=\"getVideoDetails($event)\">\r\n\t\t\t\t\t\t\t<label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style=\"text-align: center;\">\r\n\t\t\t\t\t\t<div *ngIf=\"loadVideo\">\r\n\t\t\t\t\t\t\t<div class=\"addl-img-box position-relative\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<img width=\"270\" height=\"220\" src=\"/assets/images/loader.gif\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!loadVideo\">\r\n\t\t\t\t\t\t\t<div *ngFor=\"let video of userVideos\">\r\n\t\t\t\t\t\t\t\t<div class=\"addl-img-box position-relative\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<video width=\"270\" height=\"220\" controls disabled=\"true\" #videoPlayer>\r\n\t\t\t\t\t\t\t\t\t\t\t<source [src]=\"video.video\" type=\"video/mp4\">\r\n\t\t\t\t\t\t\t\t\t\t</video>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favourite/favourite.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/favourite/favourite.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<ion-content *ngIf='myFavoritesArray.length > 0'>\r\n  <ion-item lines=\"none\" class=\"fixed-heading\">\r\n    <ion-row style=\"width: 100%;\">\r\n      <ion-col size=\"3\">\r\n        <p class=\"head-text\">Favorites</p>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <button id=\"removeBtn\" (click)=\"removeSeleted($event)\">Remove</button>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <button id=\"filterBtn\" (click)=\"search()\">Filter</button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-item>\r\n  <div class=\"box h-100\">\r\n    <ion-item lines=\"full\">\r\n\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"6\">\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <p class=\"box-heading size-font\">Type</p>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <p class=\"box-heading size-font\"> Posted Date </p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n\r\n    <div *ngIf='myFavoritesArray.length > 0'>\r\n      \r\n      <ion-item lines=\"full\" *ngFor=\"let favorite of myFavoritesArray | paginate: config; let i = index\">\r\n        <ion-row style=\"width: 100%;\">\r\n          <ion-col size=\"1\">\r\n            <input type=\"checkbox\" (change)=\"checkedSelected(favorite)\" [(ngModel)]=\"favorite.selected\"\r\n              id=\"customCheck{{i+1}}\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"box-content\" *ngIf=\"favorite.moduleId == 2\"\r\n            [routerLink]=\"['/gigs/:type/display/', favorite.relatedDetails.gigId, favorite.relatedDetails.gigType]\">\r\n            <p class=\"box-title size-font\" *ngIf=\"favorite.moduleId == 2\">{{favorite.relatedDetails.title}}</p>\r\n            <p class=\"box-heading size-font\" *ngIf=\"favorite.moduleId == 2\">\r\n              {{favorite.relatedDetails.location.formattedAddressCustom}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"box-content\" *ngIf=\"favorite.moduleId == 1\">\r\n            <a *ngIf=\"favorite.relatedDetails.usersTypeId[0] == 3\"\r\n              routerLink=\"/user/talent/display/{{favorite.relatedDetails.usersId}}\" class=\"stretched-link\"></a>\r\n            <a *ngIf=\"favorite.relatedDetails.usersTypeId[0] == 4\"\r\n              routerLink=\"/user/crew/display/{{favorite.relatedDetails.usersId}}\" class=\"stretched-link\"></a>\r\n            <a *ngIf=\"favorite.relatedDetails.usersTypeId[0] == 5\"\r\n              routerLink=\"/user/producer/display/{{favorite.relatedDetails.usersId}}\" class=\"stretched-link\"></a>\r\n            <a *ngIf=\"favorite.relatedDetails.usersTypeId[0] == 6\"\r\n              routerLink=\"/user/vendor/display/{{favorite.relatedDetails.usersId}}\" class=\"stretched-link\"></a>\r\n            <p class=\"box-title size-font\" *ngIf=\"favorite.moduleId == 2\">{{favorite.relatedDetails.fullName}}</p>\r\n            <p class=\"box-heading size-font\" *ngIf=\"favorite.moduleId == 2\">\r\n              {{address.fullAddress}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <p class=\"box-heading size-font\" *ngIf=\"favorite.moduleId == 2\">{{gigType(favorite.relatedDetails.gigType)}}\r\n            </p>\r\n            <div *ngIf=\"favorite.moduleId == 1\">\r\n              <p class=\"box-heading size-font\" *ngFor=\"let items of favorite.relatedDetails.usersType\">\r\n                {{items.itemName}}</p>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"3\" style=\"padding-right: 0px; padding-left: 0px;\">\r\n            <p class=\"box-heading size-font\" *ngIf=\"favorite.moduleId == 2\">\r\n              {{favorite.createdAt * 1000 | date:'dd/MM/yyyy'}} </p>\r\n            <p class=\"box-heading size-font\" *ngIf=\"favorite.moduleId == 1\">\r\n              {{favorite.createdAt * 1000 | date:'dd/MM/yyyy'}} </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n    </div>\r\n   \r\n    <ion-row style=\"width: 100%;\" *ngIf=\"noFavouriteFound == 1\">\r\n\t\t\t<div  class=\"alert alert-danger alert-dismissible fade show w-100\" role=\"alert\">\r\n\t\t\t\tNo favourite found.\r\n\t\t\t</div>\r\n\t\t</ion-row>\r\n   \r\n  </div>\r\n  <!-- <div style=\"padding-top: 12px; padding-bottom: 0;\">\r\n    <pagination-controls class=\"my-pagination\" (pageChange)=\"pageChange($event)\">\r\n    </pagination-controls>\r\n  </div> -->\r\n  <div style=\"padding-top: 12px ;  padding-bottom: 0px;\">\r\n    <div *ngIf=\"!isLoggedIn\" [ngClass]=\"{'paginationDiv': true}\">\r\n      <div *ngIf=\"myFavoritesArray.length > 0\">\r\n        <pagination-controls class=\"ngx-pagination\" (pageChange)=\"pageChange($event)\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isLoggedIn\" [ngClass]=\"{'paginationDiv': false}\">\r\n      <div *ngIf=\"myFavoritesArray.length > 0\">\r\n        <pagination-controls class=\"ngx-pagination\" (pageChange)=\"pageChange($event)\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"'forgot-password'\"></app-header>\r\n<ion-content>\r\n  <div >\r\n    <div class=\"modal-header text-center d-block border-0\">\r\n      <h5 class=\"modal-title w-100\">Account Recovery</h5>\r\n      <div class=\"w-100 text-muted\">Instruction goes here</div>\r\n    </div>\r\n    <div class=\"modal-body p-4\">\r\n      <form [formGroup]=\"forgotPasswordForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"\">Email</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"\"  formControlName=\"email\" [ngClass]=\"{'invalidEntry': submitted && f.email.errors}\" placeholder=\"Enter email\">\r\n        </div>\r\n        <div *ngIf=\"submitted && f.email.errors\" class=\"form-group\">\r\n          <div *ngIf=\"f.email.errors.required\" class=\"text-danger\">Email is required</div>\r\n          <div *ngIf=\"f.email.errors.pattern\"  class=\"text-danger\">Enter a valid email</div>\r\n        </div>\r\n        <button  class=\"btn btn-primary btn-block shadow-sm\" (click)=\"submit()\">RESET PASSWORD</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer border-0 bg-light px-4\"> <span class=\"align-middle mr-auto\">Do not wish to reset password?</span><span  class=\"btn btn-danger shadow-sm shadow-sm\">CANCEL</span> </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/list/list.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/list/list.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<ion-content style=\"--background: #F5F5F5 !important;\">\r\n  <ion-item style=\"width: 100%;\" class=\"fixed-heading\">\r\n    <ion-row style=\"width: 100%;\">\r\n      <ion-col size=\"3\" class=\"selectedArtist\" [ngClass]=\"{'highlightArtist': userType == 'talent'}\"\r\n        (click)=\"switchUser('talent')\">\r\n        <span style=\"font-size: 13px;\">Actor</span>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"selectedArtist\" [ngClass]=\"{'highlightArtist': userType == 'crew'}\"\r\n        (click)=\"switchUser('crew')\">\r\n        <span style=\"font-size: 13px;\">Crew</span>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"selectedArtist\" [ngClass]=\"{'highlightArtist': userType == 'producer'}\"\r\n        (click)=\"switchUser('producer')\">\r\n        <span style=\"font-size: 13px;\">Producer</span>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"selectedArtist\" [ngClass]=\"{'highlightArtist': userType == 'vendor'}\"\r\n        (click)=\"switchUser('vendor')\">\r\n        <span style=\"font-size: 13px;\">Vendor</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button size=\"small\" id=\"filterBtn\" (click)=\"search()\">Filter</ion-button>\r\n  </ion-item>\r\n  <div style=\"margin-top: 55px;\">\r\n    <ion-row style=\"width: 100%\" class=\"shadow-sm\">\r\n      <ion-col size=\"6\" class=\"profilecol\" *ngFor=\"let listItem of listDetails | paginate: config; let i = index\">\r\n        <div class=\"profile\">\r\n          <img [src]=\"listItem.profileImage\" class=\"profileimg\" alt=\"...\"\r\n            [routerLink]=\"['/user/display', listItem.usersId,userType]\">\r\n          <div class=\"border-right\">\r\n            <div [routerLink]=\"['/user/display', listItem.usersId,userType]\">\r\n              <ion-card-header style=\"height: 110px !important;\">\r\n                <ion-card-title class=\"size-font\" *ngIf=\"listItem.fullName\">{{listItem.fullName}}\r\n                </ion-card-title>\r\n                <div class=\"mt-2\">\r\n                  <!-- <span class=\"size-font\"\r\n                    *ngIf=\"listItem.age || listItem.height || listItem.weight \">{{listItem.age}},{{listItem.heightInFeet}},{{listItem.weight}}\r\n                    lb </span> -->\r\n                    <ion-row style=\"width: 100%;\">\r\n                      <ion-col size=\"4\" *ngIf=\"listItem.age\" style=\"padding: 0px;\"><span class=\"size-font\">{{listItem.age}}Yrs,</span></ion-col>\r\n                      <ion-col size=\"4\" *ngIf=\"listItem.height\" style=\"padding: 0px;\"><span class=\"size-font\">{{listItem.heightInFeet}},</span></ion-col>\r\n                      <ion-col size=\"3\" *ngIf=\"listItem.weight\" style=\"padding: 0px;\"><span class=\"size-font\">{{listItem.weight}}lb</span></ion-col>\r\n                      <ion-col size=\"1\"></ion-col>\r\n                    </ion-row>\r\n\r\n                </div>\r\n                <div>\r\n                  <bar-rating [(rate)]=\"listItem.usersRating\" [max]=\"5\" [readOnly]=\"true\"></bar-rating>\r\n                </div>\r\n              </ion-card-header>\r\n              <ion-card-content style=\"height: 75px !important;\">\r\n                <div style=\"height: 80px\">\r\n                  <p class=\"size-font\" *ngIf=\"listItem.usersAddress.length\">\r\n                    {{listItem.usersAddress[0].fullAddress}}\r\n                  </p>\r\n                </div>\r\n                <!-- <div style=\"height: 30px;\">\r\n                <span class=\"size-font\" *ngIf=\"listItem.age\">Age: {{listItem.age}}</span>\r\n              </div> -->\r\n                <!-- <div style=\"height: 30px;\">\r\n                <span class=\"size-font\" *ngIf=\"listItem.height\">Height: {{listItem.heightInFeet}} </span>\r\n              </div> -->\r\n                <!-- <div style=\"height: 30px;\">\r\n                <span class=\"size-font\" *ngIf=\"listItem.weight\">Weight: {{listItem.weight}} lb</span>\r\n              </div> -->\r\n              </ion-card-content>\r\n            </div>\r\n            <div style=\"height: 30px;\">\r\n              <ion-row>\r\n                <ion-col size=\"3\" style=\"text-align: center; font-size: 18px;\">\r\n                  <!-- <a *ngIf=\"listItem.email\" href=\"mailto:{{listItem.email}}\" target=\"_top\"\r\n                    data-toggle=\"tooltip\" data-placement=\"top\" title=\"Email now\"><i\r\n                      class=\"fas fa-envelope fa-1x text-secondary\"></i></a> -->\r\n\r\n                  <span (click)=\"showMsg(listItem.usersId)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n                    data-original-title=\"Message now\"><i class=\"fas fa-comments fa-1x text-secondary\"></i></span>\r\n                </ion-col>\r\n                <ion-col size=\"3\" style=\"text-align: center; font-size: 18px;\">\r\n                  <a *ngIf=\"listItem.phone\" href=\"tel:{{listItem.phone}}\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                    title=\"Call now\"><i class=\"fas fa-phone   fa-rotate-90 text-secondary\"></i></a>\r\n                </ion-col>\r\n                <ion-col size=\"3\" style=\"text-align: center; font-size: 18px;\">\r\n                  <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Share profile\"\r\n                    (click)=\"share()\"><i class=\"fas fa-share-alt fa-1x text-secondary\"></i></span>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"3\">\r\n                  <span class=\"p-3\" *ngIf=\"loggedInUsersId\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n                    data-original-title=\"Message now\"><i class=\"fas fa-comments fa-1x text-secondary\"></i></span>\r\n                </ion-col> -->\r\n                <ion-col *ngIf=\"isLoggedIn\" size=\"3\" (click)=\"addToFavorite(i,listItem.isFavourite)\"\r\n                  style=\"text-align: center; font-size: 18px;\">\r\n                  <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Message now\">\r\n                    <i class=\"far fa-heart fa-1x text-dark\" *ngIf=\"listItem.isFavourite == 0\"></i>\r\n                    <i class=\"fas fa-heart fa-1x text-danger\" *ngIf=\"listItem.isFavourite == 1\"></i>\r\n                  </span>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"width: 100%;\" *ngIf=\"noTalentFound == 1\">\r\n\t\t\t<div  class=\"alert alert-danger alert-dismissible fade show w-100\" role=\"alert\">\r\n\t\t\t\tNo results found.\r\n\t\t\t</div>\r\n\t\t</ion-row>\r\n  </div>\r\n \r\n  <div style=\"padding-top: 12px ;  padding-bottom: 0px;\">\r\n    <div *ngIf=\"!isLoggedIn\" [ngClass]=\"{'paginationDiv': true}\">\r\n      <div *ngIf=\"listDetails.length > 0\">\r\n        <pagination-controls class=\"ngx-pagination\" (pageChange)=\"pageChange($event)\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isLoggedIn\" [ngClass]=\"{'paginationDiv': false}\">\r\n      <div *ngIf=\"listDetails.length > 0\">\r\n        <pagination-controls class=\"ngx-pagination\" (pageChange)=\"pageChange($event)\">\r\n        </pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</ion-content>\r\n<app-footer [isLoggedIn]=\"isLoggedIn\"></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-gig/my-gig.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-gig/my-gig.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<ion-content>\r\n\t<ion-item lines=\"full\"  class=\"fixed-heading\">\r\n\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t<ion-col size=\"3\" style=\"padding-top: 10px;\">\r\n\t\t\t\t<span>My Gigs</span>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"3\">\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"4\">\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t<ion-button size=\"small\" id=\"filterBtn\" (click)=\"filter()\">Filter</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-item>\r\n\t<div class=\"box w-100\">\r\n\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t<ion-col size=\"6\" *ngFor=\"let gigs of myGigsArray | paginate: config; let i = index\" class=\"border\">\r\n\t\t\t\t<div [routerLink]=\"['/gigs/'+gigs.gigTypeName+'/display', gigs.gigId, gigs.gigType]\">\r\n\t\t\t\t\t<p class=\"box-title size-font\">{{gigs.title}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">{{gigs.location.customAddress}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">Payments: {{gigs.payment}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">Per diem provided: {{gigs.perDimeProvided}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">Posted Date: {{gigs.startDateString}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ion-label class=\"box-heading size-font\">Posted by:</ion-label>\r\n\t\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t<ion-thumbnail>\r\n\t\t\t\t\t\t\t<img src={{gigs.producerInfo.profileImage}}>\r\n\t\t\t\t\t\t</ion-thumbnail>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"2\"></ion-col>\r\n\t\t\t\t\t<ion-col size=\"8\" style=\"padding-left: 10px;\">\r\n\t\t\t\t\t\t<a *ngIf=\"(gigs.producerInfo.usersTypeId.length > 1 || gigs.producerInfo.usersTypeId.length == 1) && gigs.producerInfo.usersTypeId.indexOf('3') != -1 \"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/talent/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a *ngIf=\"gigs.producerInfo.usersTypeId.length == 1 && gigs.producerInfo.usersTypeId.indexOf('4') != -1 \"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/producer/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a *ngIf=\"gigs.producerInfo.usersTypeId.length == 0\"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/producer/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a *ngIf=\"(gigs.producerInfo.usersTypeId.length > 1 || gigs.producerInfo.usersTypeId.length == 1) && gigs.producerInfo.usersTypeId.indexOf('3') == -1 && gigs.producerInfo.usersTypeId.indexOf('5') != -1\"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/crew/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a *ngIf=\"(gigs.producerInfo.usersTypeId.length > 1 || gigs.producerInfo.usersTypeId.length == 1) && gigs.producerInfo.usersTypeId.indexOf('3') == -1 && gigs.producerInfo.usersTypeId.indexOf('6') != -1\"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/crew/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row style=\"width: 100%;\" *ngIf=\"noMyGigFound == 1\">\r\n\t\t\t<div  class=\"alert alert-danger alert-dismissible fade show w-100\" role=\"alert\">\r\n\t\t\t\tNo mygigs found.\r\n\t\t\t</div>\r\n\t\t</ion-row>\r\n\t\t<!-- <div style=\"padding-top: 12px; padding-bottom: 0\"><pagination-controls class=\"ngx-pagination\"\r\n\t\t\t(pageChange)=\"pageChange($event)\">\r\n\t\t</pagination-controls></div> -->\r\n\r\n\t\t<div style=\"padding-top: 12px ;  padding-bottom: 0px;\">\r\n\t\t\t<div *ngIf=\"!isLoggedIn\" [ngClass]=\"{'paginationDiv': true}\">\r\n\t\t\t  <div *ngIf=\"myGigsArray.length > 0\">\r\n\t\t\t\t<pagination-controls class=\"ngx-pagination\" (pageChange)=\"pageChange($event)\">\r\n\t\t\t\t</pagination-controls>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"isLoggedIn\" [ngClass]=\"{'paginationDiv': false}\">\r\n\t\t\t  <div *ngIf=\"myGigsArray.length > 0\">\r\n\t\t\t\t<pagination-controls class=\"ngx-pagination\" (pageChange)=\"pageChange($event)\">\r\n\t\t\t\t</pagination-controls>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_utility_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utility/must-match.validator */ "./src/app/utility/must-match.validator.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(router, storage, formBuilder, userService, utility) {
        this.router = router;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.utility = utility;
        this.submitted = false;
    }
    ngOnInit() {
        this.resetForm = this.formBuilder.group({
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: Object(src_app_utility_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('newPassword', 'confirmPassword')
        });
    }
    get f() { return this.resetForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        this.storage.get('userData').then(data => {
            this.userService.changePassword(this.resetForm.value, data.email)
                .subscribe((res) => {
                this.router.navigateByUrl('/gigs/Crew');
                this.utility.showToast("Change Password successfully updated");
            });
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.scss */ "./src/app/user/change-password/change-password.component.scss")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/user/display/display.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/display/display.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".p-3 {\n  padding: 1rem !important;\n  font-size: 20px;\n}\n\n.icon-color {\n  color: red;\n}\n\n.inValid {\n  border: 1px solid red;\n}\n\n.profileimg {\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.subImg {\n  width: 100%;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (min-width: 768px) {\n  .photo-grid img {\n    max-width: 33.333333%;\n  }\n\n  .profile_col {\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    min-width: 0;\n    max-width: 100%;\n    padding: 15px;\n  }\n\n  video.profile_video {\n    height: 100%;\n  }\n}\n\n@media (max-width: 767px) {\n  .profile_col {\n    position: relative;\n    width: 100%;\n  }\n\n  video.profile_video {\n    width: 100%;\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9kaXNwbGF5L0Y6XFxBdmlydXBJb25pY0FwcFxcR2l0R21vc1Zpc2hhbFxcZ2V0bWVvbnNldEFwcC9zcmNcXGFwcFxcdXNlclxcZGlzcGxheVxcZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0dKOztBREFFO0VBQ0U7SUFDSSxxQkFBQTtFQ0dOOztFRERFO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO1lBQUEsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtFQ0lOOztFREZFO0lBQ0ksWUFBQTtFQ0tOO0FBQ0Y7O0FERkE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtFQ0lOOztFREFFO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtMyB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmljb24tY29sb3J7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5WYWxpZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4ucHJvZmlsZWltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICAuc3ViSW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5waG90by1ncmlkIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZV9jb2x7XHJcbiAgICAgICAgZmxleC1iYXNpczogMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgdmlkZW8ucHJvZmlsZV92aWRlbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLnByb2ZpbGVfY29se1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIHZpZGVvLnByb2ZpbGVfdmlkZW8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn0iLCIucC0zIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pY29uLWNvbG9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmluVmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5wcm9maWxlaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc3ViSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAucGhvdG8tZ3JpZCBpbWcge1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMzJTtcbiAgfVxuXG4gIC5wcm9maWxlX2NvbCB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgdmlkZW8ucHJvZmlsZV92aWRlbyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnByb2ZpbGVfY29sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICB2aWRlby5wcm9maWxlX3ZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/user/display/display.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/display/display.component.ts ***!
  \***************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");





let DisplayComponent = class DisplayComponent {
    constructor(utility, userService, router, route) {
        this.utility = utility;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.isShowReply = [];
        this.half = 'half';
        this.showMore = 'Show More';
        this.showDiv = false;
        this.isRatingVerify = false;
        this.profileVideo = '';
        this.profileVideo = localStorage.getItem('profileVideo');
        console.log('=== Profile Video ===');
        console.log(this.profileVideo);
    }
    ngOnInit() {
        this.loggedInUsersId = localStorage.getItem("usersId");
        this.isLoggedIn = localStorage.getItem("isLoggedin");
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("id")) {
                this.usersId = paramMap.get("id");
                this.userType = paramMap.get("type");
                this.getRatingValue(this.usersId);
                this.getUserProfileInfo(this.usersId, this.loggedInUsersId);
            }
        });
    }
    getUserProfileInfo(usersId, loggedInUsersId) {
        switch (this.userType) {
            case 'talent':
                this.userService.getUserProfileInfoTalent(this.usersId, this.loggedInUsersId)
                    .subscribe(data => {
                    this.userProfileInfo = data;
                    this.userProfileInfo = this.userProfileInfo.data.userDetails;
                    this.address = this.userProfileInfo.usersAddress[0];
                    this.reviewDetails = this.userProfileInfo.reviews;
                    this.reviewDetails.forEach((element) => {
                        let replyMsg = '';
                        if (element.ratingReplyInfo.length > 0) {
                            replyMsg = element.ratingReplyInfo[0].replyText;
                        }
                        this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' });
                    });
                    this.socialMediaLinksDetails = this.userProfileInfo.socialMediaLinks;
                    this.usersImagesDetails = this.userProfileInfo.usersImages;
                    this.piercings = this.userProfileInfo.piercings;
                    if (this.piercings == '1') {
                        this.piercings = 'Yes';
                    }
                    else {
                        this.piercings = 'No';
                    }
                    this.tattoos = this.userProfileInfo.tattoos;
                    if (this.tattoos == '1') {
                        this.tattoos = 'Yes';
                    }
                    else {
                        this.tattoos = 'No';
                    }
                });
                break;
            case 'crew':
                this.userService.getUserProfileInfoCrew(this.usersId, this.loggedInUsersId)
                    .subscribe(data => {
                    this.userProfileInfo = data;
                    this.userProfileInfo = this.userProfileInfo.data.userDetails;
                    this.address = this.userProfileInfo.usersAddress[0];
                    this.reviewDetails = this.userProfileInfo.reviews;
                    this.reviewDetails.forEach((element) => {
                        let replyMsg = '';
                        if (element.ratingReplyInfo.length > 0) {
                            replyMsg = element.ratingReplyInfo[0].replyText;
                        }
                        this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' });
                    });
                    this.socialMediaLinksDetails = this.userProfileInfo.socialMediaLinks;
                    this.usersImagesDetails = this.userProfileInfo.usersImages;
                });
                break;
            case 'producer':
                this.userService.getUserProfileInfoProducer(this.usersId, this.loggedInUsersId)
                    .subscribe(data => {
                    this.userProfileInfo = data;
                    this.userProfileInfo = this.userProfileInfo.data.userDetails;
                    this.address = this.userProfileInfo.usersAddress[0];
                    this.reviewDetails = this.userProfileInfo.reviews;
                    this.reviewDetails.forEach((element) => {
                        let replyMsg = '';
                        if (element.ratingReplyInfo.length > 0) {
                            replyMsg = element.ratingReplyInfo[0].replyText;
                        }
                        this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' });
                    });
                    this.socialMediaLinksDetails = this.userProfileInfo.socialMediaLinks;
                    this.usersImagesDetails = this.userProfileInfo.usersImages;
                });
                break;
            case 'vendor':
                this.userService.getUserProfileInfo(this.usersId, this.loggedInUsersId)
                    .subscribe(data => {
                    this.userProfileInfo = data;
                    this.userProfileInfo = this.userProfileInfo.data.userDetails;
                    this.reviewDetails = this.userProfileInfo.reviews;
                    this.address = this.userProfileInfo.usersAddress[0];
                    this.reviewDetails.forEach((element) => {
                        let replyMsg = '';
                        if (element.ratingReplyInfo.length > 0) {
                            replyMsg = element.ratingReplyInfo[0].replyText;
                        }
                        this.isShowReply.push({ show: false, replyMessage: replyMsg, messageReplyText: '' });
                    });
                    this.socialMediaLinksDetails = this.userProfileInfo.socialMediaLinks;
                    this.usersImagesDetails = this.userProfileInfo.usersImages;
                });
                break;
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
                });
                break;
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
                });
                break;
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
                });
                break;
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
                });
                break;
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
                        }
                        else {
                            this.utility.showToast('Unable to add Favorite');
                        }
                    });
                }
                else {
                    this.userService.removeFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 3)
                        .subscribe(data => {
                        this.favoriteDetails = data;
                        this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
                        if (this.isRemovedFavorite == '1') {
                            this.userProfileInfo.isFavourite = 0;
                        }
                        else {
                            this.utility.showToast('Unable to remove Favorite');
                        }
                    });
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
                        }
                        else {
                            this.utility.showToast('Unable to add Favorite');
                        }
                    });
                }
                else {
                    this.userService.removeFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 3)
                        .subscribe(data => {
                        this.favoriteDetails = data;
                        this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
                        if (this.isRemovedFavorite == '1') {
                            this.userProfileInfo.isFavourite = 0;
                        }
                        else {
                            this.utility.showToast('Unable to remove Favorite');
                        }
                    });
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
                        }
                        else {
                            this.utility.showToast('Unable to add Favorite');
                        }
                    });
                }
                else {
                    this.userService.removeFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 4)
                        .subscribe(data => {
                        this.favoriteDetails = data;
                        this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
                        if (this.isRemovedFavorite == '1') {
                            this.userProfileInfo.isFavourite = 0;
                        }
                        else {
                            this.utility.showToast('Unable to remove Favorite');
                        }
                    });
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
                        }
                        else {
                            this.utility.showToast('Unable to add Favorite');
                        }
                    });
                }
                else {
                    this.userService.removeFavoriteTalent(this.userProfileInfo.usersId, this.loggedInUsersId, 1, 6)
                        .subscribe(data => {
                        this.favoriteDetails = data;
                        this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
                        if (this.isRemovedFavorite == '1') {
                            this.userProfileInfo.isFavourite = 0;
                        }
                        else {
                            this.utility.showToast('Unable to remove Favorite');
                        }
                    });
                }
                break;
        }
    }
    addRating() {
        this.isRatingVerify = true;
    }
    addRatingText() {
        if (this.usersRatingText == '') {
            this.messageText = 'Review is required';
            setTimeout(() => {
                this.messageText = '';
            }, 2000);
            return false;
        }
        this.userService.updateRatingText(this.lastIdRating, this.usersRatingText, this.rate)
            .subscribe(data => {
            this.ratingDetails = data;
            this.isRating = this.ratingDetails.data.isAdded;
            this.isratingUpdated = 1;
            setTimeout(() => {
                this.isratingUpdated = 0;
                this.isRatingVerify = false;
            }, 2000);
        });
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
            this.utility.showToast('Review successfully submitted.');
            setTimeout(() => {
                this.isratingUpdated = 0;
                this.isRatingVerify = false;
            }, 2000);
        });
    }
    // titleCaseWord(word) {
    //   if (!word) return word;
    //   return word[0].toUpperCase() + word.substr(1).toLowerCase();
    // }
    share() {
        this.utility.share();
    }
};
DisplayComponent.ctorParameters = () => [
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayer', { static: true })
], DisplayComponent.prototype, "videoplayer", void 0);
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/display/display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.scss */ "./src/app/user/display/display.component.scss")).default]
    })
], DisplayComponent);



/***/ }),

/***/ "./src/app/user/edit/edit.component.scss":
/*!***********************************************!*\
  !*** ./src/app/user/edit/edit.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixed-heading {\n  width: 100%;\n  position: fixed;\n  z-index: 999;\n  background: #F5F5F5;\n}\n\n.fixed-headingPostGig {\n  background: #F5F5F5 !important;\n  width: 100%;\n  position: fixed;\n  z-index: 999;\n  padding-left: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.pac-container .pac-logo hdpi {\n  position: absolute !important;\n  width: 90%;\n}\n\n.highlightedTab {\n  border-bottom: 3px solid #C1270B;\n}\n\n.tabItem {\n  text-align: center;\n  color: #3880ff;\n  width: 20%;\n  padding-bottom: 8px;\n  padding-top: 8px;\n}\n\n.addimg {\n  width: 100%;\n  height: 90px;\n  padding: 3px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0L0Y6XFxBdmlydXBJb25pY0FwcFxcR2l0R21vc1Zpc2hhbFxcZ2V0bWVvbnNldEFwcC9zcmNcXGFwcFxcdXNlclxcZWRpdFxcZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDTDs7QURHRTtFQUNJLDZCQUFBO0VBQ0EsVUFBQTtBQ0FOOztBREdFO0VBR0UsZ0NBQUE7QUNGSjs7QURLRTtFQUdFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDSixtQkFBQTtFQUNLLGdCQUFBO0FDSkw7O0FEUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1oZWFkaW5ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uZml4ZWQtaGVhZGluZ1Bvc3RHaWd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBhYy1jb250YWluZXIgLnBhYy1sb2dvIGhkcGl7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAuaGlnaGxpZ2h0ZWRUYWJ7XHJcbiAgICAvLyAgYmFja2dyb3VuZDojMzg4MGZmO1xyXG4gICAgLy8gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogIDNweCBzb2xpZCAjQzEyNzBCO1xyXG4gIH1cclxuXHJcbiAgLnRhYkl0ZW17XHJcbiAgICAvLyB3aWR0aDogNzAlO1xyXG4gICAgLy8gZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbnBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIC8vIGhlaWdodDo0MHB4XHJcbiAgfVxyXG5cclxuICAuYWRkaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIiwiLmZpeGVkLWhlYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG5cbi5maXhlZC1oZWFkaW5nUG9zdEdpZyB7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBhYy1jb250YWluZXIgLnBhYy1sb2dvIGhkcGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmhpZ2hsaWdodGVkVGFiIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNDMTI3MEI7XG59XG5cbi50YWJJdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM4ODBmZjtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmFkZGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/edit/edit.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/edit/edit.component.ts ***!
  \*********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


















class ImageSnippet {
    constructor(src, file) {
        this.src = src;
        this.file = file;
    }
}
let EditComponent = class EditComponent {
    constructor(router, document, transfer, storage, fileChooser, filePath, file, userService, signinService, fb, camera, utility, actionSheetController) {
        this.router = router;
        this.document = document;
        this.transfer = transfer;
        this.storage = storage;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.file = file;
        this.userService = userService;
        this.signinService = signinService;
        this.fb = fb;
        this.camera = camera;
        this.utility = utility;
        this.actionSheetController = actionSheetController;
        this.usersDetails = [];
        this.usersTypeArr = [];
        this.usersImages = [];
        this.editUsersDetails = [];
        this.submitted = false;
        this.talentSubmitted = false;
        this.crewSubmitted = false;
        this.userTalentTab = false;
        this.userProducerTab = false;
        this.userCrewTab = false;
        this.closeEmailLink = false;
        this.closePhoneLink = false;
        this.istalentPosted = 0;
        this.talentTab = false;
        this.crewTab = false;
        this.verifyEmailArr = [];
        this.verifyPhoneArr = [];
        this.otpEmailVerifiedArr = [];
        this.otpPhoneVerifiedArr = [];
        this.isPhoneVerify = false;
        this.isEmailVerify = false;
        this.addtionalImagesArray = [];
        this.tattoosDescriptionChecked = false;
        this.equipmentOwnedDescriptionChecked = false;
        this.myFiles = [];
        this.userVideos = [];
        this.loading = false;
        this.loadVideo = false;
        this.raceArray = src_app_app_service__WEBPACK_IMPORTED_MODULE_7__["RACE_ARRAY"];
        this.physicalCharacteristicsArray = src_app_app_service__WEBPACK_IMPORTED_MODULE_7__["PHYSICAL_CHARACTERISTICS_ARRAY"];
        this.equipmentOwnedArray = [
            { value: '1', label: '1', selected: false },
            { value: '2', label: '2', selected: false },
        ];
        this.selectedEquipmentOwnedArray = [];
        this.jobInterestedInArray = [
            { value: '1', label: 'AD department', selected: false },
            { value: '2', label: 'Production department', selected: false },
            { value: '3', label: 'Camera department', selected: false },
            { value: '4', label: 'G & E department', selected: false },
            { value: '5', label: 'HMU department', selected: false },
            { value: '6', label: 'Wardrobe department', selected: false },
            { value: '7', label: 'Sound department', selected: false },
            { value: '8', label: 'Art department', selected: false },
            { value: '9', label: 'Transportation department', selected: false },
        ];
        this.selectedJobInterestedInArray = [];
        this.experiencedInArray = [
            { value: '1', label: 'AD department', selected: false },
            { value: '2', label: 'Production department', selected: false },
            { value: '3', label: 'Camera department', selected: false },
            { value: '4', label: 'G & E department', selected: false },
            { value: '5', label: 'HMU department', selected: false },
            { value: '6', label: 'Wardrobe department', selected: false },
            { value: '7', label: 'Sound department', selected: false },
            { value: '8', label: 'Art department', selected: false },
            { value: '9', label: 'Transportation department', selected: false },
        ];
        this.selectedExperiencedInArray = [];
        this.willingToTravelArray = [
            { value: '1', label: 'Yes on production dime', selected: false },
            { value: '2', label: 'Yes on own dime', selected: false },
            { value: '3', label: 'No', selected: false },
            { value: '4', label: 'Possibly', selected: false },
        ];
        this.selectedWilingToTravelArray = [];
        this.unionArray = [
            { value: '1', label: 'Union', selected: false },
            { value: '2', label: 'Non union', selected: false },
            { value: '3', label: 'Both', selected: false },
        ];
        this.selectedUnionArray = [];
        this.dropdownList = [
            { "id": 3, "itemName": "Talent" },
            { "id": 4, "itemName": "Producer" },
            { "id": 5, "itemName": "Crew" },
            { "id": 6, "itemName": "Vendor" }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Account",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        this.referralCode = 123456;
        this.showTab = 'editTab';
        this.vendorTab = false;
        this.vendorSubmitted = false;
        this.selectedequipmentRentalArray = [];
        this.equipmentRentalArray = [
            { value: '1', label: 'Camera Rentals', selected: false },
            { value: '2', label: 'Grip/Electric Rentals', selected: false },
            { value: '3', label: 'Production Supplies', selected: false },
            { value: '4', label: 'Vehicles/Trailers', selected: false }
        ];
    }
    ngOnInit() {
        this.showVerifiedPhone = false;
        this.editform = this.fb.group({
            accountType: [''],
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            isEmailPublic: [''],
            isPhonePublic: [''],
            isAddressPublic: [''],
            usersRating: [''],
            usersBio: [''],
            websiteLink: [''],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            fullAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(14)]],
            profileImage: [''],
            resume: [''],
            // image: [''],
            countryName: [''],
            stateName: [''],
            cityName: [''],
            latitude: [''],
            longitude: [''],
            street: [''],
            locationName: [''],
            imdbLink: this.fb.array([]),
        });
        this.creweditform = this.fb.group({
            //dayRate: ['', [Validators.required]],
            jobInterstedIn: [''],
            equipmentOwned: [''],
            equipmentOwnedDescription: [''],
            experiencedIn: ['']
        });
        this.talenteditform = this.fb.group({
            fullBodyImage: [''],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            race: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            physicalCharacteristics: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            height: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            weight: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            hairColor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            tattoos: [''],
            piercings: [''],
            tattoosDescription: [''],
            willingToTravel: [''],
            union: [''],
        });
        this.vendorEditform = this.fb.group({
            accounting: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            audio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            catering: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            distribution: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            insurance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            legal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            postProduction: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            propsRental: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            security: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            stagesStudios: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            talentCasting: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            transportation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            travelAccommodations: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            wardrobeCostumes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            equipmentRental: ['']
        });
        this.usersDetails = this.signinService.getAuthData();
        this.id = this.usersDetails.usersId;
        this.usersDetails = JSON.parse(this.usersDetails.currentUser);
        this.usersId = this.usersDetails.usersId;
        if (this.usersDetails.email) {
            this.email = this.usersDetails.email;
        }
        if (this.usersDetails.phone) {
            this.phone = this.usersDetails.phone;
        }
        else {
            this.phone = this.editform.value.phone;
        }
        if (this.usersDetails.tattoos == 1) {
            this.tattoosDescriptionChecked = true;
        }
        if (this.usersDetails.equipmentOwned == 1) {
            this.equipmentOwnedDescriptionChecked = true;
        }
        if (this.usersDetails.usersImages.length > 0) {
            this.usersImages = this.usersDetails.usersImages;
        }
        else {
            this.usersImages[0] = 'https://yapbuzz.com/works/gmos/assets/images/avatar5.png';
        }
        if (this.usersDetails.usersAddress.length > 0) {
            this.fullAddress = this.usersDetails.usersAddress[0].fullAddress;
        }
        this.usersTypeArr = this.usersDetails.usersTypeId;
        this.selectwillingToTravel(this.usersDetails.willingToTravel);
        this.selecteunion(this.usersDetails.union);
        this.selectjobinterested(this.usersDetails.jobInterstedIn);
        this.selectexperienced(this.usersDetails.experiencedIn);
        if (this.usersDetails.socialMediaLinks.length > 0) {
            this.addSelectedImdb(this.usersDetails.socialMediaLinks);
        }
        else {
            this.addImdb();
        }
        if (this.usersDetails.profileImage) {
            this.profileImage = this.usersDetails.profileImage;
        }
        if (this.usersDetails.fullBodyPic) {
            this.fullBodyPic = this.usersDetails.fullBodyPic;
        }
        else {
            this.fullBodyPic = 'https://yapbuzz.com/works/gmos/assets/images/avatar5.png';
        }
        if (this.usersDetails.isPhonePublic == 1) {
            this.usersDetails.isPhonePublic = true;
        }
        else {
            this.usersDetails.isPhonePublic = false;
        }
        if (this.usersDetails.isAddressPublic == 1) {
            this.usersDetails.isAddressPublic = true;
        }
        else {
            this.usersDetails.isAddressPublic = false;
        }
        if (this.usersDetails.isEmailPublic == 1) {
            this.usersDetails.isEmailPublic = true;
        }
        else {
            this.usersDetails.isEmailPublic = false;
        }
        if (this.usersDetails.referralCode.length > 0) {
            this.referralCode = this.usersDetails.referralCode[0];
        }
        if (this.usersDetails.usersType.length > 1) {
            this.usersType = this.usersDetails.usersType;
            if (this.usersDetails.usersTypeId.indexOf('3') != -1) {
                this.talentTab = true;
            }
            if (this.usersDetails.usersTypeId.indexOf('5') != -1) {
                this.crewTab = true;
            }
            if (this.usersDetails.usersTypeId.indexOf('6') != -1) {
                this.vendorTab = true;
            }
        }
        else {
            this.usersType = this.usersDetails.usersType;
            if (this.usersType[0].id == '4') {
                this.crewTab = false;
                this.talentTab = false;
                this.vendorTab = false;
            }
        }
        this.getEmailNotificationSettings();
        localStorage.removeItem("profileVideo");
        this.getAllVideos();
    }
    selectUnionData() {
        this.selectedUnionArray = [];
        this.unionArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedUnionArray.push(item.value);
            }
        });
    }
    selecteunion(travles) {
        this.unionArray.map((item, index) => {
            let id = item.value;
            if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
                this.unionArray[index].selected = true;
                this.selectedUnionArray.push(item.value);
            }
        });
    }
    selectData() {
        this.selectedWilingToTravelArray = [];
        this.willingToTravelArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedWilingToTravelArray.push(item.value);
            }
        });
    }
    selectwillingToTravel(travles) {
        this.willingToTravelArray.map((item, index) => {
            let id = item.value;
            if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
                this.willingToTravelArray[index].selected = true;
                this.selectedWilingToTravelArray.push(item.value);
            }
        });
    }
    selectjobinterested(travles) {
        this.jobInterestedInArray.map((item, index) => {
            let id = item.value;
            if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
                this.jobInterestedInArray[index].selected = true;
                this.selectedJobInterestedInArray.push(item.value);
            }
        });
    }
    selectjobinterestedData() {
        this.selectedJobInterestedInArray = [];
        this.jobInterestedInArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedJobInterestedInArray.push(item.value);
            }
        });
    }
    selectexperienced(travles) {
        this.experiencedInArray.map((item, index) => {
            let id = item.value;
            if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
                this.experiencedInArray[index].selected = true;
                this.selectedExperiencedInArray.push(item.value);
            }
        });
    }
    selectexperiencedData() {
        this.selectedExperiencedInArray = [];
        this.experiencedInArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedExperiencedInArray.push(item.value);
            }
        });
    }
    selectequipment(travles) {
        this.equipmentOwnedArray.map((item, index) => {
            let id = item.value;
            if (typeof travles != 'undefined' && travles.indexOf(item.value) !== -1) {
                this.equipmentOwnedArray[index].selected = true;
                this.selectedEquipmentOwnedArray.push(item.value);
            }
        });
    }
    selectequipmentData() {
        this.selectedEquipmentOwnedArray = [];
        this.equipmentOwnedArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedEquipmentOwnedArray.push(item.value);
            }
        });
    }
    selectEquimentRendalData() {
        this.selectedequipmentRentalArray = [];
        this.equipmentRentalArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedequipmentRentalArray.push(item.value);
            }
        });
    }
    otpPhoneVerified() {
        this.otp = this.otpPhone;
        this.userService.otpPhoneVerified(this.otp, this.usersId)
            .subscribe(data => {
            this.otpPhoneVerifiedArr = data;
            this.isPhoneOtpVerified = this.otpPhoneVerifiedArr.data.isOtpVerified;
            if (this.isPhoneOtpVerified == 1) {
                this.phoneVerify = 'is-valid';
                setTimeout(() => {
                    this.isPhoneVerify = false;
                }, 500);
            }
            else {
                this.phoneVerify = 'is-invalid';
            }
        }, error => {
            this.phoneVerify = 'is-invalid';
        });
    }
    get f() { return this.editform.controls; }
    get t() { return this.talenteditform.controls; }
    get c() { return this.creweditform.controls; }
    get d() { return this.vendorEditform.controls; }
    get imdbForms() {
        return this.editform.get('imdbLink');
    }
    addImdb() {
        const imdb = this.fb.group({
            link: [],
        });
        this.imdbForms.push(imdb);
    }
    deleteImdb(i) {
        this.imdbForms.removeAt(i);
    }
    addSelectedImdb(imDbArray) {
        imDbArray.forEach((item, index) => {
            const imdb = this.fb.group({
                link: [item.socialMediaLink],
            });
            this.imdbForms.push(imdb);
        });
    }
    verifyPhone() {
        this.userService.verifyPhone(this.phone, this.usersId).subscribe(data => {
            this.verifyPhoneArr = data;
            this.isVerifyPhone = this.verifyPhoneArr.data.isVerifyPhone;
            if (this.isVerifyPhone == 1) {
                this.isPhoneVerify = true;
                this.closePhoneLink = true;
            }
        });
    }
    toggleUser(event) {
        if (event.id == 5) {
            this.crewTab = true;
        }
        if (event.id == 3) {
            this.talentTab = true;
        }
        if (event.id == 6) {
            this.vendorTab = true;
        }
    }
    toggleDeSelectUser(event) {
        if (event.id == 5) {
            this.crewTab = false;
        }
        if (event.id == 3) {
            this.talentTab = false;
        }
        if (event.id == 6) {
            this.vendorTab = false;
        }
    }
    onSelectAll(event) {
        this.crewTab = true;
        this.talentTab = true;
        this.vendorTab = true;
    }
    onDeSelectAll(event) {
        this.crewTab = false;
        this.talentTab = false;
        this.vendorTab = false;
    }
    getValues(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    uploadResume(resumeInput) {
        if (this.editform.controls.resume.value) {
            const file = resumeInput.files[0];
            const reader = new FileReader();
            this.uploadedFile = file.name;
            const one$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](observer => {
                reader.onload = (ev) => {
                    this.selectedFile = new ImageSnippet(reader.result, file);
                    observer.next();
                };
                reader.readAsDataURL(file);
            });
            one$.subscribe({
                next: value => {
                    this.userService.uploadResume(this.selectedFile.src, this.id)
                        .subscribe((res) => {
                    });
                }
            });
        }
        else {
            return true;
        }
    }
    uploadFile(fileMeta, uploadUrl) {
        const options = {
            fileKey: 'file',
            fileName: fileMeta.fileNameFromPath,
            headers: {
                'Content-Length': fileMeta.size,
                'Content-Type': fileMeta.type,
            },
            httpMethod: 'PUT',
            mimeType: fileMeta.type,
        };
        const fileTransfer = this.transfer.create();
        return fileTransfer.upload(fileMeta.path, uploadUrl, options);
    }
    processResumeFile(imageInput) {
        if (true) {
            const file = imageInput.files[0];
            const reader = new FileReader();
            const one$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](observer => {
                reader.addEventListener('load', (event) => {
                    this.selectedFile = new ImageSnippet(event.target.result, file);
                    observer.next();
                });
                // reader.readAsDataURL(file);
            });
            one$.subscribe({
                next: value => {
                    //  this.selectedFile = value;
                    this.userService.uploadResume(this.selectedFile.src, this.id)
                        .subscribe((res) => {
                        //this.usersDetails = currentUser;
                        this.profileImage = res;
                        this.profileImage = this.profileImage.data.image;
                        //this.updateLocalStorage(this.profileImage);
                    });
                }
            });
        }
        else {}
    }
    onUpdate() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((observer) => {
            this.submitted = true;
            if (this.editform.invalid) {
                return;
            }
            else {
                if (((!this.creweditform.invalid && this.crewTab) || (!this.talenteditform.invalid && this.talentTab) || (!this.vendorEditform.invalid && this.vendorTab)) || (this.talentTab == false && this.crewTab == false && this.vendorTab == false)) {
                    if (this.editform.value.isPhonePublic == true) {
                        this.editform.value.isPhonePublic = 1;
                    }
                    else {
                        this.editform.value.isPhonePublic = 0;
                    }
                    if (this.editform.value.isAddressPublic == true) {
                        this.editform.value.isAddressPublic = 1;
                    }
                    else {
                        this.editform.value.isAddressPublic = 0;
                    }
                    if (this.editform.value.isEmailPublic == true) {
                        this.editform.value.isEmailPublic = 1;
                    }
                    else {
                        this.editform.value.isEmailPublic = 0;
                    }
                    this.editform.value.accountType = this.usersType;
                    this.editform.value.fullAddress = this.fullAddress;
                    this.editform.value.countryName = this.countryName;
                    this.editform.value.stateName = this.stateName;
                    this.editform.value.cityName = this.cityName;
                    this.editform.value.latitude = this.latitude;
                    this.editform.value.longitude = this.longitude;
                    this.editform.value.street = this.street;
                    this.editform.value.zip = this.zip;
                    this.editform.value.locationName = this.locationName;
                    this.editform.value.phone = this.editform.value.phone.replace(/\D/g, '');
                    if (this.editform.value.imdbLink) {
                        if (typeof (this.editform.value.imdbLink) == 'string') {
                            this.editform.value.imdbLink = [this.editform.value.imdbLink];
                        }
                        else {
                            this.editform.value.imdbLink = this.editform.value.imdbLink.map((item, index) => {
                                return item.link;
                            }).join(',');
                        }
                    }
                    this.userService.updateUser(this.id, this.editform.value)
                        .subscribe(data => {
                        this.usersDetails = data;
                        this.usersDetails = this.usersDetails.data.userDetails;
                        if (this.usersDetails.data) {
                            this.storage.set('userData', this.usersDetails.data.userData);
                        }
                        localStorage.removeItem("currentUser");
                        localStorage.setItem('currentUser', JSON.stringify(this.usersDetails));
                        localStorage.removeItem("fullName");
                        localStorage.setItem('fullName', this.usersDetails.fullName);
                        localStorage.setItem('profileComplitted', 'true');
                        this.profileImage = this.usersDetails.profileImage;
                        this.fullBodyPic = this.usersDetails.fullBodyPic;
                        if (this.usersDetails.usersImages.length > 0) {
                            this.usersImages = this.usersDetails.usersImages;
                        }
                        else {
                            this.usersImages[0] = 'https://yapbuzz.com/works/gmos/assets/images/avatar5.png';
                        }
                        if (this.usersDetails.usersAddress.length > 0) {
                            this.fullAddress = this.usersDetails.usersAddress[0].fullAddress;
                        }
                        if (this.usersDetails.isPhonePublic == 1) {
                            this.usersDetails.isPhonePublic = true;
                        }
                        else {
                            this.usersDetails.isPhonePublic = false;
                        }
                        if (this.usersDetails.isAddressPublic == 1) {
                            this.usersDetails.isAddressPublic = true;
                        }
                        else {
                            this.usersDetails.isAddressPublic = false;
                        }
                        if (this.usersDetails.fullBodyPic) {
                            this.fullBodyPic = this.usersDetails.fullBodyPic;
                        }
                        else {
                            this.fullBodyPic = 'https://yapbuzz.com/works/gmos/assets/images/avatar5.png';
                        }
                        if (this.usersDetails.isEmailPublic == 1) {
                            this.usersDetails.isEmailPublic = true;
                        }
                        else {
                            this.usersDetails.isEmailPublic = false;
                        }
                        this.usersType = this.usersDetails.usersType;
                        this.usersTypeArr = this.usersDetails.usersTypeId;
                        observer.next(true);
                    }, error => {
                        this.utility.showToast('Something went wrong please try again.');
                    });
                }
            }
        });
    }
    talentUpdate() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((observer) => {
            this.talentSubmitted = true;
            if (this.talenteditform.invalid) {
                return;
            }
            else {
                this.talenteditform.value.willingToTravel = this.selectedWilingToTravelArray;
                this.talenteditform.value.union = this.selectedUnionArray;
                this.userService.updateTalent(this.id, this.talenteditform.value)
                    .subscribe(data => {
                    this.usersDetails = data;
                    this.usersDetails = this.usersDetails.data.userDetails;
                    if (this.usersDetails.tattoos == 1) {
                        this.tattoosDescriptionChecked = true;
                    }
                    localStorage.removeItem("currentUser");
                    localStorage.setItem('currentUser', JSON.stringify(this.usersDetails));
                    observer.next(true);
                }, error => {
                    this.utility.showToast('Something went wrong please try again.');
                    // this.istalentPosted = 2;
                    // setTimeout(() => {
                    //   this.istalentPosted = 0;
                    // }, 3000)
                });
            }
        });
    }
    crewUpdate() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((observer) => {
            this.crewSubmitted = true;
            if (this.creweditform.invalid) {
                return;
            }
            else {
                this.creweditform.value.experiencedIn = this.selectedExperiencedInArray;
                this.creweditform.value.jobInterestedIn = this.selectedJobInterestedInArray;
                this.userService.updateCrew(this.id, this.creweditform.value)
                    .subscribe(data => {
                    this.usersDetails = data;
                    this.usersDetails = this.usersDetails.data.userDetails;
                    if (this.usersDetails.equipmentOwned == 1) {
                        this.equipmentOwnedDescriptionChecked = true;
                    }
                    localStorage.removeItem("currentUser");
                    localStorage.setItem('currentUser', JSON.stringify(this.usersDetails));
                    this.usersType = this.usersDetails.usersType;
                    this.usersTypeArr = this.usersDetails.usersTypeId;
                    observer.next(true);
                }, error => {
                    this.utility.showToast('Something went wrong please try again.');
                    // this.istalentPosted = 2;
                    // setTimeout(() => {
                    //   this.istalentPosted = 0;
                    // }, 3000)
                });
            }
        });
    }
    vendorUpdate() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((observer) => {
            this.vendorSubmitted = true;
            if (this.vendorEditform.invalid) {
                return;
            }
            this.vendorEditform.value.equipmentRental = this.selectedequipmentRentalArray;
            this.userService.updateVendor(this.id, this.vendorEditform.value)
                .subscribe(data => {
                this.usersDetails = data;
                this.usersDetails = this.usersDetails.data.userDetails;
                localStorage.removeItem("currentUser");
                localStorage.setItem('currentUser', JSON.stringify(this.usersDetails));
                this.usersType = this.usersDetails.usersType;
                this.usersTypeArr = this.usersDetails.usersTypeId;
                observer.next(true);
                // this.isvendorPosted = 1;
                // setTimeout(() => {
                //     this.isvendorPosted = 0;
                // }, 2000)
            }, error => {
                // this.isvendorPosted = 2;
                // setTimeout(() => {
                //     this.isvendorPosted = 0;
                // }, 2000)
            });
        });
    }
    handleAddressChange(address) {
        let addDetails = this.extract(address);
        this.fullAddress = addDetails.full_address;
        this.countryName = addDetails.detail.country.short_name;
        this.stateName = addDetails.detail.state;
        this.cityName = addDetails.detail.city;
        this.latitude = addDetails.latlng.lat;
        this.longitude = addDetails.latlng.lng;
        this.street = addDetails.detail.street;
        this.zip = addDetails.detail.zip;
        this.locationName = addDetails.detail.location;
        let temObject = {
            countryName: addDetails.detail.country.short_name,
            stateName: addDetails.detail.state,
            cityName: addDetails.detail.city,
            latitude: addDetails.latlng.lat,
            longitude: addDetails.latlng.lng,
            street: addDetails.detail.street,
            zip: addDetails.detail.zip,
            locationName: addDetails.detail.location,
        };
        this.usersAddressDetails = temObject;
    }
    extract(receivedAddresses) {
        let address_components = receivedAddresses.address_components;
        let address = {
            full_address: receivedAddresses.formatted_address,
            latlng: {
                lat: receivedAddresses.geometry.location.lat(),
                lng: receivedAddresses.geometry.location.lng(),
            },
            detail: {
                location: '',
                street: '',
                city: '',
                state: '',
                department: '',
                country: {
                    name: '',
                    short_name: '',
                },
                zip: '',
            },
        };
        address_components.forEach((component) => {
            if (component.types.indexOf("street_number") > -1) {
                // set numero
                address.detail['location'] = component.long_name;
            }
            if (component.types.indexOf("route") > -1) {
                // set voie
                address.detail['street'] = component.long_name;
            }
            if (component.types.indexOf("locality") > -1) {
                // set ville
                address.detail['city'] = component.long_name;
            }
            if (component.types.indexOf("administrative_area_level_2") > -1) {
                // set departement
                address.detail['department'] = component.long_name;
            }
            if (component.types.indexOf("administrative_area_level_1") > -1) {
                // set region
                address.detail['state'] = component.long_name;
            }
            if (component.types.indexOf("country") > -1) {
                // set pays
                address.detail['country'] = {
                    name: component.long_name,
                    short_name: component.short_name,
                };
            }
            if (component.types.indexOf("postal_code") > -1) {
                // set code postal
                address.detail['zip'] = component.long_name;
            }
        });
        return address;
    }
    profileUpdate() {
        console.log('condition Matched!');
        console.log('crewTab', this.crewTab);
        console.log('talentTab', this.talentTab);
        console.log('vendorTab', this.vendorTab);
        let editSubmitArr = [];
        let editOptionArr = [];
        if (this.crewTab == false && this.talentTab == false && this.vendorTab == false) {
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.onUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FIRST!')));
            const subscribe = example.subscribe(val => {
                if (val == 'FIRST!') {
                    this.userUpdateAll();
                }
            });
        }
        if (this.crewTab == false && this.talentTab == false && this.vendorTab == true) {
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.onUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FIRST!')), this.vendorUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FOURTH!')));
            const subscribe = example.subscribe(val => {
                editSubmitArr.push(val);
                if (editSubmitArr.length == editOptionArr.length) {
                    this.userUpdateAll();
                }
            });
        }
        if (this.crewTab == false && this.talentTab == true && this.vendorTab == false) {
            editOptionArr = ['FIRST!', 'THIRD!'];
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.onUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FIRST!')), this.talentUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('THIRD!')));
            const subscribe = example.subscribe(val => {
                editSubmitArr.push(val);
                if (editSubmitArr.length == editOptionArr.length) {
                    this.userUpdateAll();
                }
            });
        }
        if (this.crewTab == false && this.talentTab == true && this.vendorTab == true) {
            editOptionArr = ['FIRST!', 'THIRD!'];
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.onUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FIRST!')), this.talentUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('THIRD!')), this.vendorUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FOURTH!')));
            const subscribe = example.subscribe(val => {
                editSubmitArr.push(val);
                if (editSubmitArr.length == editOptionArr.length) {
                    this.userUpdateAll();
                }
            });
        }
        if (this.crewTab == true && this.talentTab == false && this.vendorTab == false) {
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.onUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FIRST!')), this.crewUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('SECOND!')));
            const subscribe = example.subscribe(val => {
                editSubmitArr.push(val);
                if (editSubmitArr.length == editOptionArr.length) {
                    this.userUpdateAll();
                }
            });
        }
        if (this.crewTab == true && this.talentTab == false && this.vendorTab == true) {
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.onUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FIRST!')), this.crewUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('SECOND!')), this.vendorUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FOURTH!')));
            const subscribe = example.subscribe(val => {
                editSubmitArr.push(val);
                if (editSubmitArr.length == editOptionArr.length) {
                    this.userUpdateAll();
                }
            });
        }
        if (this.crewTab == true && this.talentTab == true && this.vendorTab == false) {
            editOptionArr = ['FIRST!', 'SECOND!', 'THIRD!'];
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.onUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FIRST!')), this.crewUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('SECOND!')), this.talentUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('THIRD!')));
            const subscribe = example.subscribe(val => {
                editSubmitArr.push(val);
                if (editSubmitArr.length == editOptionArr.length) {
                    this.userUpdateAll();
                }
            });
        }
        if (this.crewTab == true && this.talentTab == true && this.vendorTab == true) {
            editOptionArr = ['FIRST!', 'SECOND!', 'THIRD!'];
            const example = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.onUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FIRST!')), this.crewUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('SECOND!')), this.talentUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('THIRD!')), this.vendorUpdate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])('FOURTH!')));
            const subscribe = example.subscribe(val => {
                editSubmitArr.push(val);
                if (editSubmitArr.length == editOptionArr.length) {
                    this.userUpdateAll();
                }
            });
        }
    }
    getEmailNotificationSettings() {
        this.userService.getUserEmailNotificationMap(this.usersId, this.usersDetails.usersTypeId)
            .subscribe(data => {
            this.emailNotifications = data;
            this.emailNotifications = this.emailNotifications.data.emailNotificationSettings;
        }, error => {
        });
    }
    userUpdateAll() {
        this.utility.showToast('Your profile has been successfully updated.');
        // this.router.navigateByUrl('/gigs/Crew');
        // this.istalentPosted = 1;
        // window.scrollBy({
        //   top: 100,
        //   behavior: 'smooth'
        // });
        // setTimeout(() => {
        //   this.istalentPosted = 0;
        // }, 4000)
    }
    changeTab(item) {
        this.showTab = item;
        if (item == 'profileTab') {
            //this.router.navigate['']
        }
    }
    verify() {
        this.showVerifiedPhone = true;
    }
    verifyEmail() {
        // this.isEmailVerify = true;
        // this.closeEmailLink = true;
        this.userService.verifyEmail(this.email, this.usersId).subscribe(data => {
            if (this.isVerifyEmail == 1) {
                this.isEmailVerify = true;
                this.closeEmailLink = true;
            }
        });
    }
    toggleEquipmentOwnedDescription(event) {
        this.equipmentOwnedDescriptionChecked = false;
        if (event.target.value == 1) {
            this.equipmentOwnedDescriptionChecked = true;
        }
    }
    toggletattoosDescription(event) {
        this.tattoosDescriptionChecked = false;
        if (event.target.value == 1) {
            this.tattoosDescriptionChecked = true;
        }
    }
    processFile(imageInput, type) {
        switch (type) {
            case 'profileImage':
                this.profileImage = imageInput;
                this.userService.uploadImage(this.imagedata, this.id)
                    .subscribe((res) => {
                    //this.usersDetails = currentUser;
                    let profileImage = res;
                    this.profileImage = profileImage.data.image;
                    //this.updateLocalStorage(this.profileImage);
                });
                break;
            case 'addtionalPhoto':
                this.usersImages = imageInput;
                this.userService.uploadAdditionalImage(this.imagedata, this.id)
                    .subscribe((res) => {
                    //this.usersDetails = currentUser;
                    let profileImage = res;
                    this.usersImages = profileImage.data.image;
                    //this.updateLocalStorage(this.profileImage);
                });
                break;
            case 'fullBodyImage':
                this.fullBodyPic = imageInput;
                this.userService.uploadFullBodyImage(this.imagedata, this.id).subscribe(res => {
                    let profileImage = res;
                    this.fullBodyPic = profileImage.data.image;
                });
                break;
            case 'uploadResume':
                // this.userService.uploadResume(imageInput, this.id)
                //   .subscribe(
                //     (res) => {
                //     })
                break;
        }
    }
    takePicture(sourceType, type) {
        let base64Image;
        const options = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            allowEdit: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then((imageData) => {
            base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imagedata = base64Image;
            this.addtionalImagesArray.push(base64Image);
            this.processFile(this.imagedata, type);
        }, (err) => {
        });
    }
    addAddiotionalImages(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Add photo',
                buttons: [{
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA, type);
                        }
                    }, {
                        text: 'Gallery',
                        icon: 'images',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, type);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    deleteAdditionalImages(imageId) {
        this.userService.deleteAdditionalImage(imageId, this.usersId).subscribe(res => {
            this.usersImages = res.data.allImages;
        });
    }
    switchClicked(event, notificationId, mapId) {
        let status = '0';
        if (event.srcElement.checked == true) {
            status = '1';
        }
        let relatedVal = 0;
        if (notificationId == '1' || notificationId == '2') {
            let emailNoti = this.emailNotifications.find((o) => { return o.emailNotificationId == notificationId; });
            relatedVal = emailNoti.relatedVal;
        }
        this.userService.updateUserEmailNotifications(this.usersId, status, mapId, notificationId, relatedVal)
            .subscribe(data => {
            let notification = this.emailNotifications.find((o) => { return o.emailNotificationMapId == mapId; });
            notification.status = status;
        }, error => {
        });
    }
    deleteImage() {
        // console.log(this.imageId) ;
        // this.EditprofileService.deleteAdditionalImage(this.imageId, this.id)
        // .subscribe(
        //     (res) => {
        //         //console.log(res) ;
        //         this.usersImages = res;
        //         //this.usersImages = this.usersImages.data.image;
        //         this.additionalImages = this.usersImages.data.allImages;
        //         this.myModal.hide();
        //     });
    }
    getVideoDetails(e) {
        const file = e.target.files && e.target.files[0];
        if (file) {
            this.loadVideo = true;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                this.url = event.target.result;
                this.myFiles.push({
                    name: file.name,
                    type: file.type,
                    file: this.url
                });
                this.userService.uploadVideo(this.url, this.id)
                    .subscribe((res) => {
                    //console.log(res) ;
                    this.userVideos = res;
                    this.loadVideo = false;
                    //this.usersImages = this.usersImages.data.image;
                    this.userVideos = this.userVideos.data.allVideos;
                    //console.log("===== User Video =======") ;
                    localStorage.removeItem("profileVideo");
                    localStorage.setItem('profileVideo', this.userVideos[0].video);
                    //console.log(this.userVideos) ;
                }, error => {
                    this.loadVideo = false;
                });
            };
        }
    }
    getAllVideos() {
        this.userService.getAllVideos(this.usersId)
            .subscribe(data => {
            this.userVideos = data;
            this.userVideos = this.userVideos.data.videos;
            console.log(this.userVideos);
            localStorage.setItem('profileVideo', this.userVideos[0].video);
            console.log('=== Profile Video storeage ===');
            console.log(localStorage.getItem('profileVideo'));
        }, error => {
        });
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_16__["DocumentViewer"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_13__["FileTransfer"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_10__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_15__["FilePath"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_8__["SignInService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoPlayer', { static: true })
], EditComponent.prototype, "videoplayer", void 0);
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.scss */ "./src/app/user/edit/edit.component.scss")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/user/favourite/favourite.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/user/favourite/favourite.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head-text {\n  margin-top: 5px;\n  margin-bottom: auto;\n  font-size: 15px;\n  margin-left: -5px;\n  margin-right: auto;\n}\n\n.fixed-heading {\n  --background: #F5F5F5 !important;\n  width: 100%;\n  position: fixed;\n  z-index: 999;\n  padding-top: 11px;\n  padding-bottom: 11px;\n  margin-top: -12px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n#removeBtn {\n  height: 22px;\n  font-size: 10px;\n  text-transform: none;\n  border-radius: 2px !important;\n  background: #C1270B !important;\n  color: white;\n  width: 100%;\n}\n\n#filterBtn {\n  height: 22px;\n  font-size: 10px;\n  text-transform: none;\n  border-radius: 2px !important;\n  background: #C1270B !important;\n  color: white;\n  width: 100%;\n}\n\nion-card-title {\n  font-size: 12px;\n  font-weight: bold;\n}\n\np {\n  font-size: 12px;\n}\n\n.profile {\n  margin-left: -16px;\n  padding: 0px;\n  margin-right: -15px;\n  margin-bottom: -37px;\n}\n\n.icon {\n  width: 25px;\n}\n\n.actor-card {\n  border-radius: 0px;\n  height: calc(100% - 40px);\n  width: 100%;\n  box-shadow: none;\n  border: 1px solid #F0F0F0;\n  margin-top: 65px;\n  margin-bottom: -12px;\n}\n\n.actor-image {\n  width: 100%;\n  height: auto;\n}\n\n.actor-row {\n  width: 100%;\n  margin-top: -24px;\n  margin-bottom: 20px;\n}\n\n.card-details {\n  margin-left: 0;\n  margin-right: 30px;\n  margin-top: -5px;\n  margin-bottom: 2px;\n  font-size: 12px;\n}\n\n/* Customize the label (the container) */\n\n.check {\n  display: block;\n  position: relative;\n  padding-left: 18px;\n  margin-bottom: 0px;\n  cursor: pointer;\n  font-size: 14px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-weight: bold;\n  color: black;\n}\n\n/* Hide the browser's default checkbox */\n\n.check input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 14px;\n  background-color: #eee;\n}\n\n/* On mouse-over, add a grey background color */\n\n.check:hover input ~ .checkmark {\n  background-color: #ccc;\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.check input:checked ~ .checkmark {\n  background-color: #012E4D;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.check input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.check .checkmark:after {\n  left: 5px;\n  top: 3px;\n  width: 5px;\n  height: 8px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.box-title {\n  margin-top: 0;\n  margin-bottom: 0rem;\n  font-weight: bold;\n}\n\n.box-heading {\n  margin-top: 0px;\n  margin-bottom: 0rem;\n}\n\n.box {\n  overflow-y: scroll;\n  margin-top: 50px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.paginationDiv {\n  margin-bottom: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mYXZvdXJpdGUvRjpcXEF2aXJ1cElvbmljQXBwXFxHaXRHbW9zVmlzaGFsXFxnZXRtZW9uc2V0QXBwL3NyY1xcYXBwXFx1c2VyXFxmYXZvdXJpdGVcXGZhdm91cml0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9mYXZvdXJpdGUvZmF2b3VyaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZFO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDS047O0FESEU7RUFDRSxlQUFBO0FDTUo7O0FESkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDT0o7O0FETEU7RUFDSSxXQUFBO0FDUU47O0FETkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDU0o7O0FEUEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1VKOztBRFJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNXSjs7QURURTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDWUo7O0FEVEUsd0NBQUE7O0FBQ0Y7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFRFLHdDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDWUo7O0FEVEUsNkJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ1lKOztBRFRFLCtDQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUNZSjs7QURURSx3REFBQTs7QUFDQTtFQUNFLHlCQUFBO0FDWUo7O0FEVEUsNkRBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDWUo7O0FEVEUsb0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDWUo7O0FEVEUsa0NBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBRUEsd0JBQUE7QUNZSjs7QURURTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDWUo7O0FEVEU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNZSjs7QURWRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDYUo7O0FEVkU7RUFDRSxXQUFBO0FDYUo7O0FEVEU7RUFDRSxtQkFBQTtBQ1lKOztBRFBFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1VKOztBRE5FO0VBQ0UsZ0JBQUE7QUNTSjs7QURQRTtFQUNFLG1CQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC91c2VyL2Zhdm91cml0ZS9mYXZvdXJpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZC10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLmZpeGVkLWhlYWRpbmd7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGNUY1RjUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTFweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gICNyZW1vdmVCdG57XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0MxMjcwQiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICNmaWx0ZXJCdG57XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0MxMjcwQiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOztcclxuICB9XHJcbiAgcHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnByb2ZpbGV7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTM3cHg7XHJcbiAgfVxyXG4gIC5pY29ue1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICB9XHJcbiAgLmFjdG9yLWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjBGMDtcclxuICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcclxuICB9XHJcbiAgLmFjdG9yLWltYWdle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5hY3Rvci1yb3d7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmNhcmQtZGV0YWlsc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXHJcbi5jaGVjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuICAuY2hlY2sgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuICAuY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gIC5jaGVjazpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbiAgLmNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTJFNEQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcbiAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4gIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuICAuY2hlY2sgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmJveC10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIFxyXG4gIH1cclxuICAuYm94LWhlYWRpbmd7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gIH1cclxuICAuYm94e1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgXHJcbiAgfVxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICAgXHJcbiAgfVxyXG4gICBcclxuIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTsgXHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uRGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxuICB9IiwiLmhlYWQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZml4ZWQtaGVhZGluZyB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbiNyZW1vdmVCdG4ge1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjQzEyNzBCICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNmaWx0ZXJCdG4ge1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjQzEyNzBCICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByb2ZpbGUge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTM3cHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5hY3Rvci1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YwRjBGMDtcbiAgbWFyZ2luLXRvcDogNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG59XG5cbi5hY3Rvci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5hY3Rvci1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jYXJkLWRldGFpbHMge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGNvbnRhaW5lcikgKi9cbi5jaGVjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cbi5jaGVjayBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4uY2hlY2s6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4uY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyRTREO1xufVxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuLmNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG4uY2hlY2sgLmNoZWNrbWFyazphZnRlciB7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAzcHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uYm94LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3gtaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbn1cblxuLmJveCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLnBhZ2luYXRpb25EaXYge1xuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/favourite/favourite.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/favourite/favourite.component.ts ***!
  \*******************************************************/
/*! exports provided: FavouriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteComponent", function() { return FavouriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_search_favourite_search_favourite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/search-favourite/search-favourite.component */ "./src/app/search/search-favourite/search-favourite.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let FavouriteComponent = class FavouriteComponent {
    constructor(modal, userService, signinService, utility, router) {
        this.modal = modal;
        this.userService = userService;
        this.signinService = signinService;
        this.utility = utility;
        this.router = router;
        this.searchData = {
            moduleId: "2",
            date: '',
            radious: '101',
            gigActive: "1",
            status: "1",
        };
        this.removedSelectedArray = [];
        this.myFavoritesArray = [];
        this.myFavoritesToBeRemoved = [];
        this.userIsAuthenticated = false;
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.start = 0;
        this.limit = 10;
        this.totalRowCount = 0;
        this.requestData = {
            limit: this.limit,
            start: this.start,
        };
        this.address = [];
        this.relatedDetail = [];
        this.noFavouriteFound = 0;
    }
    ngOnInit() {
        this.isLoggedIn = localStorage.getItem("isLoggedin");
        this.userDetails = this.signinService.getAuthData();
        this.usersId = this.userDetails.usersId;
        this.userService.favouriteList(this.usersId, this.searchData).subscribe((response) => {
            this.myFavoritesArray = response.data.favourites;
            this.address = response.data.favourites.relatedDetails.usersAddress[0];
        });
        this.onsearch(this.searchData);
    }
    search() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _search_search_favourite_search_favourite_component__WEBPACK_IMPORTED_MODULE_3__["SearchFavouriteComponent"]
            });
            modal.onDidDismiss()
                .then((searchData) => {
                console.log("searchdata on dismiss modal", this.searchData);
                if (searchData.data) {
                    this.searchData = searchData.data;
                    this.onsearch(searchData.data);
                }
            });
            return yield modal.present();
        });
    }
    onsearch(searchData) {
        this.userService.favouriteList(this.usersId, this.searchData).subscribe((response) => {
            this.myFavoritesArray = response.data.favourites;
            this.noFavouriteFound = 0;
            if (this.myFavoritesArray.length == 0) {
                this.noFavouriteFound = 1;
            }
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
        });
    }
    gigType(gigType) {
        if (gigType == 1) {
            return ("Crew");
        }
        if (gigType == 2) {
            return ("Talent");
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
        };
        if (favorite.selected) {
            this.myFavoritesToBeRemoved.push(favorite);
            this.removedSelectedArray.push(obj);
            //this.removedSelectedArray.push(favorite.favouriteId);
        }
        else {
            this.myFavoritesToBeRemoved.splice(this.myFavoritesToBeRemoved.indexOf(favorite), 1);
            this.removedSelectedArray.splice(this.removedSelectedArray.indexOf(obj), 1);
        }
    }
    removeSeleted() {
        this.userService.favouriteDelete(this.removedSelectedArray).subscribe((response) => {
            this.myFavoritesToBeRemoved.forEach((item, index) => {
                this.myFavoritesArray.splice(this.myFavoritesArray.indexOf(item), 1);
            });
            this.myFavoritesToBeRemoved = [];
        });
    }
    pageChange(newPage) {
        this.config.currentPage = newPage;
        this.start = (newPage - 1) * this.limit;
        // this.onSearch();
    }
};
FavouriteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_6__["SignInService"] },
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
FavouriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favourite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favourite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favourite/favourite.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favourite.component.scss */ "./src/app/user/favourite/favourite.component.scss")).default]
    })
], FavouriteComponent);



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(router, utility, formBuilder, userService) {
        this.router = router;
        this.utility = utility;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.submitted = false;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        });
    }
    submit() {
        this.submitted = true;
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        this.userService.recoverPassword(this.forgotPasswordForm.value).subscribe(response => {
            if (response.message) {
                this.utility.showToast(response.message);
            }
            else {
                this.utility.showToast("We have sent a reset password email");
                this.router.navigateByUrl('/sign-in');
            }
        });
    }
    get f() {
        return this.forgotPasswordForm.controls;
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/user/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/user/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/user/list/list.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:link, a:visited {\n  color: #919294;\n  text-decoration: none;\n}\n\na:link:active, a:visited:active {\n  color: black;\n}\n\n.fixed-heading {\n  --background: #DDDDDD !important;\n  width: 100%;\n  position: fixed;\n  z-index: 999;\n}\n\n#filterBtn {\n  height: 20px;\n  font-size: 10px;\n  text-transform: none;\n  --border-radius: 0px !important;\n  --background: #C1270B !important;\n  width: 72px;\n}\n\n.profileimg {\n  width: 100%;\n  height: 180px;\n  padding: 3px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-card-title {\n  font-weight: bold;\n}\n\n.profile {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.profilecol {\n  padding: 0;\n}\n\n.icon {\n  height: 25px;\n  width: 25px;\n  background: #383a3e;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 20px;\n}\n\n.iconMail {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  text-align: center;\n}\n\n.actorImage {\n  overflow: visible;\n}\n\n.selectedArtist {\n  text-align: center;\n  padding-top: 12px;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.highlightArtist {\n  border-bottom: 3px solid #C1270B;\n}\n\n.ngx-pagination {\n  margin-bottom: 1rem !important;\n  margin-top: 1rem !important;\n}\n\nion-card-header + .card-content-md {\n  padding-bottom: 0px !important;\n}\n\nion-card-header + .card-content-ios {\n  padding-bottom: 0px !important;\n}\n\n.paginationDiv {\n  margin-bottom: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9saXN0L0Y6XFxBdmlydXBJb25pY0FwcFxcR2l0R21vc1Zpc2hhbFxcZ2V0bWVvbnNldEFwcC9zcmNcXGFwcFxcdXNlclxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURDRTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNJSjs7QURGRTtFQUNJLGlCQUFBO0FDS047O0FERkU7RUFJSSxXQUFBO0VBQ0EsWUFBQTtFQUlBLGdCQUFBO0FDRE47O0FER0U7RUFDRSxVQUFBO0FDQUo7O0FERUU7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDTjs7QURHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRE1FO0VBQ0UsaUJBQUE7QUNISjs7QURNRTtFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0U7RUFDRSxnQ0FBQTtBQ0pKOztBRFFBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtBQ0xGOztBRE9BO0VBQ0UsOEJBQUE7QUNKRjs7QURNQTtFQUNFLDhCQUFBO0FDSEY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmxpbmssIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogIzkxOTI5NDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpsaW5rOmFjdGl2ZSwgYTp2aXNpdGVkOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5maXhlZC1oZWFkaW5ne1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjREREREREICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbiAgI2ZpbHRlckJ0bntcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogI0MxMjcwQiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDcycHg7XHJcbiAgfVxyXG4gIC5wcm9maWxlaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDs7XHJcbiAgfVxyXG4gXHJcbiAgLnByb2ZpbGV7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDBweDtcclxuICAgICAgLy8gbWFyZ2luOiAtMTFweDtcclxuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLnByb2ZpbGVjb2x7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuaWNvbntcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgYmFja2dyb3VuZDogIzM4M2EzZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAuaWNvbk1haWx7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMzODNhM2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiBcclxuICAuYWN0b3JJbWFnZXtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkQXJ0aXN0e1xyXG4gIC8vICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhpZ2hsaWdodEFydGlzdHtcclxuICAgIGJvcmRlci1ib3R0b206ICAzcHggc29saWQgI0MxMjcwQjtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLm5neC1wYWdpbmF0aW9ue1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVyKy5jYXJkLWNvbnRlbnQtbWR7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jYXJkLWhlYWRlcisuY2FyZC1jb250ZW50LWlvc3tcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZ2luYXRpb25EaXZ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxufSIsImE6bGluaywgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICM5MTkyOTQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpsaW5rOmFjdGl2ZSwgYTp2aXNpdGVkOmFjdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZpeGVkLWhlYWRpbmcge1xuICAtLWJhY2tncm91bmQ6ICNEREREREQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4jZmlsdGVyQnRuIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6ICNDMTI3MEIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDcycHg7XG59XG5cbi5wcm9maWxlaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9maWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2ZpbGVjb2wge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMzODNhM2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pY29uTWFpbCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0b3JJbWFnZSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uc2VsZWN0ZWRBcnRpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uaGlnaGxpZ2h0QXJ0aXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNDMTI3MEI7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1oZWFkZXIgKyAuY2FyZC1jb250ZW50LW1kIHtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1oZWFkZXIgKyAuY2FyZC1jb250ZW50LWlvcyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnBhZ2luYXRpb25EaXYge1xuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sign-up/sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_search_search_crew_search_crew_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/search/search-crew/search-crew.component */ "./src/app/search/search-crew/search-crew.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_search_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/search/search-user/search-user.component */ "./src/app/search/search-user/search-user.component.ts");
/* harmony import */ var src_app_search_search_producer_search_producer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/search/search-producer/search-producer.component */ "./src/app/search/search-producer/search-producer.component.ts");
/* harmony import */ var src_app_search_search_vendor_search_vendor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/search/search-vendor/search-vendor.component */ "./src/app/search/search-vendor/search-vendor.component.ts");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");













let ListComponent = class ListComponent {
    constructor(platform, alert, utilityService, modalController, userService, signinService, signupService, route, router) {
        this.platform = platform;
        this.alert = alert;
        this.utilityService = utilityService;
        this.modalController = modalController;
        this.userService = userService;
        this.signinService = signinService;
        this.signupService = signupService;
        this.route = route;
        this.router = router;
        this.listDetails = [];
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.start = 0;
        this.limit = 10;
        this.totalRowCount = 0;
        this.requestData = {
            limit: this.limit,
            start: this.start,
        };
        this.noTalentFound = 0;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('type')) {
                if (!this.userType) {
                    this.userType = paramMap.get('type');
                }
            }
        });
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
        this.fetchData(this.userType);
    }
    switchResult(gender) {
        if (gender == 1) {
            return ("Any");
        }
        if (gender == 2) {
            return ("Male");
        }
        if (gender == 3) {
            return ("Female");
        }
    }
    pageChange(newPage) {
        this.config.currentPage = newPage;
        this.start = (newPage - 1) * this.limit;
    }
    fetchData(userType) {
        switch (userType) {
            case 'talent':
                this.userService.getTalents(this.usersId)
                    .subscribe(response => {
                    this.listDetails = response;
                    this.listDetails = this.listDetails.data.talents;
                    this.noTalentFound = 0;
                    if (this.listDetails.length == 0) {
                        this.noTalentFound = 1;
                    }
                    this.config = {
                        itemsPerPage: this.limit,
                        currentPage: 1,
                        totalItems: this.totalRowCount
                    };
                }, error => {
                    this.noTalentFound = 1;
                });
                break;
            case 'crew':
                this.userService.getCrews(this.usersId)
                    .subscribe(response => {
                    this.listDetails = response;
                    this.listDetails = this.listDetails.data.crews;
                    this.noTalentFound = 0;
                    if (this.listDetails.length == 0) {
                        this.noTalentFound = 1;
                    }
                    this.config = {
                        itemsPerPage: this.limit,
                        currentPage: 1,
                        totalItems: this.totalRowCount
                    };
                }, error => {
                    this.noTalentFound = 1;
                });
                break;
            case 'producer':
                this.userService.getProducers(this.usersId)
                    .subscribe(response => {
                    this.listDetails = response;
                    this.listDetails = this.listDetails.data.crews;
                    this.noTalentFound = 0;
                    if (this.listDetails.length == 0) {
                        this.noTalentFound = 1;
                    }
                    this.config = {
                        itemsPerPage: this.limit,
                        currentPage: 1,
                        totalItems: this.totalRowCount
                    };
                }, error => {
                    this.noTalentFound = 1;
                });
                break;
            case 'vendor':
                this.userService.getVendors(this.usersId)
                    .subscribe(response => {
                    this.listDetails = response;
                    this.listDetails = this.listDetails.data.vendors;
                    this.noTalentFound = 0;
                    if (this.listDetails.length == 0) {
                        this.noTalentFound = 1;
                    }
                    this.config = {
                        itemsPerPage: this.limit,
                        currentPage: 1,
                        totalItems: this.totalRowCount
                    };
                }, error => {
                    this.noTalentFound = 1;
                });
                break;
        }
    }
    search() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: this.getSearchModal()
            });
            modal.onDidDismiss()
                .then((searchForm) => {
                if (searchForm.data) {
                    this.onSearch(searchForm.data);
                }
            });
            return yield modal.present();
        });
    }
    share() {
        this.utilityService.share();
    }
    getSearchModal() {
        switch (this.userType) {
            case 'talent':
                return src_app_search_search_user_search_user_component__WEBPACK_IMPORTED_MODULE_8__["SearchUserComponent"];
                break;
            case 'crew':
                return src_app_search_search_crew_search_crew_component__WEBPACK_IMPORTED_MODULE_6__["SearchCrewComponent"];
                break;
            case 'producer':
                return src_app_search_search_producer_search_producer_component__WEBPACK_IMPORTED_MODULE_9__["SearchProducerComponent"];
                break;
            case 'vendor':
                return src_app_search_search_vendor_search_vendor_component__WEBPACK_IMPORTED_MODULE_10__["SearchVendorComponent"];
                break;
        }
    }
    onSearch(searchForm) {
        switch (this.userType) {
            case 'talent':
                this.userService.searchUsers(searchForm, this.usersId).subscribe(response => {
                    let searchResponse = response.data;
                    this.listDetails = searchResponse.users;
                    this.noTalentFound = 0;
                    if (this.listDetails.length == 0) {
                        this.noTalentFound = 1;
                    }
                }, error => {
                    this.noTalentFound = 1;
                });
                break;
            case 'crew':
                this.userService.searchCrew(searchForm, this.usersId).subscribe(response => {
                    let searchResponse = response.data;
                    this.listDetails = searchResponse.users;
                    this.noTalentFound = 0;
                    if (this.listDetails.length == 0) {
                        this.noTalentFound = 1;
                    }
                }, error => {
                    this.noTalentFound = 1;
                });
                break;
            case 'producer':
                this.userService.searchProducer(searchForm, this.usersId).subscribe(response => {
                    let searchResponse = response.data;
                    this.listDetails = searchResponse.users;
                    this.noTalentFound = 0;
                    if (this.listDetails.length == 0) {
                        this.noTalentFound = 1;
                    }
                }, error => {
                    this.noTalentFound = 1;
                });
                break;
            case 'vendor':
                this.userService.searchUsers(searchForm, this.usersId).subscribe(response => {
                    let searchResponse = response.data;
                    this.listDetails = searchResponse.users;
                    this.noTalentFound = 0;
                    if (this.listDetails.length == 0) {
                        this.noTalentFound = 1;
                    }
                }, error => {
                    this.noTalentFound = 1;
                });
                break;
        }
    }
    switchUser(userType) {
        this.userType = userType;
        this.fetchData(this.userType);
    }
    addToFavorite(i, isFavourite) {
        if (isFavourite == 0) {
            this.userService.addFavorite(this.listDetails[i].usersId, this.usersId, this.userType)
                .subscribe(data => {
                let favoriteDetails = data;
                if (favoriteDetails.data.isAddedToFavourite == 1) {
                    this.listDetails[i].isFavourite = 1;
                }
                else {
                    this.utilityService.showToast('Unable to add Favorite');
                }
            });
        }
        else {
            this.userService.removeFavorite(this.listDetails[i].usersId, this.usersId, this.userType)
                .subscribe(data => {
                let favoriteDetails = data;
                if (favoriteDetails.data.isRemoveFromFavourite == 1) {
                    this.listDetails[i].isFavourite = 0;
                }
                else {
                    this.utilityService.showToast('Unable to remove Favorite');
                }
            });
        }
    }
    // [routerLink]="['/messages/gigchat/',listItem.usersId]"
    showMsg(userId) {
        this.usersId = userId;
        if (this.isLoggedIn) {
            this.router.navigateByUrl('/messages/gigchat/' + this.usersId);
        }
        else {
            this.utilityService.showToast("Please Login to message this person");
        }
    }
};
ListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"] },
    { type: src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/user/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/user/my-gig/my-gig.component.scss":
/*!***************************************************!*\
  !*** ./src/app/user/my-gig/my-gig.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:link, a:visited {\n  color: #919294;\n  text-decoration: none;\n}\n\na:link:active, a:visited:active {\n  color: black;\n}\n\n.actor {\n  border-bottom: 2px solid #C1270B;\n  text-align: center;\n  margin-bottom: -3px;\n  margin-top: auto;\n}\n\n.fixed-heading {\n  background: #DDDDDD !important;\n  width: 100%;\n  position: fixed;\n  z-index: 2000;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n#filterBtn {\n  height: 20px;\n  font-size: 10px;\n  text-transform: none;\n  --border-radius: 0px !important;\n  --background: #C1270B !important;\n  width: 100%;\n}\n\n.box-heading {\n  margin-top: 0px;\n  margin-bottom: 0rem;\n}\n\n.box {\n  overflow-y: scroll;\n  margin-top: 50px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.box-title {\n  margin-top: 0;\n  margin-bottom: 0rem;\n  font-weight: bold;\n}\n\n.item-native {\n  padding-left: 10px !important;\n  padding-bottom: 3px !important;\n}\n\n.box-content {\n  padding-bottom: 0px;\n  padding-left: 0px;\n}\n\n.selectedGig {\n  margin: auto;\n  text-align: center;\n}\n\n.highlightGig {\n  border-bottom: 3px solid #C1270B;\n  margin-bottom: -3px;\n  margin-top: 5px;\n}\n\n.my-pagination.ngx-pagination a li {\n  color: red !important;\n}\n\n.ngx-pagination {\n  margin-bottom: 1rem !important;\n  margin-top: 1rem !important;\n}\n\n.paginationDiv {\n  margin-bottom: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9teS1naWcvRjpcXEF2aXJ1cElvbmljQXBwXFxHaXRHbW9zVmlzaGFsXFxnZXRtZW9uc2V0QXBwL3NyY1xcYXBwXFx1c2VyXFxteS1naWdcXG15LWdpZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9teS1naWcvbXktZ2lnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQ0FBQTtFQUNELGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VEOztBREFBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFJQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUNGRjs7QURJQTtFQUVFLGVBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEU0E7RUFDRSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNORjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFNBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNJLHFCQUFBO0FDTko7O0FEUUE7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0FDTEY7O0FET0E7RUFDRSxtQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9teS1naWcvbXktZ2lnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpsaW5rLCBhOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiAjOTE5Mjk0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpsaW5rOmFjdGl2ZSwgYTp2aXNpdGVkOmFjdGl2ZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5hY3RvciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDMTI3MEI7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG4gbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG4uZml4ZWQtaGVhZGluZ3tcclxuICBiYWNrZ3JvdW5kOiAjREREREREICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgLy8gcGFkZGluZy10b3A6IDExcHg7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDExcHg7XHJcbiAgLy9tYXJnaW4tdG9wOiAtMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuI2ZpbHRlckJ0bntcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQzEyNzBCICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG4uYm94LWhlYWRpbmd7XHJcbiBcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxufVxyXG4uYm94e1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiBcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuIFxyXG59XHJcbiBcclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODg7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxufVxyXG5cclxuLmJveC10aXRsZXtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBcclxufVxyXG4uaXRlbS1uYXRpdmV7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5ib3gtY29udGVudHtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWRHaWd7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxufVxyXG5cclxuLmhpZ2hsaWdodEdpZ3tcclxuICBib3JkZXItYm90dG9tOiAgM3B4IHNvbGlkICNDMTI3MEI7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uLm5neC1wYWdpbmF0aW9uIGEgbGl7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5neC1wYWdpbmF0aW9ue1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZ2luYXRpb25EaXZ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxufSIsImE6bGluaywgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICM5MTkyOTQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpsaW5rOmFjdGl2ZSwgYTp2aXNpdGVkOmFjdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFjdG9yIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDMTI3MEI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLmZpeGVkLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiAjREREREREICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwMDA7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbiNmaWx0ZXJCdG4ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0MxMjcwQiAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJveC1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuXG4uYm94IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4uYm94LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3gtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uc2VsZWN0ZWRHaWcge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhpZ2hsaWdodEdpZyB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQzEyNzBCO1xuICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5teS1wYWdpbmF0aW9uLm5neC1wYWdpbmF0aW9uIGEgbGkge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbkRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDQycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/my-gig/my-gig.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/my-gig/my-gig.component.ts ***!
  \*************************************************/
/*! exports provided: MyGigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGigComponent", function() { return MyGigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_search_mygig_search_mygig_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/search-mygig/search-mygig.component */ "./src/app/search/search-mygig/search-mygig.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");







let MyGigComponent = class MyGigComponent {
    constructor(modal, userService, signinService, utility) {
        this.modal = modal;
        this.userService = userService;
        this.signinService = signinService;
        this.utility = utility;
        this.userIsAuthenticated = false;
        this.myGigsArray = [];
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 0
        };
        this.start = 0;
        this.limit = 10;
        this.totalRowCount = 0;
        this.requestData = {
            limit: this.limit,
            start: this.start,
        };
        this.noMyGigFound = 0;
        this.selectedGigs = "0";
    }
    ngOnInit() {
        this.isLoggedIn = localStorage.getItem("isLoggedin");
        this.userDetails = this.signinService.getAuthData();
        this.usersId = this.userDetails.usersId;
        this.userService.MyGiglist(this.usersId, this.selectedGigs).subscribe((response) => {
            this.myGigsArray = response.data.gigs;
            this.noMyGigFound = 0;
            if (this.myGigsArray.length == 0) {
                this.noMyGigFound = 1;
            }
            this.config = {
                itemsPerPage: this.limit,
                currentPage: 1,
                totalItems: this.totalRowCount
            };
        }, error => {
            this.noMyGigFound = 1;
        });
        // this.filterGigs(this.selectedGigs);
    }
    filter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _search_search_mygig_search_mygig_component__WEBPACK_IMPORTED_MODULE_3__["SearchMygigComponent"]
            });
            modal.onDidDismiss()
                .then((selectedGigs) => {
                console.log("searchdata on dismiss modal", selectedGigs.data);
                if (selectedGigs.data) {
                    this.selectedGigs = selectedGigs.data;
                    this.filterGigs(selectedGigs.data);
                }
            });
            return yield modal.present();
        });
    }
    filterGigs(selectedGigs) {
        this.userService.MyGiglist(this.usersId, this.selectedGigs).subscribe((response) => {
            this.myGigsArray = response.data.gigs;
            this.noMyGigFound = 0;
            if (this.myGigsArray.length == 0) {
                this.noMyGigFound = 1;
            }
            console.log("this user id ", this.usersId);
        }, error => {
            this.noMyGigFound = 1;
        });
    }
    pageChange(newPage) {
        this.config.currentPage = newPage;
        this.start = (newPage - 1) * this.limit;
        // this.onSearch();
    }
};
MyGigComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_6__["SignInService"] },
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] }
];
MyGigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-gig',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-gig.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-gig/my-gig.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-gig.component.scss */ "./src/app/user/my-gig/my-gig.component.scss")).default]
    })
], MyGigComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/user/edit/edit.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourite/favourite.component */ "./src/app/user/favourite/favourite.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _my_gig_my_gig_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-gig/my-gig.component */ "./src/app/user/my-gig/my-gig.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/user/list/list.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./display/display.component */ "./src/app/user/display/display.component.ts");










const routes = [
    {
        path: '',
        redirectTo: 'crew',
    },
    // {
    //   path: 'crew',
    //   loadChildren: () => import('./crew/crew.module').then( m => m.CrewPageModule)
    // },
    // {
    //   path: 'talent',
    //   loadChildren: () => import('./talent/talent.module').then( m => m.TalentPageModule)
    // },
    {
        path: 'edit',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
    {
        path: 'list/:type',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"]
    },
    {
        path: 'change-password',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"]
    },
    {
        path: 'favorite',
        component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_5__["FavouriteComponent"]
    },
    {
        path: 'mygig',
        component: _my_gig_my_gig_component__WEBPACK_IMPORTED_MODULE_7__["MyGigComponent"]
    },
    {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]
    },
    {
        path: ':type/display/:id',
        component: _display_display_component__WEBPACK_IMPORTED_MODULE_9__["DisplayComponent"]
    },
    {
        path: 'display/:id/:type',
        component: _display_display_component__WEBPACK_IMPORTED_MODULE_9__["DisplayComponent"]
    }
    // {
    //   path: 'producer',
    //   loadChildren: () => import('./producer/producer.module').then( m => m.ProducerPageModule)
    // },
    // {
    //   path: 'vendor',
    //   loadChildren: () => import('./vendor/vendor.module').then( m => m.VendorPageModule)
    // }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourite/favourite.component */ "./src/app/user/favourite/favourite.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/user/edit/edit.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display/display.component */ "./src/app/user/display/display.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
/* harmony import */ var _my_gig_my_gig_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-gig/my-gig.component */ "./src/app/user/my-gig/my-gig.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list/list.component */ "./src/app/user/list/list.component.ts");














let UserPageModule = class UserPageModule {
};
UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]
        ],
        declarations: [
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"],
            _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_6__["FavouriteComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
            _display_display_component__WEBPACK_IMPORTED_MODULE_10__["DisplayComponent"],
            _my_gig_my_gig_component__WEBPACK_IMPORTED_MODULE_12__["MyGigComponent"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"]
        ],
    })
], UserPageModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map