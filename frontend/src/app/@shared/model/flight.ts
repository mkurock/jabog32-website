import { BaseModel } from "./base.model";
import { Pilot } from "./pilot";
import { Squadron } from "./squadron";

export class Flight extends BaseModel {
    name:string;
    callsign:string;
    squadron:Squadron;

    leadPilot: Pilot;
    leadRio: Pilot

    leadWingPilot: Pilot
    leadWingRio: Pilot

    secondElementLeadPilot: Pilot
    secondElementLeadRio: Pilot

    secondElementWingPilot: Pilot
    secondElementWingRio: Pilot
}