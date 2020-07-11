import { Component, OnInit, DoCheck, ViewChild, NgZone } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { Router } from '@angular/router';
import { CalendarModalComponent } from 'src/app/utility/calendar-modal/calendar-modal.component';
import { RACE_ARRAY, PHYSICAL_CHARACTERISTICS_ARRAY } from '../../app.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { SignUpService } from 'src/app/sign-up/sign-up.service';
import { GigsService } from '../gigs.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { AddaroleComponent } from '../addarole/addarole.component';
import { environment } from 'src/environments/environment';
declare var google;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @ViewChild('searchbar',{static: false}) searchbar: IonSearchbar;
  talentGigForm: FormGroup;
  crewGigForm: FormGroup;
  productionDatePlaceHolder = "16/06/2020 - 18/06/2020";
  productionStartDatePlaceHolder =new Date()
  productionDates: any;
  autocomplete = { input: '' };
  autocompleteItems = [];
  fullAddressVale:any
  adDepartmentSub = false;
  productionDepartmentSub = false;
  cameraDepartmentSub = false;
  geDepartmentSub = false;
  hmuDepartmentSub = false;
  wardrobeDepartmentSub = false;
  soundDepartmentSub = false;
  artDepartmentSub = false;
  transportationDepartmentSub = false;
  selectedAdDepartmentArray = [];
  selectedProductionDepartmentArray = [];
  selectedCameraDepartmentArray = [];
  selectedGeDepartmentArray = [];
  selectedHmuDepartmentArray = [];
  selectedWardrobDepartmentArray = [];
  selectedSoundDepartmentArray = [];
  selectArtDepartmentArray = [];
  selectTransportationDepartmentArray = [];
  countryName: string;
  stateName: string;
  cityName: string;
  latitude: string;
  longitude: string;
  street: string;
  zip: string;
  locationName: string;
  isDateEmpty = false;
  productionStartDate: string;
  productionEndDate: string;
  fullAddress: any;
  rolesDetails: any = [];
  isLoggedIn: any;
  userIsAuthenticated = false;
  usersId: any;
  userDetails: any;
  isGigPosted = 0;
  isTalentGigPosted = 0;
  isRoalPosted = 0;
  isRoalUpdate = 0;
  isRoalDelete = 0;
  gigRoleId: any;
  show: boolean = false;
  popUpName: string;
  roleArray: any[] = [];
  roleDetailsArray: any[] = [];
  deleteConfirmRoleIndex: any;
  previousDate: any;
  raceArray = RACE_ARRAY;
  physicalCharacteristicsArray = PHYSICAL_CHARACTERISTICS_ARRAY;
  adDepartmentArray = [
    { value: '1', label: '1st AD', selected: false },
    { value: '2', label: '2nd AD', selected: false },
    { value: '3', label: '2nd 2nd AD', selected: false },
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
  submitted: boolean;
  talentGigSubmitted: boolean;
  activeGigType = false;
  GoogleAutocomplete: any;


  constructor(
    public zone: NgZone,
    private utilityService: UtilityService,
    private gigsService: GigsService,
    private signupService: SignUpService,
    private signinService: SignInService,
    private formBuilder: FormBuilder,
    private router: Router,
    private modal: ModalController) { }
  ngOnInit() {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete.input ='';
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
      title: ['', [Validators.required]],
      type: ['2'],
      shortLength: ['2'],
      unionType: ['1'],
      paidType: ['1'],
      // productionDates: ['', [Validators.required]],
      startDate: ['',Validators.required],
      endDate: ['',Validators.required],
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
      gigType: ['2'],
      title: ['', [Validators.required]],
      perDimProvided: ['0'],
      unionType: ['0'],
      travelProvided: ['0'],
      locationOfShoot: ['', [Validators.required]],
      lodgingProvided: ['0'],
      fullAddress: [],
      // productionDates: ['', [Validators.required]],
      startDate: ['',Validators.required],
      endDate: ['',Validators.required],
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
  UpdateSearchResults(){
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
    this.autocompleteItems =[];
    this.fullAddress= item.description;
    this.autocomplete.input = '';
    this.fullAddressVale ='';
    this.talentGigForm.value.fullAddress = this.fullAddress;
    this.utilityService.requestHttpGet('https://maps.googleapis.com/maps/api/geocode/json?address='+item.description+'&key='+environment.GOOGLE_API_KEY,1).subscribe(res=>{
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
      .subscribe(
        data => {
          this.isGigPosted = 1;
          this.utilityService.showToast('Crew gig successfully submitted. After admin approval it would be visible to all site visitors.');
          // setTimeout(() => this.router.navigate(["/"]), 4000);
        },
        error => {
          // this.isGigPosted = 2;
          this.utilityService.showToast('Something went wrong please try again.');
        });
  }

  postTalentGig() {
    console.log('Full Address:',this.fullAddress)
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
      .subscribe(
        data => {
          this.isTalentGigPosted = 1;
          this.utilityService.showToast('Talent gig successfully submitted. After admin approval it would be visible to all site visitors.');
          // setTimeout(() => this.router.navigate(["/"]), 4000);
        },
        error => {
          this.isTalentGigPosted = 2;
          this.utilityService.showToast('Something went wrong please try again.');
        });
  }

  changeType(){
    this.fullAddress = undefined;
  }

  async getProductionDates() {
    const modal = await this.modal.create({
      component: CalendarModalComponent,
      cssClass: 'modalCss'
    });
    modal.onDidDismiss().then(res => {
      if (res.data) {
        this.isDateEmpty = true;
        let response = res.data;
        this.productionStartDate = response.startDate.format('DD/MM/YYYY');
        this.productionEndDate = response.endDate.format('DD/MM/YYYY');
        this.productionDatePlaceHolder = this.productionStartDate + " - " + this.productionEndDate
      }
    })
    return await modal.present();
  }

  async addEditRole(i?, role?) {
    if (role) {
      const editRoleModal = await this.modal.create({
        component: AddaroleComponent,
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
      })
      return await editRoleModal.present();
    }
    else {
      const addRoleModal = await this.modal.create({
        component: AddaroleComponent,
        cssClass: 'modalCss'
      });
      addRoleModal.onDidDismiss().then(res => {
        if (res.data) {
          let response = res.data;
          this.roleDetailsArray.push(response.addRoleFormValue);
          this.pushRole(response.rolesDetails,response.roleTitle);
        }
      })
      return await addRoleModal.present();
    }
  }

  confirmRoleDelete(i?){
    let roleId = this.roleArray[i].role;
    this.gigsService.deleteRole(roleId)
      .subscribe(
        data => {
          // this.rolesDetails = data;
          // this.rolesDetails = this.rolesDetails.data;
          // this.isRoalDelete = 1;
          this.roleDetailsArray.splice(i, 1);
          this.roleArray.splice(i, 1);
        },
        error => {
          this.isRoalDelete = 2;
        });
  }

  public pushRole(role, title) {
    this.roleArray.push({
      role: role,
      title: title
    });
  }

  selectedDepartment() {
    this.selectedAdDepartmentArray = [];
    this.adDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedAdDepartmentArray.push(item.value)
      }
    })
  }

  selectProductionDepartment() {
    this.selectedProductionDepartmentArray = [];
    this.productionDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedProductionDepartmentArray.push(item.value)
      }
    })
  }

  selectCameraDepartment() {
    this.selectedCameraDepartmentArray = [];
    this.cameraDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedCameraDepartmentArray.push(item.value)
      }
    })
  }

  selectGeDepartment() {
    this.selectedGeDepartmentArray = [];
    this.geDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedGeDepartmentArray.push(item.value)
      }
    })
  }

  selectHmuDepartment() {
    this.selectedHmuDepartmentArray = [];
    this.hmuDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedHmuDepartmentArray.push(item.value)
      }
    })
  }

  selectWardrobeDepartment() {
    this.selectedWardrobDepartmentArray = [];
    this.wardrobeDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedWardrobDepartmentArray.push(item.value)
      }
    })
  }

  selectSoundDepartment() {
    this.selectedSoundDepartmentArray = [];
    this.soundDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedSoundDepartmentArray.push(item.value)
      }
    })
  }

  selectArtDepartment() {
    this.selectArtDepartmentArray = [];
    this.artDepartmentArray.forEach((item, index) => {
      if (item.selected) {
        this.selectArtDepartmentArray.push(item.value)
      }
    })
  }

  selectTransportationDepartment() {
    this.selectTransportationDepartmentArray = [];
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
  public extract(receivedAddresses) {
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
