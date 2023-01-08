import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rank } from 'src/app/@shared/model/rank';

@Component({
  selector: 'app-rank-dialog',
  templateUrl: './rank-dialog.component.html',
  styleUrls: ['./rank-dialog.component.less']
})
export class RankDialogComponent implements OnInit {
  item:Rank;
  constructor(
    private dialogRef:MatDialogRef<RankDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Rank
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
