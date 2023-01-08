import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserApplication, UserApplicationComment } from 'src/app/@shared/model/application';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { GetUserApplciations, UpdateUserApplciations } from 'src/app/@shared/states/userapplication.state';
import { ApplicationDialogComponent } from './application-dialog/application-dialog.component';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.less']
})
export class ApplicationsComponent implements OnInit {
  onlyActive:boolean = true;
  data:UserApplication[] = [];
  filteredData:UserApplication[] = [];
  @Select() userapplications$:Observable<UserApplication[]>;
  constructor(private store:Store, private dialog:MatDialog,  private notify:NotificationService) { 
    this.store.dispatch(new GetUserApplciations());
    this.userapplications$.subscribe(x => {
      this.data = x;
      this.filterChange();
    })
  }


  ngOnInit(): void {
  }

  edit(item:UserApplication){
    let ref = this.dialog.open(ApplicationDialogComponent, { data: item, width: '600px', maxWidth: '100%', disableClose: true });
    ref.afterClosed().subscribe(async (x:UserApplication) => {
      if(x){
        await this.store.dispatch(new UpdateUserApplciations(x.id, x)).toPromise();
        this.notify.showSnackbar("Bewerbung gespeichert");
      }
    })
  }

  getDateOfLast(comments:UserApplicationComment[]){
    let date = null;
    for(let c of comments){
      if(date == null || date < c.createdAt){
        date = c.createdAt;
      }
    }
    return date;
  }

  filterChange() {
    if(this.onlyActive){
      this.filteredData = this.data.filter(x => x.status != 'Aufgenommen' && x.status != "Abgelehnt");
    } else {
      this.filteredData = [...this.data];
    }
  }

}
