import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('roles')
export class RoleEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty()
    @Column({ type: 'varchar', unique: true })
    roleId:string;

    @ApiProperty()
    @Column({ type: 'text' })
    name:string

    @ApiProperty()
    @ManyToMany(t => UserEntity, u => u.roles)
    users:UserEntity[]
}