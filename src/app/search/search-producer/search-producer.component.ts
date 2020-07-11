import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service'
import { UtilityService } from '../../utility/utility.service'
import { SignInService } from '../../sign-in/sign-in.service'
import { SignUpService } from '../../sign-up/sign-up.service'
@Component({
  selector: 'app-search-producer',
  templateUrl: './search-producer.component.html',
  styleUrls: ['./search-producer.component.scss'],
})
export class SearchProducerComponent implements OnInit {
  searchForm : FormGroup;
  submitted = false;
  producerDetails:any =[];
  isLoggedIn:any ;
  userIsAuthenticated = false;
  usersId: any;
  userDetails:any;
  isFavorite: string = '0' ;
  favoriteDetails:any =[];
  isRemovedFavorite: string = '0' ;
  selectedGenderArray = [];
  name = 'Get me on set';
  isProducerFound = 1 ;
  genderArray = [
    {value:'1', label :'Any', selected :false},
    {value:'2', label :'Male', selected :false},
    {value:'3', label :'Female',  selected :false},
  ];
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
      gender: [] ,
      minAge: ['20'],
      maxAge: ['60'],
    });
    
  }
  async close() {
    return await this.modal.dismiss();
  }
  async onSearch() {
    this.submitted = true 
    if (this.searchForm.invalid) {
        return ;
    }
    this.searchForm.get("gender").setValue(this.selectedGenderArray);
    // this.producerService.searchUsers(this.searchForm.value,this.usersId)
    // .subscribe(
    //     data => {
    //     this.spinnerService.hide() ;
    //     this.producerDetails = data;
    //     this.producerDetails = this.producerDetails.data.users;
    //   },
    //   error => {
    //       this.alertService.error('Unable to Serach') ;
    //   });
      if (!this.searchForm.invalid) {
        return await this.modal.dismiss(this.searchForm.value);
      }
  
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
        radius: ['101'],
        gender: [] ,
        minAge: ['20'],
        maxAge: ['60'],
      });
    }
}
