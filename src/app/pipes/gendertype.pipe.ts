import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gendertype'
})
export class GendertypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let gendertype = '';
    if(value == '1')
    {
      gendertype = 'Any';
    }else if(value == '2')
    {
      gendertype = 'Male';
    }else if(value == '3')
    {
      gendertype = 'Female';
    }
    return gendertype;
  }

}
