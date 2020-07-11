import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router, NavigationStart } from '@angular/router';
import { UtilityService } from '../../utility/utility.service';
import {CommonService } from '../common.service'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  usersDetails:any =[];
  contactusForm : FormGroup;
  submitted = false;
  
  get f() { return this.contactusForm.controls; }
  constructor(private formBuilder: FormBuilder,
     private route: ActivatedRoute,
     private router: Router,
     private utility : UtilityService,
     private common: CommonService) { }

  ngOnInit() {
    this.contactusForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true ; 

    if (this.contactusForm.invalid) {
        return ;
    }
    this.common.sendemail(this.contactusForm.value)
        .subscribe(
            data => {
              this.usersDetails = data;
                //this.router.navigate(["/"]);
                this.utility.showToast("Thank you for contacting us. We will be in touch soon.");
            },
            error => {
                //this.router.navigate(["/"]);
                this.utility.showToast('Unable to send mail') ;
            });
  }

}
