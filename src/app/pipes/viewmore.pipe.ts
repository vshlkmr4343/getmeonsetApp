import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewmore'
})
export class ViewmorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(args == 'half' && value.length > 200)
    {      
      value = value.substr(0,200) + '...';
    }
    return value;
  }

}
