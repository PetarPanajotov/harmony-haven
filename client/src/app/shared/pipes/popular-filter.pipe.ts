import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularFilter'
})
export class PopularFilterPipe implements PipeTransform {

  transform(destinations: any[], popular: boolean = true): any[] {
    if (!destinations || destinations.length < 0) {
      return destinations
    }
    if (popular === true) {
      return destinations.filter(destination => destination.popular === popular);
    } else {
      return destinations.filter(destination => !destination.popular)
    }
  }

}
