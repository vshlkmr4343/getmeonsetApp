import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.scss'],
})
export class CalendarModalComponent implements OnInit {
  dateRange:any;
  selectedTimeZone:any;
  dateMulti: string[];
  type: 'string';
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  timezonesArray = [
    { value: 'Atlantic Standard Time'},
    { value: 'Eastern Standard Time'},
    { value: 'Central Standard Time'},
    { value: 'Mountain Standard Time'},
    { value: 'Pacific Standard Time'},
    { value: 'Alaskan Standard Time'},
    { value: 'Hawaii-Aleutian Standard Time' },
  ];
  constructor(
    private utilityService:UtilityService,
    private modal:ModalController
    ) { }
  ngOnInit() {}
  async close() {
      return await this.modal.dismiss();
  }

  async apply(){
    if(this.dateRange){
      let productionDates ={'endDate':this.dateRange.to,'startDate':this.dateRange.from};
      return await this.modal.dismiss(productionDates);
    }
    else{
      this.utilityService.showToast('Please select production dates.')
    }
  }
}
