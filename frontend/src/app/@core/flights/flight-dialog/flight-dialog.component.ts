import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/@shared/model/flight';
import { Squadron } from 'src/app/@shared/model/squadron';
import { GetSquadrons } from 'src/app/@shared/states/squadron.state';

@Component({
  selector: 'app-flight-dialog',
  templateUrl: './flight-dialog.component.html',
  styleUrls: ['./flight-dialog.component.less']
})
export class FlightDialogComponent implements OnInit {
  item:Flight;
  squadrons:Squadron[] = [];
  @Select() squadron$:Observable<Squadron[]>;
  constructor(
    private dialogRef:MatDialogRef<FlightDialogComponent>,
    private store:Store,
    @Inject(MAT_DIALOG_DATA) public data:Flight
  ) { 
    this.item = data;
    this.squadron$.subscribe(x => {
      this.squadrons = x;
      if(x.length == 0){
        this.store.dispatch(new GetSquadrons());
      } else {
        let id = this.item.squadron?.id;
        if(id){
          this.item.squadron = this.squadrons.find(x => x.id == id);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  ok(){
    this.dialogRef.close(this.item)
  }
  cancel(){
    this.dialogRef.close();
  }

}
