import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer/decorators";
import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { LogbookDetailEntity } from "./logbookdetail.entity";

@Entity('logbook')
export class LogbookEntity extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    title:string;

    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    type:string;

    @ApiProperty()
    @Column({ type: 'nvarchar', default: '' })
    location:string;

    @ApiProperty()
    @Column({ type: 'datetime' })
    departure:Date;

    @ApiProperty()
    @Column({ type: 'datetime' })
    landing:Date;

    @ApiProperty()
    @OneToMany(t => LogbookDetailEntity, x => x.logbook)
    logbookDetails:LogbookDetailEntity[]

    @ApiProperty({ readOnly: true })
    @Expose()
    get flightTime():string {
        let result = "";
        if(this.departure && this.departure.getTime && this.landing && this.landing.getTime){
            let diff = this.landing.getTime() - this.departure.getTime();
            let hourDiff = diff / 1000 / 60 / 60
            let hh = Math.floor(hourDiff);
            let mm = Math.round((hourDiff - hh) * 60);
            result += hh;
            result += ":"
            result += mm >= 10 ? mm : "0" + mm;
        }
        return result;
    }
}