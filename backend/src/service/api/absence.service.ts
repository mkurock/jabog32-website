import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { AbsenceEntity } from "src/models/absence.entity";
import { Repository } from "typeorm";

@Injectable()
export class AbsenceApiService extends TypeOrmCrudService<AbsenceEntity> {
    constructor(@InjectRepository(AbsenceEntity) repo:Repository<AbsenceEntity>){
        super(repo);
    }

}