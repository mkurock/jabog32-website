import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { NotamAcknoledgementEntity } from "./notamAck.entity";

@Entity('notam')
export class NotamEntity extends BaseEntity {
    @ApiProperty({ type: String })
    @Column({ type: 'mediumtext' })
    text:string;

    @ApiProperty({ type: t => NotamAcknoledgementEntity })
    @OneToMany(t => NotamAcknoledgementEntity, x => x.notam)
    notamAcks:NotamAcknoledgementEntity[]

}