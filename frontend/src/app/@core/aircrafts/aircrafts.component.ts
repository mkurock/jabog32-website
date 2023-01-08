import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { Aircraft } from 'src/app/@shared/model/aircraft';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { CreateOrUpdateAircraft, GetAircrafts, RemoveAircraft } from 'src/app/@shared/states/aircraft.state';
import { AircraftDialogComponent } from './aircraft-dialog/aircraft-dialog.component';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.less']
})
export class AircraftsComponent implements OnInit {

  @Select() aircraft$:Observable<Aircraft[]>;
  constructor(private store:Store, private dialog:MatDialog,  private notify:NotificationService) { 
    this.store.dispatch(new GetAircrafts());
  }


  ngOnInit(): void {
  }

  addOrEdit(item?:Aircraft){
    if(!item)
      item = new Aircraft();
    let ref = this.dialog.open(AircraftDialogComponent, { data: {...item}, disableClose: true });
    ref.afterClosed().subscribe(async x => {
      if(x){
        await this.store.dispatch(new CreateOrUpdateAircraft(x)).toPromise();
        this.notify.showSnackbar("Luftfahrzeug gespeichert");
      }
    })
  }
  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, { data: { text: 'Luftfahrzeug entfernen?', id: id }, disableClose: true });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new RemoveAircraft(id)).toPromise();
        this.notify.showSnackbar("Luftfahrzeug entfernt")
      }
    })
  }
}
