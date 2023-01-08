import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Badge } from 'src/app/@shared/model/badge';
import { Pilot } from 'src/app/@shared/model/pilot';
import { GetBadges } from 'src/app/@shared/states/badge.state';

@Component({
  selector: 'app-pilot-badge-dialog',
  templateUrl: './pilot-badge-dialog.component.html',
  styleUrls: ['./pilot-badge-dialog.component.less']
})
export class PilotBadgeDialogComponent implements OnInit {
  @ViewChild(MatSelect) select:MatSelect;
  item:Pilot;
  @Select() badge$:Observable<Badge[]>;
  allBadges:Badge[] = [];
  badges:Badge[] = [];
  newBadge:Badge;
  constructor(
    private dialogRef:MatDialogRef<PilotBadgeDialogComponent>,
    private store:Store,
    @Inject(MAT_DIALOG_DATA) public data:Pilot
  ) { 
    this.item = {...data, badges: [...data.badges]};
    this.badge$.subscribe(x => {
      this.allBadges = x;
      this.setDeltaBadges(x);
      if(x.length == 0){
        this.store.dispatch(new GetBadges());
      }
    })
  }

  add(){
    let val = this.newBadge;
    if(val)
      this.item.badges.push({...val} as any);
    this.setDeltaBadges(this.allBadges);
    this.newBadge = null;
  }

  remove(id:number){
    this.item.badges = this.item.badges.filter(x => x.id != id);
    this.setDeltaBadges(this.allBadges);
  }

  ngOnInit(): void {
  }
  setDeltaBadges(badges:Badge[]){
    this.badges = badges.filter(x => this.item.badges.find(y => y.id == x.id) == null);
  }

  ok(){
    this.dialogRef.close(this.item)
  }
  cancel(){
    this.dialogRef.close();
  }

}
