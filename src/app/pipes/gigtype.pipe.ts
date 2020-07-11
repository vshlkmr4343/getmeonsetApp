import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gigtype'
})
export class GigtypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let gigtype = '';
    if(value == '1')
    {
      gigtype = 'Crew';
    }else if(value == '2')
    {
      gigtype = 'Talent';
    }
    return gigtype;
  }

}
