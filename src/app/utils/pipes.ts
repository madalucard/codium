import { Pipe, PipeTransform } from '@angular/core';
import * as _moment from 'moment';

@Pipe({
  name: 'dateTimeFormat',
  pure: true,
})
export class dateTimeFormatPipe implements PipeTransform {
  transform(dateString: string, format: string = 'DD/MM/YYYY, HH:mm'): string {
    if (format == null) {
      format = 'DD/MM/YYYY, HH:mm';
    }
    let formatedDate = _moment(dateString).format(format);
    return formatedDate;
  }
}
