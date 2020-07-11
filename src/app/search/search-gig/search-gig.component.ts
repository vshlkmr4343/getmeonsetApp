import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GIG_TYPE_ARRAY , STATUS_TYPE_ARRAY, RACE_ARRAY, PHYSICAL_CHARACTERISTICS_ARRAY,JOB_INTERESTED_IN_ARRAY} from 'src/app/utility/constants.service';


@Component({
  selector: 'app-search-gig',
  templateUrl: './search-gig.component.html',
  styleUrls: ['./search-gig.component.scss'],
})
export class SearchGigComponent implements OnInit {
  searchForm : FormGroup;
  gigTypeArr= GIG_TYPE_ARRAY;
  gigType: any;
  gigUnion: any;
  gigPayment: any;
  raceArray= RACE_ARRAY;
  jobInterestedInArray = JOB_INTERESTED_IN_ARRAY;
  physicalCharacteristicsArray = PHYSICAL_CHARACTERISTICS_ARRAY;
  selectedJobInterestedInArray: any[];
  isTalent = false;
  constructor(
    private modal:ModalController,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    if(this.gigType ==2){ this.isTalent = true;} else {this.isTalent = false;}
    this.searchForm = this.formBuilder.group({
      gigType: this.gigType,
      gigUnion: ['2'],
      gigPayment: ['2'],
      radius: ['101'],
      race: [''],
      physicalCharacteristics: [''],
      cityState: '',
      fullName: '',
      positionsAvailable: [] ,
    });
  }
  toggleIsTalent(event) {
      
    if (event.target.checked) {
      this.isTalent = true;
      this.gigType = 2;
    }else{
      this.searchForm.controls['race'].setValue('');
      this.searchForm.controls['physicalCharacteristics'].setValue('');
      this.gigType = 0;
      this.isTalent = false;
    }
  }
  selectJobInterestedInData(){
    this.selectedJobInterestedInArray =[];
    this.jobInterestedInArray.forEach((item, index) => {
      if (item.selected) {
        this.selectedJobInterestedInArray.push(item.value)
      }
    })
  }
  async close() {
    return await this.modal.dismiss();
  }
  checkType(event) {
    this.isTalent = false;
    if(event.target.value == 2){
      this.isTalent = true;
    }
  }
async  onSearch(){
    this.searchForm.get("positionsAvailable").setValue(this.selectedJobInterestedInArray);
    if(this.searchForm.invalid){
      return
    }
    return await this.modal.dismiss(this.searchForm.value);
  }

  reset(){
    this.searchForm.reset();
    this.searchForm = this.formBuilder.group({
      gigType: ['0'],
      gigUnion: ['2'],
      gigPayment: ['2'],
      radius: ['101'],
      race: [''],
      fullName: '',
      physicalCharacteristics: [''],
      cityState: '',
      positionsAvailable: [] ,
    });
  }

}
