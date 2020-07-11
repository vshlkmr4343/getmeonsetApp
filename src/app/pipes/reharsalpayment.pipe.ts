import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reharsalpayment'
})
export class ReharsalpaymentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let reharsalpayment = '';
    if(value == '0')
    {
      reharsalpayment = 'Unpaid';
    }else if(value == '1')
    {
      reharsalpayment = 'Paid';
    }
    return reharsalpayment;
  }

}
