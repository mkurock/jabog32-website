import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { PilotsStat } from 'src/app/@shared/model/pilotstat';
import { GetPilotStats, PilotStatsState } from 'src/app/@shared/states/pilotstats.state';

@Component({
  selector: 'app-pilot-stats',
  templateUrl: './pilot-stats.component.html',
  styleUrls: ['./pilot-stats.component.less']
})
export class PilotStatsComponent implements OnInit,OnDestroy {
  subs = new Subscription();
  pilotStats$: Observable<PilotsStat[]>;
  @Input() map:string = "";

  constructor(private store:Store) { }

  ngOnInit(): void {
    let mapKey = this.map == '' ? 'default' : this.map;
    this.pilotStats$ = this.store.select(PilotStatsState.getStats(mapKey));
    this.store.dispatch(new GetPilotStats(this.map));
  }

  ngOnDestroy(){

  }

}
