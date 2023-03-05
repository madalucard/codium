import { Component, OnInit } from '@angular/core';
import offers from 'src/assets/offer.json';
import { COLUMNS_EVENTS } from '../utils/columnsDefinitions';

@Component({
  selector: 'matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  public x = offers;
  public betradarTeams = this.x.BetradarTeams;
  public eventChanceTypes = this.x.EventChanceTypes;
  public labels = this.x.Labels;
  public odds = this.x.Odds;

  displayedColumns: string[] = COLUMNS_EVENTS;
  ngOnInit(): void {}
}
