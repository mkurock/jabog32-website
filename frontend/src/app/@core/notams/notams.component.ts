import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, ofActionCompleted, ofActionErrored, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent, ConfirmDialogData } from 'src/app/@shared/components/confirm/confirm.component';
import { Notam } from 'src/app/@shared/model/notam';
import { User } from 'src/app/@shared/model/user';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { AcknowledgeNotam, CreateNotam, DeleteNotam, GetNotam, NotamState } from 'src/app/@shared/states/notam.state';
import { UserState } from 'src/app/@shared/states/user.state';
import { NotamDialogComponent } from './notam-dialog/notam-dialog.component';

@Component({
  selector: 'app-notams',
  templateUrl: './notams.component.html',
  styleUrls: ['./notams.component.less']
})
export class NotamsComponent implements OnInit {
  @Select(NotamState) data: Observable<Notam>;
  @Select(UserState.currentUser)currentUser$:Observable<User>;
  currentUser:User;
  constructor(
    private store: Store,
    private notify:NotificationService,
    private dialog: MatDialog
  ) { 
    this.currentUser$.subscribe(x => this.currentUser = x);
    this.store.dispatch(new GetNotam());
  }

  ngOnInit(): void {
  }

  async acknowledge(id:number){
    try {
      await this.store.dispatch(new AcknowledgeNotam(id)).toPromise();
      this.notify.showSnackbar("Notam acknowledged");
    } catch(e){

    }
  }

  add(){
    const dialogRef = this.dialog.open(NotamDialogComponent, { width: '900px', maxWidth: '100%', disableClose: true });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new CreateNotam(result));
        this.notify.showSnackbar("Notam erfolgreich erstellt");
      }
    })
  }

  delete(id:number){
    let data:ConfirmDialogData = {
      text: "Notam wirklich löschen?"
    }
    const dialogRef = this.dialog.open(ConfirmComponent, { data });
    dialogRef.afterClosed().subscribe(async r => {
      if(r){
        await this.store.dispatch(new DeleteNotam(id));
        this.notify.showSnackbar("Notam gelöscht");
      }
    })
  }

  hasAcknowledged(item:Notam){
    return item.notamAcks.find(x => x.userId == this.currentUser.userId) ? true : false;
  }
}
