import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { Pilot } from 'src/app/@shared/model/pilot';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { CreateOrUpdatePilot, GetPilots, RemovePilot, UpdateBadgesPilot } from 'src/app/@shared/states/pilot.state';
import { PilotBadgeDialogComponent } from './pilot-badge-dialog/pilot-badge-dialog.component';
import { PilotDialogComponent } from './pilot-dialog/pilot-dialog.component';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.less']
})
export class PilotsComponent implements OnInit {

  @Select() pilot$:Observable<Pilot[]>;
  constructor(private store:Store, private dialog:MatDialog,  private notify:NotificationService) { 
    this.store.dispatch(new GetPilots());
  }


  ngOnInit(): void {
  }

  changeBadges(item?:Pilot){
    if(!item)
      item = new Pilot();
    let ref = this.dialog.open(PilotBadgeDialogComponent, { data: {...item}, disableClose: true, width: "400px", maxWidth: '100%' });
    ref.afterClosed().subscribe(async (x:Pilot) => {
      if(x){
        await this.store.dispatch(new UpdateBadgesPilot(x)).toPromise();
        this.notify.showSnackbar("Auszeichnungen gespeichert");
      }
    })
  }

  addOrEdit(item?:Pilot){
    if(!item)
      item = new Pilot();
    let ref = this.dialog.open(PilotDialogComponent, { data: {...item}, disableClose: true });
    ref.afterClosed().subscribe(async (x:Pilot) => {
      if(x){
        await this.store.dispatch(new CreateOrUpdatePilot(x)).toPromise();
        this.notify.showSnackbar("Pilot gespeichert");
      }
    })
  }
  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, { data: { text: 'Pilot entfernen?', id: id } });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new RemovePilot(id)).toPromise();
        this.notify.showSnackbar("Pilot entfernt")
      }
    })
  }

}
