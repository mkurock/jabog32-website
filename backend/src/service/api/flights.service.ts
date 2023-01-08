import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { FlightEntity } from "src/models/flight.entity";
import { Repository } from "typeorm";

@Injectable()
export class FlightApiService extends TypeOrmCrudService<FlightEntity> {
    constructor(@InjectRepository(FlightEntity) repo:Repository<FlightEntity>){
        super(repo);
    }

}