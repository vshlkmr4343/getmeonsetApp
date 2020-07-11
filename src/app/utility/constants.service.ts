import { Injectable } from '@angular/core';
export const GIG_TYPE_ARRAY = [
  { value: '1', label: 'Crew', selected: false },
  { value: '2', label: 'Talent', selected: false },
];
export const STATUS_TYPE_ARRAY =[
  { value: '0', label: 'Inactive', selected: false },
  { value: '1', label: 'Active', selected: false },
];
export const RACE_ARRAY = ["Caucasian", "African American", "Asian", "Hispanic"];
export const PHYSICAL_CHARACTERISTICS_ARRAY = ["Average", "Slim", "Athletic/Toned", "Muscular", "Curvy", "Heavy/Stocky", "Plus size/full figured"];
export const JOB_INTERESTED_IN_ARRAY = [
  {value:'1', label :'AD department', selected :false},
  {value:'2', label :'Production department', selected :false},
  {value:'3', label :'Camera department',  selected :false},
  {value:'4', label :'G & E department',  selected :false},
  {value:'5', label :'HMU department',  selected :false},
  {value:'6', label :'Wardrobe department',  selected :false},
  {value:'7', label :'Sound department',  selected :false},
  {value:'8', label :'Art department',  selected :false},
  {value:'9', label :'Transportation department',  selected :false},
];
@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
}
