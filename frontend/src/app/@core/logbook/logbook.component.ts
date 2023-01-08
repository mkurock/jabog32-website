import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Logbook } from 'src/app/@shared/model/logbook';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { CreateOrUpdateLogbook, GetLogbook } from 'src/app/@shared/states/logbook.state';
import { LogbookDialogComponent } from './logbook-dialog/logbook-dialog.component';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.less']
})
export class LogbookComponent implements OnInit {
  filter = {
    start: null,
    end: null
  }
  @Select() logbook$:Observable<Logbook[]>;
  constructor(private store:Store, private dialog:MatDialog, private notify:NotificationService) { 
    this.store.dispatch(new GetLogbook())
  }

  ngOnInit(): void {
  }

  onFilter(){
    if(this.filter.start && this.filter.end){
      this.store.dispatch(new GetLogbook(this.filter.start, this.filter.end));
    }
  }
  edit(item?:Logbook){
    item = item ? item : new Logbook();
    let ref = this.dialog.open(LogbookDialogComponent, { width: '800px', maxWidth: '100%', data: item, disableClose: true });
    ref.afterClosed().subscribe(async x => {
      if(x){
        await this.store.dispatch(new CreateOrUpdateLogbook(x)).toPromise();
        this.notify.showSnackbar("Einsatzbericht gespeichert");
      }
    })
  }

  clearFilter(){
    this.filter = {
      start: null,
      end: null
    }
    this.store.dispatch(new GetLogbook());
  }

}
