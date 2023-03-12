import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableContainerComponent } from './table-container/table-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import {
  dateTimeFormat2Pipe,
  dateTimeFormatPipe,
  isExpandedLeaguePipe,
  isExpandedSportPipe,
  isFavouriteSportPipe,
  leagueFormatPipe,
  sportLabelPipe,
} from './utils/pipes';
import { NavbarComponent } from './navbar/navbar.component';
import { MatchesComponent } from './matches/matches.component';
import { FinalTableComponent } from './final/final-table.component';
import { MatIconModule } from '@angular/material/icon';

const appRoute: Routes = [
  //{ path: '', component: AppComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'FinalTable', component: FinalTableComponent },
  { path: 'Matches', component: MatchesComponent },
  { path: 'Testing', component: TableContainerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FinalTableComponent,
    MatchesComponent,
    NavbarComponent,
    TableContainerComponent,
    dateTimeFormatPipe,
    sportLabelPipe,
    isFavouriteSportPipe,
    isExpandedSportPipe,
    leagueFormatPipe,
    isExpandedLeaguePipe,
    dateTimeFormat2Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatIconModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        position: 'above',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
