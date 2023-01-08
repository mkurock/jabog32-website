import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ConfirmComponent, ConfirmDialogData } from 'src/app/@shared/components/confirm/confirm.component';
import { User } from 'src/app/@shared/model/user';
import { NotificationService } from 'src/app/@shared/services/notification.service';
import { CreateFolder, DeleteFile, FileModel, FileType, GetFileStructure, UploadFiles } from 'src/app/@shared/states/files.state';
import { UserState } from 'src/app/@shared/states/user.state';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { UploadComponent } from './upload/upload.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.less']
})
export class FilesComponent implements OnInit {
  @Select() file$:Observable<FileModel[]>;
  @Select(UserState.currentUser)currentUser$:Observable<User>;
  currentUser:User;
  files:FileModel[] = [];
  currentFolder:FileModel[];
  hasNavigated:boolean = false;
  path:string = "";
  upTitle:string = "";
  breadcrumb:BreadCrumItem[] = [
    { path: '', name: 'root', parent: '' }
  ];
  constructor(
    private store:Store,
    private dialog:MatDialog,
    private notify:NotificationService
  ) {
    this.currentUser$.subscribe(x => this.currentUser = x);
    this.file$.subscribe(x => {
      this.files = [...x].sort((a, b) => a.type > b.type ? -1 : 1);
      if(this.hasNavigated == false){
        this.currentFolder = this.files
      }
    })
    this.store.dispatch(new GetFileStructure());
  }

  ngOnInit(): void {
  }
  buildBreadCrumb(){
    let items:BreadCrumItem[] = [
    ];
    let parts = this.path.split("/");
    let par = "";
    let path;
    for(let p of parts){
      if(p == ""){
        items.push({ path: '', name: 'root', parent: '' });
      } else {
        let newP = path + '/' + p;
        items.push({ path: newP, name: p, parent: par });
        path = newP;
      }
    }
    this.breadcrumb = items;
  }
  navigate(item:FileModel){
    this.hasNavigated = true;
    this.path = item.path.replace("/files", "");
    this.upTitle = item.name;
    this.currentFolder = [...item.children].sort((a, b) => a.type > b.type ? -1 : 1);
    this.buildBreadCrumb();
  }
  navigateToPath(navPath?:string){
    let parts;
    if(navPath == null){
      parts = this.path.split("/");
      parts.pop();
    } else {
      parts = navPath.split("/");
    }
    parts.splice(0, 1);
    if(parts.length == 0){
      this.path = "";
      this.upTitle = "";
      this.currentFolder = this.files;
    } else {
      let start = [...this.files];

      for(let p of parts){
        let ii = start.find(x => x.name == p);
        this.path = ii.path.replace("/files", "");
        this.upTitle = ii.name;
        start = ii.children;
      }

      this.currentFolder = [...start].sort((a, b) => a.type > b.type ? -1 : 1);
    }
    this.buildBreadCrumb();
  }

  getFileIcon(file:FileModel){
    if(file.type == FileType.folder){
      return "folder";
    } else {
      switch(file.ext){
        case "png":
        case "jpg":
        case "jpeg":
        case "gif":
          return "file-image";
          default:
          return 'file';
      }

    }
  }
  getFileExt(filename:string){
    let pp = filename.split(".");
    if(pp.length == 1)
        return ""
    return pp[pp.length - 1];
  }

  upload(){
    this.hasNavigated = true;
    this.dialog.open(UploadComponent, { width: '600px', maxWidth: '100%', disableClose: true })
    .afterClosed().subscribe(async (x:File[]) => {
      if(x){
        this.uploadFiles(x);
      }
    });
  }
  async uploadFiles(files:File[]){
    let path = '/files/' + this.path;
    await this.store.dispatch(new UploadFiles(files, path)).toPromise();
    let clone = [...this.currentFolder];
    for(let f of files){
      let ext = this.getFileExt(f.name);
      clone.push({
        name: f.name,
        ext: ext,
        type: FileType.file,
        path: path + '/' + f.name
      });
    }
    this.currentFolder = clone.sort((a, b) => a.type > b.type ? -1 : 1);
    this.notify.showSnackbar("Datei(en) hochgeladen");
  }
  newFolder(){
    this.hasNavigated = true;
    this.dialog.open(NewFolderComponent, { width: '300px', disableClose: true })
    .afterClosed().subscribe(async x => {
      if(x){
        let path = '/files/' + this.path + '/' + x;
        await this.store.dispatch(new CreateFolder(path)).toPromise();
        let clone = [...this.currentFolder];
        clone.push({ name: x, type: FileType.folder, ext: "", path: path, children: [] })
        this.currentFolder = clone.sort((a, b) => a.type > b.type ? -1 : 1);
        this.notify.showSnackbar("Ordner angelegt");
      }
    });
  }
  delete(item:FileModel){
    this.dialog.open(ConfirmComponent, { data: { text: 'Datei/Ordner wirklich löschen?'} as ConfirmDialogData})
    .afterClosed().subscribe(async res => {
      if(res){
        await this.store.dispatch(new DeleteFile(item.path)).toPromise();
        this.currentFolder = this.currentFolder.filter(x => x != item);
        this.notify.showSnackbar("Datei/Ordner erfolgreich gelöscht");
      }
    })
  }
  deletable(item:FileModel){
    return (item.type == FileType.file || item.children?.length == 0);
  }
}
interface BreadCrumItem {
  path:string;
  name:string;
  parent:string;
}
