import { Component, OnInit } from '@angular/core';
import offers from 'src/assets/offer.json';
import { COLUMNS_EVENTS } from '../utils/columnsDefinitions';

@Component({
  selector: 'table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent implements OnInit {
  public x = offers;
  public betradarTeams = this.x.BetradarTeams;
  public eventChanceTypes = this.x.EventChanceTypes;
  public labels = this.x.Labels;
  public odds = this.x.Odds;

  displayedColumns: string[] = COLUMNS_EVENTS;
  ngOnInit(): void {}
}
