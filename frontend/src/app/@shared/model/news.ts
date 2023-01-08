import { BaseModel } from "./base.model";

export class News extends BaseModel {
    subject:string;
    preview:string;
    body:string;
    imageUrl:string;
    cover:boolean = false;
}