import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { Rank } from 'src/app/@shared/model/rank';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { CreateOrUpdateRank, GetRanks, RemoveRank } from 'src/app/@shared/states/rank.state';
import { RankDialogComponent } from './rank-dialog/rank-dialog.component';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.less']
})
export class RanksComponent implements OnInit {

  @Select() rank$:Observable<Rank[]>;
  constructor(private store:Store, private dialog:MatDialog,  private notify:NotificationService) { 
    this.store.dispatch(new GetRanks());
  }


  ngOnInit(): void {
  }

  addOrEdit(item?:Rank){
    if(!item)
      item = new Rank();
    let ref = this.dialog.open(RankDialogComponent, { data: {...item}, disableClose: true });
    ref.afterClosed().subscribe(async x => {
      if(x){
        await this.store.dispatch(new CreateOrUpdateRank(x)).toPromise();
        this.notify.showSnackbar("Rang gespeichert");
      }
    })
  }
  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, { data: { text: 'Rang entfernen?', id: id } });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new RemoveRank(id)).toPromise();
        this.notify.showSnackbar("Rang entfernt")
      }
    })
  }

}
