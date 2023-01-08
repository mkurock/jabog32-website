import { BaseModel } from "./base.model";

export class Aircraft extends BaseModel {
    name:string;
    iconUrl:string;
    availableForApplications:boolean = true;
}