import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { AircraftEntity } from "src/models/aircraft.entity";

@Injectable()
export class AircraftApiService extends TypeOrmCrudService<AircraftEntity> {
    constructor(@InjectRepository(AircraftEntity) repo:Repository<AircraftEntity>){
        super(repo);
    }

}