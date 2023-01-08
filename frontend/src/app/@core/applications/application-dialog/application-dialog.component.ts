import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/@shared/model/aircraft';
import { UserApplication } from 'src/app/@shared/model/application';
import { User } from 'src/app/@shared/model/user';
import { GetAircrafts } from 'src/app/@shared/states/aircraft.state';
import { UserState } from 'src/app/@shared/states/user.state';
import { CreateApplciationComment } from 'src/app/@shared/states/userapplication.state';

@Component({
  selector: 'app-application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.less']
})
export class ApplicationDialogComponent implements OnInit {
  item:UserApplication;
  newComment:string = '';
  status:string[] = ['Neu', 'In Bearbeitung', 'Aufgenommen', 'Abgelehnt'];
  @Select(UserState.currentUser)currentUser$:Observable<User>;
  currentUser:User;
  @Select() aircraft$:Observable<Aircraft[]>;
  aircrafts:Aircraft[] = [];
  constructor(
    private dialogRef:MatDialogRef<ApplicationDialogComponent>,
    private store:Store,
    @Inject(MAT_DIALOG_DATA) public data:UserApplication
  ) { 
    this.item = {...data, comments: [...data.comments] };
    this.sortComments();
    this.currentUser$.subscribe(x => this.currentUser = x);
    this.aircraft$.subscribe(x => {
      this.aircrafts = x;
      if(x.length == 0){
        this.store.dispatch(new GetAircrafts());
      } else {
        let id = this.item.aircraft?.id;
        if(id){
          this.item.aircraft = this.aircrafts.find(x => x.id == id);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  async addComment(){
    this.store.dispatch(new CreateApplciationComment(this.item.id, this.newComment)).toPromise();
    let newComement = { text: this.newComment, createdBy: this.currentUser, createdAt: new Date() } as any;
    this.item.comments.splice(0, 0, newComement);
    this.newComment = '';
  }

  sortComments(){
    this.item.comments = this.item.comments.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
  }

  ok(){
    this.dialogRef.close(this.item)
  }
  cancel(){
    this.dialogRef.close();
  }

}
