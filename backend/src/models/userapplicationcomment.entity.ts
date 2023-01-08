import { ApiProperty } from "@nestjs/swagger"
import { BaseEntity } from "src/common/base.entity"
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { UserApplicationEntity } from "./userapplication.entity"

@Entity('userapplicationcomment')
export class UserApplicationCommentEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'mediumtext' })
    text:string

    @ApiProperty({ type: () => UserApplicationEntity })
    @ManyToOne(t => UserApplicationEntity)
    @JoinColumn()
    userApplication:UserApplicationEntity;
}