import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service'
import { UtilityService } from '../../utility/utility.service'
import { SignInService } from '../../sign-in/sign-in.service'
import { SignUpService } from '../../sign-up/sign-up.service'
@Component({
  selector: 'app-search-crew',
  templateUrl: './search-crew.component.html',
  styleUrls: ['./search-crew.component.scss'],
})
export class SearchCrewComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  jobInterestedInArr = [];
  jobInterested = [];
  isLoggedIn: any;
  userIsAuthenticated = false;
  usersId: any;
  userDetails: any;
  isFavorite: string = '0';
  favoriteDetails: any = [];
  isRemovedFavorite: string = '0';
  selectedGenderArray = [];
  genderArray = [
    { value: '1', label: 'Any', selected: false },
    { value: '2', label: 'Male', selected: false },
    { value: '3', label: 'Female', selected: false },
  ];

  jobInterestedInArray = [
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

  experiencedInArray = [
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

  equipmentOwnedArray = [
    { value: '1', label: '1', selected: false },
    { value: '2', label: '2', selected: false },
  ];
  producerOnlyArray = [
    { value: '1', label: 'Producer Only', selected: false },
  ];
  selectedProducerOnlyArray = [];
  //selectedEquipmentOwnedArray = [];
  selectedJobInterestedInArray = [];
  selectedExperiencedInArray = [];
  get f() { return this.searchForm.controls; }

  constructor(private modal: ModalController,
    private formBuilder: FormBuilder,
    public userService: UserService,
    private router: Router,
    private utility: UtilityService,
    private signinService: SignInService,
    private signupService: SignUpService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      radius: ['101'],
      gender: [],
      experiencedIn: [],
      jobInterestedIn: [],
      equipmentOwned: [''],
      producerOnly: [],
      minDayrate: '0',
      maxDayrate: '200',
      cityState: '',
      fullName: '',
      minAge: ['20'],
      maxAge: ['60'],
    });
  }
  async close() {
    return await this.modal.dismiss();
  }


  async onSearch() {
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }
    this.searchForm.get("gender").setValue(this.selectedGenderArray);
    this.searchForm.get("jobInterestedIn").setValue(this.selectedJobInterestedInArray);
    this.searchForm.get("experiencedIn").setValue(this.selectedExperiencedInArray);
    //this.searchForm.get("equipmentOwned").setValue(this.selectedEquipmentOwnedArray);
    this.searchForm.get("producerOnly").setValue(this.selectedProducerOnlyArray);
    //this.searchForm.value.minDayrate = this.searchForm.value.minDayrate;
    //this.searchForm.value.maxDayrate = this.searchForm.value.maxDayrate;
    //   this.userService.searchUsers(this.searchForm.value,this.usersId)
    // .subscribe(
    //     data => {
    //       this.crewDetails = data;
    //       this.crewDetails = this.crewDetails.data.users;
    //     },
    //     error => {
    //         this.alertService.error('Unable to Serach') ;
    //       });

    if (!this.searchForm.invalid) {
      return await this.modal.dismiss(this.searchForm.value);
    }

  }
  selectGenderData() {
    this.selectedGenderArray = [];
    this.genderArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedGenderArray.push(item.value)
      }
    })
  }

  selectJobInterestedInData() {
    this.selectedJobInterestedInArray = [];
    this.jobInterestedInArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedJobInterestedInArray.push(item.value)
      }
    })
  }

  /*selectEquipmentOwnedData(){
    this.selectedEquipmentOwnedArray =[];
    this.equipmentOwnedArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedEquipmentOwnedArray.push(item.value)
      }
    })
  }*/

  selectExperiencedIn() {
    this.selectedExperiencedInArray = [];
    this.experiencedInArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedExperiencedInArray.push(item.value)
      }
    })
  }
  selectProducerOnlyIn() {
    this.selectedProducerOnlyArray = [];
    this.producerOnlyArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedProducerOnlyArray.push(item.value)
      }
    })
  }

  clear() {
    this.searchForm.reset();
    this.searchForm = this.formBuilder.group({
      radius: ['101'],
      gender: [],
      experiencedIn: [],
      jobInterestedIn: [],
      equipmentOwned: [],
      producerOnly: [],
      minDayrate: '0',
      maxDayrate: '200',
      cityState: '',
      fullName: '',
      minAge: ['20'],
      maxAge: ['60'],
    });
  }

}
