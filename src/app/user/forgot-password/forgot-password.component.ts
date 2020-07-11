import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm : FormGroup;
  submitted = false;
  constructor(
    private router:Router,
    private utility:UtilityService,
    private formBuilder:FormBuilder,
    private userService:UserService) { }
  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    })
  }
  
  submit(){
    this.submitted = true;
    if(this.forgotPasswordForm.invalid){
      return
    }
    this.userService.recoverPassword(this.forgotPasswordForm.value).subscribe(response=>{
      if(response.message){
        this.utility.showToast(response.message)
      }
      else{
       this.utility.showToast("We have sent a reset password email");
        this.router.navigateByUrl('/sign-in')
      }
    })
  }

  get f(){
    return this.forgotPasswordForm.controls;
  }
}
