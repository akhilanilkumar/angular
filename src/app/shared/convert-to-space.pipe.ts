import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(value: string, args: string): any {
    return value.replace(new RegExp(args,'g'),' ');
  }

}