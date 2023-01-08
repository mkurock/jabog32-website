import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntity } from "src/common/base.entity";
import { PilotEntity } from "./pilot.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity('badge')
export class BadgeEntity extends BaseEntity {
    @ApiProperty({ type: String })
    @Column({ type: 'nvarchar', default: '' })
    name:string;

    @ApiProperty({ type: String })
    @Column({ type: 'nvarchar', default: '' })
    imageUrl:string;

    @ApiProperty()
    @ManyToMany(t => PilotEntity, x => x.badges)
    pilots: PilotEntity[];
}