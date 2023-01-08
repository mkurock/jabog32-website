import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity } from "typeorm";

@Entity('rank')
export class RankEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'int', default: 100 })
    order:number;

    @ApiProperty()
    @Column({ type: 'varchar' })
    name:string;

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    iconUrl:string;
}