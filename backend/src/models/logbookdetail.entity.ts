import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AircraftEntity } from "./aircraft.entity";
import { LogbookEntity } from "./logbook.entity";
import { PilotEntity } from "./pilot.entity";

@Entity('logbookdetail')
export class LogbookDetailEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'int' })
    airTargets:number;

    @ApiProperty()
    @Column({ type: 'int' })
    groundTargets:number;

    @ApiProperty()
    @Column({ type: 'int' })
    strategicTargets:number;

    @ApiProperty()
    @ManyToOne(t => AircraftEntity)
    @JoinColumn()
    aircraft:AircraftEntity

    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    pilot:PilotEntity

    @ApiProperty()
    @ManyToOne(t => LogbookEntity)
    @JoinColumn()
    logbook:LogbookEntity
}