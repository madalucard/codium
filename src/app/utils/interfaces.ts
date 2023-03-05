export interface IEventChanceTypes {
  eventID: number;
  eventName: string;
  eventDate: Date;
  betType: string;
  eventChanceTypeID: string;
  liveBetting: string;
  sportEventID: number;
  sportID: number;
  regionID: number;
  leagueCupID: number;
  chanceTypeID: string;
  chanceTypeName: string;
  sideBet: number;
  actualGamePartID: string;
  qctualGamePartTime: number;
  eventChanceTypeStatus: string;
  kiveFeedReference: number;
  liveBettingView: number;
}

export interface IOdds {
  [key: string]: {
    eventChanceTypeID: number;
    oddsID: number;
    oddsRate: number;
    tipID: string;
    tipType: string;
    tipOrder: string;
    competitorID: number;
    playerID: number;
  };
}

export interface ILabels {
  [key: string]: {
    typ: string;
    iD: number;
    languageID: string;
    name: string;
  };
}
