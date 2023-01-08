import { Body, Controller, Get, Post, Req, Request, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import * as fs from 'fs'
import * as path from 'path'
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags('files')
@Controller('api/files')
export class FilesApiController {
    _filePath:string;
    constructor() {
        this._filePath = process.env.FILESPATH;
    }
    get filePath() {
        return this._filePath + '/files';
    }

    @Roles('Dateibrowser - lesen')
    @UseGuards(AuthenticatedGuard)
    @Get()
    async getStructure(@Req() req){
        let files = this.walkDir(this.filePath);
        return files;
    }
    @Roles('Dateibrowser - schreiben')
    @UseGuards(AuthenticatedGuard)
    @Post('delete')
    async deleteFile(@Req() req, @Body() body) {
        let p = path.join(this._filePath, body.path);
        let s = fs.statSync(p);
        if(s.isDirectory()){
            fs.rmdirSync(p, { recursive: true });
        } else {
            fs.unlinkSync(p);
        }
        let files = this.walkDir(this.filePath);
        return files;
    }

    @Roles('Dateibrowser - schreiben')
    @UseGuards(AuthenticatedGuard)
    @Post('folder')
    async newFolder(@Req() req, @Body() body) {
        let p = path.join(this._filePath, body.path);
        fs.mkdirSync(p, { recursive: true });
        let files = this.walkDir(this.filePath);
        return files;
    }
    @Roles('Dateibrowser - schreiben')
    @UseGuards(AuthenticatedGuard)
    @Post('')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFiles(@Request() req, @UploadedFile() file, @Body() body) {
        let p = path.join(this._filePath, body.path, file.originalname);
        fs.writeFileSync(p, file.buffer);
        let files = this.walkDir(this.filePath);
        return files;
    }

    walkDir(p:string):FileModel[]{
        let files = fs.readdirSync(p);
        let result:FileModel[] = [];
        for(let f of files){
            let r = path.join(p, f);
            let s = fs.statSync(r);
            let i = new FileModel();
            i.name = f;
            let fp = path.join(p, f);
            i.path = fp.replace(this._filePath, "");
            if(s.isDirectory()){
                i.type = FileType.folder;
                i.children = this.walkDir(r);
            } else {
                i.type = FileType.file;
                i.ext = this.getFileExt(f);
            }       
            result.push(i);
        }
        return result;
    }
    getFileExt(filename:string){
        let pp = filename.split(".");
        if(pp.length == 1)
            return ""
        return pp[pp.length - 1];
    }
}

export class FileModel {
    name:string;
    type:FileType;
    ext:string;
    path:string;
    children?:FileModel[];
}
export enum FileType {
    file = 'file',
    folder = 'folder'
}