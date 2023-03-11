import { Component, OnInit } from '@angular/core';
import offers from 'src/assets/offer.json';
import { COLUMNS_TEST } from '../utils/columnsDefinitions';

@Component({
  selector: 'final-table',
  templateUrl: './final-table.component.html',
  styleUrls: ['./final-table.component.scss'],
})
export class FinalTableComponent implements OnInit {
  public x = offers;
  public betradarTeams = this.x.BetradarTeams;
  public eventChanceTypes = this.x.EventChanceTypes;
  public labels = this.x.Labels;
  public odds = this.x.Odds;

  displayedColumns: string[] = COLUMNS_TEST;
  ngOnInit(): void {}
}
