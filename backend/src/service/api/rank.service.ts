import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { RankEntity } from "src/models/rank.entity";
import { Repository } from "typeorm";

@Injectable()
export class RankApiService extends TypeOrmCrudService<RankEntity> {
    constructor(@InjectRepository(RankEntity) repo:Repository<RankEntity>){
        super(repo);
    }

}