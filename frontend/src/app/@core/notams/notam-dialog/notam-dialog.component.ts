import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Notam } from 'src/app/@shared/model/notam';

@Component({
  selector: 'app-notam-dialog',
  templateUrl: './notam-dialog.component.html',
  styleUrls: ['./notam-dialog.component.less']
})
export class NotamDialogComponent implements OnInit {
  notam:Notam;
  constructor(
    private dialogRef:MatDialogRef<NotamDialogComponent>
  ) {
    this.notam = new Notam();
  }

  ngOnInit(): void {
  }

  ok(){
    this.dialogRef.close(this.notam);
  }

  cancel(){
    this.dialogRef.close(null);
  }

  formValid(){
    return this.notam.text != null && this.notam.text != "";
  }

}
