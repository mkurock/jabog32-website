import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { FlightEntity } from "./flight.entity";
import { PilotEntity } from "./pilot.entity";


@Entity('squadron')
export class SquadronEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    number:string;

    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    name:string;

    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    patchUrl:string;

    @ApiProperty({ type: () => PilotEntity})
    @ManyToOne(t => PilotEntity )
    @JoinColumn()
    sqco: PilotEntity;

    @ApiProperty()
    @OneToMany(t => FlightEntity, x => x.squadron)
    flights:FlightEntity[]
}