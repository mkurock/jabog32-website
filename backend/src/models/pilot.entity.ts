import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { AircraftEntity } from "./aircraft.entity";
import { BadgeEntity } from "./badge.entity";
import { FlightEntity } from "./flight.entity";
import { LogbookDetailEntity } from "./logbookdetail.entity";
import { RankEntity } from "./rank.entity";
import { UserEntity } from "./user.entity";

@Entity('pilot')
export class PilotEntity extends BaseEntity {
    @ApiProperty()
    @ManyToOne(t => RankEntity)
    @JoinColumn()
    rank:RankEntity

    @ApiProperty()
    @ManyToOne(x => UserEntity)
    @JoinColumn({ referencedColumnName: 'userId' })
    user:UserEntity

    @ApiProperty()
    @ManyToOne(t => AircraftEntity)
    @JoinColumn()
    firstAircraft:AircraftEntity

    @ApiProperty()
    @ManyToOne(t => AircraftEntity)
    @JoinColumn()
    secondAircraft:AircraftEntity

    @ApiProperty()
    @Column({ type: 'boolean', default: false })
    reserve:boolean

    @ApiProperty()
    @Column({ type: 'boolean', default: false })
    deleted:boolean

    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.leadPilot)
    leadPilotFlights: FlightEntity[];
    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.leadRio)
    leadRioFlights: FlightEntity[];

    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.leadWingPilot)
    leadWingPilotFlights: FlightEntity[];
    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.leadWingRio)
    leadWingRioFlights: FlightEntity[];


    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.secondElementLeadPilot)
    secondElementLeadPilotFlights: FlightEntity[];
    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.secondElementLeadRio)
    secondElementLeadRioFlights: FlightEntity[];

    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.secondElementWingPilot)
    secondElementWingPilotFlights: FlightEntity[];
    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.secondElementWingRio)
    secondElementWingRioFlights: FlightEntity[];

    @ApiProperty()
    @OneToMany(t => LogbookDetailEntity, x => x.pilot)
    logbookDetails: LogbookDetailEntity[]

    @ApiProperty()
    @ManyToMany(t => BadgeEntity, t => t.pilots)
    @JoinTable({ name: 'pilot_badge'})
    badges: BadgeEntity[];

    get airTargetsTotal(){
        let result = 0;
        if(this.logbookDetails != null){
            result = this.logbookDetails.reduce((a, b) => a += b.airTargets, 0);
        }
        return result;
    }
    get groundTargetsTotal(){
        let result = 0;
        if(this.logbookDetails != null){
            result = this.logbookDetails.reduce((a, b) => a += b.groundTargets, 0);
        }
        return result;
    }
    get strategicTargetsTotal(){
        let result = 0;
        if(this.logbookDetails != null){
            result = this.logbookDetails.reduce((a, b) => a += b.strategicTargets, 0);
        }
        return result;
    }
    get flightHoursTotal(){
        let result = "";
        if(this.logbookDetails != null){
            let minutes = this.logbookDetails.reduce((a, b) => a += (
                    (b.logbook?.landing.getTime() - b.logbook?.departure.getTime()) / 1000 / 60
                ), 0);
            // let hh = Math.floor(minutes / 60);
            // let mm = Math.round(minutes % 60);
            // result += hh;
            // result += ":"
            // result += mm >= 10 ? mm : "0" + mm;
            result = (minutes / 60).toFixed(2);
        }
        return result;
    }
}