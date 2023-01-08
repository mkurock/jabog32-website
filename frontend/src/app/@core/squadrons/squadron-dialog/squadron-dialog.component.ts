import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Squadron } from 'src/app/@shared/model/squadron';

@Component({
  selector: 'app-squadron-dialog',
  templateUrl: './squadron-dialog.component.html',
  styleUrls: ['./squadron-dialog.component.less']
})
export class SquadronDialogComponent implements OnInit {
  item:Squadron;
  constructor(
    private dialogRef:MatDialogRef<SquadronDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Squadron
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
