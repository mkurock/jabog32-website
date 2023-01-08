import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less']
})
export class ConfirmComponent implements OnInit {
  text:string = "";
  constructor(
    private dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ConfirmDialogData
  ) { 
    this.text = data.text;
  }

  ok(){
    this.dialogRef.close(true);
  }
  cancel(){
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
  }

}
export class ConfirmDialogData {
  text:string;
}