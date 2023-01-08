import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { LogbookDetailEntity } from "src/models/logbookdetail.entity";
import { Repository } from "typeorm";

@Injectable()
export class LogbookDetailApiService extends TypeOrmCrudService<LogbookDetailEntity> {
    constructor(@InjectRepository(LogbookDetailEntity) repo:Repository<LogbookDetailEntity>){
        super(repo);
    }

}