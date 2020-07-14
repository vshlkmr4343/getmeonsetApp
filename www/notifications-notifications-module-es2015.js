(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/list/list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/list/list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<ion-content style=\"--background: #F5F5F5 !important;\">\r\n  <div>\r\n    <p class=\"heading\">Notifications</p>\r\n  </div>\r\n  <ion-card>\r\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"5\">\r\n          <ion-label>\r\n            <p class=\"title size-font\">Notification Title</p>\r\n            <p class=\"details size-font\">Notification Details</p>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <ion-label>\r\n            <p class=\"time size-font\">02:00 AM,03/10/20</p>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"5\">\r\n          <ion-label>\r\n            <p class=\"title size-font\">Notification Title</p>\r\n            <p class=\"details size-font\">Notification Details</p>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <ion-label>\r\n            <p class=\"time size-font\">02:00 AM,03/10/20</p>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"5\">\r\n          <ion-label>\r\n            <p class=\"title size-font\">Notification Title</p>\r\n            <p class=\"details size-font\">Notification Details</p>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <ion-label>\r\n            <p class=\"time size-font\">02:00 AM,03/10/20</p>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/notifications/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/notifications/list/list.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n  font-weight: bold;\n  color: black;\n}\n\n.details {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 5px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.time {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 10px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.heading {\n  margin-top: 12px;\n  margin-bottom: 0;\n  margin-left: 16px;\n  font-size: 15px;\n  margin-right: auto;\n}\n\nion-card {\n  border-radius: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9saXN0L0Y6XFxBdmlydXBJb25pY0FwcFxcR2l0R21vc1Zpc2hhbFxcZ2V0bWVvbnNldEFwcC9zcmNcXGFwcFxcbm90aWZpY2F0aW9uc1xcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9ucy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmRldGFpbHN7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcbi50aW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSIsIi50aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kZXRhaWxzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4uaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/notifications/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/notifications/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() { }
    ngOnInit() { }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/notifications/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/notifications/notifications-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/notifications/list/list.component.ts");




const routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/notifications/notifications-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/notifications/list/list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]
        ],
        declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]]
    })
], NotificationsPageModule);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map