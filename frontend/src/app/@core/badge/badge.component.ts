import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { Badge } from 'src/app/@shared/model/badge';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { CreateOrUpdateBadge, GetBadges, RemoveBadge } from 'src/app/@shared/states/badge.state';
import { BadgeDialogComponent } from './badge-dialog/badge-dialog.component';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less']
})
export class BadgeComponent implements OnInit {

  @Select() badge$:Observable<Badge[]>;
  constructor(private store:Store, private dialog:MatDialog,  private notify:NotificationService) { 
    this.store.dispatch(new GetBadges());
  }


  ngOnInit(): void {
  }

  addOrEdit(item?:Badge){
    if(!item)
      item = new Badge();
    let ref = this.dialog.open(BadgeDialogComponent, { data: {...item}, disableClose: true });
    ref.afterClosed().subscribe(async x => {
      if(x){
        await this.store.dispatch(new CreateOrUpdateBadge(x)).toPromise();
        this.notify.showSnackbar("Auszeichnung gespeichert");
      }
    })
  }
  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, { data: { text: 'Auszeichnung entfernen?', id: id }, disableClose: true });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new RemoveBadge(id)).toPromise();
        this.notify.showSnackbar("Auszeichnung entfernt")
      }
    })
  }

}
