import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Badge } from 'src/app/@shared/model/badge';

@Component({
  selector: 'app-badge-dialog',
  templateUrl: './badge-dialog.component.html',
  styleUrls: ['./badge-dialog.component.less']
})
export class BadgeDialogComponent implements OnInit {
  item:Badge;
  constructor(
    private dialogRef:MatDialogRef<BadgeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Badge
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
