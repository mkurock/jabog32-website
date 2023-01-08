import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NewFolderComponent } from '../new-folder/new-folder.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  files:File[] = [];
  constructor(
    private dialogRef:MatDialogRef<UploadComponent>
  ) { }
  ngOnInit(): void {
  }
  filesSelected(ev){
    let files = ev.target.files as FileList;
    for(let i = 0; i < files.length; i++){
      this.files.push(files[i]);
    }
  }
  ok(){
    this.dialogRef.close(this.files);
  }
  cancel(){
    this.dialogRef.close();
  }
}
