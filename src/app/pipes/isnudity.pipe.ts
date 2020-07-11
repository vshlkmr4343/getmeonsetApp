import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isnudity'
})
export class IsnudityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let isnudity = '';
    if(value == '0')
    {
      isnudity = 'No';
    }else if(value == '1')
    {
      isnudity = 'Yes';
    }
    return isnudity;
  }

}
