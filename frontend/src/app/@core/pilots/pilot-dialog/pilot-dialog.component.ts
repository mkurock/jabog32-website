import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/@shared/model/aircraft';
import { Pilot } from 'src/app/@shared/model/pilot';
import { Rank } from 'src/app/@shared/model/rank';
import { User } from 'src/app/@shared/model/user';
import { GetAircrafts } from 'src/app/@shared/states/aircraft.state';
import { GetRanks } from 'src/app/@shared/states/rank.state';
import { GetUsers, UserState } from 'src/app/@shared/states/user.state';

@Component({
  selector: 'app-pilot-dialog',
  templateUrl: './pilot-dialog.component.html',
  styleUrls: ['./pilot-dialog.component.less']
})
export class PilotDialogComponent implements OnInit {
  item:Pilot;
  ranks:Rank[] = [];
  users:User[] = [];
  filteredUsers:User[] = [];
  userDisabled:boolean = true;
  @Select() rank$:Observable<Rank[]>;
  @Select() aircraft$:Observable<Aircraft[]>;
  aircrafts:Aircraft[] = [];
  @Select(UserState.users) user$:Observable<User[]>;
  constructor(
    private dialogRef:MatDialogRef<PilotDialogComponent>,
    private store:Store,
    @Inject(MAT_DIALOG_DATA) public data:Pilot
  ) {
    this.item = data;
    this.userDisabled = this.item.id != null;
    this.rank$.subscribe(x => {
      this.ranks = x;
      if(x.length == 0){
        this.store.dispatch(new GetRanks());
      } else {
        let id = this.item.rank?.id;
        if(id){
          this.item.rank = this.ranks.find(x => x.id == id);
        }
      }
    });

    this.user$.subscribe(x => {
      this.users = x;
      this.filteredUsers = [...this.users];
      if(x.length == 0){
        this.store.dispatch(new GetUsers());
      } else {
        let id = this.item.user?.id;
        if(id){
          this.item.user = this.users.find(x => x.id == id);
        }
      }
    });

    this.aircraft$.subscribe(x => {
      this.aircrafts = x;
      if(x.length == 0){
        this.store.dispatch(new GetAircrafts());
      } else {
        let id1 = this.item.firstAircraft?.id;
        let id2 = this.item.secondAircraft?.id;
        if(id1){
          this.item.firstAircraft = this.aircrafts.find(x => x.id == id1);
        }
        if(id2){
          this.item.secondAircraft = this.aircrafts.find(x => x.id == id2);
        }
      }
    });
  }

  filterUser(event){
    let text = typeof(this.item.user) == "string" ? this.item.user as string : "";
    if(text.length <= 2){
      this.filteredUsers = [...this.users];
    } else {
      text = text.toLowerCase()
      this.filteredUsers = this.users.filter(x =>
        ~x.userName.toLowerCase().indexOf(text)
      );
    }
  }

  ngOnInit(): void {
  }

  ok(){
    this.dialogRef.close(this.item)
  }
  cancel(){
    this.dialogRef.close();
  }

  displayFn(user:User){
    if(!user)
      return "";
    return `${user?.userName} (${user?.email})`
  }

}
