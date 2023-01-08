import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { NotamAcknoledgementEntity } from "./notamAck.entity";
import { RoleEntity } from "./roles.entity";

@Entity('user')
export class UserEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @Column({ type: 'varchar', unique: true })
    userId:string;

    @ApiProperty()
    @Column({ type: 'varchar' })
    email:string;

    @ApiProperty()
    @Column()
    forumUserId:number

    @ApiProperty()
    @Column({ type: 'varchar' })
    userName:string;

    @ApiProperty()
    @Column({ type: 'boolean', default: false })
    deleted:boolean;

    newPassword?:string;

    @ApiProperty()
    @ManyToMany(t => RoleEntity, x => x.users)
    @JoinTable({ name: 'users_roles', joinColumn: { name: 'userId', referencedColumnName: 'userId' }, 
        inverseJoinColumn: { name: 'roleId', referencedColumnName: 'roleId' } })
    roles: RoleEntity[]

    // @ApiProperty()
    // @OneToMany(t => NotamAcknoledgementEntity, x => x.user)
    // notamAcks:NotamAcknoledgementEntity[];
}