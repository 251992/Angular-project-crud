import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployee'
})
export class FilterEmployeePipe implements PipeTransform {

  transform(value: any, ...args:string []): unknown {
   if(args[0]==undefined ||args[0]==''){
     return value
   }
   else{
    var r=value.filter((e:any)=> {
     return e.name.startsWith(args[0])||e.dept==[args[0]]});
     return r;
   }
  }

}
