import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { Squadron } from 'src/app/@shared/model/squadron';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { CreateOrUpdateSquadron, GetSquadrons, RemoveSquadron } from 'src/app/@shared/states/squadron.state';
import { SquadronDialogComponent } from './squadron-dialog/squadron-dialog.component';

@Component({
  selector: 'app-squadrons',
  templateUrl: './squadrons.component.html',
  styleUrls: ['./squadrons.component.less']
})
export class SquadronsComponent implements OnInit {

  @Select() squadron$:Observable<Squadron[]>;
  constructor(private store:Store, private dialog:MatDialog,  private notify:NotificationService) { 
    this.store.dispatch(new GetSquadrons());
  }


  ngOnInit(): void {
  }

  addOrEdit(item?:Squadron){
    if(!item)
      item = new Squadron();
    let ref = this.dialog.open(SquadronDialogComponent, { data: {...item}, disableClose: true });
    ref.afterClosed().subscribe(async x => {
      if(x){
        await this.store.dispatch(new CreateOrUpdateSquadron(x)).toPromise();
        this.notify.showSnackbar("Staffel gespeichert");
      }
    })
  }
  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, { data: { text: 'Staffel entfernen?', id: id } });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new RemoveSquadron(id)).toPromise();
        this.notify.showSnackbar("Staffel entfernt")
      }
    })
  }
}
