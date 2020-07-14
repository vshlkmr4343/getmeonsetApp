(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"'signUp'\"></app-header>\r\n<ion-content>\r\n\t<div>\r\n\t\t<div class=\"modal-header text-center d-block border-0\">\r\n\t\t\t<h5 class=\"modal-title w-100\">Create An Account</h5>\r\n\t\t\t<div class=\"w-100 text-muted\">Instruction goes here</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body p-4\">\r\n\t\t\t<form [formGroup]=\"signUpForm\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"\" class=\"size-font\">Full Name</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control size-font\" formControlName=\"fullName\" id=\"\"\r\n\t\t\t\t\t\t[ngClass]=\"{'invalidEntry': submitted && f.fullName.errors}\" placeholder=\"Enter full name\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"submitted && f.fullName.errors\" class=\"form-group\">\r\n\t\t\t\t\t<div *ngIf=\"f.fullName.errors.required\" class=\"text-danger\">Full Name is required</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"\" class=\"size-font\">Email</label>\r\n\t\t\t\t\t<input type=\"email\" class=\"form-control size-font\" formControlName=\"email\"\r\n\t\t\t\t\t\t[ngClass]=\"{'invalidEntry': submitted && f.email.errors}\" id=\"\" placeholder=\"Enter email\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"submitted && f.email.errors\" class=\"form-group\">\r\n\t\t\t\t\t<div *ngIf=\"f.email.errors.required\" class=\"text-danger\">Email is required</div>\r\n\t\t\t\t\t<div *ngIf=\"f.email.errors.pattern\" class=\"text-danger\">Enter a valid email</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"\" class=\"size-font\">Password</label>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control size-font\" formControlName=\"password\"\r\n\t\t\t\t\t\t[ngClass]=\"{'invalidEntry': submitted && f.password.errors}\" placeholder=\"Password\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"form-group\">\r\n\t\t\t\t\t<div *ngIf=\"f.password.errors.required\" class=\"text-danger\">Password is required</div>\r\n\t\t\t\t\t<div *ngIf=\"f.password.errors.minlength\" class=\"text-danger\">Password must be at least 6 characters\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"\" class=\"size-font\">Confirm Password</label>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control size-font\" formControlName=\"cpassword\"\r\n\t\t\t\t\t\t[ngClass]=\"{'invalidEntry': submitted && f.cpassword.errors}\" placeholder=\"Confirm password\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"submitted && f.cpassword.errors\" class=\"form-group\">\r\n\t\t\t\t\t<div *ngIf=\"f.cpassword.errors.required\" class=\"text-danger\">Confirm Password is required</div>\r\n\t\t\t\t\t<div *ngIf=\"f.cpassword.errors.mustMatch\" class=\"text-danger\">Confirm Password must match with\r\n\t\t\t\t\t\tpassword</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div>\r\n\t\t\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t\t\t<ion-label>I agree to terms of service</ion-label>\r\n\t\t\t\t\t\t<ion-checkbox slot=\"start\"></ion-checkbox>\r\n\t\t\t\t\t </ion-item>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"1\">\r\n\t\t\t\t\t\t<ion-checkbox (ionChange)=\"agreeTermsOfService($event)\"></ion-checkbox>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"11\">\r\n\t\t\t\t\t\t<ion-label color=\"primary\" [routerLink]=\"['/common/tos']\">I agree to terms of service\r\n\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<button class=\"btn btn-primary btn-block shadow-sm\" (click)=\"signUp()\" [disabled]=\"!isAgreeTos\">SIGN UP</button>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer border-0 bg-light px-3\"> <span class=\"mr-auto size-font\">Already have an\r\n\t\t\t\taccount?</span><span [routerLink]=\"['/common']\" class=\"btn btn-danger shadow-sm shadow-sm\">SIGN\r\n\t\t\t\tIN</span> </div>\r\n\t</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/sign-up/sign-up-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _utility_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/must-match.validator */ "./src/app/utility/must-match.validator.ts");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");









let SignUpPage = class SignUpPage {
    constructor(signInService, storage, utility, signUpService, formBuilder, router) {
        this.signInService = signInService;
        this.storage = storage;
        this.utility = utility;
        this.signUpService = signUpService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.isAgreeTos = false;
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: Object(_utility_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'cpassword')
        });
    }
    agreeTermsOfService(ev) {
        this.isAgreeTos = ev.detail.checked;
    }
    signUp() {
        this.submitted = true;
        if (this.signUpForm.invalid) {
            return;
        }
        this.signUpService.signUp(this.signUpForm.value).subscribe(data => {
            this.usersDetails = data;
            this.storage.set('userData', this.usersDetails.data.userData).then(dataxyz => {
                this.signInService.authStatusListener.next(true);
                // this.utility.showToast('Successfully signup.')
                // this.router.navigateByUrl('/gigs/Crew')
                if (this.usersDetails.message) {
                    this.router.navigate(["/"]);
                    this.utility.showToast("Emailid already registered.");
                }
                else {
                    const email = this.usersDetails.data.userData.email;
                    const usersId = this.usersDetails.data.userData.usersId;
                    const id = this.usersDetails.data.userData.uId;
                    const fullName = this.usersDetails.data.userData.fullName;
                    localStorage.setItem('isLoggedin', 'true');
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(this.usersDetails.data.userData));
                    localStorage.setItem('email', email);
                    localStorage.setItem('usersId', usersId);
                    localStorage.setItem('id', id);
                    localStorage.setItem('fullName', fullName);
                    this.signUpService.authStatusListener.next(true);
                    this.router.navigateByUrl('/gigs/Crew');
                    this.utility.showToast("Signup successfully completed");
                }
            }, error => {
                this.utility.showToast("Emailid already registered.");
            });
        });
    }
    get f() { return this.signUpForm.controls; }
};
SignUpPage.ctorParameters = () => [
    { type: _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_8__["SignInService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")).default]
    })
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map