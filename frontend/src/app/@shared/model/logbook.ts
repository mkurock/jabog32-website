import { Moment } from "moment";
import { Aircraft } from "./aircraft";
import { BaseModel } from "./base.model";
import { Pilot } from "./pilot";

export class Logbook extends BaseModel {
    title:string;
    type:string;
    location:string;
    departure:Moment;
    landing:Moment;
    flightTime:string;
    logbookDetails:LogbookDetail[] = [new LogbookDetail()];
}
export class LogbookDetail extends BaseModel {
    pilot:Pilot;
    aircraft:Aircraft;
    airTargets:number = 0;
    groundTargets:number = 0;
    strategicTargets:number = 0;
}