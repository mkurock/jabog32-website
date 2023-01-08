import { Aircraft } from "./aircraft";
import { Badge } from "./badge";
import { BaseModel } from "./base.model";
import { Rank } from "./rank";
import { User } from "./user";

export class Pilot extends BaseModel {
    user:User;
    rank:Rank;
    firstAircraft:Aircraft;
    secondAircraft:Aircraft;
    reserve:boolean;
    badges:Badge[];
}