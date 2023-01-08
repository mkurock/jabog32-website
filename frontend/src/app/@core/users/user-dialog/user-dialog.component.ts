import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Role, User } from 'src/app/@shared/model/user';
import { GetRoles, UserState } from 'src/app/@shared/states/user.state';
import { RankDialogComponent } from '../../ranks/rank-dialog/rank-dialog.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.less']
})
export class UserDialogComponent implements OnInit {
  item:User;
  roles:Role[] = [];
  @Select(UserState.roles) roles$:Observable<Role[]>;
  constructor(
    private dialogRef:MatDialogRef<RankDialogComponent>,
    private store:Store,
    @Inject(MAT_DIALOG_DATA) public data:User
  ) { 
    this.item = data;
    this.roles$.subscribe(x => {
      this.setRoles(x);
      if(x.length == 0){
        this.store.dispatch(new GetRoles());
      }
    })
  }

  setRoles(roles:Role[]){
    this.roles = roles.map(x => {
      return {...x};
    } );
    this.roles = this.roles.map(x => {
      x.checked = this.item.roles.find(y => y.roleId == x.roleId) != null;
      return x;
    });
  }

  ngOnInit(): void {
  }

  ok(){
    this.item.roles = this.roles.filter(x => x.checked);
    this.dialogRef.close(this.item)
  }
  cancel(){
    this.dialogRef.close();
  }

}
