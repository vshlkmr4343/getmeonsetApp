import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'src/app/utility/must-match.validator';
import { UserService } from '../user.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  resetForm : FormGroup;
  submitted =false;
  constructor(
    private router:Router,
    private storage:Storage,
    private formBuilder: FormBuilder,
    private userService:UserService,
    private utility:UtilityService) { }
  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
    })
  }
  get f() { return this.resetForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid) {
        return;
    }
    this.storage.get('userData').then(data=>{
    this.userService.changePassword(this.resetForm.value,data.email)
    .subscribe( 
      (res) => {
        this.router.navigateByUrl('/gigs/Crew')
        this.utility.showToast("Change Password successfully updated");
      });
    })
  }
}
