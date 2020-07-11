import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../utility/must-match.validator';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';
import { UtilityService } from '../utility/utility.service';
import { Storage } from '@ionic/storage';
import { SignInService } from '../sign-in/sign-in.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit  {
  
  signUpForm: FormGroup;
  submitted = false;
  usersDetails: any;
  isAgreeTos = false;
  constructor(
    private signInService: SignInService,
    private storage: Storage,
    private utility: UtilityService,
    private signUpService: SignUpService,
    private formBuilder: FormBuilder,
    private router: Router) {

  }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'cpassword')
    });
  }

  agreeTermsOfService(ev){
    this.isAgreeTos = ev.detail.checked;
  }

  signUp() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return
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
          this.router.navigateByUrl('/gigs/Crew')
          this.utility.showToast("Signup successfully completed");
        }
      },
        error => {
          this.utility.showToast("Emailid already registered.")
        });
    })

  }

  get f() { return this.signUpForm.controls; }

}
