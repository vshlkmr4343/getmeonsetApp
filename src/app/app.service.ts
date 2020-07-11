import { Injectable } from '@angular/core';
const URL = "http://yapbuzz.com/works/gmos/";  //For Server
//const URL = "http://localhost/sghosh/gmos/";  //For Local
export const BASE_URL = URL;
//export const IMAGE_URL = URL+'src/'; //Local
export const IMAGE_URL = URL; //Server
export const API_URL = BASE_URL+'appservice/api/v1.0/api.php?request=';
export const API_KEY_VALUE = "12345678"
export const RACE_ARRAY = ["Caucasian", "African American", "Asian", "Hispanic"];
export const PHYSICAL_CHARACTERISTICS_ARRAY = ["Average", "Slim", "Athletic/Toned", "Muscular", "Curvy", "Heavy/Stocky", "Plus size/full figured"];

@Injectable({
  providedIn: 'root'
})
export class AppService {
    constructor(){}
}