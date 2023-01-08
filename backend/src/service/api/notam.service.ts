import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { NotamEntity } from "src/models/notam.entity";
import { NotamAcknoledgementEntity } from "src/models/notamAck.entity";
import { Repository } from "typeorm";

@Injectable()
export class NotamApiService extends TypeOrmCrudService<NotamEntity> {
    constructor(
        @InjectRepository(NotamEntity) public repo:Repository<NotamEntity>,
        @InjectRepository(NotamAcknoledgementEntity) public ackRepo:Repository<NotamAcknoledgementEntity>,
        ){
        super(repo);
    }

}