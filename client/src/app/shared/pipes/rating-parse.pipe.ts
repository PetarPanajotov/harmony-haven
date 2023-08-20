import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingParse'
})
export class RatingParsePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
