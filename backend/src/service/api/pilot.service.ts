import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PilotEntity } from "src/models/pilot.entity";
import { Repository } from "typeorm";

@Injectable()
export class PilotApiService extends TypeOrmCrudService<PilotEntity> {
    constructor(@InjectRepository(PilotEntity) public repo:Repository<PilotEntity>){
        super(repo);
    }

}