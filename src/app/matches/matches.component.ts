import { Component, OnInit } from '@angular/core';
import offers from 'src/assets/offer.json';
import { COLUMNS_MATCHES } from '../utils/columnsDefinitions';
import { IEventChanceTypes, ILabels, IOdds } from '../utils/interfaces';

////event
// {
//   "EventID": 1741900,
//   "EventName": "Port Melbourne Sharks vs. Heidelberg United",
//   "EventDate": "2023-05-19T12:30:00.0000000",
//   "BetType": "TRIO",
//   "EventChanceTypeID": 29520849,
//   "LiveBetting": "N",
//   "SportEventID": -1,
//   "SportID": 54,
//   "RegionID": 234,
//   "LeagueCupID": 6927,
//   "ChanceTypeID": "restottrio",
//   "ChanceTypeName": "Zápas - Výsledok (Riadny hrací čas)",
//   "SideBet": 47,
//   "ActualGamePartID": "notstarted",
//   "ActualGamePartTime": -1,
//   "EventChanceTypeStatus": "active",
//   "LiveFeedReference": -1,
//   "LiveBettingView": 1
// },

////ods
// "29520849_1": {
//   "EventChanceTypeID": 29520849,
//   "OddsID": 95318463,
//   "OddsRate": 4.41,
//   "TipID": "52",
//   "TipType": "1",
//   "TipOrder": "10",
//   "CompetitorID": 0,
//   "PlayerID": 0
// }

//// labels
// "LC_590598": {
//   "Typ": "LC",
//   "ID": 590598,
//   "LanguageID": "sk",
//   "Name": "Presidents Cup"
// },
// "RE_234": {
//   "Typ": "RE",
//   "ID": 234,
//   "LanguageID": "sk",
//   "Name": "Austrália"
// },
// {
// "SP_54": {
//   "Typ": "SP",
//   "ID": 54,
//   "LanguageID": "sk",
//   "Name": "Futbal"
// },
// "TP_55": {
//   "Typ": "TP",
//   "ID": 55,
//   "LanguageID": "sk",
//   "Name": "1X"
// },
export interface IMatches {
  EventChanceTypeID?: number;
  EventName?: string;
  EventDate: string;
  Sport?: string;
  League?: string;
  BetRate: string;
}

@Component({
  selector: 'matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  public x = offers;
  public betradarTeams = this.x.BetradarTeams;
  public eventChanceTypes: IEventChanceTypes[] = this.x.EventChanceTypes;
  public labels: ILabels = this.x.Labels;
  public odds: IOdds = this.x.Odds;

  public matches: IMatches[] = [];

  displayedColumns: string[] = COLUMNS_MATCHES;
  ngOnInit(): void {
    console.log('labels: ', this.labels);
    this.matches = this.prepareData(this.eventChanceTypes, this.labels, this.odds);
    console.log('Matches: ', this.matches);
  }

  private prepareData(
    eventChanceTypes: IEventChanceTypes[],
    labels: ILabels,
    odds: any
  ): IMatches[] {
    let resultMatches: IMatches[] = [];
    eventChanceTypes.forEach((item: IEventChanceTypes) => {
      let temp: IMatches = {
        EventChanceTypeID: 999,
        EventName: '',
        EventDate: '',
        Sport: '',
        League: '',
        BetRate: '',
      };
      temp.EventChanceTypeID = item.EventChanceTypeID == null ? 999 : item.EventChanceTypeID;
      temp.EventName = item.EventName == null ? 'xxx' : item.EventName;
      temp.EventDate = item.EventDate == null ? 'zzz' : item.EventDate;
      temp.Sport = labels[`SP_${item.SportID}`].Name.toString();
      temp.League = labels[`LC_${item.LeagueCupID}`].Name.toString();
      temp.BetRate = this.pickBetRates(odds, item?.EventChanceTypeID);

      resultMatches.push(temp);
    });
    return resultMatches;
  }

  private pickBetRates(odds: IOdds, eventChanceTypeID?: number): string {
    let temp = Object.entries(odds).filter(([key]) =>
      key.includes(eventChanceTypeID?.toString() == null ? '999' : eventChanceTypeID.toString())
    );

    let odd = '';
    temp.forEach((e) => {
      if (e[0].includes('_1')) {
        odd += `1: ${e[1].OddsRate},  `;
      } else if (e[0].includes('_1X')) {
        odd += `1X: ${e[1].OddsRate}, `;
      } else if (e[0].includes('_X')) {
        odd += `X: ${e[1].OddsRate},  `;
      } else if (e[0].includes('_12')) {
        odd += `12: ${e[1].OddsRate},  `;
      } else if (e[0].includes('_X2')) {
        odd += `X2: ${e[1].OddsRate}, `;
      } else if (e[0].includes('_2')) {
        odd += `2: ${e[1].OddsRate},  `;
      } else {
        odd += '-';
      }
    });
    return odd;
  }
}
