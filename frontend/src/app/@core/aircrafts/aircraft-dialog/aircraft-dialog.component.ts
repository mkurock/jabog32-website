import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Aircraft } from 'src/app/@shared/model/aircraft';

@Component({
  selector: 'app-aircraft-dialog',
  templateUrl: './aircraft-dialog.component.html',
  styleUrls: ['./aircraft-dialog.component.less']
})
export class AircraftDialogComponent implements OnInit {
  item:Aircraft;
  constructor(
    private dialogRef:MatDialogRef<AircraftDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Aircraft
  ) { 
    this.item = data;
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
