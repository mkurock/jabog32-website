import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/@shared/components/confirm/confirm.component';
import { User } from 'src/app/@shared/model/user';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { GetUsers, RemoveUser, UpdateUser, UserState } from 'src/app/@shared/states/user.state';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  searchterm:string = "";
  @Select(UserState.users) users$:Observable<User[]>;
  users:User[] = [];
  filteredUsers:User[] = [];
  constructor(private store:Store, private dialog:MatDialog,  private notify:NotificationService) { 
    this.store.dispatch(new GetUsers());
    this.users$.subscribe(x => { 
      this.users = x;
      this.onSearch();
    });
  }

  onSearch(){
    if(this.searchterm == ""){
      this.filteredUsers = [...this.users];
    } else {
      let term = this.searchterm.toLowerCase();
      this.filteredUsers = this.users.filter(x => ~x.userName.toLowerCase().indexOf(term) || ~x.email.toLowerCase().indexOf(term));
    }
  }


  ngOnInit(): void {
  }

  addOrEdit(item?:User){
    if(!item)
      item = new User();
    let ref = this.dialog.open(UserDialogComponent, { data: {...item}, disableClose: true });
    ref.afterClosed().subscribe(async x => {
      if(x){
        await this.store.dispatch(new UpdateUser(x)).toPromise();
        this.notify.showSnackbar("Benutzer gespeichert");
      }
    })
  }
  delete(id:number){
    const dialogRef = this.dialog.open(ConfirmComponent, { data: { text: 'Benutzer entfernen?', id: id } });
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.store.dispatch(new RemoveUser(id)).toPromise();
        this.notify.showSnackbar("Benutzer entfernt")
      }
    })
  }

}
