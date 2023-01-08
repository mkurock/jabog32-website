import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { Absence } from 'src/app/@shared/model/absence';
import { User } from 'src/app/@shared/model/user';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { AbsenceState, CreateAbsence, GetAbsences, RemoveAbsence } from 'src/app/@shared/states/absence.state';
import { UserState } from 'src/app/@shared/states/user.state';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.less']
})
export class AbsenceComponent implements OnInit {

  @Select(AbsenceState)absences:Observable<Absence[]>;
  @Select(UserState.currentUser)currentUser$:Observable<User>;
  currentUser:User;
  public filter:string = 'latest'

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private notify:NotificationService
    ) {
    this.currentUser$.subscribe(x => this.currentUser = x);
    store.dispatch(new GetAbsences(this.filter));
  }

  add(){
    const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new CreateAbsence(result));
        this.notify.showSnackbar("Abwesenheit erfolgreich eingetragen")
      }
    })
  }

  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, { disableClose: true, data: { text: 'Abwesendheit entfernen?', id: id } });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new RemoveAbsence(id));
        this.notify.showSnackbar("Abwesenheit entfernt")
      }
    })
  }

  ngOnInit(): void {
  }

  onFilterChange(){
    this.store.dispatch(new GetAbsences(this.filter));
  }
}
