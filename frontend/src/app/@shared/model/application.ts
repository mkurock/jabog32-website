import { Aircraft } from "./aircraft"
import { BaseModel } from "./base.model"

export class UserApplication extends BaseModel {
    firstName:string
    lastName:string
    callsign:string
    birthYear:string
    email:string
    location:string
    os:string
    internetConnection:string
    cpu:string
    ram:string
    graphicsCard:string
    joystick:string
    additionalPeripharal:string
    experienceDCS:string
    experienceSim:string
    additionalInfo:string
    status:string
    role:string
    acceptedRules:boolean
    commercialAviation:boolean
    aircraft?:Aircraft;
    aircraftId?:number;
    comments:UserApplicationComment[];
}

export class UserApplicationComment extends BaseModel {
    text:string;
}