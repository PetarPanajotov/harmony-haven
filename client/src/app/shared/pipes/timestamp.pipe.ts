import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(dateString: string, ...args: unknown[]): unknown {
    return moment(dateString).fromNow();
  };
}
