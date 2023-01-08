import { ApiProperty } from "@nestjs/swagger"
import { BaseEntity } from "src/common/base.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { AircraftEntity } from "./aircraft.entity"
import { UserApplicationCommentEntity } from "./userapplicationcomment.entity"

@Entity('userapplication')
export class UserApplicationEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    firstName:string
    
    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    lastName:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    callsign:string

    @ApiProperty()
    @Column({ type: 'int', default: 0 })
    birthYear:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    email:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    location:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    os:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    internetConnection:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    cpu:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    ram:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    graphicsCard:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    joystick:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    additionalPeripharal:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    experienceDCS:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    experienceSim:string

    @ApiProperty()
    @Column({ type: 'mediumtext' })
    additionalInfo:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    status:string

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    role:string

    @ApiProperty()
    @Column({ type: 'boolean' })
    acceptedRules:boolean

    @ApiProperty()
    @Column({ type: 'boolean' })
    commercialAviation:boolean

    @ApiProperty()
    @ManyToOne(t => AircraftEntity)
    @JoinColumn()
    aircraft?:AircraftEntity;
    @Column()
    aircraftId?:number;

    @ApiProperty()
    @OneToMany(t => UserApplicationCommentEntity, x => x.userApplication)
    comments:UserApplicationCommentEntity[];
}