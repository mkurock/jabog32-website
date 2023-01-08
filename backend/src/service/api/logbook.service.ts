import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { LogbookEntity } from "src/models/logbook.entity";
import { LogbookDetailEntity } from "src/models/logbookdetail.entity";
import { Repository } from "typeorm";

@Injectable()
export class LogbookApiService extends TypeOrmCrudService<LogbookEntity> {
    constructor(
        @InjectRepository(LogbookEntity) public repo:Repository<LogbookEntity>,
        @InjectRepository(LogbookDetailEntity) public detailRepo:Repository<LogbookDetailEntity>
    ){
        super(repo);
    }

}