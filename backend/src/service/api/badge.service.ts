import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { BadgeEntity } from "src/models/badge.entity";
import { Repository } from "typeorm";

@Injectable()
export class BadgeApiService extends TypeOrmCrudService<BadgeEntity> {
    constructor(@InjectRepository(BadgeEntity) repo:Repository<BadgeEntity>){
        super(repo);
    }

}