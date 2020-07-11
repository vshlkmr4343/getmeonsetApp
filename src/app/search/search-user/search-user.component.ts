import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {UserService} from '../../user/user.service'
import {UtilityService} from '../../utility/utility.service'
import {SignInService} from '../../sign-in/sign-in.service'
import {SignUpService} from '../../sign-up/sign-up.service'
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
  searchForm : FormGroup;
  submitted = false;
  talentDetails:any =[];
  isLoggedIn:any ;
  userIsAuthenticated = false;
  usersId: any;
  userDetails:any;
  isFavorite: string = '0' ;
  favoriteDetails:any =[];
  isRemovedFavorite: string = '0' ;

  genderArray = [
    {value:'1', label :'Any', selected :false},
    {value:'2', label :'Male', selected :false},
    {value:'3', label :'Female',  selected :false},
  ];
  hairColorArray = [
    {value:'black', label :'Black', selected :false},
    {value:'blonde', label :'Blonde', selected :false},
    {value:'brown', label :'Brown',  selected :false},
    {value:'grey', label :'Grey',  selected :false},
    {value:'red', label :'Red',  selected :false},
  ];
  selectedHairArray = [];
  selectedGenderArray = [];
  constructor( private modal:ModalController,
    private formBuilder: FormBuilder,
    public userService: UserService,
     private router: Router, 
     private utility : UtilityService,
     private signinService: SignInService,
     private signupService: SignUpService) { }

  get f() { return this.searchForm.controls; }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      gender: [] ,
      minAge: ['20'],
      maxAge: ['60'],
      minHeight: ['36'],
      maxHeight: ['84'],
      minWeight: ['40'],
      maxWeight: ['300'],
      tattoos: [''],
      fullName: '',
      hair_color: [],
      piercings: [''],
    });
  }
  async close() {
    return await this.modal.dismiss();
  }
  selectHairData(){
    this.selectedHairArray =[];
    this.hairColorArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedHairArray.push(item.value)
      }
    })
  }

  selectGenderData(){
    this.selectedGenderArray =[];
    this.genderArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedGenderArray.push(item.value)
      }
    })
  }
  
  clear(){
    this.searchForm.reset() ;
    this.searchForm = this.formBuilder.group({
      gender: [] ,
      minAge: ['20'],
      maxAge: ['60'],
      minHeight: ['36'],
      maxHeight: ['84'],
      minWeight: ['40'],
      maxWeight: ['300'],
      tattoos: [''],
      fullName: '',
      hair_color: [],
      piercings: [''],
    });
  }
  async onSearch() {
    this.submitted = true ;

    if (this.searchForm.invalid) {
        return ;
    }
     this.searchForm.get("gender").setValue(this.selectedGenderArray);
     this.searchForm.get("hair_color").setValue(this.selectedHairArray);
    // this.userService.searchUsers(this.searchForm.value,this.usersId)
    // .subscribe(
    //   data => {
    //     this.talentDetails = data;
    //     this.talentDetails = this.talentDetails.data.users;
    //     this
    //    // console.log("talentdetails",this.talentDetails)
    //   },
    //   error => {
    //     this.utility.showToast('Unable to Serach') ;
    //   });
     if(!this.searchForm.invalid){
      return await this.modal.dismiss(this.searchForm.value);
     }
  }
}
