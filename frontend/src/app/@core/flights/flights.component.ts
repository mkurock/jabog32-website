import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { Flight } from 'src/app/@shared/model/flight';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { CreateOrUpdateFlight, GetFlights, RemoveFlight } from 'src/app/@shared/states/flight.state';
import { FlightDialogComponent } from './flight-dialog/flight-dialog.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.less']
})
export class FlightsComponent implements OnInit {
  @Select() flight$:Observable<Flight[]>;
  constructor(private store:Store, private dialog:MatDialog,  private notify:NotificationService) { 
    this.store.dispatch(new GetFlights());
  }


  ngOnInit(): void {
  }

  addOrEdit(item?:Flight){
    if(!item)
      item = new Flight();
    let ref = this.dialog.open(FlightDialogComponent, { data: {...item}, disableClose: true });
    ref.afterClosed().subscribe(async x => {
      if(x){
        await this.store.dispatch(new CreateOrUpdateFlight(x)).toPromise();
        this.notify.showSnackbar("Schwarm gespeichert");
      }
    })
  }
  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, { data: { text: 'Schwarm entfernen?', id: id }, disableClose: true });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new RemoveFlight(id)).toPromise();
        this.notify.showSnackbar("Schwarm entfernt")
      }
    })
  }
}
