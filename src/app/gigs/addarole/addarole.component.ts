import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PHYSICAL_CHARACTERISTICS_ARRAY, RACE_ARRAY } from 'src/app/app.service';
import { GigsService } from '../gigs.service';

@Component({
  selector: 'app-addarole',
  templateUrl: './addarole.component.html',
  styleUrls: ['./addarole.component.scss'],
})
export class AddaroleComponent implements OnInit {
  addRoleForm: FormGroup;
  addRoleData: any;
  physicalCharacteristicsArray = PHYSICAL_CHARACTERISTICS_ARRAY;
  raceArray = RACE_ARRAY;
  rolesubmitted: boolean;
  rolesDetails: any;
  addRoleReturnData;
  constructor(
    private gigsService: GigsService,
    private modal: ModalController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addRoleForm = this.formBuilder.group({
      gigRoleId: [''],
      title: ['', [Validators.required]],
      gender: ['0', [Validators.required]],
      race: ['Caucasian', [Validators.required]],
      physical_characteristics: ['Average', [Validators.required]],
      minimum_age: ['20', [Validators.required]],
      maximum_age: ['60', [Validators.required]],
      day_rate_per_role: ['', [Validators.required]],
      is_nudity_required: ['0'],
      number_of_days_needed: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      rehearsal_days: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      rehearsal_payment: ['1'],
    });

    if (this.addRoleData) {
      this.addRoleForm.patchValue(this.addRoleData);
    }
  }

  async close(val?) {
    return await this.modal.dismiss(val);
  }
  get r() { return this.addRoleForm.controls; }
  postRole() {
    if(this.addRoleData){
      this.updateRole(this.addRoleData.gigRoleId)
    }
    else{
      this.addRole()
    }
  }

  addRole() {
    this.rolesubmitted = true;
    if (this.addRoleForm.invalid) {
      return;
    }

    this.gigsService.addRole(this.addRoleForm.value)
      .subscribe(
        data => {
          let response = data
          this.rolesDetails = data;
          this.rolesDetails = this.rolesDetails.data.role;
          this.addRoleReturnData = { 'rolesDetails': this.rolesDetails, 'addRoleFormValue': this.addRoleForm.value,'roleTitle': response.data.title}
          this.close(this.addRoleReturnData)
          // this.isRoalPosted = 1;
          // this.roleDetailsArray.push(this.addRoleForm.value)
          // this.roleArray.push(this.rolesDetails);
          // this.btnClose.nativeElement.click();
          this.addRoleForm.reset({
            'gigRoleId': '',
            'title': '',
            'gender': '0',
            'race': 'Caucasian',
            'physical_characteristics': 'Average',
            'minimum_age': '20',
            'maximum_age': '60',
            'day_rate_per_role': '',
            'is_nudity_required': '0',
            'number_of_days_needed': '',
            'rehearsal_days': '',
            'rehearsal_payment': '1',
          });
          //   this.rolesubmitted = false;
          // setTimeout(()=>{
          //   this.isRoalPosted = 0 ;
          //  },2000) 
        },
        error => {
          // this.isRoalPosted = 2;
          // this.spinnerService.hide();
          // setTimeout(()=>{
          //   this.isRoalPosted = 0 ;
          //  },2000) 
        });
  }

  updateRole(roleId) {
    this.rolesubmitted = true;
    if (this.addRoleForm.invalid) {
      return;
    }
    this.gigsService.updateRole(this.addRoleForm.value, roleId)
      .subscribe(
        data => {
          this.rolesDetails = data;
          this.rolesDetails = this.rolesDetails.data.role;
          this.addRoleReturnData = { 'rolesDetails': this.rolesDetails, 'addRoleFormValue': this.addRoleForm.value }
          this.close(this.addRoleReturnData);
          // this.rolesDetails = data;
          // this.isRoalUpdate = 1;
          // this.rolesDetails = this.rolesDetails.data;
          // this.spinnerService.hide();
          // this.roleDetailsArray[this.deleteConfirmRoleIndex] = this.editRoleForm.value;
          // this.btnEditClose.nativeElement.click();
          // this.isRoalPosted = 0;
          // setTimeout(()=>{
          //   this.isRoalUpdate = 0 ;
          //  },2000)
        },
        error => {
          // this.isRoalUpdate = 2;
          // this.spinnerService.hide();
          // setTimeout(()=>{
          //   this.isRoalUpdate = 0 ;
          //  },2000)
        });
  }

}
