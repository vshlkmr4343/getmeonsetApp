
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-vendor',
  templateUrl: './search-vendor.component.html',
  styleUrls: ['./search-vendor.component.scss'],
})
export class SearchVendorComponent implements OnInit {
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
  equipmentRentalArray = [
    { value: '1', label: 'Camera Rentals', selected: false },
    { value: '2', label: 'Grip/Electric Rentals', selected: false },
    { value: '3', label: 'Production Supplies', selected: false },
    { value: '4', label: 'Vehicles/Trailers', selected: false }
  ];
  equipmentOwnedArray = [
    { value: '1', label: '1', selected: false },
    { value: '2', label: '2', selected: false },
  ];
  producerOnlyArray = [
    { value: '1', label: 'Producer Only', selected: false },
  ];
  selectedProducerOnlyArray = [];
  selectedJobInterestedInArray = [];
  selectedExperiencedInArray = [];
  selectedequipmentRentalArray = [];
  searchForm: any;
  selectedGenderArray: any[];
  submitted: boolean;
  get f() { return this.searchForm.controls; }
  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      radius: ['101'],
      gender: [],
      equipmentRentals: [],
      accounting: [''],
      audio: [''],
      catering: [''],
      distribution: [''],
      insurance: [''],
      legal: [''],
      postProduction: [''],
      propsRental: [''],
      security: [''],
      minAge: ['20'],
      maxAge: ['60'],
    });
  }
  async close() {
    return await this.modalController.dismiss();
  }
  async onSearch(){
   this.submitted = true;
   this.searchForm.get("gender").setValue(this.selectedGenderArray);
   this.searchForm.get("equipmentRentals").setValue(this.selectedequipmentRentalArray);
   return await this.modalController.dismiss(this.searchForm.value)
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
  public selectEquimentRendalData() {
    this.selectedequipmentRentalArray = [];
    this.equipmentRentalArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedequipmentRentalArray.push(item.value);
      }
    })
  }
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
      equipmentRentals: [],
      accounting: [''],
      audio: [''],
      catering: [''],
      distribution: [''],
      insurance: [''],
      legal: [''],
      postProduction: [''],
      propsRental: [''],
      security: [''],
      minAge: ['20'],
      maxAge: ['60'],
    });
  }

}
