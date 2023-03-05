import { Component } from '@angular/core';
import offersInfo from 'src/assets/offer.json';
import { COLUMNS_LABELS } from 'src/app/utils/columnsDefinitions';

// export interface IEventChanceTypes {
//   EventID: number;
//   EventName: string;
//   EventDate: string;
//   BetType: string;
//   EventChanceTypeID: number;
//   LiveBetting: string;
//   SportEventID: number;
//   SportID: number;
//   RegionID: number;
//   LeagueCupID: number;
//   ChanceTypeID: string;
//   ChanceTypeName: string;
//   SideBet: number;
//   ActualGamePartID: string;
//   ActualGamePartTime: number;
//   EventChanceTypeStatus: string;
//   LiveFeedReference: number;
//   LiveBettingView: number;
// }

// export interface IOdds {
//   [key: string]: {
//     EventChanceTypeID?: number;
//     OddsID?: number;
//     OddsRate?: number;
//     TipID?: string;
//     TipType?: string;
//     TipOrder?: string;
//     CompetitorID?: number;
//     PlayerID?: number;
//   };
// }

// export interface ILabels {
//   [key: string]: {
//     Typ?: string;
//     ID?: number;
//     LanguageID?: string;
//     Name?: string;
//   };
// }

// interface IBetradarTeams {
//   [key: string]: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // public title = 'codium';
  // public betradarTeams: IBetradarTeams = offersInfo.BetradarTeams;
  // public eventChanceTypes: IEventChanceTypes[] = offersInfo.EventChanceTypes;
  // public labels: ILabels = offersInfo.Labels;
  // public odds: IOdds = offersInfo.Odds;
  // public columnsL: string[] = COLUMNS_LABELS;
}
