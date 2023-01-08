import { BaseModel } from "./base.model";

export class Absence extends BaseModel {
  begin: Date;
  end: Date;
  comment: string;
}