import { ApiProperty } from "@nestjs/swagger"
import { BaseEntity } from "src/common/base.entity"
import { Column, Entity } from "typeorm"

@Entity('page')
export class PageEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    name:string
    
    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    title:string

    @ApiProperty()
    @Column({ type: 'mediumtext' })
    content:string
}