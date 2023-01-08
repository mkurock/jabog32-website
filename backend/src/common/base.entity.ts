import { UserEntity } from "src/models/user.entity";
import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(x => UserEntity)
    @JoinColumn({ referencedColumnName: 'userId', name: 'modifiedById' })
    modifiedBy:UserEntity
    @Column({ type: 'varchar', nullable: true })
    modifiedById:string;

    @UpdateDateColumn()
    modifiedAt:Date

    @ManyToOne(x => UserEntity)
    @JoinColumn({ referencedColumnName: 'userId', name: 'createdById' })
    createdBy:UserEntity
    @Column({ type: 'varchar', nullable: true })
    createdById:string;

    @CreateDateColumn()
    createdAt:Date
}