import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { SquadronEntity } from "src/models/squadron.entity";
import { Repository } from "typeorm";

@Injectable()
export class SquadronApiService extends TypeOrmCrudService<SquadronEntity> {
    constructor(@InjectRepository(SquadronEntity) repo:Repository<SquadronEntity>){
        super(repo);
    }

}