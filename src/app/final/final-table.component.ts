import { Component, OnInit } from '@angular/core';
import offers from 'src/assets/offer.json';
import { IEventChanceTypes, ILabels, MyLabels, MyObject } from '../utils/interfaces';

@Component({
  selector: 'final-table',
  templateUrl: './final-table.component.html',
  styleUrls: ['./final-table.component.scss'],
})
export class FinalTableComponent implements OnInit {
  public x = offers;
  public betradarTeams = this.x.BetradarTeams;
  public eventChanceTypes: IEventChanceTypes[] = this.x.EventChanceTypes;
  public labels: ILabels = this.x.Labels;
  public odds = this.x.Odds;
  // labels
  public sportLabels: MyLabels[] = [];
  public leageLabels: MyLabels[] = [];
  public groupedData: any[] = [];

  ngOnInit(): void {
    console.log('Offers: ', offers);
    this.sortData(this.eventChanceTypes);
    this.setLabels(this.labels);

    console.log('Grouped: ', this.groupedData);
  }

  public sortData(eventChanceTypes: IEventChanceTypes[]) {
    // reduce to groups by sport
    let tempGroupedData = eventChanceTypes.reduce((acc: MyObject, obj) => {
      const key = obj.SportID;
      if (!acc[key]) {
        acc[key] = [];
      }
      let tempObj = { ...obj, isExpanded: false, isFavourite: false };
      acc[key].push(tempObj);
      return acc;
    }, {});

    let xxx = Object.values(tempGroupedData);
    let zzz: any[] = [];
    xxx.forEach((e) => {
      zzz.push(
        e.reduce((acc: any, obj: any) => {
          const key = obj.LeagueCupID;
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {})
      );
    });

    for (const e of Object.entries(zzz)) {
      let spreadObj = { ...e, isExpanded: false, isFavourite: false };
      this.groupedData.push(spreadObj);
    }
    console.log('groupedData', this.groupedData);
  }

  public setLabels(labels: ILabels) {
    let isExpanded = false;
    Object.values(labels).forEach((e) =>
      e.Typ == 'SP'
        ? this.sportLabels.push({ label: e.Name, id: e.ID, isExpanded: false, isFavourite: false })
        : null
    );
    Object.values(labels).forEach((e) =>
      e.Typ == 'LC'
        ? this.leageLabels.push({ label: e.Name, id: e.ID, isExpanded: false, isFavourite: false })
        : null
    );
  }

  public onExpansionClick(value: any) {
    this.sportLabels.forEach((e) => {
      if (e.label == value.label) {
        e.isExpanded = !e.isExpanded;
      }
    });
  }

  public onFavouriteClick(value: any) {
    if (value['value'].isFavourite == true) {
      value['value'].isFavourite = false;
    } else {
      value['value'].isFavourite = true;
    }
  }
  public logger(m: string, e: any) {
    console.log(`${m}`, e);
  }
}
