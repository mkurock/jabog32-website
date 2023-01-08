import { BaseModel } from "./base.model";

export class Notam extends BaseModel {
    text:string;
    notamAcks:NotamAck[];
}
export class NotamAck {
    id:number;
    userId:string;
}