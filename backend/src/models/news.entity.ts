import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity } from "typeorm";

@Entity('news')
export class NewsEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    subject:string;

    @ApiProperty()
    @Column({ type: 'mediumtext' })
    body:string;

    @ApiProperty()
    @Column({ type: 'mediumtext' })
    preview:string;

    @ApiProperty()
    @Column({ type: 'varchar', default: '' })
    imageUrl:string;

    @ApiProperty()
    @Column({ default: false })
    cover: boolean;
}