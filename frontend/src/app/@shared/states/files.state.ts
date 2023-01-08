import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";

export class GetFileStructure {
    static readonly type = "[Files] GetFileStructure"
}
export class DeleteFile {
    static readonly type = "[Files] DeleteFile"
    constructor(public path:string) {}
}
export class CreateFolder {
    static readonly type = "[Files] CreateFolder"
    constructor(public path:string) {}
}
export class UploadFiles {
    static readonly type = "[Files] UploadFiles"
    constructor(public files:File[], public path:string) {}
}

@State<FileModel[]>({
    name: 'file',
    defaults: []
})
@Injectable()
export class FileState {
    constructor(private http:HttpClient) {}
    
    @Action(GetFileStructure)
    async GetFileStructure(ctx:StateContext<FileModel[]>){
        let result = await this.http.get('/api/files').toPromise() as FileModel[];
        ctx.setState(result);
    }
    @Action(DeleteFile)
    async DeleteFile(ctx:StateContext<FileModel[]>, action:DeleteFile){
        let result = await this.http.post('/api/files/delete', { path: action.path }).toPromise() as FileModel[];
        ctx.setState(result);
    }
    @Action(CreateFolder)
    async CreateFolder(ctx:StateContext<FileModel[]>, action:CreateFolder){
        let result = await this.http.post('/api/files/folder', { path: action.path }).toPromise() as FileModel[];
        ctx.setState(result);
    }
    @Action(UploadFiles)
    async UploadFiles(ctx:StateContext<FileModel[]>, action:UploadFiles){
        let files = action.files;
        let fileKeys = [];
        for(let i = 0; i < files.length; i++){
            let formData = new FormData();
            formData.append('path', action.path);
            formData.append('file', files[i], files[i].name);
            let result = await this.http.post('/api/files', formData).toPromise() as FileModel[];
        }
        ctx.dispatch(new GetFileStructure());
    }
}
export class FileModel {
    name:string;
    type:FileType;
    ext:string;
    children?:FileModel[];
    path:string;
}
export enum FileType {
    file = 'file',
    folder = 'folder'
}