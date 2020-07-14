(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gigs-gigs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/addarole/addarole.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/addarole/addarole.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n\t<div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Add A Role</h5>\r\n          <button  type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"addRoleForm\" (submit)=\"postRole()\" #formDirective=\"ngForm\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right\">Role name *</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"title\"\r\n                  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.title.errors}\">\r\n                <div *ngIf=\"rolesubmitted &&  r.title.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"r.title.errors.required\">Role name is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right\">Gender *</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" formControlName=\"gender\"\r\n                  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.gender.errors }\">\r\n                  <option value=\"0\">Any</option>\r\n                  <option value=\"1\">Male</option>\r\n                  <option value=\"2\">Female</option>\r\n                </select>\r\n                <div *ngIf=\"rolesubmitted &&  r.gender.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"r.gender.errors.required\">Gender is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right\">Race *</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" formControlName=\"race\"\r\n                  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.race.errors }\">\r\n                  <option _ngcontent-c8=\"\" value=\"\" ng-reflect-value=\"\">Select</option>\r\n                  <option *ngFor=\"let race of raceArray;\" [value]=\"race\">{{race}} </option>\r\n                </select>\r\n                <div *ngIf=\"rolesubmitted &&  r.race.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"r.race.errors.required\">Race is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right\">Physical characteristics *</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" formControlName=\"physical_characteristics\"\r\n                  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.physical_characteristics.errors }\">\r\n                  <option _ngcontent-c8=\"\" value=\"\" ng-reflect-value=\"\">Select</option>\r\n                  <option *ngFor=\"let physicalCharacteristics of physicalCharacteristicsArray;\"\r\n                    [value]=\"physicalCharacteristics\">{{physicalCharacteristics}} </option>\r\n                </select>\r\n                <div *ngIf=\"rolesubmitted &&  r.physical_characteristics.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"r.physical_characteristics.errors.required\">Physical characteristics is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n\t\t\t  <label class=\"col-sm-4 col-form-label text-sm-right\">Age*</label>\r\n\t\t\t  <ion-row style=\"width:100%\">\r\n              <ion-col size=\"6\">\r\n\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"minimum_age\"\r\n\t\t\t\t\t  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.minimum_age.errors }\">\r\n\t\t\t\t\t  <option value=\"20\">20</option>\r\n\t\t\t\t\t  <option value=\"25\">25</option>\r\n\t\t\t\t\t  <option value=\"30\">30</option>\r\n\t\t\t\t\t  <option value=\"35\">35</option>\r\n\t\t\t\t\t  <option value=\"40\">40</option>\r\n\t\t\t\t\t  <option value=\"45\">45</option>\r\n\t\t\t\t\t  <option value=\"50\">50</option>\r\n\t\t\t\t\t  <option value=\"55\">55</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<div *ngIf=\"rolesubmitted &&  r.minimum_age.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t  <div *ngIf=\"r.minimum_age.errors.required\">Minimum age is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col size=\"6\">\r\n\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"maximum_age\"\r\n\t\t\t\t\t  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.maximum_age.errors }\">\r\n\t\t\t\t\t  <option value=\"25\">25</option>\r\n\t\t\t\t\t  <option value=\"30\">30</option>\r\n\t\t\t\t\t  <option value=\"35\">35</option>\r\n\t\t\t\t\t  <option value=\"40\">40</option>\r\n\t\t\t\t\t  <option value=\"45\">45</option>\r\n\t\t\t\t\t  <option value=\"50\">50</option>\r\n\t\t\t\t\t  <option value=\"55\">55</option>\r\n\t\t\t\t\t  <option value=\"60\">60</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<div *ngIf=\"rolesubmitted &&  r.maximum_age.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t  <div *ngIf=\"r.maximum_age.errors.required\">Maximum age is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  </ion-row>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right\">Day rate for each <br class=\"d-none d-sm-block\">role\r\n                *</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"day_rate_per_role\"\r\n                  placeholder=\"Day rate for each role\"\r\n                  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.day_rate_per_role.errors }\">\r\n                <div *ngIf=\"rolesubmitted && r.day_rate_per_role.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"r.day_rate_per_role.errors.required\">Day rate is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right\">Nudity required? *</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"customRadioInline25\" formControlName=\"is_nudity_required\"\r\n                    class=\"custom-control-input\" value=\"0\">\r\n                  <label class=\"custom-control-label\" for=\"customRadioInline25\">No</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"customRadioInline26\" formControlName=\"is_nudity_required\"\r\n                    class=\"custom-control-input\" value=\"1\">\r\n                  <label class=\"custom-control-label\" for=\"customRadioInline26\">Yes</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right\">Number of days needed (approx.) *</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"number_of_days_needed\"\r\n                  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.number_of_days_needed.errors}\">\r\n                <div *ngIf=\"submitted && r.number_of_days_needed.errors\">\r\n                  <div *ngIf=\"r.number_of_days_needed.errors.required\">Number of days required</div>\r\n                  <div *ngIf=\"r.number_of_days_needed.errors.pattern\">Number of daysnust be numeric</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right\">Rehearsal days *</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"rehearsal_days\"\r\n                  [ngClass]=\"{ 'is-invalid': rolesubmitted && r.rehearsal_days.errors}\">\r\n                <div *ngIf=\"submitted && r.rehearsal_days.errors\">\r\n                  <div *ngIf=\"r.rehearsal_days.errors.required\">Rehearsal days required</div>\r\n                  <div *ngIf=\"r.rehearsal_days.errors.pattern\">Rehearsal days be numeric</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label text-sm-right pt-0\">Rehearsal payment *</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"customRadioInline27\" class=\"custom-control-input\"\r\n                    formControlName=\"rehearsal_payment\" value=\"1\">\r\n                  <label class=\"custom-control-label\" for=\"customRadioInline27\">Paid</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"customRadioInline28\" class=\"custom-control-input\"\r\n                    formControlName=\"rehearsal_payment\" value=\"0\">\r\n                  <label class=\"custom-control-label\" for=\"customRadioInline28\">Unpaid</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-8 offset-sm-4\">\r\n                <button class=\"btn btn-primary shadow-sm\" >ADD A ROLE</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"mt-3 text-muted\">* marked fields are mandatory</div>\r\n          </form>\r\n          <!-- <div *ngIf=\"isRoalPosted == 1\" class=\"alert alert-success\" role=\"alert\">\r\n            Role successfully submitted.\r\n          </div>\r\n          <div *ngIf=\"isRoalPosted == 2\" class=\"alert alert-danger\" role=\"alert\">\r\n            Something went wrong please try again.\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n\t\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/create/create.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/create/create.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<ion-content>\r\n\t<main role=\"main\" class=\"flex-shrink-0 mb-5\">\r\n\t\t<div class=\"fixed-headingPostGig\">\r\n\t\t\t<span>Post A Gig</span>\r\n\t\t</div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12 mt-5\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t<div class=\"card shadow-sm\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Choose\r\n\t\t\t\t\t\t\t\t\t\t\t\tgig type *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"changeType()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" checked id=\"customRadioInline1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"customRadioInline1\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"true\" [(ngModel)]=\"activeGigType\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customRadioInline1\">Crew\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgigs</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"changeType()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"customRadioInline1\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"false\" [(ngModel)]=\"activeGigType\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customRadioInline2\">Talent\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tgigs/Casting calls</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"activeGigType\">\r\n\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"crewGigForm\" (submit)=\"postCrewGig()\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Title\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"title\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.title.errors}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tuppercase>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.title.errors\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.title.errors.required\" class=\"text-danger\">Gig\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle is required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Type\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline3\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"type\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline3\">Documentary</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"type\" value=\"2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline4\">Narrative</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline3\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"type\" value=\"3\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline3\">Commercial</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"type\" value=\"4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline4\">Short</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Length\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline5\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"shortLength\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline5\">Short</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline6\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"shortLength\" value=\"2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline6\">Feature</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Union\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline7\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"unionType\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customRadioInline7\">Non\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tunion</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline8\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"unionType\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline8\">Union</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Payment\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline9\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"paidType\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline9\">Paid</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline10\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"paidType\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline10\">Unpaid</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Production\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstart\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdate *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-datetime class=\"form-control\" displayFormat=\"MM/DD/YYYY\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-radius: 1px solid lightgrey;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{productionStartDatePlaceHolder| date: 'MM/dd/yyyy'}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"startDate\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.startDate.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.startDate.errors\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">Production start date is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Production\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tend\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdate *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-datetime formControlName=\"endDate\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplayFormat=\"MM/DD/YYYY\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{productionStartDatePlaceHolder | date: 'MM/dd/yyyy'}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.endDate.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted &&  f.endDate.errors\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.endDate.errors.required\" class=\"text-danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction end date is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Working\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdays *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline11\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"workingDays\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customRadioInline11\">5\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdays</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline12\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"workingDays\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customRadioInline12\">6\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdays</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Total\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tnumber of production days *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"productionDatesNumber\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.productionDatesNumber.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.productionDatesNumber.errors\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"text-danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.productionDatesNumber.errors.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdays required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.productionDatesNumber.errors.pattern\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdays nust be numeric</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Lodging\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tprovided? *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline13\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"lodgingProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline13\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline14\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"lodgingProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline14\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Per\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdime provided? *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline15\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"perDimProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline15\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline16\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"perDimProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline16\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">How\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tmuch\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"howMuch\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.howMuch.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.howMuch.errors\" class=\"text-danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.howMuch.errors.required\">This field required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Travel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tprovided? *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline17\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"travelProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline17\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline18\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"travelProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline18\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Kit\r\n\t\t\t\t\t\t\t\t\t\t\t\t\trentals available *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline19\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"kitRentalProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline19\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline20\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"kitRentalProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline20\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Location\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-input (ionChange)=\"UpdateSearchResults()\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"autocomplete.input\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"fullAddress\" placeholder=\"{{fullAddress}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && !fullAddress}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"autocompleteItems.length > 0 && ifIonChangeOccur\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"border\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of autocompleteItems\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 100%; border-bottom: 1px solid #dee2e6;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlines=\"none\" (click)=\"SelectSearchResult(item)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label style=\"font-size: 10px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"location-outline\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.description}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && !fullAddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.locationOfShoot.errors.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"text-danger\">Location is required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"mt-4\">Positions Available</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"adDepartment\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" id=\"customCheck1\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleAdDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck1\">AD\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdepartment</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"adDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of adDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"adCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectedDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"adCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customCheck5\" formControlName=\"productionDepartment\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" (change)=\"toggleProductionDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customCheck5\">Production department</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"productionDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of productionDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"productionCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectProductionDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"productionCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customCheck6\" formControlName=\"cameraDepartment\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" (change)=\"toggleCameraDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck6\">Camera\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdepartment</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"cameraDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of cameraDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"cameraCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectCameraDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"cameraCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customCheck7\" formControlName=\"geDepartment\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleGeDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck7\">G & E\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdepartment</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"geDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of geDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"geCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectGeDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"geCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customCheck8\" formControlName=\"hmuDepartment\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleHmuDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck8\">HMU\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdepartment</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"hmuDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of hmuDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"hmuCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectHmuDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"hmuCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customCheck9\" formControlName=\"wardrobeDepartment\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" (change)=\"toggleWardrobeDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck9\">Wardrobe\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdepartment</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"wardrobeDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of wardrobeDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"wardrobeCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectWardrobeDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"wardrobeCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customCheck10\" formControlName=\"soundDepartment\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\" (change)=\"toggleSoundDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck10\">Sound\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdepartment</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"soundDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of soundDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"soundCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectSoundDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"soundCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customCheck11\" formControlName=\"artDepartment\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleArtDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck11\">Art\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdepartment</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"artDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of artDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"artCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectArtDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"artCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"customCheck12\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"transportationDepartment\" value=\"1\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"toggleTransportationDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customCheck12\">Transportation department</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"transportationDepartmentSub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox ml-4\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let data of transportationDepartmentArray; let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"transCheck_{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" [(ngModel)]=\"data.selected\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"selectTransportationDepartment($event)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"transCheck_{{i}}\">{{data.label}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary shadow-sm\">POST\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tGIG</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-3 text-muted\">* marked fields are mandatory</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"!activeGigType\">\r\n\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"talentGigForm\" (submit)=\"postTalentGig()\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Title\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"title\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentGigSubmitted && t.title.errors}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tuppercase>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentGigSubmitted && t.title.errors\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.title.errors.required\" class=\"text-danger\">Gig\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Union\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline7\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"unionType\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customRadioInline7\">Non\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tunion</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline8\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"unionType\" class=\"custom-control-input\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline8\">Union</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Production\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstart\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdate *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-datetime class=\"form-control\" displayFormat=\"MM/DD/YYYY\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"border-radius: 1px solid lightgrey;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{productionStartDatePlaceHolder| date: 'MM/dd/yyyy'}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"startDate\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentGigSubmitted && t.startDate.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentGigSubmitted && t.startDate.errors\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\">Production start date is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Production\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tend\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdate *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-datetime formControlName=\"endDate\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplayFormat=\"MM/DD/YYYY\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{productionStartDatePlaceHolder | date: 'MM/dd/yyyy'}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentGigSubmitted && t.endDate.errors}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentGigSubmitted &&  t.endDate.errors\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.endDate.errors.required\" class=\"text-danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction end date is required\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Location\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tof shoot *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-input (ionChange)=\"UpdateSearchResults()\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"autocomplete.input\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"locationOfShoot\" placeholder=\"{{fullAddress}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': talentGigSubmitted && !fullAddress}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"autocompleteItems.length > 0\" class=\"border\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of autocompleteItems\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 100%; border-bottom: 1px solid #dee2e6;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlines=\"none\" (click)=\"SelectSearchResult(item)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label style=\"font-size: 10px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"location-outline\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.description}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"talentGigSubmitted && !fullAddress\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"t.locationOfShoot.errors.required\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"text-danger\">Location of\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tshoot is required</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Lodging\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tprovided? *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline13\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"lodgingProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline13\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline14\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"lodgingProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline14\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Travel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tprovided? *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline17\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"travelProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline17\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline18\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"travelProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline18\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Per\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdime provided? *</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-lg-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"customRadioInline15\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"perDimProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline15\">Yes</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input checked type=\"radio\" id=\"customRadioInline16\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"perDimProvided\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-control-input\" value=\"0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfor=\"customRadioInline16\">No</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"mt-4\">Roles</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10 offset-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tRole(s) You're Casting\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"p-3 border mt-2 rounded\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let role of roleDetailsArray;let i = index;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{role.title}}</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"float-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ml-2 text-link\" (click)=\"confirmRoleDelete(i)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\"><strong>Delete</strong></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ml-2 text-link\" (click)=\"addEditRole(i,role)\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\"><strong>Edit</strong></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10 offset-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-danger shadow-sm\" data-toggle=\"modal\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"addEditRole()\">ADD A ROLE</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10 offset-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary shadow-sm\">POST\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tGIG</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-3 text-muted\">* marked fields are mandatory</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</main>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/display/display.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/display/display.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-back-header></app-back-header>\r\n<ion-content>\r\n\t<div>\r\n\t\t<ion-item class=\"fixed-heading\" *ngIf=\"gigsProfileInfo\" lines=\"none\">\r\n\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t<div class=\"card-title bold-font  \" style=\"margin-bottom: 0px;\">{{gigsProfileInfo.title}}</div>\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col *ngIf=\"isProducer\" size=\"1\" [routerLink]=\"['/gigs/'+typeName+'/edit', gigId, gigsType]\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<i class=\"fas fa-edit  text-secondary\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"1\">\r\n\t\t\t\t\t<span *ngIf=\"isLoggedIn\" (click)=\"favorite()\">\r\n\t\t\t\t\t\t<i *ngIf=\"!isFavorite\" class=\"far fa-heart fa-1x ml-3  text-secondary\"></i>\r\n\t\t\t\t\t\t<i *ngIf=\"isFavorite\" class=\"fas fa-heart fa-1x ml-3  text-danger\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"1\" (click)=\"share()\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<i class=\"fas fa-share-alt fa-1x ml-3 text-secondary\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-item>\r\n\t\t<div>\r\n\t\t\t<div class=\"card-body\" style=\"background: #f5f5f5;\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6 size-font\" *ngIf=\"gigsProfileInfo\">\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.gigType == 1\">Gig Type: Crew</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.gigType == 2\">Gig Type: Talent</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.type\">Type: {{gigsProfileInfo.type}}</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.location.formattedAddressCustom\">Location of shoot:\r\n\t\t\t\t\t\t\t{{gigsProfileInfo.location.formattedAddressCustom}}</div>\r\n\t\t\t\t\t\t<div>Production Dates: {{gigsProfileInfo.startDate}} - {{gigsProfileInfo.endDate}}</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.length\">Length : {{gigsProfileInfo.length}}</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.union\">Union: {{gigsProfileInfo.union}}</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.payment\">Payment : {{gigsProfileInfo.payment}}</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.totalNumberProductionDays\">Total number of production days :\r\n\t\t\t\t\t\t\t{{gigsProfileInfo.totalNumberProductionDays}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.workingDays\">Working days : {{gigsProfileInfo.workingDays}}</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.rentalKitAvailable\">Kit rentals available :\r\n\t\t\t\t\t\t\t{{gigsProfileInfo.rentalKitAvailable}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.lodgingProvide\">Lodging Provided?:\r\n\t\t\t\t\t\t\t{{gigsProfileInfo.lodgingProvide}}</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.perDimeProvided\">Per diem Provided?:\r\n\t\t\t\t\t\t\t{{gigsProfileInfo.perDimeProvided}}</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.travelProvided\">Travel Provided?: {{gigsProfileInfo.travelProvided}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.howMuch\">How much : {{gigsProfileInfo.howMuch}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3\" *ngIf=\"gigsProfileInfo?.castingRoles\">\r\n\t\t\t\t\t\t<p class=\"bold-font\" style=\"margin-top: 12px;margin-bottom: 12px;\">Role(s)</p>\r\n\t\t\t\t\t\t<div style=\"border: 1px solid lightgrey\"\r\n\t\t\t\t\t\t\t*ngFor=\"let castingRole of gigsProfileInfo.castingRoles ; let i = index\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 size-font\" *ngIf=\"castingRole\">\r\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" style=\"--background: #f5f5f5; padding:0\">\r\n\t\t\t\t\t\t\t\t\t<ion-label class=\"size-font\">{{castingRole.title}}</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"chevron-down-outline\" slot=\"end\" (click)=\"viewRole(i,castingRole)\"\r\n\t\t\t\t\t\t\t\t\t\tcolor=\"primary\"></ion-icon>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t<ion-item lines=\"none\" style=\"--background: #f5f5f5; padding:0\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"i == showRoleIndex\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"size-font\">\r\n\t\t\t\t\t\t\t\t\t\tGender: {{castingRole.gender | gendertype:castingRole.gender}}<br>\r\n\t\t\t\t\t\t\t\t\t\tRace: {{castingRole.race | titlecase}}<br>\r\n\t\t\t\t\t\t\t\t\t\tPhysical cahracteristics:\r\n\t\t\t\t\t\t\t\t\t\t{{castingRole.physicalCharacteristics | titlecase}}<br>\r\n\t\t\t\t\t\t\t\t\t\tAge: {{castingRole.ageRange}} Year<br>\r\n\t\t\t\t\t\t\t\t\t\tDay rate for each role: {{castingRole.dayRatePerRole}} Year<br>\r\n\t\t\t\t\t\t\t\t\t\tNumber of days needed(approx.): {{castingRole.numberOfDaysNeeded}}<br>\r\n\t\t\t\t\t\t\t\t\t\tRehearsal days: {{castingRole.rehearsalDays}}<br>\r\n\t\t\t\t\t\t\t\t\t\tRehearsal payment:\r\n\t\t\t\t\t\t\t\t\t\t{{castingRole.rehearsalPayment | reharsalpayment:castingRole.rehearsalPayment}}<br>\r\n\t\t\t\t\t\t\t\t\t\tNudity required:\r\n\t\t\t\t\t\t\t\t\t\t{{castingRole.isNudityRequired | isnudity:castingRole.isNudityRequired}}<br>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"gigsProfileInfo.castingRoles.length == 0\"\r\n\t\t\t\t\t\t\tclass=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n\t\t\t\t\t\t\tNo roles here.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"gigsProfileInfo?.producerInfo\" class=\"col-lg-3\">\r\n\t\t\t\t\t\t<p class=\"bold-font\" style=\"margin-top: 12px;\">Contact</p>\r\n\t\t\t\t\t\t<p class=\"size-font\"><i class=\"fas fa-envelope mr-2\"></i> <a\r\n\t\t\t\t\t\t\t\thref=\"mailto:{{gigsProfileInfo.producerInfo?.email}}\"\r\n\t\t\t\t\t\t\t\tclass=\"size-font\">{{gigsProfileInfo.producerInfo?.email}}</a></p>\r\n\t\t\t\t\t\t<p class=\"size-font\"><i class=\"fas fa-mobile-alt mr-2\"></i><a\r\n\t\t\t\t\t\t\t\thref=\"tel:{{gigsProfileInfo.producerInfo?.phone | phone }}\"\r\n\t\t\t\t\t\t\t\tclass=\"size-font\">{{gigsProfileInfo.producerInfo?.phone | phone }}</a></p>\r\n\t\t\t\t\t\t<div *ngIf=\"socialMediaLinksDetails.length > 0\">\r\n\t\t\t\t\t\t\t<p *ngFor=\"let socialMediaLinks of socialMediaLinksDetails; let i = index\" class=\"d-flex\">\r\n\t\t\t\t\t\t\t\t<i class=\"fab fa-facebook mr-2\"></i> <a target=\"_blank\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"max-width: calc(100% - 14px);\"\r\n\t\t\t\t\t\t\t\t\thref=\"{{gigsProfileInfo.producerInfo.socialMediaLink}}\">{{socialMediaLinks.socialMediaLink}}</a>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p *ngIf=\"gigsProfileInfo.producerInfo?.websiteLink\"> <i\r\n\t\t\t\t\t\t\t\tclass=\"fas fa-globe-americas mr-2\"></i><a target=\"_blank\"\r\n\t\t\t\t\t\t\t\thref=\"{{gigsProfileInfo.producerInfo.websiteLink}}\">{{gigsProfileInfo.producerInfo.websiteLink}}</a>\r\n\t\t\t\t\t\t\t<ion-icon slot=\"end\" name=\"open\" color=\"medium\" style=\"font-size: 15px;\r\n\t\t\t\t\t\t\t\tmargin-left: 5px;\">\r\n\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t<p class=\"bold-font\">Producer</p>\r\n\t\t\t\t\t\t<div class=\"card shadow-sm\" *ngIf=\"gigsProfileInfo?.producerInfo\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-thumbnail slot=\"start\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"{{gigsProfileInfo.producerInfo?.profileImage}}\" class=\"card-img-left\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"...\">\r\n\t\t\t\t\t\t\t\t</ion-thumbnail>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<div><span style=\"font-weight: bold;\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"size-font\">{{gigsProfileInfo.producerInfo?.fullName}}</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<bar-rating [(rate)]=\"rate\" [max]=\"5\" (rateChange)=\"addRating()\"\r\n\t\t\t\t\t\t\t\t\t\t[readOnly]=\"usersId == this.gigsProfileInfo.producerId\"></bar-rating>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t<div *ngIf=\"isRatingVerify\" style=\"padding: 10px;\">\r\n\t\t\t\t\t\t\t\t<form [formGroup]=\"reviewGigForm\" (submit)=\"addRatingAndReview()\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'inValid': reviewFormSubmitted && r.usersRatingText.errors}\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"usersRatingText\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <input [(ngModel)]=\"lastIdRating\" type=\"hidden\"> -->\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"reviewFormSubmitted && r.usersRatingText.errors\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-label color=\"danger\"> Review is required.</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mt-2\">\r\n\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"How do you know this person?\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'inValid': reviewFormSubmitted && r.usersRatingReasonText.errors}\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"usersRatingReasonText\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"reviewFormSubmitted && r.usersRatingReasonText.errors\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-label color=\"danger\">Review reason is required.</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"mt-2\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-button (click)=\"addRatingAndReview()\">SUBMIT</ion-button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"isLoggedIn && gigsProfileInfo?.isApplied == 1\" class=\"alert alert-warning\"\r\n\t\t\t\t\t\t\trole=\"alert\">\r\n\t\t\t\t\t\t\tAlready applied, waiting for gig owner response.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"isLoggedIn && gigsProfileInfo?.isApplied == 2\" class=\"alert alert-success\"\r\n\t\t\t\t\t\t\trole=\"alert\">\r\n\t\t\t\t\t\t\tAccepted by gig owner.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"isLoggedIn && gigsProfileInfo?.isApplied == 3\" class=\"alert alert-danger\"\r\n\t\t\t\t\t\t\trole=\"alert\">\r\n\t\t\t\t\t\t\tDecliened by gig owner.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group \" *ngIf=\"!isProducer\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"isLoggedIn && gigsProfileInfo?.isApplied == 0\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group bold-font\">\r\n\t\t\t\t\t\t\t\t\t<form [formGroup]=\"applyGigForm\" (submit)=\"applyGig()\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">Your message</label>\r\n\t\t\t\t\t\t\t\t\t\t<textarea formControlName=\"description\" [(ngModel)]=\"description\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"></textarea>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"submitted && f.description.errors\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.description.errors.required\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-note color=\"danger\">Message required</ion-note>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary shadow-sm mb-3\" (click)=\"applyGig()\">APPLY\r\n\t\t\t\t\t\t\t\t\tFOR THIS GIG</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"!isLoggedIn\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">Your message</label>\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"gigDescription\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"gigDescription\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<ion-button color=\"primary\" [routerLink]=\"['/sign-in']\" style=\"--border-radius:0\">APPLY FOR\r\n\t\t\t\t\t\t\t\tTHIS GIG</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12\" *ngIf=\"isLoggedIn && isProducer && gigsProfileInfo.applications.length > 0\">\r\n\t\t\t\t<div class=\"py-3 bold-font\">Applications</div>\r\n\t\t\t\t<div class=\"row py-2 border-bottom\"\r\n\t\t\t\t\t*ngFor=\"let gigData of gigsProfileInfo.applications; let i = index;\">\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<img src=\"{{gigData.userInfo.profileImage}}\" class=\"mr-3 rounded-circle\"\r\n\t\t\t\t\t\t\t\tstyle=\"width: 50px; height: 50px; object-fit: cover;\" alt=\"...\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label class=\"size-font\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{gigData.userInfo?.fullName}}</ion-label>&nbsp;<i\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fas fa-comments fa-lg text-secondary\"\r\n\t\t\t\t\t\t\t\t\t\t\t[routerLink]=\"['/messages/gigchat', gigData.userInfo.usersId, gigId]\"></i>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t<div class=\"size-font\">{{gigData.description}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-4 text-right\" *ngIf=\"gigData.status == 1\">\r\n\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm ml-1 shadow-sm\"\r\n\t\t\t\t\t\t\t(click)=\"applicationAcceptDecline('Do you want to Decline this user ?',gigData.userInfo.usersId,'decline',i,'Gig Decline')\">DECLINE</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-success btn-sm ml-1 shadow-sm\"\r\n\t\t\t\t\t\t\t(click)=\"applicationAcceptDecline('Do you want to Accept this user ?',gigData.userInfo.usersId,'accept',i,'Gig Accept')\">ACCEPT</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-4 text-right\" *ngIf=\"gigData.status == 2\">\r\n\t\t\t\t\t\t<span class=\"alert alert-success float-right p-1 size\">ACCEPTED</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-4 text-right\" *ngIf=\"gigData.status == 3\">\r\n\t\t\t\t\t\t<span class=\"alert alert-danger float-right p-1 size\">DECLINED</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12 mt-3\" *ngIf=\"isLoggedIn && isProducer && gigsProfileInfo.applications.length == 0\">\r\n\t\t\t\t<div class=\"alert alert-danger\" role=\"alert\">\r\n\t\t\t\t\tNo one applied yet.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/edit/edit.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/edit/edit.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-back-header></app-back-header>\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 mt-5\">\r\n        <h5>Edit A Gig</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"card shadow-sm\">\r\n              <div class=\"card-body\">\r\n                <div *ngIf=\"gigsType =='1'\">\r\n                  <form [formGroup]=\"crewGigForm\" (submit)=\"editCrewGig()\">\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Title *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"title\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.title.errors}\" uppercase>\r\n                        <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.title.errors.required\">Gig title is required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Type *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline3\" formControlName=\"type\" value=\"1\"\r\n                            class=\"custom-control-input\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline3\">Documentary</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline4\" formControlName=\"type\" value=\"2\"\r\n                            class=\"custom-control-input\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline4\">Narrative</label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline3\" formControlName=\"type\" value=\"3\"\r\n                            class=\"custom-control-input\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline3\">Commercial</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline4\" formControlName=\"type\" value=\"4\"\r\n                            class=\"custom-control-input\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline4\">Short</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Length *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline5\" formControlName=\"shortLength\" value=\"1\"\r\n                            class=\"custom-control-input\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline5\">Short</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline6\" formControlName=\"shortLength\" value=\"2\"\r\n                            class=\"custom-control-input\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline6\">Feature</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Union *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline7\" formControlName=\"unionType\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline7\">Non union</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline8\" formControlName=\"unionType\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline8\">Union</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Payment *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline9\" formControlName=\"paidType\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline9\">Paid</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline10\" formControlName=\"paidType\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline10\">Unpaid</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Production\r\n                        start\r\n                        date *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <div class=\"input-group\">\r\n                          <ion-datetime class=\"form-control\" displayFormat=\"MM/DD/YYYY\"\r\n                            style=\"border-radius: 1px solid lightgrey;\"\r\n                            placeholder=\"{{productionStartDatePlaceHolder| date: 'MM/dd/yyyy'}}\"\r\n                            formControlName=\"startDate\"\r\n                            [ngClass]=\"{ 'is-invalid': talentGigSubmitted && t.startDate.errors}\">\r\n                          </ion-datetime>\r\n                        </div>\r\n                        <div>\r\n                          <div *ngIf=\"talentGigSubmitted && t.startDate.errors\">\r\n                            <div class=\"text-danger\">Production start date is required\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Production\r\n                        end\r\n                        date *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <div class=\"input-group\">\r\n                          <ion-datetime formControlName=\"endDate\" class=\"form-control\" displayFormat=\"MM/DD/YYYY\"\r\n                            placeholder=\"{{productionStartDatePlaceHolder | date: 'MM/dd/yyyy'}}\"\r\n                            [ngClass]=\"{ 'is-invalid': talentGigSubmitted && t.endDate.errors}\">\r\n                          </ion-datetime>\r\n                        </div>\r\n                        <div *ngIf=\"talentGigSubmitted &&  t.endDate.errors\">\r\n                          <div *ngIf=\"t.endDate.errors.required\" class=\"text-danger\">\r\n                            Production end date is required\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Working days *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline11\" formControlName=\"workingDays\"\r\n                            class=\"custom-control-input\" value=\"5\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline11\">5 days</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline12\" formControlName=\"workingDays\"\r\n                            class=\"custom-control-input\" value=\"6\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline12\">6 days</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Total number of production days\r\n                        *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"productionDatesNumber\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.productionDatesNumber.errors}\">\r\n                        <div *ngIf=\"submitted && f.productionDatesNumber.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.productionDatesNumber.errors.required\">Production days required</div>\r\n                          <div *ngIf=\"f.productionDatesNumber.errors.pattern\">Production days nust be numeric</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Lodging provided? *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline13\" formControlName=\"lodgingProvided\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline13\">Yes</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline14\" formControlName=\"lodgingProvided\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline14\">No</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Per diem provided? *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline15\" formControlName=\"perDimProvided\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline15\">Yes</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline16\" formControlName=\"perDimProvided\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline16\">No</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">How much *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"howMuch\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.howMuch.errors}\">\r\n                        <div *ngIf=\"submitted && f.howMuch.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.howMuch.errors.required\">This field required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Travel provided? *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline17\" formControlName=\"travelProvided\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline17\">Yes</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline18\" formControlName=\"travelProvided\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline18\">No</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Kit rentals available *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline19\" formControlName=\"kitRentalProvided\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline19\">Yes</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline20\" formControlName=\"kitRentalProvided\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline20\">No</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Location *</label>\r\n                      <div div class=\"col-sm-8 col-lg-4\">\r\n                        <ion-input (ionChange)=\"UpdateSearchResults()\" type=\"text\" [(ngModel)]=\"autocomplete.input\"\r\n                          class=\"form-control\" formControlName=\"fullAddress\" placeholder=\"{{fullAddress}}\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && !fullAddress}\">\r\n                        </ion-input>\r\n                        <div *ngIf=\"autocompleteItems.length > 0 && ifIonChangeOccur\" class=\"border\">\r\n                          <ion-item *ngFor=\"let item of autocompleteItems\"\r\n                            style=\"width: 100%; border-bottom: 1px solid #dee2e6;\" lines=\"none\"\r\n                            (click)=\"SelectSearchResult(item)\">\r\n                            <ion-label style=\"font-size: 10px;\">\r\n                              <ion-icon name=\"location-outline\"></ion-icon>\r\n                              {{item.description}}\r\n                            </ion-label>\r\n                          </ion-item>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p class=\"mt-4\"><b>Positions Available</b></p>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" formControlName=\"adDepartment\" class=\"custom-control-input\"\r\n                            id=\"customCheck1\" value=\"1\" (change)=\"toggleAdDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck1\">AD department</label>\r\n                        </div>\r\n                        <div *ngIf=\"adDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of adDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"adCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectadDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"adCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck5\"\r\n                            formControlName=\"productionDepartment\" value=\"1\"\r\n                            (change)=\"toggleProductionDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck5\">Production department</label>\r\n                        </div>\r\n                        <div *ngIf=\"productionDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of productionDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"productionCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectProductionDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"productionCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck6\"\r\n                            formControlName=\"cameraDepartment\" value=\"1\" (change)=\"toggleCameraDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck6\">Camera department</label>\r\n                        </div>\r\n                        <div *ngIf=\"cameraDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of cameraDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"cameraCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectCameraDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"cameraCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck7\"\r\n                            formControlName=\"geDepartment\" value=\"1\" (change)=\"toggleGeDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck7\">G & E department</label>\r\n                        </div>\r\n                        <div *ngIf=\"geDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of geDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"geCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectGeDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"geCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck8\"\r\n                            formControlName=\"hmuDepartment\" value=\"1\" (change)=\"toggleHmuDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck8\">HMU department</label>\r\n                        </div>\r\n                        <div *ngIf=\"hmuDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of hmuDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"hmuCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectHmuDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"hmuCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck9\"\r\n                            formControlName=\"wardrobeDepartment\" value=\"1\" (change)=\"toggleWardrobeDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck9\">Wardrobe department</label>\r\n                        </div>\r\n                        <div *ngIf=\"wardrobeDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of wardrobeDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"wardrobeCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectWardrobeDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"wardrobeCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck10\"\r\n                            formControlName=\"soundDepartment\" value=\"1\" (change)=\"toggleSoundDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck10\">Sound department</label>\r\n                        </div>\r\n                        <div *ngIf=\"soundDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of soundDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"soundCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectSoundDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"soundCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck11\"\r\n                            formControlName=\"artDepartment\" value=\"1\" (change)=\"toggleArtDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck11\">Art department</label>\r\n                        </div>\r\n                        <div *ngIf=\"artDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of artDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"artCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectArtDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"artCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck12\"\r\n                            formControlName=\"transportationDepartment\" value=\"1\"\r\n                            (change)=\"toggleTransportationDepartment($event)\">\r\n                          <label class=\"custom-control-label\" for=\"customCheck12\">Transportation department</label>\r\n                        </div>\r\n                        <div *ngIf=\"transportationDepartmentSub\">\r\n                          <div class=\"custom-control custom-checkbox ml-4\"\r\n                            *ngFor=\"let data of transportationDepartmentArray; let i = index;\">\r\n                            <input type=\"checkbox\" id=\"transCheck_{{i}}\" class=\"custom-control-input\"\r\n                              [(ngModel)]=\"data.selected\" [ngModelOptions]=\"{standalone: true}\"\r\n                              (change)=\"selectTransportationDepartment($event)\">\r\n                            <label class=\"custom-control-label\" for=\"transCheck_{{i}}\">{{data.label}}</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-lg-10 offset-lg-2 col-sm-8 offset-sm-4\">\r\n                        <button type=\"submit\" class=\"btn btn-primary shadow-sm\">EDIT GIG</button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-3 text-muted\">* marked fields are mandatory</div>\r\n                  </form>\r\n                </div>\r\n                <div *ngIf=\"gigsType == '2'\">\r\n                  <form [formGroup]=\"talentGigForm\" (submit)=\"updateTalentGig()\">\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Title *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"title\"\r\n                          [ngClass]=\"{ 'is-invalid': talentGigSubmitted && t.title.errors}\" uppercase>\r\n                        <div *ngIf=\"talentGigSubmitted && t.title.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"t.title.errors.required\">Gig title is required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Union *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline7\" formControlName=\"unionType\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline7\">Non union</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline8\" formControlName=\"unionType\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline8\">Union</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Production\r\n                        start\r\n                        date *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <div class=\"input-group\">\r\n                          <ion-datetime class=\"form-control\" displayFormat=\"MM/DD/YYYY\"\r\n                            style=\"border-radius: 1px solid lightgrey;\"\r\n                            placeholder=\"{{productionStartDatePlaceHolder| date: 'MM/dd/yyyy'}}\"\r\n                            formControlName=\"startDate\"\r\n                            [ngClass]=\"{ 'is-invalid': talentGigSubmitted && t.startDate.errors}\">\r\n                          </ion-datetime>\r\n                        </div>\r\n                        <div>\r\n                          <div *ngIf=\"talentGigSubmitted && t.startDate.errors\">\r\n                            <div class=\"text-danger\">Production start date is required\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Production\r\n                        end\r\n                        date *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <div class=\"input-group\">\r\n                          <ion-datetime formControlName=\"endDate\" class=\"form-control\" displayFormat=\"MM/DD/YYYY\"\r\n                            placeholder=\"{{productionStartDatePlaceHolder | date: 'MM/dd/yyyy'}}\"\r\n                            [ngClass]=\"{ 'is-invalid': talentGigSubmitted && t.endDate.errors}\">\r\n                          </ion-datetime>\r\n                        </div>\r\n                        <div *ngIf=\"talentGigSubmitted &&  t.endDate.errors\">\r\n                          <div *ngIf=\"t.endDate.errors.required\" class=\"text-danger\">\r\n                            Production end date is required\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right\">Location of shoot *</label>\r\n                      <div class=\"col-sm-8 col-lg-4\">\r\n                        <ion-input (ionChange)=\"UpdateSearchResults()\" type=\"text\" [(ngModel)]=\"autocomplete.input\"\r\n                          class=\"form-control\" formControlName=\"locationOfShoot\" placeholder=\"{{fullAddress}}\"\r\n                          [ngClass]=\"{ 'is-invalid': talentGigSubmitted && !fullAddress}\">\r\n                        </ion-input>\r\n                        <div *ngIf=\"autocompleteItems.length > 0\" class=\"border\">\r\n                          <ion-item *ngFor=\"let item of autocompleteItems\"\r\n                            style=\"width: 100%; border-bottom: 1px solid #dee2e6;\" lines=\"none\"\r\n                            (click)=\"SelectSearchResult(item)\">\r\n                            <ion-label style=\"font-size: 10px;\">\r\n                              <ion-icon name=\"location-outline\"></ion-icon>\r\n                              {{item.description}}\r\n                            </ion-label>\r\n                          </ion-item>\r\n                        </div>\r\n                        <div *ngIf=\"talentGigSubmitted && !fullAddress\">\r\n                          <div *ngIf=\"t.locationOfShoot.errors.required\" class=\"text-danger\">Location of\r\n                            shoot is required</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Lodging provided? *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline13\" formControlName=\"lodgingProvided\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline13\">Yes</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline14\" formControlName=\"lodgingProvided\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline14\">No</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Travel provided? *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline17\" formControlName=\"travelProvided\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline17\">Yes</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline18\" formControlName=\"travelProvided\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline18\">No</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <label class=\"col-sm-4 col-lg-2 col-form-label text-sm-right pt-0\">Per diem provided? *</label>\r\n                      <div class=\"col-sm-8 col-lg-10\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"customRadioInline15\" formControlName=\"perDimProvided\"\r\n                            class=\"custom-control-input\" value=\"1\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline15\">Yes</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input checked type=\"radio\" id=\"customRadioInline16\" formControlName=\"perDimProvided\"\r\n                            class=\"custom-control-input\" value=\"0\">\r\n                          <label class=\"custom-control-label\" for=\"customRadioInline16\">No</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <h5 class=\"mt-4\">Roles</h5>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-sm-10 offset-sm-2\">\r\n                        Role(s) You're Casting\r\n                        <div class=\"p-3 border mt-2 rounded\" *ngFor=\"let role of roleDetailsArray;let i = index;\">\r\n                          <strong>{{role.title}}</strong>\r\n                          <div class=\"float-right\">\r\n                            <span class=\"ml-2 text-link\" (click)=\"deleteRole(i,role)\"><strong>Delete</strong></span>\r\n                            <span class=\"ml-2 text-link\" (click)=\"addRole(role,i)\"><strong>Edit</strong></span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-sm-10 offset-sm-2\">\r\n                        <span class=\"btn btn-danger shadow-sm\" data-toggle=\"modal\" (click)=\"addRole()\">ADD A ROLE</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-sm-10 offset-sm-2\">\r\n                        <button type=\"submit\" class=\"btn btn-primary shadow-sm\">EDIT GIG</button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"mt-3 text-muted\">* marked fields are mandatory</div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/list/list.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/list/list.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<ion-content style=\"--background: #F5F5F5 !important;\">\r\n\t<ion-item lines=\"full\" class=\"fixed-heading\">\r\n\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t<ion-col size=\"4\" (click)=\"highlight('Crew')\" [ngClass]=\"{'highlightGig': isHighlited == 'Crew'}\"\r\n\t\t\t\tclass=\"selectedGig\">\r\n\t\t\t\t<span style=\"font-size: 13px;\">Crew Gigs</span>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"4\" (click)=\"highlight('Talent')\" [ngClass]=\"{'highlightGig': isHighlited=='Talent'}\"\r\n\t\t\t\tclass=\"selectedGig\">\r\n\t\t\t\t<span style=\"font-size: 13px;\">Casting Calls</span>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"1\">\r\n\t\t\t\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t<ion-button size=\"small\" id=\"filterBtn\" (click)=\"search()\">Filter</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-item>\r\n\t<div class=\"box h-100 w-100\">\r\n\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t<ion-col size=\"6\" *ngFor=\"let gigs of gigsDetails | paginate: config; let i = index\" class=\"border\">\r\n\t\t\t\t<div [routerLink]=\"['/gigs/'+gigs.gigTypeName+'/display', gigs.gigId, gigs.gigType]\">\r\n\t\t\t\t\t<p class=\"box-title size-font\">{{gigs.title}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">Location: {{gigs.location.customAddress}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">Payments: {{gigs.payment}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">Per diem provided: {{gigs.perDimeProvided}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">Type: {{gigs.gigTypeName}}</p>\r\n\t\t\t\t\t<p class=\"box-heading size-font\">Posted Date: {{gigs.startDateString}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ion-label class=\"box-heading size-font\">Posted by:</ion-label>\r\n\t\t\t\t<ion-row style=\"width: 100%;\">\r\n\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t<ion-thumbnail>\r\n\t\t\t\t\t\t\t<img src={{gigs.producerInfo.profileImage}}>\r\n\t\t\t\t\t\t</ion-thumbnail>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"2\"></ion-col>\r\n\t\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t\t<a *ngIf=\"(gigs.producerInfo.usersTypeId.length > 1 || gigs.producerInfo.usersTypeId.length == 1) && gigs.producerInfo.usersTypeId.indexOf('3') != -1 \"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/talent/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a *ngIf=\"gigs.producerInfo.usersTypeId.length == 1 && gigs.producerInfo.usersTypeId.indexOf('4') != -1 \"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/producer/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a *ngIf=\"gigs.producerInfo.usersTypeId.length == 0\"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/producer/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a *ngIf=\"(gigs.producerInfo.usersTypeId.length > 1 || gigs.producerInfo.usersTypeId.length == 1) && gigs.producerInfo.usersTypeId.indexOf('3') == -1 && gigs.producerInfo.usersTypeId.indexOf('5') != -1\"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/crew/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a *ngIf=\"(gigs.producerInfo.usersTypeId.length > 1 || gigs.producerInfo.usersTypeId.length == 1) && gigs.producerInfo.usersTypeId.indexOf('3') == -1 && gigs.producerInfo.usersTypeId.indexOf('6') != -1\"\r\n\t\t\t\t\t\t\t[routerLink]=\"['/user/crew/display/', gigs.producerInfo.usersId]\">\r\n\t\t\t\t\t\t\t<ion-label color=\"primary\">{{gigs.producerInfo.fullName}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row style=\"width: 100%;\" *ngIf=\"noGigFound == 1\">\r\n\t\t\t<div  class=\"alert alert-danger alert-dismissible fade show w-100\" role=\"alert\">\r\n\t\t\t\tNo result found.\r\n\t\t\t</div>\r\n\t\t</ion-row>\r\n\t</div>\r\n\t<!-- <div style=\"padding-top: 12px; padding-bottom: 0;\" *ngIf=\"gigsDetails.length > 0\">\r\n\t\t<pagination-controls class=\"my-pagination\" (pageChange)=\"pageChange($event)\">\r\n\t\t</pagination-controls>\r\n\t</div> -->\r\n\r\n\r\n\t<div style=\"padding-top: 12px ;  padding-bottom: 0px;\">\r\n\t\t<div *ngIf=\"!isLoggedIn\" [ngClass]=\"{'paginationDiv': true}\">\r\n\t\t  <div *ngIf=\"gigsDetails.length > 0\">\r\n\t\t\t<pagination-controls class=\"ngx-pagination\" (pageChange)=\"pageChange($event)\">\r\n\t\t\t</pagination-controls>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"isLoggedIn\" [ngClass]=\"{'paginationDiv': false}\">\r\n\t\t  <div *ngIf=\"gigsDetails.length > 0\">\r\n\t\t\t<pagination-controls class=\"ngx-pagination\" (pageChange)=\"pageChange($event)\">\r\n\t\t\t</pagination-controls>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t  </div>\r\n</ion-content>\r\n<app-footer [isLoggedIn]=\"usersId\"></app-footer>");

/***/ }),

/***/ "./src/app/gigs/addarole/addarole.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/gigs/addarole/addarole.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixed-headingPostGig {\n  background: #F5F5F5 !important;\n  width: 100%;\n  position: fixed;\n  z-index: 999;\n  padding-left: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lncy9hZGRhcm9sZS9GOlxcQXZpcnVwSW9uaWNBcHBcXEdpdEdtb3NWaXNoYWxcXGdldG1lb25zZXRBcHAvc3JjXFxhcHBcXGdpZ3NcXGFkZGFyb2xlXFxhZGRhcm9sZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2lncy9hZGRhcm9sZS9hZGRhcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0wiLCJmaWxlIjoic3JjL2FwcC9naWdzL2FkZGFyb2xlL2FkZGFyb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkLWhlYWRpbmdQb3N0R2lne1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICB9IiwiLmZpeGVkLWhlYWRpbmdQb3N0R2lnIHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/gigs/addarole/addarole.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/gigs/addarole/addarole.component.ts ***!
  \*****************************************************/
/*! exports provided: AddaroleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddaroleComponent", function() { return AddaroleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _gigs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gigs.service */ "./src/app/gigs/gigs.service.ts");






let AddaroleComponent = class AddaroleComponent {
    constructor(gigsService, modal, formBuilder) {
        this.gigsService = gigsService;
        this.modal = modal;
        this.formBuilder = formBuilder;
        this.physicalCharacteristicsArray = src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["PHYSICAL_CHARACTERISTICS_ARRAY"];
        this.raceArray = src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["RACE_ARRAY"];
    }
    ngOnInit() {
        this.addRoleForm = this.formBuilder.group({
            gigRoleId: [''],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            race: ['Caucasian', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            physical_characteristics: ['Average', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            minimum_age: ['20', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maximum_age: ['60', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            day_rate_per_role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            is_nudity_required: ['0'],
            number_of_days_needed: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0|[1-9][0-9]*)$')]],
            rehearsal_days: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0|[1-9][0-9]*)$')]],
            rehearsal_payment: ['1'],
        });
        if (this.addRoleData) {
            this.addRoleForm.patchValue(this.addRoleData);
        }
    }
    close(val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.modal.dismiss(val);
        });
    }
    get r() { return this.addRoleForm.controls; }
    postRole() {
        if (this.addRoleData) {
            this.updateRole(this.addRoleData.gigRoleId);
        }
        else {
            this.addRole();
        }
    }
    addRole() {
        this.rolesubmitted = true;
        if (this.addRoleForm.invalid) {
            return;
        }
        this.gigsService.addRole(this.addRoleForm.value)
            .subscribe(data => {
            let response = data;
            this.rolesDetails = data;
            this.rolesDetails = this.rolesDetails.data.role;
            this.addRoleReturnData = { 'rolesDetails': this.rolesDetails, 'addRoleFormValue': this.addRoleForm.value, 'roleTitle': response.data.title };
            this.close(this.addRoleReturnData);
            // this.isRoalPosted = 1;
            // this.roleDetailsArray.push(this.addRoleForm.value)
            // this.roleArray.push(this.rolesDetails);
            // this.btnClose.nativeElement.click();
            this.addRoleForm.reset({
                'gigRoleId': '',
                'title': '',
                'gender': '0',
                'race': 'Caucasian',
                'physical_characteristics': 'Average',
                'minimum_age': '20',
                'maximum_age': '60',
                'day_rate_per_role': '',
                'is_nudity_required': '0',
                'number_of_days_needed': '',
                'rehearsal_days': '',
                'rehearsal_payment': '1',
            });
            //   this.rolesubmitted = false;
            // setTimeout(()=>{
            //   this.isRoalPosted = 0 ;
            //  },2000) 
        }, error => {
            // this.isRoalPosted = 2;
            // this.spinnerService.hide();
            // setTimeout(()=>{
            //   this.isRoalPosted = 0 ;
            //  },2000) 
        });
    }
    updateRole(roleId) {
        this.rolesubmitted = true;
        if (this.addRoleForm.invalid) {
            return;
        }
        this.gigsService.updateRole(this.addRoleForm.value, roleId)
            .subscribe(data => {
            this.rolesDetails = data;
            this.rolesDetails = this.rolesDetails.data.role;
            this.addRoleReturnData = { 'rolesDetails': this.rolesDetails, 'addRoleFormValue': this.addRoleForm.value };
            this.close(this.addRoleReturnData);
            // this.rolesDetails = data;
            // this.isRoalUpdate = 1;
            // this.rolesDetails = this.rolesDetails.data;
            // this.spinnerService.hide();
            // this.roleDetailsArray[this.deleteConfirmRoleIndex] = this.editRoleForm.value;
            // this.btnEditClose.nativeElement.click();
            // this.isRoalPosted = 0;
            // setTimeout(()=>{
            //   this.isRoalUpdate = 0 ;
            //  },2000)
        }, error => {
            // this.isRoalUpdate = 2;
            // this.spinnerService.hide();
            // setTimeout(()=>{
            //   this.isRoalUpdate = 0 ;
            //  },2000)
        });
    }
};
AddaroleComponent.ctorParameters = () => [
    { type: _gigs_service__WEBPACK_IMPORTED_MODULE_5__["GigsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddaroleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addarole',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addarole.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/addarole/addarole.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addarole.component.scss */ "./src/app/gigs/addarole/addarole.component.scss")).default]
    })
], AddaroleComponent);



/***/ }),

/***/ "./src/app/gigs/create/create.component.scss":
/*!***************************************************!*\
  !*** ./src/app/gigs/create/create.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-wrapper {\n  --height: 61%;\n}\n\n.fixed-headingPostGig {\n  background: #F5F5F5 !important;\n  width: 100%;\n  position: fixed;\n  z-index: 999;\n  padding-left: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lncy9jcmVhdGUvRjpcXEF2aXJ1cElvbmljQXBwXFxHaXRHbW9zVmlzaGFsXFxnZXRtZW9uc2V0QXBwL3NyY1xcYXBwXFxnaWdzXFxjcmVhdGVcXGNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2lncy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssYUFBQTtBQ0NMOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDTCIsImZpbGUiOiJzcmMvYXBwL2dpZ3MvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC13cmFwcGVye1xyXG4gICAgIC0taGVpZ2h0OiA2MSU7XHJcbn1cclxuXHJcbi5maXhlZC1oZWFkaW5nUG9zdEdpZ3tcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgfSIsIi5tb2RhbC13cmFwcGVyIHtcbiAgLS1oZWlnaHQ6IDYxJTtcbn1cblxuLmZpeGVkLWhlYWRpbmdQb3N0R2lnIHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/gigs/create/create.component.ts":
/*!*************************************************!*\
  !*** ./src/app/gigs/create/create.component.ts ***!
  \*************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_utility_calendar_modal_calendar_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility/calendar-modal/calendar-modal.component */ "./src/app/utility/calendar-modal/calendar-modal.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sign-up/sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _gigs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gigs.service */ "./src/app/gigs/gigs.service.ts");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../addarole/addarole.component */ "./src/app/gigs/addarole/addarole.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");













let CreateComponent = class CreateComponent {
    constructor(zone, utilityService, gigsService, signupService, signinService, formBuilder, router, modal) {
        this.zone = zone;
        this.utilityService = utilityService;
        this.gigsService = gigsService;
        this.signupService = signupService;
        this.signinService = signinService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.modal = modal;
        this.productionDatePlaceHolder = "16/06/2020 - 18/06/2020";
        this.productionStartDatePlaceHolder = new Date();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.adDepartmentSub = false;
        this.productionDepartmentSub = false;
        this.cameraDepartmentSub = false;
        this.geDepartmentSub = false;
        this.hmuDepartmentSub = false;
        this.wardrobeDepartmentSub = false;
        this.soundDepartmentSub = false;
        this.artDepartmentSub = false;
        this.transportationDepartmentSub = false;
        this.selectedAdDepartmentArray = [];
        this.selectedProductionDepartmentArray = [];
        this.selectedCameraDepartmentArray = [];
        this.selectedGeDepartmentArray = [];
        this.selectedHmuDepartmentArray = [];
        this.selectedWardrobDepartmentArray = [];
        this.selectedSoundDepartmentArray = [];
        this.selectArtDepartmentArray = [];
        this.selectTransportationDepartmentArray = [];
        this.isDateEmpty = false;
        this.rolesDetails = [];
        this.userIsAuthenticated = false;
        this.isGigPosted = 0;
        this.isTalentGigPosted = 0;
        this.isRoalPosted = 0;
        this.isRoalUpdate = 0;
        this.isRoalDelete = 0;
        this.show = false;
        this.roleArray = [];
        this.roleDetailsArray = [];
        this.raceArray = _app_service__WEBPACK_IMPORTED_MODULE_5__["RACE_ARRAY"];
        this.physicalCharacteristicsArray = _app_service__WEBPACK_IMPORTED_MODULE_5__["PHYSICAL_CHARACTERISTICS_ARRAY"];
        this.adDepartmentArray = [
            { value: '1', label: '1st AD', selected: false },
            { value: '2', label: '2nd AD', selected: false },
            { value: '3', label: '2nd 2nd AD', selected: false },
        ];
        this.productionDepartmentArray = [
            { value: '1', label: 'UPM', selected: false },
            { value: '2', label: 'Line Producer', selected: false },
            { value: '3', label: 'Producer', selected: false },
            { value: '4', label: 'Associate Producer', selected: false },
            { value: '5', label: 'Production Assistants', selected: false },
        ];
        this.cameraDepartmentArray = [
            { value: '1', label: 'DP/Cinematographer', selected: false },
            { value: '2', label: '1st AC', selected: false },
            { value: '3', label: '2nd Ac', selected: false },
            { value: '4', label: 'Camera PA', selected: false },
        ];
        this.geDepartmentArray = [
            { value: '1', label: 'Key Grip', selected: false },
            { value: '2', label: 'Gaffer', selected: false },
            { value: '3', label: 'Best Boy Grip', selected: false },
            { value: '4', label: 'Best Boy Electric', selected: false },
            { value: '5', label: 'Grips (Hammers)', selected: false },
            { value: '6', label: 'Electrics (Juicers)', selected: false },
            { value: '7', label: 'Rigging Grip', selected: false },
            { value: '8', label: 'Dolly Grip', selected: false },
            { value: '9', label: 'Genny Operator', selected: false },
        ];
        this.hmuDepartmentArray = [
            { value: '1', label: 'Head Make Up Artist', selected: false },
            { value: '2', label: 'Assistant Make Up Artist', selected: false },
            { value: '3', label: 'Head Hair Stylist', selected: false },
            { value: '4', label: 'Assistant Hair Stylist', selected: false },
        ];
        this.wardrobeDepartmentArray = [
            { value: '1', label: 'Head Wardrobe', selected: false },
            { value: '2', label: 'Assistant Wardobe', selected: false },
        ];
        this.soundDepartmentArray = [
            { value: '1', label: 'Production Sound Mixer', selected: false },
            { value: '2', label: 'Boom Operator', selected: false },
            { value: '3', label: 'Sound Utility', selected: false },
            { value: '4', label: 'Post Sound Mixer', selected: false },
            { value: '5', label: 'Foley Artist', selected: false },
            { value: '6', label: 'ADR Mixer', selected: false },
        ];
        this.artDepartmentArray = [
            { value: '1', label: 'Production Designer', selected: false },
            { value: '2', label: 'Set Dresser', selected: false },
            { value: '3', label: 'Art PA', selected: false },
            { value: '4', label: 'Props', selected: false },
        ];
        this.transportationDepartmentArray = [
            { value: '1', label: 'Transpo Coordinator', selected: false },
            { value: '2', label: 'Transpo Captain', selected: false },
            { value: '3', label: 'Drivers', selected: false },
        ];
        this.daterangepickerOptions = {
            startDate: '09/01/2019',
            endDate: '09/02/2019',
            format: 'DD/MM/YYYY'
        };
        this.activeGigType = false;
    }
    ngOnInit() {
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete.input = '';
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
        this.crewGigForm = this.formBuilder.group({
            gigType: ['1'],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            type: ['2'],
            shortLength: ['2'],
            unionType: ['1'],
            paidType: ['1'],
            // productionDates: ['', [Validators.required]],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            workingDays: ['6'],
            productionDatesNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^(0|[1-9][0-9]*)$')]],
            fullAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            lodgingProvided: ['0'],
            perDimProvided: ['0'],
            howMuch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            travelProvided: ['0'],
            kitRentalProvided: ['0'],
            adDepartment: [false],
            productionDepartment: [false],
            cameraDepartment: [false],
            geDepartment: [false],
            hmuDepartment: [false],
            wardrobeDepartment: [false],
            soundDepartment: [false],
            artDepartment: [false],
            transportationDepartment: [false],
            country: [],
            state: [],
            city: [],
            street: [],
            locationName: [],
            lat: [],
            lng: [],
            zipCode: [],
            position: [],
            dateText: ['Eastern Standard Time'],
        });
        this.talentGigForm = this.formBuilder.group({
            gigType: ['2'],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            perDimProvided: ['0'],
            unionType: ['0'],
            travelProvided: ['0'],
            locationOfShoot: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            lodgingProvided: ['0'],
            fullAddress: [],
            // productionDates: ['', [Validators.required]],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            country: [],
            state: [],
            city: [],
            street: [],
            locationName: [],
            lat: [],
            lng: [],
            zipCode: [],
            dateText: ['Eastern Standard Time'],
        });
    }
    UpdateSearchResults() {
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                });
            });
        });
    }
    SelectSearchResult(item) {
        this.autocompleteItems = [];
        this.fullAddress = item.description;
        this.autocomplete.input = '';
        this.fullAddressVale = '';
        this.talentGigForm.value.fullAddress = this.fullAddress;
        this.utilityService.requestHttpGet('https://maps.googleapis.com/maps/api/geocode/json?address=' + item.description + '&key=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].GOOGLE_API_KEY, 1).subscribe(res => {
            let addDetails = this.extract(res.results[0]);
            this.fullAddress = addDetails.full_address;
            this.countryName = addDetails.detail.country.short_name;
            this.stateName = addDetails.detail.state;
            this.cityName = addDetails.detail.city;
            this.latitude = addDetails.latlng.lat;
            this.longitude = addDetails.latlng.lng;
            this.street = addDetails.detail.street;
            this.zip = addDetails.detail.zip;
            this.locationName = addDetails.detail.location;
        });
    }
    get f() { return this.crewGigForm.controls; }
    get t() { return this.talentGigForm.controls; }
    // this.googleAutocomplete = new google.maps.places.Autocomplete(await this.searchbar.getInputElement());
    //   this.googleAutocomplete.addListener('place_changed', () => {
    //     // do whatever here
    //   });
    postCrewGig() {
        this.submitted = true;
        if (this.crewGigForm.invalid || !this.productionStartDate) {
            return;
        }
        this.crewGigForm.get("startDate").setValue(this.productionStartDate);
        this.crewGigForm.get("endDate").setValue(this.productionEndDate);
        this.crewGigForm.get("country").setValue(this.countryName);
        this.crewGigForm.get("state").setValue(this.stateName);
        this.crewGigForm.get("city").setValue(this.cityName);
        this.crewGigForm.get("lat").setValue(this.latitude);
        this.crewGigForm.get("lng").setValue(this.longitude);
        this.crewGigForm.get("street").setValue(this.street);
        this.crewGigForm.get("zipCode").setValue(this.zip);
        this.crewGigForm.get("locationName").setValue(this.locationName);
        this.crewGigForm.value.fullAddress = this.fullAddress;
        this.crewGigForm.value.dateText = this.crewGigForm.value.dateText;
        this.crewGigForm.get("startDate").setValue(this.productionStartDate);
        this.crewGigForm.get("endDate").setValue(this.productionEndDate);
        let departmentArr = [];
        if (this.crewGigForm.value.adDepartment) {
            departmentArr.push({ id: 1, subDepartment: this.selectedAdDepartmentArray });
        }
        if (this.crewGigForm.value.productionDepartment) {
            departmentArr.push({ id: 2, subDepartment: this.selectedProductionDepartmentArray });
        }
        if (this.crewGigForm.value.cameraDepartment) {
            departmentArr.push({ id: 3, subDepartment: this.selectedCameraDepartmentArray });
        }
        if (this.crewGigForm.value.geDepartment) {
            departmentArr.push({ id: 4, subDepartment: this.selectedGeDepartmentArray });
        }
        if (this.crewGigForm.value.hmuDepartment) {
            departmentArr.push({ id: 5, subDepartment: this.selectedHmuDepartmentArray });
        }
        if (this.crewGigForm.value.wardrobeDepartment) {
            departmentArr.push({ id: 6, subDepartment: this.selectedWardrobDepartmentArray });
        }
        if (this.crewGigForm.value.soundDepartment) {
            departmentArr.push({ id: 7, subDepartment: this.selectedSoundDepartmentArray });
        }
        if (this.crewGigForm.value.artDepartment) {
            departmentArr.push({ id: 8, subDepartment: this.selectArtDepartmentArray });
        }
        if (this.crewGigForm.value.transportationDepartment) {
            departmentArr.push({ id: 9, subDepartment: this.selectTransportationDepartmentArray });
        }
        this.crewGigForm.get("position").setValue(departmentArr);
        this.gigsService.postGig(this.crewGigForm.value, this.usersId)
            .subscribe(data => {
            this.isGigPosted = 1;
            this.utilityService.showToast('Crew gig successfully submitted. After admin approval it would be visible to all site visitors.');
            // setTimeout(() => this.router.navigate(["/"]), 4000);
        }, error => {
            // this.isGigPosted = 2;
            this.utilityService.showToast('Something went wrong please try again.');
        });
    }
    postTalentGig() {
        console.log('Full Address:', this.fullAddress);
        this.talentGigSubmitted = true;
        if (this.talentGigForm.invalid || !this.productionStartDate) {
            return;
        }
        this.talentGigForm.get("startDate").setValue(this.productionStartDate);
        this.talentGigForm.get("endDate").setValue(this.productionEndDate);
        this.talentGigForm.get("country").setValue(this.countryName);
        this.talentGigForm.get("state").setValue(this.stateName);
        this.talentGigForm.get("city").setValue(this.cityName);
        this.talentGigForm.get("lat").setValue(this.latitude);
        this.talentGigForm.get("lng").setValue(this.longitude);
        this.talentGigForm.get("street").setValue(this.street);
        this.talentGigForm.get("zipCode").setValue(this.zip);
        this.talentGigForm.get("locationName").setValue(this.locationName);
        this.talentGigForm.value.fullAddress = this.fullAddress;
        this.talentGigForm.value.locationOfShoot = this.fullAddress;
        this.talentGigForm.value.dateText = this.talentGigForm.value.dateText;
        this.gigsService.talentPostGig(this.talentGigForm.value, this.usersId, this.roleArray)
            .subscribe(data => {
            this.isTalentGigPosted = 1;
            this.utilityService.showToast('Talent gig successfully submitted. After admin approval it would be visible to all site visitors.');
            // setTimeout(() => this.router.navigate(["/"]), 4000);
        }, error => {
            this.isTalentGigPosted = 2;
            this.utilityService.showToast('Something went wrong please try again.');
        });
    }
    changeType() {
        this.fullAddress = undefined;
    }
    getProductionDates() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_utility_calendar_modal_calendar_modal_component__WEBPACK_IMPORTED_MODULE_4__["CalendarModalComponent"],
                cssClass: 'modalCss'
            });
            modal.onDidDismiss().then(res => {
                if (res.data) {
                    this.isDateEmpty = true;
                    let response = res.data;
                    this.productionStartDate = response.startDate.format('DD/MM/YYYY');
                    this.productionEndDate = response.endDate.format('DD/MM/YYYY');
                    this.productionDatePlaceHolder = this.productionStartDate + " - " + this.productionEndDate;
                }
            });
            return yield modal.present();
        });
    }
    addEditRole(i, role) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (role) {
                const editRoleModal = yield this.modal.create({
                    component: _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_11__["AddaroleComponent"],
                    cssClass: 'modalCss',
                    componentProps: {
                        addRoleData: role
                    }
                });
                editRoleModal.onDidDismiss().then(res => {
                    if (res.data) {
                        let response = res.data;
                        this.roleDetailsArray[i] = response.addRoleFormValue;
                    }
                });
                return yield editRoleModal.present();
            }
            else {
                const addRoleModal = yield this.modal.create({
                    component: _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_11__["AddaroleComponent"],
                    cssClass: 'modalCss'
                });
                addRoleModal.onDidDismiss().then(res => {
                    if (res.data) {
                        let response = res.data;
                        this.roleDetailsArray.push(response.addRoleFormValue);
                        this.pushRole(response.rolesDetails, response.roleTitle);
                    }
                });
                return yield addRoleModal.present();
            }
        });
    }
    confirmRoleDelete(i) {
        let roleId = this.roleArray[i].role;
        this.gigsService.deleteRole(roleId)
            .subscribe(data => {
            // this.rolesDetails = data;
            // this.rolesDetails = this.rolesDetails.data;
            // this.isRoalDelete = 1;
            this.roleDetailsArray.splice(i, 1);
            this.roleArray.splice(i, 1);
        }, error => {
            this.isRoalDelete = 2;
        });
    }
    pushRole(role, title) {
        this.roleArray.push({
            role: role,
            title: title
        });
    }
    selectedDepartment() {
        this.selectedAdDepartmentArray = [];
        this.adDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedAdDepartmentArray.push(item.value);
            }
        });
    }
    selectProductionDepartment() {
        this.selectedProductionDepartmentArray = [];
        this.productionDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedProductionDepartmentArray.push(item.value);
            }
        });
    }
    selectCameraDepartment() {
        this.selectedCameraDepartmentArray = [];
        this.cameraDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedCameraDepartmentArray.push(item.value);
            }
        });
    }
    selectGeDepartment() {
        this.selectedGeDepartmentArray = [];
        this.geDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedGeDepartmentArray.push(item.value);
            }
        });
    }
    selectHmuDepartment() {
        this.selectedHmuDepartmentArray = [];
        this.hmuDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedHmuDepartmentArray.push(item.value);
            }
        });
    }
    selectWardrobeDepartment() {
        this.selectedWardrobDepartmentArray = [];
        this.wardrobeDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedWardrobDepartmentArray.push(item.value);
            }
        });
    }
    selectSoundDepartment() {
        this.selectedSoundDepartmentArray = [];
        this.soundDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedSoundDepartmentArray.push(item.value);
            }
        });
    }
    selectArtDepartment() {
        this.selectArtDepartmentArray = [];
        this.artDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectArtDepartmentArray.push(item.value);
            }
        });
    }
    selectTransportationDepartment() {
        this.selectTransportationDepartmentArray = [];
        this.transportationDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectTransportationDepartmentArray.push(item.value);
            }
        });
    }
    toggleAdDepartment(event) {
        this.adDepartmentSub = false;
        if (event.target.checked) {
            this.adDepartmentSub = true;
        }
    }
    toggleProductionDepartment(event) {
        this.productionDepartmentSub = false;
        if (event.target.checked) {
            this.productionDepartmentSub = true;
        }
    }
    toggleCameraDepartment(event) {
        this.cameraDepartmentSub = false;
        if (event.target.checked) {
            this.cameraDepartmentSub = true;
        }
    }
    toggleGeDepartment(event) {
        this.geDepartmentSub = false;
        if (event.target.checked) {
            this.geDepartmentSub = true;
        }
    }
    toggleHmuDepartment(event) {
        this.hmuDepartmentSub = false;
        if (event.target.checked) {
            this.hmuDepartmentSub = true;
        }
    }
    toggleWardrobeDepartment(event) {
        this.wardrobeDepartmentSub = false;
        if (event.target.checked) {
            this.wardrobeDepartmentSub = true;
        }
    }
    toggleSoundDepartment(event) {
        this.soundDepartmentSub = false;
        if (event.target.checked) {
            this.soundDepartmentSub = true;
        }
    }
    toggleArtDepartment(event) {
        this.artDepartmentSub = false;
        if (event.target.checked) {
            this.artDepartmentSub = true;
        }
    }
    toggleTransportationDepartment(event) {
        this.transportationDepartmentSub = false;
        if (event.target.checked) {
            this.transportationDepartmentSub = true;
        }
    }
    // public handleLocationChange(address) {
    //   let addDetails = this.extract(address);
    //   this.fullAddress = addDetails.full_address;
    //   this.countryName = addDetails.detail.country.short_name;
    //   this.stateName = addDetails.detail.state;
    //   this.cityName = addDetails.detail.city;
    //   this.latitude = addDetails.latlng.lat;
    //   this.longitude = addDetails.latlng.lng;
    //   this.street = addDetails.detail.street;
    //   this.zip = addDetails.detail.zip;
    //   this.locationName = addDetails.detail.location;
    // }
    // public handleAddressChange(address) {
    //   let addDetails = this.extract(address);
    //   this.fullAddress = addDetails.full_address;
    //   this.countryName = addDetails.detail.country.short_name;
    //   this.stateName = addDetails.detail.state;
    //   this.cityName = addDetails.detail.city;
    //   this.latitude = addDetails.latlng.lat;
    //   this.longitude = addDetails.latlng.lng;
    //   this.street = addDetails.detail.street;
    //   this.zip = addDetails.detail.zip;
    //   this.locationName = addDetails.detail.location;
    // }
    extract(receivedAddresses) {
        let address_components = receivedAddresses.address_components;
        let address = {
            full_address: receivedAddresses.formatted_address,
            latlng: {
                lat: receivedAddresses.geometry.location.lat,
                lng: receivedAddresses.geometry.location.lng,
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
};
CreateComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"] },
    { type: _gigs_service__WEBPACK_IMPORTED_MODULE_9__["GigsService"] },
    { type: src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_8__["SignUpService"] },
    { type: src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_7__["SignInService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbar', { static: false })
], CreateComponent.prototype, "searchbar", void 0);
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/create/create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create.component.scss */ "./src/app/gigs/create/create.component.scss")).default]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/gigs/display/display.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/gigs/display/display.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inValid {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lncy9kaXNwbGF5L0Y6XFxBdmlydXBJb25pY0FwcFxcR2l0R21vc1Zpc2hhbFxcZ2V0bWVvbnNldEFwcC9zcmNcXGFwcFxcZ2lnc1xcZGlzcGxheVxcZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2lncy9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZ2lncy9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5WYWxpZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufSIsIi5pblZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/gigs/display/display.component.ts":
/*!***************************************************!*\
  !*** ./src/app/gigs/display/display.component.ts ***!
  \***************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sign-up/sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _gigs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gigs.service */ "./src/app/gigs/gigs.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");









let DisplayComponent = class DisplayComponent {
    constructor(alert, router, utility, formBuilder, gigsService, signupService, signinService, route, platform) {
        this.alert = alert;
        this.router = router;
        this.utility = utility;
        this.formBuilder = formBuilder;
        this.gigsService = gigsService;
        this.signupService = signupService;
        this.signinService = signinService;
        this.route = route;
        this.platform = platform;
        this.typeName = 'Talent';
        this.isFavorite = false;
        this.rateArr = [];
        this.submitted = false;
    }
    ngOnInit() {
        if (localStorage.getItem("usersId")) {
            this.userIsAuthenticated = true;
            this.userDetails = this.signinService.getAuthData();
            this.usersId = this.userDetails.usersId;
            this.isLoggedIn = this.userDetails.isLoggedin;
        }
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
        this.gigDescription = localStorage.getItem("gigDescription");
        this.route.paramMap.subscribe((paramMap) => {
            this.typeName = paramMap.get('type');
            this.gigsType = paramMap.get('typeId');
            this.gigId = paramMap.get('id');
            this.gigsService.getGigInfo(this.gigId, this.gigsType, this.usersId).subscribe(response => {
                this.gigsProfileInfo = response;
                this.gigsProfileInfo = this.gigsProfileInfo.data.gig;
                if (this.usersId === this.gigsProfileInfo.producerId) {
                    this.isProducer = true;
                }
                if (this.gigsType == 2) {
                    this.castingRoles = this.gigsProfileInfo.castingRoles[0];
                    if (!this.gigsProfileInfo.castingRoles[0]) {
                        this.castingRoles = '';
                    }
                    this.gigsTypeName = 'Talent';
                }
                else {
                    this.gigsTypeName = 'Crew';
                }
                this.socialMediaLinksDetails = this.gigsProfileInfo.producerInfo.socialMediaLinks;
            });
            this.gigsService.getRatingValByUser(this.usersId, this.gigId).subscribe(data => {
                // console.log('Response rate:',data)
                this.rateArr = data;
                this.rate = this.rateArr.data.userRatings;
                //  console.log(this.rate);
            });
            this.applyGigForm = this.formBuilder.group({
                description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            });
            this.reviewGigForm = this.formBuilder.group({
                usersRatingText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                usersRatingReasonText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
            });
        });
    }
    viewRole(i) {
        if (this.showRoleIndex == i) {
            this.showRoleIndex = undefined;
        }
        else {
            this.showRoleIndex = i;
        }
    }
    get f() { return this.applyGigForm.controls; }
    get r() { return this.reviewGigForm.controls; }
    share() {
        if (this.platform.is("cordova")) {
            window['plugins'].socialsharing.share('GMOS', null, '', null);
        }
    }
    applyGig() {
        this.submitted = true;
        if (this.applyGigForm.invalid) {
            return;
        }
        this.gigsService.applyGig(this.applyGigForm.value, this.usersId, this.gigId, this.gigsType)
            .subscribe(data => {
            this.apiResponse = data;
            this.isGigApplied = this.apiResponse.data.isDone;
            this.showGigAppliedToast(this.isGigApplied);
            //  setTimeout(()=>{
            //   this.isGigApplied = 5 ;
            //  },3000);
            this.description = " ";
        }, error => {
            this.isGigApplied = 0;
        });
    }
    showGigAppliedToast(isGigApplied) {
        switch (isGigApplied) {
            case 1:
                this.utility.showToast('You have successfully applied for the gig.');
                break;
            case 0:
                this.utility.showToast('Something went wrong please try again.');
                break;
            case 2:
                this.utility.showToast('You have already applied for this gig.');
                break;
            case 3:
                this.utility.showToast('Before apply for this gig, please complete ' + this.gigsTypeName + 'profile.');
                break;
        }
    }
    confirmAcceptDecline(usersId, action, index) {
        this.usersId = usersId;
        this.action = action;
        this.currentIndex = index;
    }
    applicationAcceptDecline(messageText, usersId, action, index, headerText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.usersId = usersId;
            this.action = action;
            this.currentIndex = index;
            let alert = this.alert.create({
                header: headerText,
                message: messageText,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.gigsService.gigApplicationAcceptDecline(this.usersId, this.gigId, this.action)
                                .subscribe(data => {
                                this.apiResponse = data;
                                this.isGigApplicationAcceptDecline = this.apiResponse.data.isDone;
                                if (action == 'decline') {
                                    this.gigsProfileInfo.applications[index].status = 3;
                                }
                                if (action == 'accept') {
                                    this.actionName = 'selected';
                                    this.gigsProfileInfo.applications[index].status = 2;
                                }
                            }, error => {
                                this.isGigApplicationAcceptDecline = 0;
                            });
                        }
                    }
                ]
            });
            yield (yield alert).present();
        });
    }
    favorite() {
        this.isFavorite = !this.isFavorite;
        if (this.isFavorite) {
            this.gigsService.addFavorite(this.gigId, this.gigsType, this.usersId)
                .subscribe(data => {
                this.favoriteDetails = data;
                this.isFavorite = (this.favoriteDetails.data.isAddedToFavourite == '1');
                if (this.isFavorite) {
                    //gigDetails.isFavourite = 1 ;
                    this.isFavorite = true;
                }
                else {
                    this.utility.showToast('Unable to add Favorite');
                }
            });
        }
        else {
            this.gigsService.removeFavorite(this.gigId, this.gigsType, this.usersId)
                .subscribe(data => {
                this.favoriteDetails = data;
                this.isRemovedFavorite = this.favoriteDetails.data.isRemoveFromFavourite;
                if (this.isRemovedFavorite == '1') {
                    this.isFavorite = false;
                }
                else {
                    this.utility.showToast('Unable to remove Favorite');
                }
            });
        }
    }
    addRating() {
        if (this.isLoggedIn) {
            this.isRatingVerify = true;
        }
    }
    addRatingAndReview() {
        this.reviewFormSubmitted = true;
        if (this.reviewGigForm.invalid) {
            setTimeout(() => {
                this.isRatingVerify = false;
            }, 2000);
            return;
        }
        else {
            this.gigsService.addRatingAndReview(this.usersId, this.loggedInUsersId, this.reviewGigForm.value.usersRatingText, this.reviewGigForm.value.usersRatingReasonText, this.rate, this.gigId)
                .subscribe(data => {
                this.isRatingVerify = false;
                this.utility.showToast('Review successfully submitted.');
                // this.ratingDetails = data;
                // this.isRating = this.ratingDetails.data.isAdded;
                // this.isratingUpdated = 1;
                // setTimeout(() => {
                //   this.isratingUpdated = 0;
                //   this.isRatingVerify = false;
                // }, 2000)
            });
        }
    }
};
DisplayComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _gigs_service__WEBPACK_IMPORTED_MODULE_6__["GigsService"] },
    { type: src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_5__["SignUpService"] },
    { type: src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_4__["SignInService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/display/display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.scss */ "./src/app/gigs/display/display.component.scss")).default]
    })
], DisplayComponent);



/***/ }),

/***/ "./src/app/gigs/edit/edit.component.scss":
/*!***********************************************!*\
  !*** ./src/app/gigs/edit/edit.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZ3MvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/gigs/edit/edit.component.ts":
/*!*********************************************!*\
  !*** ./src/app/gigs/edit/edit.component.ts ***!
  \*********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _gigs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gigs.service */ "./src/app/gigs/gigs.service.ts");
/* harmony import */ var src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sign-up/sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_utility_constants_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utility/constants.service */ "./src/app/utility/constants.service.ts");
/* harmony import */ var _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../addarole/addarole.component */ "./src/app/gigs/addarole/addarole.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");












let EditComponent = class EditComponent {
    constructor(zone, alert, modal, router, utilityService, formBuilder, gigsService, signupService, signinService, route, platform) {
        this.zone = zone;
        this.alert = alert;
        this.modal = modal;
        this.router = router;
        this.utilityService = utilityService;
        this.formBuilder = formBuilder;
        this.gigsService = gigsService;
        this.signupService = signupService;
        this.signinService = signinService;
        this.route = route;
        this.platform = platform;
        this.submitted = false;
        this.physicalCharacteristicsArray = src_app_utility_constants_service__WEBPACK_IMPORTED_MODULE_9__["PHYSICAL_CHARACTERISTICS_ARRAY"];
        this.adDepartmentArray = [
            { value: '1', label: '1st AD', selected: false },
            { value: '2', label: '2nd AD', selected: false },
            { value: '3', label: '2nd 2nd AD', selected: false },
        ];
        this.timezonesArray = [
            { value: 'Atlantic Standard Time' },
            { value: 'Eastern Standard Time' },
            { value: 'Central Standard Time' },
            { value: 'Mountain Standard Time' },
            { value: 'Pacific Standard Time' },
            { value: 'Alaskan Standard Time' },
            { value: 'Hawaii-Aleutian Standard Time' },
        ];
        this.productionDepartmentArray = [
            { value: '1', label: 'UPM', selected: false },
            { value: '2', label: 'Line Producer', selected: false },
            { value: '3', label: 'Producer', selected: false },
            { value: '4', label: 'Associate Producer', selected: false },
            { value: '5', label: 'Production Assistants', selected: false },
        ];
        this.cameraDepartmentArray = [
            { value: '1', label: 'DP/Cinematographer', selected: false },
            { value: '2', label: '1st AC', selected: false },
            { value: '3', label: '2nd Ac', selected: false },
            { value: '4', label: 'Camera PA', selected: false },
        ];
        this.geDepartmentArray = [
            { value: '1', label: 'Key Grip', selected: false },
            { value: '2', label: 'Gaffer', selected: false },
            { value: '3', label: 'Best Boy Grip', selected: false },
            { value: '4', label: 'Best Boy Electric', selected: false },
            { value: '5', label: 'Grips (Hammers)', selected: false },
            { value: '6', label: 'Electrics (Juicers)', selected: false },
            { value: '7', label: 'Rigging Grip', selected: false },
            { value: '8', label: 'Dolly Grip', selected: false },
            { value: '9', label: 'Genny Operator', selected: false },
        ];
        this.hmuDepartmentArray = [
            { value: '1', label: 'Head Make Up Artist', selected: false },
            { value: '2', label: 'Assistant Make Up Artist', selected: false },
            { value: '3', label: 'Head Hair Stylist', selected: false },
            { value: '4', label: 'Assistant Hair Stylist', selected: false },
        ];
        this.wardrobeDepartmentArray = [
            { value: '1', label: 'Head Wardrobe', selected: false },
            { value: '2', label: 'Assistant Wardobe', selected: false },
        ];
        this.soundDepartmentArray = [
            { value: '1', label: 'Production Sound Mixer', selected: false },
            { value: '2', label: 'Boom Operator', selected: false },
            { value: '3', label: 'Sound Utility', selected: false },
            { value: '4', label: 'Post Sound Mixer', selected: false },
            { value: '5', label: 'Foley Artist', selected: false },
            { value: '6', label: 'ADR Mixer', selected: false },
        ];
        this.artDepartmentArray = [
            { value: '1', label: 'Production Designer', selected: false },
            { value: '2', label: 'Set Dresser', selected: false },
            { value: '3', label: 'Art PA', selected: false },
            { value: '4', label: 'Props', selected: false },
        ];
        this.transportationDepartmentArray = [
            { value: '1', label: 'Transpo Coordinator', selected: false },
            { value: '2', label: 'Transpo Captain', selected: false },
            { value: '3', label: 'Drivers', selected: false },
        ];
        this.daterangepickerOptions = {
            startDate: '09/01/2019',
            endDate: '09/02/2019',
            format: 'DD/MM/YYYY'
        };
        this.roleDetailsArray = [];
        this.roleArray = [];
        this.selectedAdDepartmentArray = [];
        this.selectedProductionDepartmentArray = [];
        this.selectedCameraDepartmentArray = [];
        this.selectedGeDepartmentArray = [];
        this.selectedHmuDepartmentArray = [];
        this.selectedWardrobDepartmentArray = [];
        this.selectedSoundDepartmentArray = [];
        this.selectArtDepartmentArray = [];
        this.selectTransportationDepartmentArray = [];
        this.productionStartDatePlaceHolder = new Date();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.isInvalidDate = (m) => {
            // if(m.valueOf() >= moment().toDate().valueOf())
            // { 
            //   return false;
            // }
            return true;
        };
    }
    ngOnInit() {
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.route.paramMap.subscribe((paramMap) => {
            this.gigsTypeName = paramMap.get('type');
            this.gigsType = paramMap.get('typeId');
            this.gigsId = paramMap.get('id');
            this.gigsService.getGigInfo(this.gigsId, this.gigsType, this.usersId)
                .subscribe(data => {
                this.gigsProfileInfo = data;
                this.gigsProfileInfo = this.gigsProfileInfo.data.gig;
                if (this.gigsType == 2) {
                    this.castingRoles = this.gigsProfileInfo.castingRoles[0];
                    if (!this.gigsProfileInfo.castingRoles[0]) {
                        this.castingRoles = '';
                    }
                    this.gigsTypeName = 'Talent';
                    this.setTalentGigValues(this.gigsProfileInfo);
                }
                else {
                    this.gigsTypeName = 'Crew';
                    this.setCrewGigValues(this.gigsProfileInfo);
                }
            });
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
        this.crewGigForm = this.formBuilder.group({
            gigId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            gigType: ['1'],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            type: ['2'],
            shortLength: ['2'],
            unionType: ['1'],
            paidType: ['1'],
            // productionDates: ['', [Validators.required]],
            startDate: [],
            endDate: [],
            workingDays: ['6'],
            productionDatesNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(0|[1-9][0-9]*)$')]],
            fullAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lodgingProvided: ['0'],
            perDimProvided: ['0'],
            howMuch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            travelProvided: ['0'],
            kitRentalProvided: ['0'],
            adDepartment: [false],
            productionDepartment: [false],
            cameraDepartment: [false],
            geDepartment: [false],
            hmuDepartment: [false],
            wardrobeDepartment: [false],
            soundDepartment: [false],
            artDepartment: [false],
            transportationDepartment: [false],
            country: [],
            state: [],
            city: [],
            street: [],
            locationName: [],
            lat: [],
            lng: [],
            zipCode: [],
            position: [],
            dateText: ['Eastern Standard Time'],
        });
        this.talentGigForm = this.formBuilder.group({
            gigId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            gigType: ['2'],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            perDimProvided: ['0'],
            unionType: ['0'],
            travelProvided: ['0'],
            locationOfShoot: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lodgingProvided: ['0'],
            fullAddress: [],
            // productionDates: ['', [Validators.required]],
            startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: [],
            state: [],
            city: [],
            street: [],
            locationName: [],
            lat: [],
            lng: [],
            zipCode: [],
            dateText: ['Eastern Standard Time'],
        });
    }
    UpdateSearchResults() {
        if (!this.ifIonChangeOccur) {
            this.ifIonChangeOccur = true;
            return;
        }
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                });
            });
        });
    }
    SelectSearchResult(item) {
        this.autocompleteItems = [];
        this.fullAddress = item.description;
        this.autocomplete.input = '';
        this.talentGigForm.value.fullAddress = this.fullAddress;
        this.utilityService.requestHttpGet('https://maps.googleapis.com/maps/api/geocode/json?address=' + item.description + '&key=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].GOOGLE_API_KEY, 1).subscribe(res => {
            let addDetails = this.extract(res.results[0]);
            this.fullAddress = addDetails.full_address;
            this.countryName = addDetails.detail.country.short_name;
            this.stateName = addDetails.detail.state;
            this.cityName = addDetails.detail.city;
            this.latitude = addDetails.latlng.lat;
            this.longitude = addDetails.latlng.lng;
            this.street = addDetails.detail.street;
            this.zip = addDetails.detail.zip;
            this.locationName = addDetails.detail.location;
        });
    }
    get f() { return this.crewGigForm.controls; }
    get t() { return this.talentGigForm.controls; }
    addRole(val, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (val) {
                this.updateConfirmRoleIndex = i;
                const modalUpdate = yield this.modal.create({
                    component: _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_10__["AddaroleComponent"],
                    cssClass: 'modalCss',
                    componentProps: {
                        addRoleData: val
                    }
                });
                modalUpdate.onDidDismiss().then(res => {
                    if (res.data) {
                        let response = res;
                        this.roleDetailsArray[i] = response.data.addRoleFormValue;
                    }
                });
                return yield modalUpdate.present();
            }
            else {
                const modalAdd = yield this.modal.create({
                    component: _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_10__["AddaroleComponent"],
                    cssClass: 'modalCss',
                });
                modalAdd.onDidDismiss().then(res => {
                    if (res.data) {
                        let response = res;
                        this.roleArray.push(response.data.rolesDetails);
                        this.roleDetailsArray.push(response.data.addRoleFormValue);
                    }
                });
                return yield modalAdd.present();
            }
        });
    }
    deleteRole(i, role) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = this.alert.create({
                message: 'Do you really wish to delete this role?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'ok',
                        handler: () => {
                            this.deleteConfirmRoleIndex = i;
                            let roleId = this.roleArray[this.deleteConfirmRoleIndex];
                            this.gigsService.deleteRole(roleId)
                                .subscribe(data => {
                                this.rolesDetails = data;
                                this.rolesDetails = this.rolesDetails.data;
                                this.isRoalDelete = 1;
                                this.utilityService.showToast('Role deleted successfully.');
                                this.roleDetailsArray.splice(this.deleteConfirmRoleIndex, 1);
                                this.roleArray.splice(this.deleteConfirmRoleIndex, 1);
                                // setTimeout(()=>{
                                //   this.isRoalDelete = 0 ;
                                //  },2000)
                            }, error => {
                                this.isRoalDelete = 2;
                                this.utilityService.showToast('Something went wrong please try again.');
                                //this.spinnerService.hide();
                                // setTimeout(()=>{
                                //   this.isRoalDelete = 0 ;
                                //  },2000)
                            });
                        }
                    }
                ]
            });
            yield (yield alert).present();
        });
    }
    setTalentGigValues(val) {
        console.log('Talent Gig Form', this.talentGigForm);
        this.talentGigForm.get("gigId").setValue(val.gigId);
        this.talentGigForm.get("title").setValue(val.title);
        if (val.union == 'Union') {
            this.talentGigForm.get("unionType").setValue('1');
        }
        else {
            this.talentGigForm.get("unionType").setValue('0');
        }
        this.talentGigForm.get("startDate").setValue(val.startDate);
        this.talentGigForm.get("endDate").setValue(val.endDate);
        this.selected = {
            startDate: val.startDate,
            endDate: val.endDate,
        };
        this.talentGigForm.get("country").setValue(val.location.countryShortName);
        this.talentGigForm.get("state").setValue(val.location.stateName);
        this.talentGigForm.get("city").setValue(val.location.cityName);
        this.talentGigForm.get("lat").setValue(val.location.latitude);
        this.talentGigForm.get("lng").setValue(val.location.longitude);
        this.talentGigForm.get("street").setValue(val.location.street);
        this.talentGigForm.get("zipCode").setValue(val.location.zip);
        this.talentGigForm.get("locationName").setValue(val.location.formattedAddressCustom);
        this.talentGigForm.get("locationOfShoot").setValue(val.location.formattedAddressCustom);
        this.fullAddress = val.location.formattedAddressCustom;
        this.talentGigForm.get("dateText").setValue(val.dateText);
        this.productionStartDate = val.startDate;
        this.talentGigForm.get("productionDates").setValue(val.startDate);
        if (val.perDimeProvided == 'No') {
            this.talentGigForm.get("perDimProvided").setValue('0');
        }
        else {
            this.talentGigForm.get("perDimProvided").setValue('1');
        }
        if (val.lodgingProvide == 'No') {
            this.talentGigForm.get("lodgingProvided").setValue('0');
        }
        else {
            this.talentGigForm.get("lodgingProvided").setValue('1');
        }
        if (val.travelProvided == 'No') {
            this.talentGigForm.get("travelProvided").setValue('0');
        }
        else {
            this.talentGigForm.get("travelProvided").setValue('1');
        }
        if (val.castingRoles.length > 0) {
            for (let v of val.castingRoles) {
                let arr = v.ageRange.split('-');
                let temp = {
                    gigRoleId: v.id,
                    title: v.title,
                    gender: v.gender,
                    race: v.race,
                    physical_characteristics: v.physicalCharacteristics,
                    minimum_age: arr[0],
                    maximum_age: arr[1],
                    day_rate_per_role: v.dayRatePerRole,
                    is_nudity_required: v.isNudityRequired,
                    number_of_days_needed: v.numberOfDaysNeeded,
                    rehearsal_days: v.rehearsalDays,
                    rehearsal_payment: v.rehearsalPayment
                };
                this.roleDetailsArray.push(temp);
                this.roleArray.push(v.id);
            }
        }
    }
    setCrewGigValues(val) {
        this.crewGigForm.get("gigId").setValue(val.gigId);
        this.crewGigForm.get("title").setValue(val.title);
        if (val.type == 'Documentary') {
            this.crewGigForm.get("type").setValue('1');
        }
        else {
            this.crewGigForm.get("type").setValue('2');
        }
        if (val.length == 'Short') {
            this.crewGigForm.get("shortLength").setValue('1');
        }
        else {
            this.crewGigForm.get("shortLength").setValue('2');
        }
        if (val.union == 'Union') {
            this.crewGigForm.get("unionType").setValue('1');
        }
        else {
            this.crewGigForm.get("unionType").setValue('0');
        }
        if (val.payment == 'Unpaid') {
            this.crewGigForm.get("paidType").setValue('1');
        }
        else {
            this.crewGigForm.get("paidType").setValue('0');
        }
        if (val.payment == 'Unpaid') {
            this.crewGigForm.get("paidType").setValue('1');
        }
        else {
            this.crewGigForm.get("paidType").setValue('0');
        }
        this.crewGigForm.get("startDate").setValue(val.startDate);
        this.crewGigForm.get("endDate").setValue(val.endDate);
        this.selected = {
            startDate: val.startDate,
            endDate: val.endDate,
        };
        this.crewGigForm.get("country").setValue(val.location.countryShortName);
        this.crewGigForm.get("state").setValue(val.location.stateName);
        this.crewGigForm.get("city").setValue(val.location.cityName);
        this.crewGigForm.get("lat").setValue(val.location.latitude);
        this.crewGigForm.get("lng").setValue(val.location.longitude);
        this.crewGigForm.get("street").setValue(val.location.street);
        this.crewGigForm.get("zipCode").setValue(val.location.zip);
        this.crewGigForm.get("locationName").setValue(val.location.formattedAddressCustom);
        this.crewGigForm.get("fullAddress").setValue(val.location.formattedAddressCustom);
        this.crewGigForm.get("dateText").setValue(val.dateText);
        this.crewGigForm.get("workingDays").setValue(val.workingDays);
        this.productionStartDate = val.startDate;
        this.crewGigForm.get("startDate").setValue(val.startDate);
        this.crewGigForm.get("endDate").setValue(val.endDate);
        if (val.workingDays == '5') {
            this.crewGigForm.get("workingDays").setValue('5');
        }
        else {
            this.crewGigForm.get("workingDays").setValue('6');
        }
        this.crewGigForm.get("productionDatesNumber").setValue(val.totalNumberProductionDays);
        if (val.perDimeProvided == 'No') {
            this.crewGigForm.get("perDimProvided").setValue('0');
        }
        else {
            this.crewGigForm.get("perDimProvided").setValue('1');
        }
        if (val.lodgingProvide == 'No') {
            this.crewGigForm.get("lodgingProvided").setValue('0');
        }
        else {
            this.crewGigForm.get("lodgingProvided").setValue('1');
        }
        this.crewGigForm.get("howMuch").setValue(val.howMuch);
        if (val.travelProvided == 'No') {
            this.crewGigForm.get("travelProvided").setValue('0');
        }
        else {
            this.crewGigForm.get("travelProvided").setValue('1');
        }
        if (val.rentalKitAvailable == 'No') {
            this.crewGigForm.get("kitRentalProvided").setValue('0');
        }
        else {
            this.crewGigForm.get("kitRentalProvided").setValue('1');
        }
        if (Array.isArray(val.positionAvailable)) {
            val.positionAvailable.forEach((v, k) => {
                if (v.departmentId == '1') {
                    this.selectedAdDepartmentArray = [];
                    this.crewGigForm.get("adDepartment").setValue('1');
                    this.adDepartmentSub = true;
                    if (v.subCategories.length > 0) {
                        v.subCategories.forEach((v1, k1) => {
                            this.selectedAdDepartmentArray.push(v1.subDepartmentId);
                            let index = this.adDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                            this.adDepartmentArray[index].selected = true;
                        });
                    }
                }
                if (v.departmentId == '2') {
                    this.crewGigForm.get("productionDepartment").setValue('1');
                    this.productionDepartmentSub = true;
                    if (Array.isArray(v.subCategories)) {
                        if (v.subCategories.length > 0) {
                            v.subCategories.forEach((v1, k1) => {
                                if (v1) {
                                    this.selectedProductionDepartmentArray.push(v1.subDepartmentId);
                                    let index = this.productionDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                                    this.productionDepartmentArray[index].selected = true;
                                }
                            });
                        }
                    }
                }
                if (v.departmentId == '3') {
                    this.crewGigForm.get("cameraDepartment").setValue('1');
                    this.cameraDepartmentSub = true;
                    if (v.subCategories.length > 0) {
                        v.subCategories.forEach((v1, k1) => {
                            this.selectedCameraDepartmentArray.push(v1.subDepartmentId);
                            let index = this.cameraDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                            this.cameraDepartmentArray[index].selected = true;
                        });
                    }
                }
                if (v.departmentId == '4') {
                    this.crewGigForm.get("geDepartment").setValue('1');
                    this.geDepartmentSub = true;
                    if (v.subCategories.length > 0) {
                        v.subCategories.forEach((v1, k1) => {
                            this.selectedGeDepartmentArray.push(v1.subDepartmentId);
                            let index = this.geDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                            this.geDepartmentArray[index].selected = true;
                        });
                    }
                }
                if (v.departmentId == '5') {
                    this.crewGigForm.get("hmuDepartment").setValue('1');
                    this.hmuDepartmentSub = true;
                    if (v.subCategories.length > 0) {
                        v.subCategories.forEach((v1, k1) => {
                            this.selectedHmuDepartmentArray.push(v1.subDepartmentId);
                            let index = this.hmuDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                            this.hmuDepartmentArray[index].selected = true;
                        });
                    }
                }
                if (v.departmentId == '6') {
                    this.crewGigForm.get("wardrobeDepartment").setValue('1');
                    this.wardrobeDepartmentSub = true;
                    if (v.subCategories.length > 0) {
                        v.subCategories.forEach((v1, k1) => {
                            this.selectedWardrobDepartmentArray.push(v1.subDepartmentId);
                            let index = this.wardrobeDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                            this.wardrobeDepartmentArray[index].selected = true;
                        });
                    }
                }
                if (v.departmentId == '7') {
                    this.crewGigForm.get("soundDepartment").setValue('1');
                    this.soundDepartmentSub = true;
                    if (v.subCategories.length > 0) {
                        v.subCategories.forEach((v1, k1) => {
                            this.selectedSoundDepartmentArray.push(v1.subDepartmentId);
                            let index = this.soundDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                            this.soundDepartmentArray[index].selected = true;
                        });
                    }
                }
                if (v.departmentId == '8') {
                    this.crewGigForm.get("artDepartment").setValue('1');
                    this.artDepartmentSub = true;
                    if (v.subCategories.length > 0) {
                        v.subCategories.forEach((v1, k1) => {
                            this.selectArtDepartmentArray.push(v1.subDepartmentId);
                            let index = this.artDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                            this.artDepartmentArray[index].selected = true;
                        });
                    }
                }
                if (v.departmentId == '9') {
                    this.crewGigForm.get("transportationDepartment").setValue('1');
                    this.transportationDepartmentSub = true;
                    if (v.subCategories.length > 0) {
                        v.subCategories.forEach((v1, k1) => {
                            this.selectTransportationDepartmentArray.push(v1.subDepartmentId);
                            let index = this.transportationDepartmentArray.map(function (e) { return e.value; }).indexOf(v1.subDepartmentId);
                            this.transportationDepartmentArray[index].selected = true;
                        });
                    }
                }
            });
        }
    }
    editCrewGig() {
        console.log('Crew Gig Form:', this.crewGigForm);
        this.submitted = true;
        this.isDateEmpty = false;
        if (this.crewGigForm.invalid || !this.productionStartDate) {
            if (!this.productionStartDate) {
                this.isDateEmpty = true;
            }
            return;
        }
        let departmentArr = [];
        if (this.crewGigForm.value.adDepartment) {
            departmentArr.push({ id: 1, subDepartment: this.selectedAdDepartmentArray });
        }
        if (this.crewGigForm.value.productionDepartment) {
            departmentArr.push({ id: 2, subDepartment: this.selectedProductionDepartmentArray });
        }
        if (this.crewGigForm.value.cameraDepartment) {
            departmentArr.push({ id: 3, subDepartment: this.selectedCameraDepartmentArray });
        }
        if (this.crewGigForm.value.geDepartment) {
            departmentArr.push({ id: 4, subDepartment: this.selectedGeDepartmentArray });
        }
        if (this.crewGigForm.value.hmuDepartment) {
            departmentArr.push({ id: 5, subDepartment: this.selectedHmuDepartmentArray });
        }
        if (this.crewGigForm.value.wardrobeDepartment) {
            departmentArr.push({ id: 6, subDepartment: this.selectedWardrobDepartmentArray });
        }
        if (this.crewGigForm.value.soundDepartment) {
            departmentArr.push({ id: 7, subDepartment: this.selectedSoundDepartmentArray });
        }
        if (this.crewGigForm.value.artDepartment) {
            departmentArr.push({ id: 8, subDepartment: this.selectArtDepartmentArray });
        }
        if (this.crewGigForm.value.transportationDepartment) {
            departmentArr.push({ id: 9, subDepartment: this.selectTransportationDepartmentArray });
        }
        this.crewGigForm.get("position").setValue(departmentArr);
        this.gigsService.editCrewGig(this.crewGigForm.value, this.usersId)
            .subscribe(data => {
            this.isGigPosted = 1;
            this.utilityService.showToast('Crew gig successfully updated.');
            this.router.navigate(['/gigs/' + this.gigsTypeName + '/display', this.gigsId, this.gigsType]);
        }, error => {
            this.isGigPosted = 2;
            this.utilityService.showToast('Something went wrong please try again.');
        });
    }
    updateTalentGig() {
        console.log('Talent Gig Form:', this.talentGigForm);
        this.talentGigSubmitted = true;
        this.isDateEmpty = false;
        if (this.talentGigForm.invalid || !this.productionStartDate) {
            if (!this.productionStartDate) {
                this.isDateEmpty = true;
            }
            return;
        }
        this.gigsService.updateTalentGig(this.talentGigForm.value, this.usersId, this.roleArray)
            .subscribe(data => {
            this.isTalentGigPosted = 1;
            this.utilityService.showToast('Talent gig successfully updated.');
            this.router.navigate(['/gigs/' + this.gigsTypeName + '/display', this.gigsId, this.gigsType]);
        }, error => {
            this.utilityService.showToast('Something went wrong please try again.');
            this.isTalentGigPosted = 2;
        });
    }
    selectadDepartment() {
        //this.selectedAdDepartmentArray = [];
        this.adDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedAdDepartmentArray.push(item.value);
            }
        });
    }
    selectProductionDepartment() {
        //this.selectedProductionDepartmentArray = [];
        this.productionDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedProductionDepartmentArray.push(item.value);
            }
        });
    }
    selectCameraDepartment() {
        //this.selectedCameraDepartmentArray = [];
        this.cameraDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedCameraDepartmentArray.push(item.value);
            }
        });
    }
    selectGeDepartment() {
        //this.selectedGeDepartmentArray = [];
        this.geDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedGeDepartmentArray.push(item.value);
            }
        });
    }
    selectHmuDepartment() {
        //this.selectedHmuDepartmentArray = [];
        this.hmuDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedHmuDepartmentArray.push(item.value);
            }
        });
    }
    selectWardrobeDepartment() {
        //this.selectedWardrobDepartmentArray = [];
        this.wardrobeDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedWardrobDepartmentArray.push(item.value);
            }
        });
    }
    selectSoundDepartment() {
        //this.selectedSoundDepartmentArray = [];
        this.soundDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectedSoundDepartmentArray.push(item.value);
            }
        });
    }
    selectArtDepartment() {
        //this.selectArtDepartmentArray = [];
        this.artDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectArtDepartmentArray.push(item.value);
            }
        });
    }
    selectTransportationDepartment() {
        //this.selectTransportationDepartmentArray = [];
        this.transportationDepartmentArray.forEach((item, index) => {
            if (item.selected) {
                this.selectTransportationDepartmentArray.push(item.value);
            }
        });
    }
    toggleAdDepartment(event) {
        this.adDepartmentSub = false;
        if (event.target.checked) {
            this.adDepartmentSub = true;
        }
    }
    toggleProductionDepartment(event) {
        this.productionDepartmentSub = false;
        if (event.target.checked) {
            this.productionDepartmentSub = true;
        }
    }
    toggleCameraDepartment(event) {
        this.cameraDepartmentSub = false;
        if (event.target.checked) {
            this.cameraDepartmentSub = true;
        }
    }
    toggleGeDepartment(event) {
        this.geDepartmentSub = false;
        if (event.target.checked) {
            this.geDepartmentSub = true;
        }
    }
    toggleHmuDepartment(event) {
        this.hmuDepartmentSub = false;
        if (event.target.checked) {
            this.hmuDepartmentSub = true;
        }
    }
    toggleWardrobeDepartment(event) {
        this.wardrobeDepartmentSub = false;
        if (event.target.checked) {
            this.wardrobeDepartmentSub = true;
        }
    }
    toggleSoundDepartment(event) {
        this.soundDepartmentSub = false;
        if (event.target.checked) {
            this.soundDepartmentSub = true;
        }
    }
    toggleArtDepartment(event) {
        this.artDepartmentSub = false;
        if (event.target.checked) {
            this.artDepartmentSub = true;
        }
    }
    toggleTransportationDepartment(event) {
        this.transportationDepartmentSub = false;
        if (event.target.checked) {
            this.transportationDepartmentSub = true;
        }
    }
    choosedDate(date) {
        this.productionStartDate = '';
        this.productionEndDate = '';
        this.isDateEmpty = true;
        if (date.startDate) {
            this.productionStartDate = date.startDate.format('DD/MM/YYYY');
            this.productionEndDate = date.endDate.format('DD/MM/YYYY');
            this.isDateEmpty = false;
            this.talentGigForm.get("startDate").setValue(this.productionStartDate);
            this.talentGigForm.get("endDate").setValue(this.productionEndDate);
        }
    }
    choosedDateForCrew(date) {
        this.productionStartDate = '';
        this.productionEndDate = '';
        this.isDateEmpty = true;
        if (date.startDate) {
            this.productionStartDate = date.startDate.format('DD/MM/YYYY');
            this.productionEndDate = date.endDate.format('DD/MM/YYYY');
            this.isDateEmpty = false;
            this.crewGigForm.get("startDate").setValue(this.productionStartDate);
            this.crewGigForm.get("endDate").setValue(this.productionEndDate);
        }
    }
    handleLocationChange(address) {
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
        this.talentGigForm.get("country").setValue(this.countryName);
        this.talentGigForm.get("state").setValue(this.stateName);
        this.talentGigForm.get("city").setValue(this.cityName);
        this.talentGigForm.get("lat").setValue(this.latitude);
        this.talentGigForm.get("lng").setValue(this.longitude);
        this.talentGigForm.get("street").setValue(this.street);
        this.talentGigForm.get("zipCode").setValue(this.zip);
        this.talentGigForm.get("locationName").setValue(this.fullAddress);
        this.talentGigForm.get("locationOfShoot").setValue(this.fullAddress);
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
        this.crewGigForm.get("country").setValue(this.countryName);
        this.crewGigForm.get("state").setValue(this.stateName);
        this.crewGigForm.get("city").setValue(this.cityName);
        this.crewGigForm.get("lat").setValue(this.latitude);
        this.crewGigForm.get("lng").setValue(this.longitude);
        this.crewGigForm.get("street").setValue(this.street);
        this.crewGigForm.get("zipCode").setValue(this.zip);
        this.crewGigForm.get("locationName").setValue(this.locationName);
        this.crewGigForm.get("fullAddress").setValue(this.fullAddress);
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
};
EditComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _gigs_service__WEBPACK_IMPORTED_MODULE_5__["GigsService"] },
    { type: src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_6__["SignUpService"] },
    { type: src_app_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_7__["SignInService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.scss */ "./src/app/gigs/edit/edit.component.scss")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/gigs/gigs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/gigs/gigs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: GigsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsPageRoutingModule", function() { return GigsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/gigs/list/list.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/gigs/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/gigs/edit/edit.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/display.component */ "./src/app/gigs/display/display.component.ts");
/* harmony import */ var _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addarole/addarole.component */ "./src/app/gigs/addarole/addarole.component.ts");








const routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    },
    {
        path: 'create',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]
    },
    {
        path: 'edit/:id/:typeId',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
    {
        path: 'display/:id/:typeId',
        component: _display_display_component__WEBPACK_IMPORTED_MODULE_6__["DisplayComponent"]
    },
    {
        path: 'add-role',
        component: _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_7__["AddaroleComponent"]
    }
];
let GigsPageRoutingModule = class GigsPageRoutingModule {
};
GigsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GigsPageRoutingModule);



/***/ }),

/***/ "./src/app/gigs/gigs.module.ts":
/*!*************************************!*\
  !*** ./src/app/gigs/gigs.module.ts ***!
  \*************************************/
/*! exports provided: GigsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsPageModule", function() { return GigsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _gigs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gigs-routing.module */ "./src/app/gigs/gigs-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/gigs/list/list.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/create.component */ "./src/app/gigs/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/gigs/edit/edit.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display/display.component */ "./src/app/gigs/display/display.component.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search/search.module */ "./src/app/search/search.module.ts");
/* harmony import */ var _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addarole/addarole.component */ "./src/app/gigs/addarole/addarole.component.ts");













let GigsPageModule = class GigsPageModule {
};
GigsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _search_search_module__WEBPACK_IMPORTED_MODULE_11__["SearchPageModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _gigs_routing_module__WEBPACK_IMPORTED_MODULE_5__["GigsPageRoutingModule"]
        ],
        declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_10__["DisplayComponent"], _addarole_addarole_component__WEBPACK_IMPORTED_MODULE_12__["AddaroleComponent"]]
    })
], GigsPageModule);



/***/ }),

/***/ "./src/app/gigs/gigs.service.ts":
/*!**************************************!*\
  !*** ./src/app/gigs/gigs.service.ts ***!
  \**************************************/
/*! exports provided: GigsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsService", function() { return GigsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/utility/utility.service.ts");






let GigsService = class GigsService {
    constructor(utility, router, http) {
        this.utility = utility;
        this.router = router;
        this.http = http;
    }
    getAllGigs() {
        const data = {
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/getAllGigs', data);
    }
    getGigInfo(gigsId, gigType, usersId) {
        const data = {
            gigId: gigsId,
            gigType: gigType,
            usersId: usersId,
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/getGigInfo', data);
    }
    searchUsers(user, usersId) {
        let data = user;
        data['usersId'] = usersId;
        data['api_key'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE;
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'search/searchGigs', data);
    }
    fetchData(gigType, usersId) {
        const data = {
            radius: '101',
            gigType: gigType,
            users: [usersId],
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'search/searchGigs', data);
    }
    applyGig(formVal, usersId, gigsId, gigsType) {
        let data = formVal;
        data['usersId'] = usersId;
        data['gigsId'] = gigsId;
        data['gigType'] = gigsType;
        data['api_key'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE;
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'user/applyForGig', data);
    }
    gigApplicationAcceptDecline(usersId, gigsId, gigAction) {
        const data = {
            gigId: gigsId,
            action: gigAction,
            users: [usersId],
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'user/gigApplicationAcceptDecline', data);
    }
    addFavorite(gigId, gigType, usersId) {
        const data = {
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
            moduleId: 2,
            relatedId: gigId,
            relatedTypeId: gigType,
            usersId: usersId,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'favourite/addToFavourite', data);
    }
    removeFavorite(gigId, gigType, usersId) {
        const data = {
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
            moduleId: 2,
            relatedId: gigId,
            relatedTypeId: gigType,
            usersId: usersId,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'favourite/removeFromFavourite', data);
    }
    getRatingValByUser(usersId, gigsId) {
        const data = {
            usersId: usersId,
            relatedId: gigsId,
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'rating/getRatingValByUser', data);
    }
    addRating(usersId, ratingBy, ratingVal, gigsId) {
        const data = {
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
            usersId: usersId,
            ratingBy: ratingBy,
            ratingVal: ratingVal,
            relatedId: gigsId,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'rating/addRating', data);
    }
    updateRatingText(ratingId, ratingText, ratingVal) {
        const data = {
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
            ratingId: ratingId,
            ratingText: ratingText,
            ratingVal: ratingVal,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'rating/updateRatingText', data);
    }
    addRatingAndReview(usersId, ratingBy, ratingText, ratingReasonText, ratingVal, gigsId) {
        const data = {
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
            usersId: usersId,
            ratingBy: ratingBy,
            ratingText: ratingText,
            ratingReasonText: ratingReasonText,
            ratingVal: ratingVal,
            relatedId: gigsId,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'rating/addRatingAndReview', data);
    }
    //Post Gig Services
    postGig(gigData, usersId) {
        let data = gigData;
        data['usersId'] = usersId;
        data['api_key'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE;
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/postGig', data);
    }
    editCrewGig(gigData, usersId) {
        let data = gigData;
        data['usersId'] = usersId;
        data['api_key'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE;
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/updateGig', data);
    }
    talentPostGig(gigData, usersId, roles) {
        let data = gigData;
        data['usersId'] = usersId;
        data['roles'] = roles;
        data['api_key'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE;
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/postGig', data);
    }
    updateTalentGig(gigData, usersId, roles) {
        let data = gigData;
        data['usersId'] = usersId;
        data['roles'] = roles;
        data['api_key'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE;
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/updateGig', data);
    }
    addRole(roleData) {
        let data = roleData;
        data['api_key'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE;
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/addRole', data);
    }
    updateRole(roleData, gigRoleId) {
        let data = roleData;
        data['gigRoleId'] = gigRoleId;
        data['api_key'] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE;
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/updateRole', data);
    }
    getRole(roleId) {
        const data = {
            roleId: roleId,
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/addRole', data);
    }
    deleteRole(gigRoleId) {
        const data = {
            gigRoleId: gigRoleId,
            api_key: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY_VALUE,
        };
        return this.utility.requestHttp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + 'gig/deleteGigRole', data);
    }
};
GigsService.ctorParameters = () => [
    { type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
GigsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GigsService);



/***/ }),

/***/ "./src/app/gigs/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/gigs/list/list.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:link, a:visited {\n  color: #919294;\n  text-decoration: none;\n}\n\na:link:active, a:visited:active {\n  color: black;\n}\n\n.actor {\n  border-bottom: 2px solid #C1270B;\n  text-align: center;\n  margin-bottom: -3px;\n  margin-top: auto;\n}\n\n.fixed-heading {\n  --background: #DDDDDD !important;\n  width: 100%;\n  position: fixed;\n  z-index: 2000;\n  padding-top: 11px;\n  padding-bottom: 11px;\n  margin-top: -12px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n#filterBtn {\n  height: 20px;\n  font-size: 10px;\n  text-transform: none;\n  --border-radius: 0px !important;\n  --background: #C1270B !important;\n  width: 100%;\n}\n\n.box-heading {\n  margin-top: 0px;\n  margin-bottom: 0rem;\n}\n\n.box {\n  overflow-y: scroll;\n  margin-top: 50px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.box-title {\n  margin-top: 0;\n  margin-bottom: 0rem;\n  font-weight: bold;\n}\n\n.item-native {\n  padding-left: 10px !important;\n  padding-bottom: 3px !important;\n}\n\n.box-content {\n  padding-bottom: 0px;\n  padding-left: 0px;\n}\n\n.selectedGig {\n  margin: auto;\n  text-align: center;\n}\n\n.highlightGig {\n  border-bottom: 3px solid #C1270B;\n  margin-bottom: -3px;\n  margin-top: 5px;\n}\n\n.my-pagination.ngx-pagination a li {\n  color: red !important;\n}\n\n.ngx-pagination {\n  margin-bottom: 1rem !important;\n  margin-top: 1rem !important;\n}\n\n.paginationDiv {\n  margin-bottom: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lncy9saXN0L0Y6XFxBdmlydXBJb25pY0FwcFxcR2l0R21vc1Zpc2hhbFxcZ2V0bWVvbnNldEFwcC9zcmNcXGFwcFxcZ2lnc1xcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2lncy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURDRTtFQUNFLGdDQUFBO0VBQ0Qsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRUg7O0FEQUU7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENFO0VBRUUsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURNRTtFQUNFLGdCQUFBO0FDSEo7O0FETUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1FO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtBQ0hKOztBREtFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDRko7O0FETUU7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRFdDO0VBQ0sscUJBQUE7QUNSTjs7QURVRTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7QUNQSjs7QURTRTtFQUNFLG1CQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9naWdzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImE6bGluaywgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAjOTE5Mjk0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBhOmxpbms6YWN0aXZlLCBhOnZpc2l0ZWQ6YWN0aXZlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmFjdG9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzEyNzBCO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgfVxyXG4gIC5maXhlZC1oZWFkaW5ne1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjREREREREICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gICNmaWx0ZXJCdG57XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNDMTI3MEIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgfVxyXG4gIC5ib3gtaGVhZGluZ3tcclxuICAgXHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gIH1cclxuICAuYm94e1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICAgXHJcbiAgfVxyXG4gICBcclxuIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTsgXHJcbiAgfVxyXG4gXHJcbiAgLmJveC10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIFxyXG4gIH1cclxuICAuaXRlbS1uYXRpdmV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJveC1jb250ZW50e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkR2lne1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuaGlnaGxpZ2h0R2lne1xyXG4gICAgYm9yZGVyLWJvdHRvbTogIDNweCBzb2xpZCAjQzEyNzBCO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC8vIC5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIC8vICAgYmFja2dyb3VuZDogcmVkO1xyXG4gIC8vIH1cclxuICBcclxuXHJcbiAubXktcGFnaW5hdGlvbi5uZ3gtcGFnaW5hdGlvbiBhIGxpe1xyXG4gICAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uZ3gtcGFnaW5hdGlvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBhZ2luYXRpb25EaXZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MnB4O1xyXG4gIH0iLCJhOmxpbmssIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjOTE5Mjk0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6bGluazphY3RpdmUsIGE6dmlzaXRlZDphY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hY3RvciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzEyNzBCO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5maXhlZC1oZWFkaW5nIHtcbiAgLS1iYWNrZ3JvdW5kOiAjREREREREICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwMDA7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbiNmaWx0ZXJCdG4ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI0MxMjcwQiAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJveC1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuXG4uYm94IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4uYm94LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3gtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uc2VsZWN0ZWRHaWcge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhpZ2hsaWdodEdpZyB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQzEyNzBCO1xuICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5teS1wYWdpbmF0aW9uLm5neC1wYWdpbmF0aW9uIGEgbGkge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5uZ3gtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGFnaW5hdGlvbkRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDQycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/gigs/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/gigs/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_search_search_gig_search_gig_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/search/search-gig/search-gig.component */ "./src/app/search/search-gig/search-gig.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utility/utility.service */ "./src/app/utility/utility.service.ts");
/* harmony import */ var _gigs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gigs.service */ "./src/app/gigs/gigs.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let ListComponent = class ListComponent {
    constructor(formBuilder, menuCtrl, storage, utiliy, gigsService, modalController, route, router) {
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.utiliy = utiliy;
        this.gigsService = gigsService;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.type = 'Crew';
        this.gigsDetails = [];
        this.gigUnion = 2;
        this.gigPayment = 2;
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
        this.noGigFound = 0;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
    ngOnInit() {
        this.isHighlited = 'Talent';
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('type')) {
                this.type = paramMap.get('type');
                this.isHighlited = this.type;
            }
        });
        this.isLoggedIn = localStorage.getItem("isLoggedin");
        this.storage.get('userData').then(data => {
            if (data) {
                this.usersId = data.usersId;
            }
            this.fetchData('', this.type);
        });
        this.searchForm = this.formBuilder.group({
            gigType: this.gigType,
            gigUnion: ['2'],
            gigPayment: ['2'],
            radius: ['101'],
            race: [''],
            physicalCharacteristics: [''],
            cityState: '',
            fullName: '',
            positionsAvailable: [],
        });
    }
    getGigType() {
        if (this.type == 'Talent') {
            this.gigType = 2;
        }
        else if (this.type == 'Crew') {
            this.gigType = 1;
        }
        else {
            this.gigType = 0;
        }
        return this.gigType;
    }
    fetchData(catagory, type) {
        switch (catagory) {
            case 'All':
                this.gigsService.getAllGigs().subscribe(response => {
                    let gigsResponse = response.data;
                    this.gigsDetails = gigsResponse.gigs;
                    this.noGigFound = 0;
                    if (this.gigsDetails.length == 0) {
                        this.noGigFound = 1;
                    }
                }, error => {
                    this.noGigFound = 1;
                });
                break;
            default:
                this.gigsService.fetchData(this.getGigType(), this.usersId)
                    .subscribe(response => {
                    this.gigsDetails = response.data.gigs;
                    this.totalRowCount = response.data.totalRow;
                    this.noGigFound = 0;
                    if (this.gigsDetails.length == 0) {
                        this.noGigFound = 1;
                    }
                    this.config = {
                        itemsPerPage: this.limit,
                        currentPage: 1,
                        totalItems: this.totalRowCount
                    };
                }, error => {
                    this.noGigFound = 1;
                });
                break;
        }
    }
    pageChange(newPage) {
        this.config.currentPage = newPage;
        this.start = (newPage - 1) * this.limit;
        this.onSearch(this.searchForm.value);
    }
    search() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_search_search_gig_search_gig_component__WEBPACK_IMPORTED_MODULE_3__["SearchGigComponent"],
                componentProps: {
                    gigType: this.gigType,
                    gigUnion: this.gigUnion,
                    gigPayment: this.gigPayment,
                }
            });
            modal.onDidDismiss()
                .then((filterFormData) => {
                if (filterFormData.data) {
                    // this.onSearch(filterFormData.data);
                    if (filterFormData.data.gigType == 1) {
                        this.isHighlited = 'Crew';
                        this.onSearch(filterFormData.data);
                    }
                    if (filterFormData.data.gigType == 2) {
                        this.isHighlited = 'Talent';
                        this.onSearch(filterFormData.data);
                    }
                }
            });
            return yield modal.present();
        });
    }
    onSearch(filterFormData) {
        this.gigsService.searchUsers(filterFormData, this.usersId).subscribe(response => {
            let gigsResponse = response.data;
            this.gigsDetails = gigsResponse.gigs;
            this.noGigFound = 0;
            if (this.gigsDetails.length == 0) {
                this.noGigFound = 1;
            }
            this.config.totalItems = response.data.gigs.length;
        }, error => {
            this.noGigFound = 1;
        });
    }
    highlight(item) {
        this.isHighlited = item;
        if (item == 'Crew') {
            this.type = 'Crew';
            this.fetchData('');
        }
        else {
            this.type = 'Talent';
            this.fetchData('');
        }
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _gigs_service__WEBPACK_IMPORTED_MODULE_6__["GigsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gigs/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/gigs/list/list.component.scss")).default]
    })
], ListComponent);



/***/ })

}]);
//# sourceMappingURL=gigs-gigs-module-es2015.js.map