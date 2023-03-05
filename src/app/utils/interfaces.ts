export interface IEventChanceTypes {
  EventID: number;
  EventName?: string;
  EventDate?: string;
  BetType?: string;
  EventChanceTypeID?: number;
  LiveBetting?: string;
  SportEventID?: number;
  SportID?: number;
  RegionID?: number;
  LeagueCupID?: number;
  ChanceTypeID?: string;
  ChanceTypeName?: string;
  SideBet?: number;
  ActualGamePartID?: string;
  ActualGamePartTime?: number;
  EventChanceTypeStatus?: string;
  LiveFeedReference?: number;
  LiveBettingView?: number;
}

export interface IOdds {
  [key: string]: {
    EventChanceTypeID: number;
    OddsID: number;
    OddsRate: number;
    TipID: string;
    TipType: string;
    TipOrder: string;
    CompetitorID: number;
    PlayerID: number;
  };
}

export interface ILabels {
  [key: string]: {
    Typ: string;
    ID: number;
    LanguageID: string;
    Name: string;
  };
}
