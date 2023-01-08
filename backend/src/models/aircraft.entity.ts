import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity } from "typeorm";


@Entity('aircraft')
export class AircraftEntity extends BaseEntity {
    @ApiProperty({ type: String })
    @Column({ type: 'varchar' })
    name:string;

    @ApiProperty({ type: String })
    @Column({ type: 'varchar', default: '' })
    iconUrl:string;

    @ApiProperty({ type: Boolean })
    @Column('boolean')
    availableForApplications:boolean;
}