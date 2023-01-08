import { BaseModel } from "./base.model";
import { Flight } from "./flight";

export class Squadron extends BaseModel {
    number:number;
    name:string;
    patchUrl:string;
    flights:Flight[];
}