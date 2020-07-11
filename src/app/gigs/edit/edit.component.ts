import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/utility/utility.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GigsService } from '../gigs.service';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { Platform, ModalController, AlertController } from '@ionic/angular';
import { PHYSICAL_CHARACTERISTICS_ARRAY } from 'src/app/utility/constants.service';
import { AddaroleComponent } from '../addarole/addarole.component';
import { environment } from 'src/environments/environment';
declare var google;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  gigsId: string;
  gigsType: any;
  gigsTypeName: string;
  crewGigForm: FormGroup;
  submitted = false;
  talentGigForm: FormGroup;
  physicalCharacteristicsArray = PHYSICAL_CHARACTERISTICS_ARRAY;
  adDepartmentArray = [
    { value: '1', label: '1st AD', selected: false },
    { value: '2', label: '2nd AD', selected: false },
    { value: '3', label: '2nd 2nd AD', selected: false },
  ];

  timezonesArray = [
    { value: 'Atlantic Standard Time' },
    { value: 'Eastern Standard Time' },
    { value: 'Central Standard Time' },
    { value: 'Mountain Standard Time' },
    { value: 'Pacific Standard Time' },
    { value: 'Alaskan Standard Time' },
    { value: 'Hawaii-Aleutian Standard Time' },
  ];

  productionDepartmentArray = [
    { value: '1', label: 'UPM', selected: false },
    { value: '2', label: 'Line Producer', selected: false },
    { value: '3', label: 'Producer', selected: false },
    { value: '4', label: 'Associate Producer', selected: false },
    { value: '5', label: 'Production Assistants', selected: false },
  ];

  cameraDepartmentArray = [
    { value: '1', label: 'DP/Cinematographer', selected: false },
    { value: '2', label: '1st AC', selected: false },
    { value: '3', label: '2nd Ac', selected: false },
    { value: '4', label: 'Camera PA', selected: false },
  ];

  geDepartmentArray = [
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

  hmuDepartmentArray = [
    { value: '1', label: 'Head Make Up Artist', selected: false },
    { value: '2', label: 'Assistant Make Up Artist', selected: false },
    { value: '3', label: 'Head Hair Stylist', selected: false },
    { value: '4', label: 'Assistant Hair Stylist', selected: false },
  ];

  wardrobeDepartmentArray = [
    { value: '1', label: 'Head Wardrobe', selected: false },
    { value: '2', label: 'Assistant Wardobe', selected: false },
  ];

  soundDepartmentArray = [
    { value: '1', label: 'Production Sound Mixer', selected: false },
    { value: '2', label: 'Boom Operator', selected: false },
    { value: '3', label: 'Sound Utility', selected: false },
    { value: '4', label: 'Post Sound Mixer', selected: false },
    { value: '5', label: 'Foley Artist', selected: false },
    { value: '6', label: 'ADR Mixer', selected: false },
  ];

  artDepartmentArray = [
    { value: '1', label: 'Production Designer', selected: false },
    { value: '2', label: 'Set Dresser', selected: false },
    { value: '3', label: 'Art PA', selected: false },
    { value: '4', label: 'Props', selected: false },
  ];

  transportationDepartmentArray = [
    { value: '1', label: 'Transpo Coordinator', selected: false },
    { value: '2', label: 'Transpo Captain', selected: false },
    { value: '3', label: 'Drivers', selected: false },
  ];

  daterangepickerOptions = {
    startDate: '09/01/2019',
    endDate: '09/02/2019',
    format: 'DD/MM/YYYY'
  }
  userIsAuthenticated: boolean;
  userDetails: { isLoggedin: string; sudoLoggedin: string; currentUser: string; email: string; usersId: string; id: string; fullName: string; adminusersId: string; profileComplitted: string; };
  usersId: string;
  isLoggedIn: string;
  gigsProfileInfo: any;
  castingRoles: any;
  productionStartDate: any;
  selected: { startDate: any; endDate: any; };
  roleDetailsArray = [];
  roleArray = [];
  selectedAdDepartmentArray = [];
  adDepartmentSub: boolean;
  selectedProductionDepartmentArray = [];
  cameraDepartmentSub: boolean;
  selectedCameraDepartmentArray = [];
  productionDepartmentSub: boolean;
  geDepartmentSub: boolean;
  selectedGeDepartmentArray = [];
  hmuDepartmentSub: boolean;
  selectedHmuDepartmentArray = [];
  wardrobeDepartmentSub: boolean;
  selectedWardrobDepartmentArray = [];
  soundDepartmentSub: boolean;
  selectedSoundDepartmentArray = [];
  artDepartmentSub: boolean;
  selectArtDepartmentArray = [];
  transportationDepartmentSub: boolean;
  selectTransportationDepartmentArray = [];
  isDateEmpty: boolean;
  productionEndDate: string;
  fullAddress: any;
  countryName: string;
  stateName: string;
  cityName: string;
  latitude: any;
  longitude: any;
  street: string;
  zip: string;
  locationName: string;
  isGigPosted: number;
  talentGigSubmitted: boolean;
  isTalentGigPosted: number;
  deleteConfirmRoleIndex: any;
  rolesDetails: any;
  isRoalDelete: number;
  updateConfirmRoleIndex: any;
  productionStartDatePlaceHolder = new Date();
  autocomplete = { input: '' };
  autocompleteItems = [];
  GoogleAutocomplete: any;
  ifIonChangeOccur: boolean;
  constructor(
    public zone: NgZone,
    private alert: AlertController,
    private modal: ModalController,
    private router: Router,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private gigsService: GigsService,
    private signupService: SignUpService,
    private signinService: SignInService,
    private route: ActivatedRoute,
    private platform: Platform
  ) { }

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
        })
    })
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
      gigId: ['', [Validators.required]],
      gigType: ['1'],
      title: ['', [Validators.required]],
      type: ['2'],
      shortLength: ['2'],
      unionType: ['1'],
      paidType: ['1'],
      // productionDates: ['', [Validators.required]],
      startDate: [],
      endDate: [],
      workingDays: ['6'],
      productionDatesNumber: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      fullAddress: ['', [Validators.required]],
      lodgingProvided: ['0'],
      perDimProvided: ['0'],
      howMuch: ['', [Validators.required]],
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
      gigId: ['', [Validators.required]],
      gigType: ['2'],
      title: ['', [Validators.required]],
      perDimProvided: ['0'],
      unionType: ['0'],
      travelProvided: ['0'],
      locationOfShoot: ['', [Validators.required]],
      lodgingProvided: ['0'],
      fullAddress: [],
      // productionDates: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
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
      this.ifIonChangeOccur = true
      return
    }
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
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
    this.utilityService.requestHttpGet('https://maps.googleapis.com/maps/api/geocode/json?address=' + item.description + '&key=' + environment.GOOGLE_API_KEY, 1).subscribe(res => {
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
    })
  }

  get f() { return this.crewGigForm.controls; }
  get t() { return this.talentGigForm.controls; }
  async addRole(val?, i?) {
    if (val) {
      this.updateConfirmRoleIndex = i;
      const modalUpdate = await this.modal.create({
        component: AddaroleComponent,
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
      })
      return await modalUpdate.present();
    }
    else {
      const modalAdd = await this.modal.create({
        component: AddaroleComponent,
        cssClass: 'modalCss',
      });
      modalAdd.onDidDismiss().then(res => {
        if (res.data) {
          let response = res;
          this.roleArray.push(response.data.rolesDetails);
          this.roleDetailsArray.push(response.data.addRoleFormValue)
        }
      })
      return await modalAdd.present();
    }
  }

  async deleteRole(i, role) {
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
              .subscribe(
                data => {
                  this.rolesDetails = data;
                  this.rolesDetails = this.rolesDetails.data;
                  this.isRoalDelete = 1;
                  this.utilityService.showToast('Role deleted successfully.');
                  this.roleDetailsArray.splice(this.deleteConfirmRoleIndex, 1);
                  this.roleArray.splice(this.deleteConfirmRoleIndex, 1);
                  // setTimeout(()=>{
                  //   this.isRoalDelete = 0 ;
                  //  },2000)
                },
                error => {
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
    await (await alert).present();
  }


  setTalentGigValues(val) {
    console.log('Talent Gig Form',this.talentGigForm)
    this.talentGigForm.get("gigId").setValue(val.gigId);
    this.talentGigForm.get("title").setValue(val.title);
    if (val.union == 'Union') {
      this.talentGigForm.get("unionType").setValue('1');
    } else {
      this.talentGigForm.get("unionType").setValue('0');
    }
    this.talentGigForm.get("startDate").setValue(val.startDate);
    this.talentGigForm.get("endDate").setValue(val.endDate);
    this.selected = {
      startDate: val.startDate,
      endDate: val.endDate,
    }
    this.talentGigForm.get("country").setValue(val.location.countryShortName);
    this.talentGigForm.get("state").setValue(val.location.stateName);
    this.talentGigForm.get("city").setValue(val.location.cityName);
    this.talentGigForm.get("lat").setValue(val.location.latitude);
    this.talentGigForm.get("lng").setValue(val.location.longitude);
    this.talentGigForm.get("street").setValue(val.location.street);
    this.talentGigForm.get("zipCode").setValue(val.location.zip);
    this.talentGigForm.get("locationName").setValue(val.location.formattedAddressCustom);
    this.talentGigForm.get("locationOfShoot").setValue(val.location.formattedAddressCustom);
    this.fullAddress = val.location.formattedAddressCustom
    this.talentGigForm.get("dateText").setValue(val.dateText);
    this.productionStartDate = val.startDate;
    this.talentGigForm.get("productionDates").setValue(val.startDate);
    if (val.perDimeProvided == 'No') {
      this.talentGigForm.get("perDimProvided").setValue('0');
    } else {
      this.talentGigForm.get("perDimProvided").setValue('1');
    }
    if (val.lodgingProvide == 'No') {
      this.talentGigForm.get("lodgingProvided").setValue('0');
    } else {
      this.talentGigForm.get("lodgingProvided").setValue('1');
    }
    if (val.travelProvided == 'No') {
      this.talentGigForm.get("travelProvided").setValue('0');
    } else {
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
        }
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
    } else {
      this.crewGigForm.get("type").setValue('2');
    }
    if (val.length == 'Short') {
      this.crewGigForm.get("shortLength").setValue('1');
    } else {
      this.crewGigForm.get("shortLength").setValue('2');
    }
    if (val.union == 'Union') {
      this.crewGigForm.get("unionType").setValue('1');
    } else {
      this.crewGigForm.get("unionType").setValue('0');
    }
    if (val.payment == 'Unpaid') {
      this.crewGigForm.get("paidType").setValue('1');
    } else {
      this.crewGigForm.get("paidType").setValue('0');
    }
    if (val.payment == 'Unpaid') {
      this.crewGigForm.get("paidType").setValue('1');
    } else {
      this.crewGigForm.get("paidType").setValue('0');
    }
    this.crewGigForm.get("startDate").setValue(val.startDate);
    this.crewGigForm.get("endDate").setValue(val.endDate);
    this.selected = {
      startDate: val.startDate,
      endDate: val.endDate,
    }
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
    } else {
      this.crewGigForm.get("workingDays").setValue('6');
    }
    this.crewGigForm.get("productionDatesNumber").setValue(val.totalNumberProductionDays);
    if (val.perDimeProvided == 'No') {
      this.crewGigForm.get("perDimProvided").setValue('0');
    } else {
      this.crewGigForm.get("perDimProvided").setValue('1');
    }
    if (val.lodgingProvide == 'No') {
      this.crewGigForm.get("lodgingProvided").setValue('0');
    } else {
      this.crewGigForm.get("lodgingProvided").setValue('1');
    }
    this.crewGigForm.get("howMuch").setValue(val.howMuch);
    if (val.travelProvided == 'No') {
      this.crewGigForm.get("travelProvided").setValue('0');
    } else {
      this.crewGigForm.get("travelProvided").setValue('1');
    }
    if (val.rentalKitAvailable == 'No') {
      this.crewGigForm.get("kitRentalProvided").setValue('0');
    } else {
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
            })
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
              })
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
            })
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
            })
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
            })
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
            })
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
            })
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
            })
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
            })
          }
        }
      })
    }
  }

  editCrewGig() {
    console.log('Crew Gig Form:',this.crewGigForm);
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
      .subscribe(
        data => {
          this.isGigPosted = 1;
          this.utilityService.showToast('Crew gig successfully updated.');
          this.router.navigate(['/gigs/' + this.gigsTypeName + '/display', this.gigsId, this.gigsType])
        }, error => {
          this.isGigPosted = 2;
          this.utilityService.showToast('Something went wrong please try again.');
        });
  }

  updateTalentGig() {
    console.log('Talent Gig Form:',this.talentGigForm);
    this.talentGigSubmitted = true;
    this.isDateEmpty = false;
    if (this.talentGigForm.invalid || !this.productionStartDate) {
      if (!this.productionStartDate) {
        this.isDateEmpty = true;
      }
      return;
    }

    this.gigsService.updateTalentGig(this.talentGigForm.value, this.usersId, this.roleArray)
      .subscribe(
        data => {
          this.isTalentGigPosted = 1;
          this.utilityService.showToast('Talent gig successfully updated.');
          this.router.navigate(['/gigs/' + this.gigsTypeName + '/display', this.gigsId, this.gigsType])
        },
        error => {
          this.utilityService.showToast('Something went wrong please try again.');
          this.isTalentGigPosted = 2;
        });
  }

  isInvalidDate = (m) => {
    // if(m.valueOf() >= moment().toDate().valueOf())
    // { 
    //   return false;
    // }
    return true;
  }

  selectadDepartment() {
    //this.selectedAdDepartmentArray = [];
    this.adDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedAdDepartmentArray.push(item.value)
      }
    })
  }

  selectProductionDepartment() {
    //this.selectedProductionDepartmentArray = [];
    this.productionDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedProductionDepartmentArray.push(item.value)
      }
    })
  }

  selectCameraDepartment() {
    //this.selectedCameraDepartmentArray = [];
    this.cameraDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedCameraDepartmentArray.push(item.value)
      }
    })
  }

  selectGeDepartment() {
    //this.selectedGeDepartmentArray = [];
    this.geDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedGeDepartmentArray.push(item.value)
      }
    })
  }

  selectHmuDepartment() {
    //this.selectedHmuDepartmentArray = [];
    this.hmuDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedHmuDepartmentArray.push(item.value)
      }
    })
  }

  selectWardrobeDepartment() {
    //this.selectedWardrobDepartmentArray = [];
    this.wardrobeDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedWardrobDepartmentArray.push(item.value)
      }
    })
  }

  selectSoundDepartment() {
    //this.selectedSoundDepartmentArray = [];
    this.soundDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedSoundDepartmentArray.push(item.value)
      }
    })
  }

  selectArtDepartment() {
    //this.selectArtDepartmentArray = [];
    this.artDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectArtDepartmentArray.push(item.value)
      }
    })
  }

  selectTransportationDepartment() {
    //this.selectTransportationDepartmentArray = [];
    this.transportationDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectTransportationDepartmentArray.push(item.value)
      }
    })
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

  public handleLocationChange(address) {
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

  public handleAddressChange(address) {
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

  public extract(receivedAddresses) {
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
        }
      }
      if (component.types.indexOf("postal_code") > -1) {
        // set code postal
        address.detail['zip'] = component.long_name;
      }
    });
    return address;
  }

}
