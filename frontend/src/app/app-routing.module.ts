import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceComponent } from './@core/absence/absence.component';
import { AircraftsComponent } from './@core/aircrafts/aircrafts.component';
import { ApplicationsComponent } from './@core/applications/applications.component';
import { BadgeComponent } from './@core/badge/badge.component';
import { FilesComponent } from './@core/files/files.component';
import { FlightsComponent } from './@core/flights/flights.component';
import { FptComponent } from './@core/fpt/fpt.component';
import { HomeComponent } from './@core/home/home.component';
import { LogbookComponent } from './@core/logbook/logbook.component';
import { NewsDetailComponent } from './@core/news/news-detail/news-detail.component';
import { NewsComponent } from './@core/news/news.component';
import { NotamsComponent } from './@core/notams/notams.component';
import { PageDetailComponent } from './@core/pages/page-detail/page-detail.component';
import { PagesComponent } from './@core/pages/pages.component';
import { PilotPositionsComponent } from './@core/pilot-positions/pilot-positions.component';
import { PilotsComponent } from './@core/pilots/pilots.component';
import { RanksComponent } from './@core/ranks/ranks.component';
import { SquadronsComponent } from './@core/squadrons/squadrons.component';
import { StatsComponent } from './@core/stats/stats.component';
import { UsersComponent } from './@core/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'absences',
    component: AbsenceComponent
  },
  {
    path: 'notams',
    component: NotamsComponent
  },
  {
    path: 'pages',
    component: PagesComponent
  },
  {
    path: 'pages/:id',
    component: PageDetailComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/edit/:id',
    component: NewsDetailComponent
  },
  {
    path: 'news/create',
    component: NewsDetailComponent
  },
  {
    path: 'badges',
    component: BadgeComponent
  },
  {
    path: 'ranks',
    component: RanksComponent
  },
  {
    path: 'aircrafts',
    component: AircraftsComponent
  },
  {
    path: 'squadrons',
    component: SquadronsComponent
  },
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'pilots',
    component: PilotsComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'fpt',
    component: FptComponent
  },
   {
     path: 'logbook',
     component: LogbookComponent
   },
   {
     path: 'pilot-positions',
     component: PilotPositionsComponent
   },
   {
     path: 'files',
     component: FilesComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
