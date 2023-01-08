import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { PilotEntity } from "./pilot.entity";
import { SquadronEntity } from "./squadron.entity";

@Entity('flight')
export class FlightEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    number:string;

    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    name:string;

    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    callsign:string;

    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    flightNumber:string;

    @ApiProperty()
    @ManyToOne(t => SquadronEntity )
    @JoinColumn()
    squadron: SquadronEntity;

    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    leadPilot: PilotEntity
    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    leadRio: PilotEntity

    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    leadWingPilot: PilotEntity
    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    leadWingRio: PilotEntity

    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    secondElementLeadPilot: PilotEntity
    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    secondElementLeadRio: PilotEntity

    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    secondElementWingPilot: PilotEntity
    @ApiProperty({ type: () => PilotEntity })
    @ManyToOne(t => PilotEntity)
    @JoinColumn()
    secondElementWingRio: PilotEntity
}