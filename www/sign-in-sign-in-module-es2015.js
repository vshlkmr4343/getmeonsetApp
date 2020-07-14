(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"'signIn'\"></app-header>\r\n<ion-content>\r\n  <div>\r\n    <div class=\"modal-header text-center d-block border-0\">\r\n      <h5 class=\"modal-title w-100\">Sign In</h5>\r\n      <div class=\"w-100 text-muted\">Instruction goes here</div>\r\n    </div>\r\n    <div class=\"modal-body p-4\">\r\n      <form [formGroup]=\"loginForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"\" class=\"size-font\">Email</label>\r\n          <input type=\"email\" class=\"form-control size-font\" id=\"\"\r\n            [ngClass]=\"{'invalidEntry': submitted && f.email.errors}\" formControlName=\"email\" placeholder=\"Enter email\">\r\n        </div>\r\n        <div *ngIf=\"submitted && f.email.errors\" class=\"form-group\">\r\n          <div *ngIf=\"f.email.errors.required\" class=\"text-danger\">Email is required</div>\r\n          <div *ngIf=\"f.email.errors.pattern\"  class=\"text-danger\">Enter a valid email</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"\" class=\"size-font\">Password</label>\r\n          <input type=\"password\" class=\"form-control size-font\"\r\n            [ngClass]=\"{'invalidEntry': submitted && f.password.errors}\" formControlName=\"password\"\r\n            placeholder=\"Password\">\r\n        </div>\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"form-group\">\r\n          <div *ngIf=\"f.password.errors.required\"  class=\"text-danger\">Password is required</div>\r\n          <div *ngIf=\"f.password.errors.minlength\" class=\"text-danger\">Password must be at least 6 characters</div>\r\n      </div>\r\n        <div class=\"mb-3\"><span [routerLink]=\"['/user/forgot-password']\" class=\"size-font\">Forgot Password?</span>\r\n        </div>\r\n        <button class=\"btn btn-primary btn-block shadow-sm\" (click)=\"onLogin()\">SIGN IN</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer border-0 bg-light px-3\"> <span class=\"align-middle mr-auto size-font\">Do not have an\r\n        account?</span><span class=\"btn btn-danger shadow-sm shadow-sm\" [routerLink]=\"['/sign-up']\">JOIN FOR FREE</span>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/sign-in/sign-in-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in.service */ "./src/app/sign-in/sign-in.service.ts");








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"]
        ],
        providers: [_sign_in_service__WEBPACK_IMPORTED_MODULE_7__["SignInService"]],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let SignInPage = class SignInPage {
    constructor(storage, signInService, utility, router) {
        this.storage = storage;
        this.signInService = signInService;
        this.utility = utility;
        this.router = router;
        this.submitted = false;
        this.usersDetails = [];
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)] })
        });
    }
    onLogin() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.signInService.login(this.loginForm.value).subscribe(data => {
            this.usersDetails = data;
            if (this.usersDetails.message) {
                this.utility.showToast("Invalid user email or password.");
            }
            else {
                this.storage.set('userData', this.usersDetails.data.userData).then(dataxyz => {
                    const email = this.usersDetails.data.userData.email;
                    const usersId = this.usersDetails.data.userData.usersId;
                    const id = this.usersDetails.data.userData.uId;
                    const fullName = this.usersDetails.data.userData.fullName;
                    const usersTypeId = this.usersDetails.data.userData.usersTypeId;
                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('currentUser', JSON.stringify(this.usersDetails.data.userData));
                    localStorage.setItem('email', email);
                    localStorage.setItem('usersId', usersId);
                    localStorage.setItem('id', id);
                    localStorage.setItem('fullName', fullName);
                    if (usersTypeId.length > 0) {
                        localStorage.setItem('profileComplitted', 'true');
                    }
                    this.signInService.authStatusListener.next(true);
                    this.router.navigate(["/gigs/Crew"]);
                    this.utility.showToast("Login successfully");
                });
            }
        });
    }
    get f() { return this.loginForm.controls; }
};
SignInPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"] },
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")).default]
    })
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map