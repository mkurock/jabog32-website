import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/@shared/model/flight';
import { Pilot } from 'src/app/@shared/model/pilot';
import { Squadron } from 'src/app/@shared/model/squadron';
import { CreateOrUpdateFlight } from 'src/app/@shared/states/flight.state';
import { GetPilots } from 'src/app/@shared/states/pilot.state';
import { GetSquadrons } from 'src/app/@shared/states/squadron.state';

@Component({
  selector: 'app-pilot-positions',
  templateUrl: './pilot-positions.component.html',
  styleUrls: ['./pilot-positions.component.less']
})
export class PilotPositionsComponent implements OnInit {
  @Select() squadron$:Observable<Squadron[]>;
  @Select() pilot$:Observable<Pilot[]>;
  pilots:Pilot[] = [];
  squadrons:Squadron[] = [];
  freePilots:Pilot[] = [];
  constructor(
    private store:Store
  ) { 
    this.pilot$.subscribe(x => {
      this.pilots = x;
      this.setFreePilots();
    });
    this.squadron$.subscribe(x => {
      this.squadrons = x.map(x => { 
        let c = {...x};
        c.flights = c.flights.map(y => {
          return {...y};
        });
        return c;
      });
      this.setFreePilots();
    })
    this.store.dispatch(new GetSquadrons())
    this.store.dispatch(new GetPilots())
  }

  setFreePilots(){
    if(this.pilots.length > 0 && this.squadrons.length > 0){
      let ids = [];
      for(let s of this.squadrons){
        for(let f of s.flights){
          ids.push(f.leadPilot?.id);
          ids.push(f.leadRio?.id);
          ids.push(f.leadWingPilot?.id);
          ids.push(f.leadWingRio?.id);
          ids.push(f.secondElementLeadPilot?.id);
          ids.push(f.secondElementLeadRio?.id);
          ids.push(f.secondElementWingPilot?.id);
          ids.push(f.secondElementWingRio?.id);
        }
      }
      this.freePilots = this.pilots.filter(x => ids.indexOf(x.id) == -1);
    }
  }

  async save(item:Flight, key:string){
    await this.store.dispatch(new CreateOrUpdateFlight(item)).toPromise();
    this.setFreePilots();
  }

  ngOnInit(): void {
  }

}
