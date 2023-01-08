import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { NotamEntity } from "./notam.entity";
import { UserEntity } from "./user.entity";

@Entity('notamack')
export class NotamAcknoledgementEntity extends BaseEntity {
    @ManyToOne(t => UserEntity)
    @JoinColumn({ name: 'userId', referencedColumnName: 'userId' })
    user: UserEntity;
    @Column()
    userId:string;

    @ManyToOne(t => NotamEntity)
    @JoinColumn({ name: 'notamId' })
    notam: NotamEntity;
    @Column()
    notamId:number;
}