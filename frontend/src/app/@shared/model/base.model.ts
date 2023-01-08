import { User } from "./user";

export class BaseModel {
    id:number;
    createdBy:User;
    modifiedBy:User;
    createdAt:Date;
    modifiedAt:Date;
}