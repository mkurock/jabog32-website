import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('absence')
export class AbsenceEntity extends BaseEntity {
    @Column({ type: 'datetime' })
    @ApiProperty({ type: Date })
    begin:Date;

    @Column({ type: 'datetime' })
    @ApiProperty({ type: Date })
    end:Date;

    @Column({ type: 'mediumtext', nullable: true })
    @ApiProperty({ type: String, nullable: true })
    comment:string;

    @ApiProperty({ type: UserEntity })
    @ManyToOne(t => UserEntity)
    @JoinColumn()
    user: UserEntity;
}