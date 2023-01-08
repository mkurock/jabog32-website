import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService } from './@shared/services/appinit.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { UserState } from './@shared/states/user.state';
import { SideNavComponent } from './@core/side-nav/side-nav.component';
import { HomeComponent } from './@core/home/home.component';
import { AbsenceComponent } from './@core/absence/absence.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, fas } from '@fortawesome/free-solid-svg-icons';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AbsenceState } from './@shared/states/absence.state';
import { DialogComponent } from './@core/absence/dialog/dialog.component';
import { ConfirmComponent } from './@shared/components/confirm/confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { NotamsComponent } from './@core/notams/notams.component';
import { NotamState } from './@shared/states/notam.state';
import { NotamDialogComponent } from './@core/notams/notam-dialog/notam-dialog.component';
import { JabogErrorHandler } from './@shared/error.handler';
import { PagesComponent } from './@core/pages/pages.component';
import { PageDetailComponent } from './@core/pages/page-detail/page-detail.component';
import { PageState } from './@shared/states/page.state';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NewsComponent } from './@core/news/news.component';
import { NewsDetailComponent } from './@core/news/news-detail/news-detail.component';
import { NewsState } from './@shared/states/news.state';
import { BadgeComponent } from './@core/badge/badge.component';
import { BadgeState } from './@shared/states/badge.state';
import { BadgeDialogComponent } from './@core/badge/badge-dialog/badge-dialog.component';
import { RanksComponent } from './@core/ranks/ranks.component';
import { RankState } from './@shared/states/rank.state';
import { RankDialogComponent } from './@core/ranks/rank-dialog/rank-dialog.component';
import { AircraftState } from './@shared/states/aircraft.state';
import { AircraftsComponent } from './@core/aircrafts/aircrafts.component';
import { AircraftDialogComponent } from './@core/aircrafts/aircraft-dialog/aircraft-dialog.component';
import { SquadronsComponent } from './@core/squadrons/squadrons.component';
import { SquadronDialogComponent } from './@core/squadrons/squadron-dialog/squadron-dialog.component';
import { SquadronState } from './@shared/states/squadron.state';
import { FlightState } from './@shared/states/flight.state';
import { FlightsComponent } from './@core/flights/flights.component';
import { FlightDialogComponent } from './@core/flights/flight-dialog/flight-dialog.component';
import { UsersComponent } from './@core/users/users.component';
import { UserDialogComponent } from './@core/users/user-dialog/user-dialog.component';
import { PilotsComponent } from './@core/pilots/pilots.component';
import { PilotDialogComponent } from './@core/pilots/pilot-dialog/pilot-dialog.component';
import { PilotState } from './@shared/states/pilot.state';
import { PilotBadgeDialogComponent } from './@core/pilots/pilot-badge-dialog/pilot-badge-dialog.component';
import '@angular/common/locales/global/de';
import { ApplicationsComponent } from './@core/applications/applications.component';
import { ApplicationDialogComponent } from './@core/applications/application-dialog/application-dialog.component';
import { UserApplicationState } from './@shared/states/userapplication.state';
import { FptComponent } from './@core/fpt/fpt.component';
import { HomeState } from './@shared/states/home.state';
import { LogbookComponent } from './@core/logbook/logbook.component';
import { LogbookState } from './@shared/states/logbook.state';
import { LogbookDialogComponent } from './@core/logbook/logbook-dialog/logbook-dialog.component';
import { PilotPositionsComponent } from './@core/pilot-positions/pilot-positions.component';
import { FilesComponent } from './@core/files/files.component';
import { FileState } from './@shared/states/files.state';
import { NewFolderComponent } from './@core/files/new-folder/new-folder.component';
import { UploadComponent } from './@core/files/upload/upload.component';
import { DraganddropDirective } from './@shared/directives/draganddrop.directive';
import { PilotStatsComponent } from './@core/pilot-stats/pilot-stats.component';
import { PilotStatsState } from './@shared/states/pilotstats.state';
import { StatsComponent } from './@core/stats/stats.component';
import { LsoStatsComponent } from './@core/stats/lso-stats/lso-stats.component';
import { LSOGradesState } from './@shared/states/lsogrades.state';
import { MatButtonModule } from '@angular/material/button';
export function get_settings(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    AbsenceComponent,
    DialogComponent,
    ConfirmComponent,
    NotamsComponent,
    NotamDialogComponent,
    PagesComponent,
    PageDetailComponent,
    NewsComponent,
    NewsDetailComponent,
    BadgeComponent,
    BadgeDialogComponent,
    RanksComponent,
    RankDialogComponent,
    AircraftsComponent,
    AircraftDialogComponent,
    SquadronsComponent,
    SquadronDialogComponent,
    FlightsComponent,
    FlightDialogComponent,
    UsersComponent,
    UserDialogComponent,
    PilotsComponent,
    PilotDialogComponent,
    PilotBadgeDialogComponent,
    ApplicationsComponent,
    ApplicationDialogComponent,
    FptComponent,
    LogbookComponent,
    LogbookDialogComponent,
    PilotPositionsComponent,
    FilesComponent,
    NewFolderComponent,
    UploadComponent,
    DraganddropDirective,
    PilotStatsComponent,
    StatsComponent,
    LsoStatsComponent,
  ],
  imports: [
    NgxsModule.forRoot([
      UserState,
      AbsenceState,
      NotamState,
      PageState,
      NewsState,
      BadgeState,
      RankState,
      AircraftState,
      SquadronState,
      FlightState,
      PilotState,
      UserApplicationState,
      HomeState,
      LogbookState,
      FileState,
      PilotStatsState,
      LSOGradesState
    ], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    EditorModule
  ],
  providers: [
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [AppInitService], multi: true },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: LOCALE_ID, useValue: 'de' },
    { provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'DD.MM.YY'
        },
        display: {
          dateInput: 'DD.MM.YY',
          monthYearLabel: 'MMM YYYY',
        }
      }
    },
    {
      provide: ErrorHandler,
      useClass: JabogErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library:FaIconLibrary){
    library.addIconPacks(
      fas
    );
  }
}
