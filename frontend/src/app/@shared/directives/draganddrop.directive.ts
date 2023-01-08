import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { User } from '../model/user';

@Directive({
  selector: '[appDnd]'
})
export class DraganddropDirective {

  @Output() onFilesDropped:EventEmitter<File[]> = new EventEmitter<File[]>();
  @Input() disabled:boolean = false;

  @HostBinding('class.fileover')
  fileOver:boolean = false;

  constructor() { }

  @HostListener('dragover', ['$event'])
  onDragOver(evt:DragEvent){
    if(!this.disabled){
      evt.preventDefault();
      evt.stopPropagation();
      this.fileOver = true;
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(evt:DragEvent){
    if(!this.disabled){
      evt.preventDefault();
      evt.stopPropagation();
      this.fileOver = false;
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(evt:DragEvent){
    if(!this.disabled){
      evt.preventDefault();
      evt.stopPropagation();
      this.fileOver = false;
      if(evt.dataTransfer.files.length > 0){
        console.log("Files dropped: ");
        console.log(evt.dataTransfer.files);
        let files:File[] = [];
        for(let i = 0; i < evt.dataTransfer.files.length; i++){
          files.push(evt.dataTransfer.files[i]);
        }
        this.onFilesDropped.emit(files);
      }
    }
  }
}
