import offers from 'src/assets/offer.json';
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

@Pipe({
  name: 'dateTimeFormat2',
  pure: true,
})
export class dateTimeFormat2Pipe implements PipeTransform {
  transform(dateString: any, format: string = 'DD/MM/YYYY'): string {
    let test = Object.values(dateString);
    let formatedDate: any;
    if (Array.isArray(test[1])) {
      if (format == null) {
        format = 'DD/MM/YYYY';
      }
      formatedDate = _moment(test[1][0].EventDate).format(format);
    }
    return formatedDate;
  }
}

@Pipe({
  name: 'sportLabel',
  pure: true,
})
export class sportLabelPipe implements PipeTransform {
  transform(sport: any): string {
    let temp = sport['key'];
    if (temp == 0) {
      return 'Futbal';
    } else if (temp == 1) {
      return 'Tenis';
    } else {
      return 'Who knows this sport ???';
    }
  }
}

@Pipe({
  name: 'isFavouriteSport',
  pure: true,
})
export class isFavouriteSportPipe implements PipeTransform {
  transform(sport: any): string {
    return sport['value'].isFavourite;
  }
}

@Pipe({
  name: 'isExpandedSport',
  pure: true,
})
export class isExpandedSportPipe implements PipeTransform {
  transform(sport: any): string {
    return sport.isFavourite;
  }
}

@Pipe({
  name: 'isExpandedLeague',
  pure: true,
})
export class isExpandedLeaguePipe implements PipeTransform {
  transform(sport: any): string {
    return sport.isFavourite;
  }
}

@Pipe({
  name: 'leagueFormat',
  pure: true,
})
export class leagueFormatPipe implements PipeTransform {
  transform(league: any): string {
    let result: any;
    Object.values(offers.Labels).find((e) => {
      if (e.ID.toString() == league['key']) {
        result = e.Name.toString();
      }
    });
    if (result) {
      return result;
    } else {
      return 'trololo';
    }
  }
}
