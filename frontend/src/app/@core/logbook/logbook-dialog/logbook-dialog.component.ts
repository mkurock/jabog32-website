import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/@shared/model/aircraft';
import { Logbook, LogbookDetail } from 'src/app/@shared/model/logbook';
import { Pilot } from 'src/app/@shared/model/pilot';
import { GetAircrafts } from 'src/app/@shared/states/aircraft.state';
import { GetPilots } from 'src/app/@shared/states/pilot.state';

@Component({
  selector: 'app-logbook-dialog',
  templateUrl: './logbook-dialog.component.html',
  styleUrls: ['./logbook-dialog.component.less']
})
export class LogbookDialogComponent implements OnInit {

  item:Logbook;
  departure = {
    hh: 20,
    mm: 0
  };
  landing = {
    hh: 22,
    mm:0
  }

  @Select() pilot$: Observable<Pilot[]>;
  pilots:Pilot[] = [];

  @Select() aircraft$:Observable<Aircraft[]>;
  aircrafts:Aircraft[] = [];

  constructor(
    private dialogRef:MatDialogRef<LogbookDialogComponent>,
    private store:Store,
    @Inject(MAT_DIALOG_DATA) private data:Logbook
  ) {
    this.item = { ...data }
    this.item.departure = moment(this.item.departure);
    this.item.landing = moment(this.item.landing);
    this.item.logbookDetails = this.item.logbookDetails.map(x => { return { ...x } });
    if(this.item.id != null){
      this.departure.hh = moment(this.item.departure).hours();
      this.departure.mm = moment(this.item.departure).minutes();
  
      this.landing.hh = moment(this.item.landing).hours();
      this.landing.mm = moment(this.item.landing).minutes();
    }
    //Pilots
    this.pilot$.subscribe(x => {
      this.pilots = x;
      this.mapPilots();
      if(x.length == 0)
        this.store.dispatch(new GetPilots());
    });

    //Aircrafts
    this.aircraft$.subscribe(x => {
      this.aircrafts = x;
      this.mapAircrafts();
      if(x.length == 0)
        this.store.dispatch(new GetAircrafts());
    })

  }
  mapPilots(){
    if(this.pilots.length > 0){
      for(let i of this.item.logbookDetails){
        i.pilot = this.pilots.find(x => x.id == i.pilot?.id);
      }
    }
  }
  mapAircrafts(){
    if(this.aircrafts.length > 0){
      for(let i of this.item.logbookDetails){
        i.aircraft = this.aircrafts.find(x => x.id == i.aircraft?.id);
      }
    }
  }

  ngOnInit(): void {
  }

  ok(){
    this.item.departure.hours(this.departure.hh);
    this.item.departure.minutes(this.departure.mm);

    this.item.landing.hours(this.landing.hh);
    this.item.landing.minutes(this.landing.mm);
    this.dialogRef.close(this.item);
  }

  cancel(){
    this.dialogRef.close(null);
  }

  formValid(){
    if(
      this.item.title == "" ||
      this.item.location == "" ||
      this.item.type == "" ||
      this.item.departure == null ||
      this.item.landing == null ||
      typeof(this.departure.hh) != "number" ||
      typeof(this.departure.mm) != "number" ||
      typeof(this.landing.hh) != "number" ||
      typeof(this.landing.mm) != "number" ||
      this.item.logbookDetails.find(x =>
        x.aircraft == null ||
        x.pilot == null ||
        typeof(x.airTargets) != "number" ||
        typeof(x.groundTargets) != "number" ||
        typeof(x.strategicTargets) != "number"
      ) != null
    )
      return false;
    else
      return true;
  }

  delete(entry:LogbookDetail){
    this.item.logbookDetails = this.item.logbookDetails.filter(x => x != entry);
  }
  add(){
    this.item.logbookDetails.push(new LogbookDetail());
  }

}
