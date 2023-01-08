import { Component, OnInit, ViewChild } from '@angular/core';
import { DateSelectionModelChange, MatDateRangeInput } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { Absence } from 'src/app/@shared/model/absence';
import { AbsenceComponent } from '../absence.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {
  comment:string = "";
  begin:Date;
  end:Date;
  @ViewChild(MatDateRangeInput) datepicker: MatDateRangeInput<Date>;
  constructor(private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  ok(){
    let model = new Absence();
    model.begin = this.datepicker.value.start;
    model.end = this.datepicker.value.end;
    model.comment = this.comment;
    this.dialogRef.close(model);
  }

  cancel(){
    this.dialogRef.close(null);
  }

  dateSelected(event:DateSelectionModelChange<Date>){
  }

  formValid(){
    if(this.datepicker?.errorState == false && this.datepicker.value?.start != null && this.datepicker.value?.end != null){
      return true;
    } else {
      return false;
    }
  }

}
