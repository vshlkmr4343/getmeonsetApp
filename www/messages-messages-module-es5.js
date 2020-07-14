(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat/chat.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat/chat.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-back-header></app-back-header>\r\n<ion-content style=\"position: relative;\">\r\n  <ion-list style=\"height: 80%;overflow: scroll;\" >\r\n    <ion-item lines=\"none\" class=\"item\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"2\">\r\n          <ion-avatar class=\"avatar-image1\">\r\n            <ion-img src=\"{{activeReceiverArray.profileImage}}\" alt=\"\">\r\n            </ion-img>\r\n          </ion-avatar>\r\n        </ion-col>\r\n        <ion-col size=\"10\" >\r\n          <ion-label class=\"msg-label\">\r\n            <div *ngIf=\"activeReceiverArray !=''\">\r\n              <h3 class=\"sender-name\"\r\n                *ngIf=\"(activeReceiverArray.usersTypeId.length > 1 || activeReceiverArray.usersTypeId.length == 1) && activeReceiverArray.usersTypeId.indexOf('3') != -1 \"\r\n                [routerLink]=\"['/user/display',activeReceiverArray.usersId]\">\r\n                {{activeReceiverArray.fullName}}</h3>\r\n              <h3 class=\"sender-name\"\r\n                *ngIf=\"activeReceiverArray.usersTypeId.length == 1 && activeReceiverArray.usersTypeId.indexOf('4') != -1 \"\r\n                [routerLink]=\"['/user/display',activeReceiverArray.usersId]\">\r\n                {{activeReceiverArray.fullName}}</h3>\r\n              <h3 class=\"sender-name\" *ngIf=\"activeReceiverArray.usersTypeId.length == 0\"\r\n                [routerLink]=\"['/user/display',activeReceiverArray.usersId]\">\r\n                {{activeReceiverArray.fullName}}</h3>\r\n            </div>\r\n         <div >\r\n            <ion-list  #content>\r\n              <ion-item lines=\"none\" *ngFor=\"let message of messageUserDetails;let i = index ;\">\r\n                <div class=\"mb-2\" [ngClass]=\"{'bg-light p-2 rounded': usersId == message.userDetails.usersId}\">\r\n                  <p class=\"size-font\">{{message.massageTime}}\r\n                    <!-- {{last ? callFunction(): ''}} -->\r\n                  </p>\r\n                  <p class=\"size-font\"> {{message.massageText}}</p>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div> \r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"bottom-div\">\r\n    <form [formGroup]=\"replyMsgForm\" (submit)=\"saveRelyMessage()\">\r\n      <div class=\"msg-div\">\r\n        <textarea class=\"msg-area\" formControlName=\"replyMsg\"\r\n          [ngClass]=\"{ 'is-invalid': replySubmitted && o.replyMsg.errors}\"></textarea>\r\n        <div *ngIf=\"replySubmitted && o.replyMsg.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"o.replyMsg.errors.required\"> Required</div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"row\">\r\n      <ion-row style=\"width:100%\">\r\n        <ion-col size=\"5\" style=\"padding-left: 0px;\">\r\n          <ion-button class=\"btn\" fill=\"outline\" (click)=\"report()\" color=\"dark\">\r\n            Report to admin\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"4\"></ion-col>\r\n        <ion-col size=\"3\" style=\"text-align: end; padding-right: 0px;\">\r\n          <ion-button class=\"send-btn\" (click)=\"saveRelyMessage()\">SEND\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/gig-chat/gig-chat.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/gig-chat/gig-chat.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesGigChatGigChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-back-header></app-back-header>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"mb-3 d-flex\" data-original-title=\"Report to admin\" data-placement=\"top\" data-toggle=\"tooltip\" title=\"\">\r\n      <div class=\"media\">\r\n        <img class=\"mr-3 rounded\" width=\"40\" height=\"40\" src=\"{{receiverArray?.profileImage}}\"\r\n          alt=\"Generic placeholder image\">\r\n        <div class=\"media-body\">\r\n          <div class=\"mt-2\">\r\n            <p class=\"font-weight-bold mr-2 text-dark size-font\">{{receiverArray?.fullName}} <i\r\n                class=\"fas fa-external-link-alt\"></i></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100\">\r\n      <form [formGroup]=\"sendMsgForm\" (submit)=\"saveMessage()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Subject</label>\r\n          <input type=\"text\" formControlName=\"messageSubject\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.messageSubject.errors}\" class=\"form-control\">\r\n          <div *ngIf=\"submitted && f.messageSubject.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.messageSubject.errors.required\"> Required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Message</label>\r\n          <textarea class=\"form-control\" rows=\"5\" formControlName=\"messageText\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && f.messageText.errors}\" [(ngModel)]=\"messageText\"></textarea>\r\n          <div *ngIf=\"submitted && f.messageText.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.messageText.errors.required\"> Required</div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">SEND</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/list/list.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/list/list.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<ion-content style=\"--background: #F5F5F5 !important;\">\r\n  <ion-item lines=\"full\" class=\"fixed-heading\">\r\n    <ion-row style=\"width: 100%;\">\r\n      <ion-col size=\"5\" (click)=\"highlight('Gig','usersId','module')\" [ngClass]=\"{'highlightGig': isHighlited=='Gig'}\"\r\n        class=\"selectedGig\">\r\n        <span style=\"font-size: 14px;\">Gig Messages</span>\r\n      </ion-col>\r\n      <ion-col size=\"5\" (click)=\"highlight('User','usersId','module')\" [ngClass]=\"{'highlightGig': isHighlited=='User'}\"\r\n        class=\"selectedGig\">\r\n        <span style=\"font-size: 14px;\">User Messages</span>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-item>\r\n\r\n  <div style=\"margin-top: 50px;\">\r\n    <!-- <div class=\"dropdown\">\r\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        Dropdown button\r\n      </button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n      </div>\r\n    </div> -->\r\n    <!-- [(ngModel)]=\"gigUserDetail\" -->\r\n    <div *ngIf=\"messageData.moduleId == '2'\">\r\n      <div style=\"padding-left: 10px; padding-right: 10px;\">\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Cancel\" placeholder=\"Choose Your message\"\r\n          (ionChange)=\"getGigMessageUsers($event.detail.value)\" >\r\n          <ion-select-option *ngFor=\"let gigUsers of gigUserDetails;let i = index;\"  value=\"{{gigUsers.gigId}}\">\r\n            {{gigUsers.title}}</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"messageData.moduleId\">\r\n      <ion-item lines=\"none\" *ngFor=\"let list of messageLists;let i = index;\"\r\n        style=\"--background: #F5F5F5 !important; margin-left: -12px;\" >\r\n        <ion-row style=\"width: 100%;\">\r\n          <ion-col size=\"2\">\r\n            <ion-avatar class=\"avatar-image1\" *ngIf=\"list.userDetails.usersId != usersId\">\r\n              <ion-img src=\"{{list.userDetails.profileImage}}\" alt=\"\">\r\n              </ion-img>\r\n            </ion-avatar>\r\n            <ion-avatar class=\"avatar-image1\" *ngIf=\"list.receiverDetails.usersId != usersId\">\r\n              <ion-img src=\"{{list.receiverDetails.profileImage}}\" alt=\"\">\r\n              </ion-img>\r\n            </ion-avatar>\r\n          </ion-col>\r\n          <ion-col size=\"5\" [routerLink]=\"['/messages/'+list.userDetails.usersId+'/chat/'+list.receiverDetails.usersId,list.messageId]\">\r\n            <!-- <a class=\"text-dark\" href=\"javascript:void(0)\" (click)=\"getMessageDetails(list.userDetails.usersId, list.receiverDetails.usersId, list.messageId)\"> -->\r\n            <ion-label class=\"msg-label\">\r\n              <h3 class=\"sender-name\">{{list.messageSubject}}</h3>\r\n              <p class=\"size-font\"> {{list.massageText}}</p>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-label>\r\n              <p class=\"time\">{{list.massageTime}}</p>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"1\">\r\n            <!-- <ion-badge class=\"badge\" color=\"medium\">11</ion-badge> -->\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n    </div>\r\n    <ion-row style=\"width: 100%;\" *ngIf=\"noMsgFound == 1\">\r\n\t\t\t<div  class=\"alert alert-danger alert-dismissible fade show w-100\" role=\"alert\">\r\n\t\t\t\tNo message found.\r\n\t\t\t</div>\r\n\t\t</ion-row>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/messages/chat/chat.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/messages/chat/chat.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesChatChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar-image1 {\n  width: 30px;\n  height: 30px;\n  margin-top: 5px;\n  margin-bottom: auto;\n}\n\n.msg-label {\n  margin-left: -8px;\n}\n\n.sender-name {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 6px;\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\np {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.item {\n  margin-top: 6px;\n}\n\n#footer-btn1 {\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  font-size: 10px;\n  text-transform: none;\n  color: black !important;\n}\n\n#footer-btn2 {\n  background: #012E4D;\n  color: white;\n  font-size: 10px;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 15px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.msg-area {\n  border: 1px solid #EEEEEE;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 100%;\n}\n\n.msg-div {\n  margin-left: 18px;\n  margin-right: 18px;\n}\n\n.btn {\n  font-size: 10px;\n  padding-left: 0px;\n  --border-radius: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 24px;\n  text-transform: capitalize;\n}\n\n.send-btn {\n  font-size: 10px;\n  height: 24px;\n  --background:#012E4D;\n  --color:white;\n  --border-radius: 0px;\n}\n\n.bottom-div {\n  bottom: 0px;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvY2hhdC9GOlxcQXZpcnVwSW9uaWNBcHBcXEdpdEdtb3NWaXNoYWxcXGdldG1lb25zZXRBcHAvc3JjXFxhcHBcXG1lc3NhZ2VzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlcy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENDO0VBQ0csaUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0EsZUFBQTtBQ0tBOztBREhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkU7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDT0g7O0FETEU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETkU7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDU047O0FETkU7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FDU0g7O0FETkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNTSjs7QURQRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBRUEsb0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNTSjs7QURORTtFQUVHLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNRTCIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXItaW1hZ2Uxe1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gfVxyXG4gLm1zZy1sYWJlbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59XHJcbi5zZW5kZXItbmFtZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxucHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcbi5pdGVte1xyXG5tYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuI2Zvb3Rlci1idG4xIHtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI2Zvb3Rlci1idG4yIHtcclxuICAgYmFja2dyb3VuZDogIzAxMkU0RDtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBmb250LXNpemU6MTBweFxyXG4gIH1cclxuICAucm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLm1zZy1hcmVhe1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUVFRUVFO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBcclxuICB9XHJcbiAgLm1zZy1kaXZ7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuYnRue1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIC5zZW5kLWJ0bntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgLy8gd2lkdGg6IDUwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAxMkU0RDtcclxuICAgIC0tY29sb3I6d2hpdGU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuXHJcbiAgfVxyXG4gIC5ib3R0b20tZGl2e1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICBib3R0b206IDBweDsgXHJcbiAgICAgd2lkdGg6IDEwMCUgO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9IiwiLmF2YXRhci1pbWFnZTEge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5tc2ctbGFiZWwge1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cblxuLnNlbmRlci1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cblxuLml0ZW0ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbiNmb290ZXItYnRuMSB7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbiNmb290ZXItYnRuMiB7XG4gIGJhY2tncm91bmQ6ICMwMTJFNEQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubXNnLWFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUVFRUVFO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1zZy1kaXYge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5zZW5kLWJ0biB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICAtLWJhY2tncm91bmQ6IzAxMkU0RDtcbiAgLS1jb2xvcjp3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5ib3R0b20tZGl2IHtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/messages/chat/chat.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/messages/chat/chat.component.ts ***!
    \*************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppMessagesChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_utility_report_admin_report_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utility/report-admin/report-admin.component */
    "./src/app/utility/report-admin/report-admin.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/sign-in/sign-in.service */
    "./src/app/sign-in/sign-in.service.ts");
    /* harmony import */


    var src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/sign-up/sign-up.service */
    "./src/app/sign-up/sign-up.service.ts");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/messages/message.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _utility_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../utility/utility.service */
    "./src/app/utility/utility.service.ts");

    let ChatComponent = class ChatComponent {
      constructor(modalController, storage, signupService, signinService, router, messagesService, route, formBuilder, utility, zone) {
        this.modalController = modalController;
        this.storage = storage;
        this.signupService = signupService;
        this.signinService = signinService;
        this.router = router;
        this.messagesService = messagesService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.zone = zone;
        this.type = 'User';
        this.messageData = {
          moduleId: 2
        };
        this.submitted = false;
        this.replySubmitted = false;
        this.reportToAdminSubmitted = false;
        this.messageUserDetails = [];
        this.gigUserDetails = [];
        this.messageDetails = [];
        this.sendMessageDetails = [];
        this.receiverDetails = [];
        this.isSendMsg = -1;
        this.receiverName = '';
        this.activeGigId = '';
        this.activeReceiverArray = [];
        this.activeMsgSubject = '';
        this.gigsUserArrayDetails = [];
      }

      get f() {
        return this.sendMsgForm.controls;
      }

      get m() {
        return this.reportToAdminForm.controls;
      }

      get o() {
        return this.replyMsgForm.controls;
      }

      ngOnInit() {
        this.sendMsgForm = this.formBuilder.group({
          messageSubject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
          messageText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]]
        });
        this.reportToAdminForm = this.formBuilder.group({
          disputText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]]
        });
        this.replyMsgForm = this.formBuilder.group({
          replyMsg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]]
        }); //  this.selectedItem= 'Gig'

        this.isHighlited = 'User';
        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has('type')) {
            this.type = paramMap.get('type');
            this.isHighlited = this.type;
          }

          this.receiverId = paramMap.get('usersId');
          this.messageId = paramMap.get('messageId');
          this.senderId = paramMap.get('receiverId');
        });
        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has('id')) {
            this.type = paramMap.get('type');
            this.isHighlited = this.type;
          }
        });
        this.signinService.getAuthStatusListener().subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
          this.userDetails = this.signinService.getAuthData();
          this.usersId = this.userDetails.usersId;
          this.isLoggedIn = this.userDetails.isLoggedin;
        });
        this.signupService.getAuthStatusListener().subscribe(isAuthenticated => {
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

        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has("usersId")) {
            this.receiverId = paramMap.get("usersId");
            this.gigId = paramMap.get("gigsId");
            this.showSendMsgForm = false;
            this.showListMsg = true;
            this.showMsgDetails = false;

            if (this.gigId != null) {}

            if (this.receiverId != this.usersId) {
              this.showSendMsgForm = true;
              this.showListMsg = false;
              this.showMsgDetails = false;
              this.messagesService.getUserProfileInfo(this.receiverId).subscribe(dataArray => {
                this.receiverArray = dataArray;
                this.receiverArray = this.receiverArray.data.userDetails;
              });
            } else {
              this.getAllUserMessages(this.usersId, this.module);
            }
          }
        });
        this.getUserGigs();
        this.getMessageDetails(this.senderId, this.receiverId, this.messageId); /// this.scrollToBottom();
      } // ionViewDidEnter(){
      // this.scrollToBottom();
      // }
      // ionViewWillEnter(){
      //   this.scrollToBottom();
      // }


      ionViewLoad() {
        this.scrollToBottom();
      }

      scrollToBottom() {
        this.refreshchatinterface = setInterval(() => {
          this.content.scrollToBottom(300);
        }, 3000); // setTimeout(()=>{
        //   this.content.scrollToBottom(300);
        // },1000);
      }

      report() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: src_app_utility_report_admin_report_admin_component__WEBPACK_IMPORTED_MODULE_3__["ReportAdminComponent"]
          });
          return yield modal.present();
        });
      }

      module() {
        if (this.type == 'Gig') {
          this.messageData.moduleId = 2;
        } else if (this.type == 'User') {
          this.messageData.moduleId = 1;
        }

        return this.messageData.moduleId;
      }

      getAllUserMessages(usersId, moduleId, gigId = '') {
        this.showListMsg = true;
        this.showSendMsgForm = false;
        this.showMsgDetails = false;
        this.messagesService.getAllUserMessages(usersId, this.module(), gigId).subscribe(data => {
          if (this.type == 'User') {
            this.messageLists = data;
            this.messageLists = this.messageLists.data.messages;
          }

          if (this.type == 'Gig') {
            // this.messageLists = data;
            // this.messageLists = this.messageLists.data.messages;
            this.messageLists = [];
          }
        }, error => {});
      }

      highlight(item, usersId, module) {
        this.isHighlited = item;

        if (item == 'User') {
          this.type = 'User';
          this.getAllUserMessages(this.usersId, this.module);
        }

        if (item == 'Gig') {
          this.type = 'Gig';
          this.getAllUserMessages(this.usersId, this.module);
        }
      }

      chat() {
        this.router.navigateByUrl('/messages/chat');
      }

      getMessageDetails(senderId, receiverId, messageId) {
        this.messageUserDetails = [];

        if (senderId != this.usersId) {
          this.activeReceiverId = senderId;
        } else {
          this.activeReceiverId = receiverId;
        }

        this.activeMessageId = messageId;
        console.log("activeReceiverArray Data", this.activeReceiverId);
        console.log(this.activeReceiverId + '===' + this.activeMessageId);
        this.showListMsg = false;
        this.showSendMsgForm = false;
        this.showMsgDetails = true;
        this.messagesService.getUserProfileInfo(this.activeReceiverId).subscribe(data => {
          this.activeReceiverArray = data;
          this.activeReceiverArray = this.activeReceiverArray.data.userDetails;
        });
        this.messagesService.getMessageDetails(this.activeMessageId).subscribe(data => {
          this.messageUserDetails = data;
          this.activeMsgSubject = this.messageUserDetails.data.msgSubject;
          this.messageUserDetails = this.messageUserDetails.data.messages;
        }, error => {});
      }

      getMessages(usersId, receiverId, gigId = '', inx = 0) {
        this.receiverId = receiverId;
        this.addActiveClasss(receiverId);
        this.messagesService.getMessages(usersId, receiverId, gigId).subscribe(data => {
          this.messageDetails = data;
          this.messageDetails = this.messageDetails.data.messages; // this.messageDetails.push(temp) ;
          //this.receiverName = this.messageUserDetails[inx].fullName ;
        }, error => {});
      }

      addActiveClasss(usersId) {
        this.messageUserDetails.forEach((item, index) => {
          if (item.usersId == usersId) {
            this.messageUserDetails[index].active = true;
          } else {
            this.messageUserDetails[index].active = false;
          }
        });
      }

      getUserGigs() {
        this.messagesService.getUserGigs(this.usersId).subscribe(response => {
          this.gigUserDetails = response.data.gigs;
          this.gigsUserArrayDetails = response.data.gigs;
          this.gigUserDetail = this.gigUserDetails[0].gigId; // console.log("get user details", this.gigUserDetails)
          // if (this.gigUserDetails.length > 0) {
          //   let firstGigId = response.data.gigs[0].gigId;
          //   //console.log(firstGigId+'==='+this.gigUserDetails.length) ;
          //   if (firstGigId != '' && this.gigUserDetails.length > 0) {
          //     this.getGigMessageUsers(firstGigId);
          //   }
          // }
        }, error => {});
      }

      getGigMessageUsers(gigId = '') {
        console.log(gigId); // this.spinnerService.show();
        // this.messagesService.getGigMessageUsers(gigId)
        //   .subscribe(
        //     response => {
        //       this.messageUserDetails = response.data.users;
        //       this.spinnerService.hide();
        //     },
        //     error => {
        //       this.spinnerService.hide();
        //     });

        this.messageLists = [];
        this.activeGigId = gigId;
        this.showListMsg = true;
        this.showSendMsgForm = false;
        this.showMsgDetails = false;
        this.messagesService.getAllUserMessages(this.usersId, 2, gigId).subscribe(data => {
          this.messageLists = data;
          this.messageLists = this.messageLists.data.messages;
        }, error => {});
      }

      getUserMessage() {
        this.signinService.getAuthStatusListener().subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
          this.userDetails = this.signinService.getAuthData();
          this.usersId = this.userDetails.usersId;
          this.isLoggedIn = this.userDetails.isLoggedin;
        });
        this.signupService.getAuthStatusListener().subscribe(isAuthenticated => {
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

        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has("id")) {
            this.receiverId = paramMap.get("id");
            this.messagesService.getMessageUsers(this.usersId).subscribe(data => {
              this.messageUserDetails = data;
              this.messageUserDetails = this.messageUserDetails.data.users;
              console.log(this.messageUserDetails);

              if (this.messageUserDetails.receiverId) {
                this.receiverId = this.messageUserDetails.receiverId;
              }

              this.messagesService.getUserProfileInfo(this.receiverId).subscribe(dataArray => {
                this.receiverArray = dataArray;
                this.receiverArray = this.receiverArray.data.userDetails;
                let temp = {
                  id: this.receiverArray.uId,
                  usersId: this.receiverArray.usersId,
                  email: this.receiverArray.email,
                  fullName: this.receiverArray.fullName,
                  status: this.receiverArray.status,
                  profileImage: this.receiverArray.profileImage
                };
                let userExits = this.messageUserDetails.find(item => {
                  return item.usersId == this.receiverArray.usersId;
                });

                if (!userExits && this.receiverId != this.usersId) {
                  this.messageUserDetails.push(temp);
                }

                if (this.messageUserDetails[0].usersId) {
                  this.getMessages(this.usersId, this.messageUserDetails[0].usersId);
                } else {
                  this.getMessages(this.usersId, this.receiverId);
                }
              });
            });
          }
        });
      }

      filterMessage(event) {
        this.filterOption = event.target.value;

        if (this.filterOption == 1) {
          this.getUserGigs();
        }

        if (this.filterOption == 2) {
          //this.getUserMessage();
          this.getAllUserMessages(this.usersId, this.module);
        }
      }

      backToDetails() {
        this.showSendMsgForm = false;
        this.showListMsg = true;
        this.showMsgDetails = false;
      }

      saveRelyMessage() {
        this.replySubmitted = true;
        console.log(this.replyMsgForm);

        if (this.replyMsgForm.invalid) {
          return;
        }

        console.log(this.replyMsgForm.value.replyMsg + '===' + this.usersId);
        this.messagesService.saveReplyMessage(this.usersId, this.activeReceiverId, this.activeMessageId, this.replyMsgForm.value.replyMsg, this.activeGigId).subscribe(data => {
          this.sendMessageDetails = data;
          this.sendMessageDetails = this.sendMessageDetails.data;
          this.isSendMsg = 1;
          this.replyMsgForm.reset();
          this.replySubmitted = false;
          this.getMessageDetails(this.usersId, this.activeReceiverId, this.activeMessageId); // this.content.scrollToBottom(300)
        }, error => {
          this.isSendMsg = 0;
        }); // let dimensions = this.content.getContentDimensions();
        // this.content.scrollTo(0, dimensions.scrollBottom, 0);
        // console.log("scroll isss", this.content.scrollToBottom())
        // this.content.scrollToBottom(300)
      }

      saveMessage() {
        this.submitted = true;
        console.log(this.sendMsgForm);

        if (this.sendMsgForm.invalid) {
          return;
        }

        let moduleId = 1;
        let gigId = '';

        if (this.gigId != null) {
          gigId = this.gigId;
          moduleId = 2;
        }

        this.messagesService.saveMessage(this.usersId, this.receiverId, this.sendMsgForm.value, moduleId, gigId).subscribe(data => {
          this.sendMessageDetails = data;
          this.sendMessageDetails = this.sendMessageDetails.data;
          this.isSendMsg = 1; // let tempMsg ={
          //   senderDetails : this.sendMessageDetails.senderDetails.senderDetails ,
          //   createdAt : this.sendMessageDetails.responseData.createdAt ,
          //   messageText : this.sendMessageDetails.responseData.messageText ,
          // }
          // this.messageDetails.push(tempMsg) ;

          this.sendMsgForm.reset();
          this.getAllUserMessages(this.usersId, moduleId, gigId);
          this.submitted = false;
          this.showSendMsgForm = false;
          this.showListMsg = true;
        }, error => {
          this.isSendMsg = 0;
        });
      }

      sendReportToAdmin() {
        this.reportToAdminSubmitted = true;

        if (this.reportToAdminForm.invalid) {
          return;
        }

        this.messagesService.messageDisputByUser(this.usersId, this.receiverId, this.reportToAdminForm.value).subscribe(data => {
          this.sendMessageDetails = data;
          this.sendMessageDetails = this.sendMessageDetails.data.isDisputeMessage;

          if (this.sendMessageDetails == 1) {
            this.reportToAdminForm.reset();
            this.reportToAdminSubmitted = false; // this.btnClose.nativeElement.click();
            //this.router.navigate(["/"]);

            this.utility.showToast("Report to admin messages successfully send");
          }
        }, error => {
          this.utility.showToast("Report to admin messages not send");
        });
      }

    };

    ChatComponent.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
    }, {
      type: src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_6__["SignUpService"]
    }, {
      type: src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_5__["SignInService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
    }, {
      type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      static: false
    })], ChatComponent.prototype, "content", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat/chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.scss */
      "./src/app/messages/chat/chat.component.scss")).default]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/messages/gig-chat/gig-chat.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/messages/gig-chat/gig-chat.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesGigChatGigChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL2dpZy1jaGF0L2dpZy1jaGF0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/messages/gig-chat/gig-chat.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/messages/gig-chat/gig-chat.component.ts ***!
    \*********************************************************/

  /*! exports provided: GigChatComponent */

  /***/
  function srcAppMessagesGigChatGigChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GigChatComponent", function () {
      return GigChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/sign-in/sign-in.service */
    "./src/app/sign-in/sign-in.service.ts");
    /* harmony import */


    var src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/sign-up/sign-up.service */
    "./src/app/sign-up/sign-up.service.ts");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/messages/message.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../utility/utility.service */
    "./src/app/utility/utility.service.ts");

    let GigChatComponent = class GigChatComponent {
      constructor(storage, signupService, signinService, router, messagesService, route, formBuilder, utility) {
        this.storage = storage;
        this.signupService = signupService;
        this.signinService = signinService;
        this.router = router;
        this.messagesService = messagesService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.type = 'User';
        this.messageData = {
          moduleId: 2
        };
        this.submitted = false;
        this.replySubmitted = false;
        this.reportToAdminSubmitted = false;
        this.messageUserDetails = [];
        this.gigUserDetails = [];
        this.messageDetails = [];
        this.sendMessageDetails = [];
        this.receiverDetails = [];
        this.isSendMsg = -1;
        this.receiverName = '';
        this.activeGigId = '';
        this.activeReceiverArray = [];
        this.activeMsgSubject = '';
        this.gigsUserArrayDetails = [];
      }

      get f() {
        return this.sendMsgForm.controls;
      }

      get m() {
        return this.reportToAdminForm.controls;
      }

      get o() {
        return this.replyMsgForm.controls;
      }

      ngOnInit() {
        this.sendMsgForm = this.formBuilder.group({
          messageSubject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          messageText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
        });
        this.isHighlited = 'User';
        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has('type')) {
            this.type = paramMap.get('type');
            this.isHighlited = this.type;
          }

          this.receiverId = paramMap.get('usersId');
          this.messageId = paramMap.get('messageId');
          this.senderId = paramMap.get('receiverId');
        });
        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has('id')) {
            this.type = paramMap.get('type');
            this.isHighlited = this.type;
          }
        });
        this.signinService.getAuthStatusListener().subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
          this.userDetails = this.signinService.getAuthData();
          this.usersId = this.userDetails.usersId;
          this.isLoggedIn = this.userDetails.isLoggedin;
        });
        this.signupService.getAuthStatusListener().subscribe(isAuthenticated => {
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

        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has("usersId")) {
            this.receiverId = paramMap.get("usersId");
            this.gigId = paramMap.get("gigsId");
            this.showSendMsgForm = false;
            this.showListMsg = true;
            this.showMsgDetails = false;

            if (this.gigId != null) {}

            if (this.receiverId != this.usersId) {
              this.showSendMsgForm = true;
              this.showListMsg = false;
              this.showMsgDetails = false;
              this.messagesService.getUserProfileInfo(this.receiverId).subscribe(dataArray => {
                this.receiverArray = dataArray;
                this.receiverArray = this.receiverArray.data.userDetails;
                console.log("receverArray.....", this.receiverArray.profileImage);
              });
            } else {
              this.getAllUserMessages(this.usersId, this.module);
            }
          }
        }); //  this.getUserGigs();
        // this.getMessageDetails(this.senderId, this.receiverId, this.messageId);
        //  this.getUserMessage()
      }

      module() {
        if (this.type == 'Gig') {
          this.messageData.moduleId = 2;
        } else if (this.type == 'User') {
          this.messageData.moduleId = 1;
        }

        return this.messageData.moduleId;
      }

      getAllUserMessages(usersId, moduleId, gigId = '') {
        this.showListMsg = true;
        this.showSendMsgForm = false;
        this.showMsgDetails = false;
        this.messagesService.getAllUserMessages(usersId, this.module(), gigId).subscribe(data => {
          if (this.type == 'User') {
            this.messageLists = data;
            this.messageLists = this.messageLists.data.messages;
          }

          if (this.type == 'Gig') {
            // this.messageLists = data;
            // this.messageLists = this.messageLists.data.messages;
            this.messageLists = [];
          }
        }, error => {});
      }

      highlight(item, usersId, module) {
        this.isHighlited = item;

        if (item == 'User') {
          this.type = 'User';
          this.getAllUserMessages(this.usersId, this.module);
        }

        if (item == 'Gig') {
          this.type = 'Gig';
          this.getAllUserMessages(this.usersId, this.module);
        }
      }

      chat() {
        this.router.navigateByUrl('/messages/chat');
      } // getMessageDetails(senderId, receiverId, messageId) {
      //   this.messageUserDetails = [];
      //   if (senderId != this.usersId) {
      //     this.activeReceiverId = senderId;
      //   } else {
      //     this.activeReceiverId = receiverId;
      //   }
      //   this.activeMessageId = messageId;
      //   // console.log("activeReceiverArray Data",this.activeReceiverId);
      //   // console.log(this.activeReceiverId + '===' + this.activeMessageId)
      //   this.showListMsg = false;
      //   this.showSendMsgForm = false;
      //   this.showMsgDetails = true;
      //   this.messagesService.getUserProfileInfo(this.activeReceiverId)
      //     .subscribe(data => {
      //       this.activeReceiverArray = data;
      //       this.activeReceiverArray = this.activeReceiverArray.data.userDetails;
      //     })
      //   this.messagesService.getMessageDetails(this.activeMessageId)
      //     .subscribe(
      //       data => {
      //         this.messageUserDetails = data;
      //         this.activeMsgSubject = this.messageUserDetails.data.msgSubject
      //         this.messageUserDetails = this.messageUserDetails.data.messages;
      //       },
      //       error => {
      //       });
      // }


      getMessages(usersId, receiverId, gigId = '', inx = 0) {
        this.receiverId = receiverId;
        this.addActiveClasss(receiverId);
        this.messagesService.getMessages(usersId, receiverId, gigId).subscribe(data => {
          this.messageDetails = data;
          this.messageDetails = this.messageDetails.data.messages; // this.messageDetails.push(temp) ;
          //this.receiverName = this.messageUserDetails[inx].fullName ;
        }, error => {});
      }

      addActiveClasss(usersId) {
        this.messageUserDetails.forEach((item, index) => {
          if (item.usersId == usersId) {
            this.messageUserDetails[index].active = true;
          } else {
            this.messageUserDetails[index].active = false;
          }
        });
      } // getUserGigs() {
      //   this.messagesService.getUserGigs(this.usersId)
      //     .subscribe(
      //       response => {
      //         this.gigUserDetails = response.data.gigs;
      //         this.gigsUserArrayDetails = response.data.gigs
      //         this.gigUserDetail = this.gigUserDetails[0].gigId
      //         // console.log("get user details", this.gigUserDetails)
      //         // if (this.gigUserDetails.length > 0) {
      //         //   let firstGigId = response.data.gigs[0].gigId;
      //         //   //console.log(firstGigId+'==='+this.gigUserDetails.length) ;
      //         //   if (firstGigId != '' && this.gigUserDetails.length > 0) {
      //         //     this.getGigMessageUsers(firstGigId);
      //         //   }
      //         // }
      //       },
      //       error => {
      //       });
      // }


      getGigMessageUsers(gigId = '') {
        // console.log(gigId);
        // this.spinnerService.show();
        // this.messagesService.getGigMessageUsers(gigId)
        //   .subscribe(
        //     response => {
        //       this.messageUserDetails = response.data.users;
        //       this.spinnerService.hide();
        //     },
        //     error => {
        //       this.spinnerService.hide();
        //     });
        this.messageLists = [];
        this.activeGigId = gigId;
        this.showListMsg = true;
        this.showSendMsgForm = false;
        this.showMsgDetails = false;
        this.messagesService.getAllUserMessages(this.usersId, 2, gigId).subscribe(data => {
          this.messageLists = data;
          this.messageLists = this.messageLists.data.messages;
        }, error => {});
      } // getUserMessage() {
      //   this.signinService.getAuthStatusListener()
      //     .subscribe(isAuthenticated => {
      //       this.userIsAuthenticated = isAuthenticated;
      //       this.userDetails = this.signinService.getAuthData();
      //       this.usersId = this.userDetails.usersId;
      //       this.isLoggedIn = this.userDetails.isLoggedin;
      //     });
      //   this.signupService.getAuthStatusListener()
      //     .subscribe(isAuthenticated => {
      //       this.userIsAuthenticated = isAuthenticated;
      //       this.userDetails = this.signupService.getAuthData();
      //       this.usersId = this.userDetails.usersId;
      //       this.isLoggedIn = this.userDetails.isLoggedin;
      //     });
      //   this.isLoggedIn = localStorage.getItem("isLoggedin");
      //   if (this.isLoggedIn) {
      //     this.userIsAuthenticated = true;
      //     this.userDetails = this.signinService.getAuthData();
      //     this.usersId = this.userDetails.usersId;
      //   }
      //   this.route.paramMap.subscribe((paramMap: ParamMap) => {
      //     if (paramMap.has("id")) {
      //       this.receiverId = paramMap.get("id");
      //       this.messagesService.getMessageUsers(this.usersId)
      //         .subscribe(data => {
      //           this.messageUserDetails = data;
      //           this.messageUserDetails = this.messageUserDetails.data.users;
      //           // console.log(this.messageUserDetails);
      //           if (this.messageUserDetails.receiverId) {
      //             this.receiverId = this.messageUserDetails.receiverId;
      //           }
      //           this.messagesService.getUserProfileInfo(this.receiverId)
      //             .subscribe(dataArray => {
      //               this.receiverArray = dataArray;
      //               console.log("receiverArray",this.receiverArray)
      //               this.receiverArray = this.receiverArray.data.userDetails;
      //               let temp = {
      //                 id: this.receiverArray.uId,
      //                 usersId: this.receiverArray.usersId,
      //                 email: this.receiverArray.email,
      //                 fullName: this.receiverArray.fullName,
      //                 status: this.receiverArray.status,
      //                 profileImage: this.receiverArray.profileImage,
      //               }
      //               let userExits = this.messageUserDetails.find((item) => { return item.usersId == this.receiverArray.usersId }
      //               )
      //               if (!userExits && this.receiverId != this.usersId) {
      //                 this.messageUserDetails.push(temp);
      //               }
      //               if (this.messageUserDetails[0].usersId) {
      //                 this.getMessages(this.usersId, this.messageUserDetails[0].usersId);
      //               } else {
      //                 this.getMessages(this.usersId, this.receiverId);
      //               }
      //             })
      //         })
      //     }
      //   });
      // }
      // filterMessage(event: any) {
      //   this.filterOption = event.target.value;
      //   if (this.filterOption == 1) {
      //     this.getUserGigs();
      //   }
      //   if (this.filterOption == 2) {
      //     //this.getUserMessage();
      //     this.getAllUserMessages(this.usersId, this.module);
      //   }
      // }


      backToDetails() {
        this.showSendMsgForm = false;
        this.showListMsg = true;
        this.showMsgDetails = false;
      } // saveRelyMessage() {
      //   this.replySubmitted = true ;
      //   // console.log(this.replyMsgForm) ;
      //   if (this.replyMsgForm.invalid) {
      //       return ;
      //   }
      //   // console.log(this.replyMsgForm.value.replyMsg+'==='+this.usersId) ;
      //   this.messagesService.saveReplyMessage(this.usersId, this.activeReceiverId, this.activeMessageId, this.replyMsgForm.value.replyMsg, this.activeGigId)
      //   .subscribe(
      //     data => {
      //       this.sendMessageDetails = data;
      //       this.sendMessageDetails = this.sendMessageDetails.data;
      //       this.isSendMsg = 1 ;
      //       this.replyMsgForm.reset();  
      //       this.replySubmitted = false ;
      //       this.getMessageDetails(this.usersId, this.activeReceiverId, this.activeMessageId)
      //     // this.content.scrollToBottom(300)
      //     },
      //     error => {
      //       this.isSendMsg = 0 ;
      //     });
      //     // let dimensions = this.content.getContentDimensions();
      //     // this.content.scrollTo(0, dimensions.scrollBottom, 0);
      //     // console.log("scroll isss", this.content.scrollToBottom())
      //     // this.content.scrollToBottom(300)
      // }


      saveMessage() {
        this.submitted = true;
        console.log(this.sendMsgForm);

        if (this.sendMsgForm.invalid) {
          return;
        }

        let moduleId = 1;
        let gigId = '';

        if (this.gigId != null) {
          gigId = this.gigId;
          moduleId = 2;
        }

        this.messagesService.saveMessage(this.usersId, this.receiverId, this.sendMsgForm.value, moduleId, gigId).subscribe(data => {
          this.sendMessageDetails = data;
          this.sendMessageDetails = this.sendMessageDetails.data;
          this.isSendMsg = 1; // let tempMsg ={
          //   senderDetails : this.sendMessageDetails.senderDetails.senderDetails ,
          //   createdAt : this.sendMessageDetails.responseData.createdAt ,
          //   messageText : this.sendMessageDetails.responseData.messageText ,
          // }
          // this.messageDetails.push(tempMsg) ;

          this.sendMsgForm.reset();
          this.getAllUserMessages(this.usersId, moduleId, gigId);
          this.submitted = false;
          this.showSendMsgForm = false;
          this.showListMsg = true;
          this.router.navigateByUrl('/messages/' + gigId);
        }, error => {
          this.isSendMsg = 0;
        });
      }

      sendReportToAdmin() {
        this.reportToAdminSubmitted = true;

        if (this.reportToAdminForm.invalid) {
          return;
        }

        this.messagesService.messageDisputByUser(this.usersId, this.receiverId, this.reportToAdminForm.value).subscribe(data => {
          this.sendMessageDetails = data;
          this.sendMessageDetails = this.sendMessageDetails.data.isDisputeMessage;

          if (this.sendMessageDetails == 1) {
            this.reportToAdminForm.reset();
            this.reportToAdminSubmitted = false; // this.btnClose.nativeElement.click();
            //this.router.navigate(["/"]);

            this.utility.showToast("Report to admin messages successfully send");
          }
        }, error => {
          this.utility.showToast("Report to admin messages not send");
        });
      }

    };

    GigChatComponent.ctorParameters = () => [{
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
    }, {
      type: src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"]
    }, {
      type: src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
    }, {
      type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]
    }];

    GigChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gig-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gig-chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/gig-chat/gig-chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gig-chat.component.scss */
      "./src/app/messages/gig-chat/gig-chat.component.scss")).default]
    })], GigChatComponent);
    /***/
  },

  /***/
  "./src/app/messages/list/list.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/messages/list/list.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a:link, a:visited {\n  color: #919294;\n  text-decoration: none;\n}\n\na:link:active, a:visited:active {\n  color: black;\n}\n\n.actor {\n  text-align: center;\n  margin-bottom: -14px;\n  margin-top: 2px;\n  font-size: 14px;\n  margin-left: -15px;\n  margin-right: auto;\n}\n\n.fixed-heading {\n  --background: #DDDDDD !important;\n  width: 100%;\n  position: fixed;\n  z-index: 999;\n  padding-top: 11px;\n  padding-bottom: 11px;\n  margin-top: -12px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.selected {\n  border-bottom: 2px solid #C1270B;\n}\n\n.sender-name {\n  color: #77B7F0;\n  font-weight: bold;\n  padding-top: 8px;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n.avatar-image1 {\n  width: 40px;\n  height: 40px;\n  margin-top: 5px;\n  margin-bottom: auto;\n  margin-left: 10px;\n}\n\n.avatar-image2 {\n  width: 40px;\n  height: 40px;\n  margin-top: 5px;\n  margin-bottom: auto;\n  margin-left: -3px;\n  margin-right: auto;\n}\n\n.msg-label {\n  margin-left: 10px;\n}\n\n.number {\n  padding: 0px;\n  border: 1px solid;\n  background: #999999;\n  border: none;\n  margin-top: 16px;\n  margin-bottom: auto;\n  margin-right: 4px;\n  margin-left: 4px;\n  text-align: center;\n  color: white;\n  font-size: 14px;\n}\n\nion-card {\n  border-radius: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.time {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 8px;\n  font-size: 10px;\n}\n\n.badge {\n  margin-top: 10px;\n  font-size: 10px;\n}\n\n.selectedGig {\n  margin: auto;\n  text-align: center;\n}\n\n.highlightGig {\n  border-bottom: 3px solid #C1270B;\n  margin-bottom: -3px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbGlzdC9GOlxcQXZpcnVwSW9uaWNBcHBcXEdpdEdtb3NWaXNoYWxcXGdldG1lb25zZXRBcHAvc3JjXFxhcHBcXG1lc3NhZ2VzXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFFO0VBQ0UsZ0NBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZDO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEM7RUFDSSxpQkFBQTtBQ01MOztBREpDO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEM7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRE5DO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1NGOztBRFBBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNXRjs7QURQQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmxpbmssIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogIzkxOTI5NDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpsaW5rOmFjdGl2ZSwgYTp2aXNpdGVkOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5hY3RvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLmZpeGVkLWhlYWRpbmd7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNEREREREQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTFweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWR7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0MxMjcwQjtcclxuICB9XHJcbiAgLnNlbmRlci1uYW1le1xyXG4gICAgY29sb3I6ICM3N0I3RjA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5hdmF0YXItaW1hZ2Uxe1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiB9XHJcbiAuYXZhdGFyLWltYWdlMntcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gfVxyXG4gLm1zZy1sYWJlbHtcclxuICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuIH1cclxuIC5udW1iZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuIH1cclxuIGlvbi1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gfVxyXG4gLnRpbWV7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmJhZGdle1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5zZWxlY3RlZEdpZ3tcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG4uaGlnaGxpZ2h0R2lne1xyXG4gIGJvcmRlci1ib3R0b206ICAzcHggc29saWQgI0MxMjcwQjtcclxuICBtYXJnaW4tYm90dG9tOiAtM3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufSIsImE6bGluaywgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICM5MTkyOTQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpsaW5rOmFjdGl2ZSwgYTp2aXNpdGVkOmFjdGl2ZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFjdG9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAtMTRweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZml4ZWQtaGVhZGluZyB7XG4gIC0tYmFja2dyb3VuZDogI0RERERERCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzEyNzBCO1xufVxuXG4uc2VuZGVyLW5hbWUge1xuICBjb2xvcjogIzc3QjdGMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmF2YXRhci1pbWFnZTEge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYXZhdGFyLWltYWdlMiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm1zZy1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubnVtYmVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogIzk5OTk5OTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uYmFkZ2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zZWxlY3RlZEdpZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlnaGxpZ2h0R2lnIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNDMTI3MEI7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/messages/list/list.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/messages/list/list.component.ts ***!
    \*************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppMessagesListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/sign-in/sign-in.service */
    "./src/app/sign-in/sign-in.service.ts");
    /* harmony import */


    var src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/sign-up/sign-up.service */
    "./src/app/sign-up/sign-up.service.ts");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/messages/message.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    let ListComponent = class ListComponent {
      constructor(storage, signupService, signinService, router, messagesService, route) {
        this.storage = storage;
        this.signupService = signupService;
        this.signinService = signinService;
        this.router = router;
        this.messagesService = messagesService;
        this.route = route;
        this.type = 'User';
        this.messageData = {
          moduleId: 2
        };
        this.submitted = false;
        this.replySubmitted = false;
        this.reportToAdminSubmitted = false;
        this.messageUserDetails = [];
        this.gigUserDetails = [];
        this.messageDetails = [];
        this.sendMessageDetails = [];
        this.receiverDetails = [];
        this.isSendMsg = -1;
        this.receiverName = '';
        this.activeGigId = '';
        this.activeReceiverArray = [];
        this.activeMsgSubject = '';
        this.gigsUserArrayDetails = [];
        this.noMsgFound = 0;
      }

      ngOnInit() {
        //  this.selectedItem= 'Gig'
        this.isHighlited = 'User';
        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has('type')) {
            this.type = paramMap.get('type');
            this.isHighlited = this.type;
          }
        });
        this.signinService.getAuthStatusListener().subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
          this.userDetails = this.signinService.getAuthData();
          this.usersId = this.userDetails.usersId;
          this.isLoggedIn = this.userDetails.isLoggedin;
        });
        this.signupService.getAuthStatusListener().subscribe(isAuthenticated => {
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

        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has("usersId")) {
            this.receiverId = paramMap.get("usersId");
            this.gigId = paramMap.get("gigsId");
            this.showSendMsgForm = false;
            this.showListMsg = true;
            this.showMsgDetails = false;

            if (this.gigId != null) {}

            if (this.receiverId != this.usersId) {
              this.showSendMsgForm = true;
              this.showListMsg = false;
              this.showMsgDetails = false;
              this.messagesService.getUserProfileInfo(this.receiverId).subscribe(dataArray => {
                this.receiverArray = dataArray;
                this.receiverArray = this.receiverArray.data.userDetails;
              });
            } else {
              this.getAllUserMessages(this.usersId, this.module);
            }
          }
        });
        this.getUserGigs();
      }

      module() {
        if (this.type == 'Gig') {
          this.messageData.moduleId = 2;
        } else if (this.type == 'User') {
          this.messageData.moduleId = 1;
        }

        return this.messageData.moduleId;
      }

      getAllUserMessages(usersId, moduleId, gigId = '') {
        this.showListMsg = true;
        this.showSendMsgForm = false;
        this.showMsgDetails = false;
        this.messagesService.getAllUserMessages(usersId, this.module(), gigId).subscribe(data => {
          if (this.type == 'User') {
            this.messageLists = data;
            this.messageLists = this.messageLists.data.messages;
            this.noMsgFound = 0;

            if (this.messageLists.length == 0) {
              this.noMsgFound = 1;
            }
          }

          if (this.type == 'Gig') {
            // this.messageLists = data;
            // this.messageLists = this.messageLists.data.messages;
            this.messageLists = [];
            this.noMsgFound = 0;

            if (this.messageLists.length == 0) {
              this.noMsgFound = 1;
            }
          }
        }, error => {
          this.noMsgFound = 1;
        });
      } // select(item){
      //   this.selectedItem =item;
      // }


      highlight(item, usersId, module) {
        this.isHighlited = item;

        if (item == 'User') {
          this.type = 'User';
          this.getAllUserMessages(this.usersId, this.module);
        }

        if (item == 'Gig') {
          this.type = 'Gig';
          this.getAllUserMessages(this.usersId, this.module);
        }
      }

      chat() {
        this.router.navigateByUrl('/messages/chat');
      }

      getMessageDetails(senderId, receiverId, messageId) {
        this.messageUserDetails = [];

        if (senderId != this.usersId) {
          this.activeReceiverId = senderId;
        } else {
          this.activeReceiverId = receiverId;
        }

        this.activeMessageId = messageId;
        console.log(this.activeReceiverId + '===' + this.activeMessageId);
        this.showListMsg = false;
        this.showSendMsgForm = false;
        this.showMsgDetails = true;
        this.messagesService.getUserProfileInfo(this.activeReceiverId).subscribe(data => {
          this.activeReceiverArray = data;
          this.activeReceiverArray = this.activeReceiverArray.data.userDetails; // console.log('Profile Info') ;

          console.log(this.activeReceiverArray);
        });
        this.messagesService.getMessageDetails(this.activeMessageId).subscribe(data => {
          this.messageUserDetails = data;
          this.activeMsgSubject = this.messageUserDetails.data.msgSubject;
          this.messageUserDetails = this.messageUserDetails.data.messages;
          console.log(this.messageUserDetails);
        }, error => {});
      }

      getMessages(usersId, receiverId, gigId = '', inx = 0) {
        this.receiverId = receiverId;
        this.addActiveClasss(receiverId);
        this.messagesService.getMessages(usersId, receiverId, gigId).subscribe(data => {
          this.messageDetails = data;
          this.messageDetails = this.messageDetails.data.messages; // this.messageDetails.push(temp) ;
          //this.receiverName = this.messageUserDetails[inx].fullName ;
        }, error => {});
      }

      addActiveClasss(usersId) {
        this.messageUserDetails.forEach((item, index) => {
          if (item.usersId == usersId) {
            this.messageUserDetails[index].active = true;
          } else {
            this.messageUserDetails[index].active = false;
          }
        });
      }

      getUserGigs() {
        console.log('getUserGigs:', this.usersId);
        this.messagesService.getUserGigs(this.usersId).subscribe(response => {
          this.gigUserDetails = response.data.gigs;
          this.gigsUserArrayDetails = response.data.gigs;
          this.gigUserDetail = this.gigUserDetails[0].gigId; // console.log("get user details", this.gigUserDetails)
          // if (this.gigUserDetails.length > 0) {
          //   let firstGigId = response.data.gigs[0].gigId;
          //   //console.log(firstGigId+'==='+this.gigUserDetails.length) ;
          //   if (firstGigId != '' && this.gigUserDetails.length > 0) {
          //     this.getGigMessageUsers(firstGigId);
          //   }
          // }
        }, error => {});
      }

      getGigMessageUsers(gigId = '') {
        console.log(gigId); // this.spinnerService.show();
        // this.messagesService.getGigMessageUsers(gigId)
        //   .subscribe(
        //     response => {
        //       this.messageUserDetails = response.data.users;
        //       this.spinnerService.hide();
        //     },
        //     error => {
        //       this.spinnerService.hide();
        //     });

        this.messageLists = [];
        this.activeGigId = gigId;
        this.showListMsg = true;
        this.showSendMsgForm = false;
        this.showMsgDetails = false;
        this.messagesService.getAllUserMessages(this.usersId, 2, gigId).subscribe(data => {
          this.messageLists = data;
          this.messageLists = this.messageLists.data.messages;
          this.noMsgFound = 0;

          if (this.messageLists.length == 0) {
            this.noMsgFound = 1;
          }
        }, error => {
          this.noMsgFound = 1;
        });
      }

      getUserMessage() {
        this.signinService.getAuthStatusListener().subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated;
          this.userDetails = this.signinService.getAuthData();
          this.usersId = this.userDetails.usersId;
          this.isLoggedIn = this.userDetails.isLoggedin;
        });
        this.signupService.getAuthStatusListener().subscribe(isAuthenticated => {
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

        this.route.paramMap.subscribe(paramMap => {
          if (paramMap.has("id")) {
            this.receiverId = paramMap.get("id");
            this.messagesService.getMessageUsers(this.usersId).subscribe(data => {
              this.messageUserDetails = data;
              this.messageUserDetails = this.messageUserDetails.data.users;
              console.log(this.messageUserDetails);

              if (this.messageUserDetails.receiverId) {
                this.receiverId = this.messageUserDetails.receiverId;
              }

              this.messagesService.getUserProfileInfo(this.receiverId).subscribe(dataArray => {
                this.receiverArray = dataArray;
                this.receiverArray = this.receiverArray.data.userDetails;
                let temp = {
                  id: this.receiverArray.uId,
                  usersId: this.receiverArray.usersId,
                  email: this.receiverArray.email,
                  fullName: this.receiverArray.fullName,
                  status: this.receiverArray.status,
                  profileImage: this.receiverArray.profileImage
                };
                let userExits = this.messageUserDetails.find(item => {
                  return item.usersId == this.receiverArray.usersId;
                });

                if (!userExits && this.receiverId != this.usersId) {
                  this.messageUserDetails.push(temp);
                }

                if (this.messageUserDetails[0].usersId) {
                  this.getMessages(this.usersId, this.messageUserDetails[0].usersId);
                } else {
                  this.getMessages(this.usersId, this.receiverId);
                }
              });
            });
          }
        });
      }

      filterMessage(event) {
        this.filterOption = event.target.value;

        if (this.filterOption == 1) {
          this.getUserGigs();
        }

        if (this.filterOption == 2) {
          //this.getUserMessage();
          this.getAllUserMessages(this.usersId, this.module);
        }
      }

      backToDetails() {
        this.showSendMsgForm = false;
        this.showListMsg = true;
        this.showMsgDetails = false;
      }

    };

    ListComponent.ctorParameters = () => [{
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
    }, {
      type: src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"]
    }, {
      type: src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/messages/list/list.component.scss")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/messages/messages-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/messages/messages-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MessagesPageRoutingModule */

  /***/
  function srcAppMessagesMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
      return MessagesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/messages/list/list.component.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/messages/chat/chat.component.ts");
    /* harmony import */


    var _gig_chat_gig_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gig-chat/gig-chat.component */
    "./src/app/messages/gig-chat/gig-chat.component.ts");

    const routes = [{
      path: '',
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }, {
      path: 'chat/:receiverId/:messageId',
      component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]
    }, {
      path: 'gigchat/:usersId/:gigsId',
      component: _gig_chat_gig_chat_component__WEBPACK_IMPORTED_MODULE_5__["GigChatComponent"]
    }, {
      path: 'gigchat/:usersId',
      component: _gig_chat_gig_chat_component__WEBPACK_IMPORTED_MODULE_5__["GigChatComponent"]
    }];
    let MessagesPageRoutingModule = class MessagesPageRoutingModule {};
    MessagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MessagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/messages/messages.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/messages/messages.module.ts ***!
    \*********************************************/

  /*! exports provided: MessagesPageModule */

  /***/
  function srcAppMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
      return MessagesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./messages-routing.module */
    "./src/app/messages/messages-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/messages/list/list.component.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/messages/chat/chat.component.ts");
    /* harmony import */


    var _gig_chat_gig_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./gig-chat/gig-chat.component */
    "./src/app/messages/gig-chat/gig-chat.component.ts");

    let MessagesPageModule = class MessagesPageModule {};
    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]],
      declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"], _gig_chat_gig_chat_component__WEBPACK_IMPORTED_MODULE_9__["GigChatComponent"]]
    })], MessagesPageModule);
    /***/
  }
}]);
//# sourceMappingURL=messages-messages-module-es5.js.map