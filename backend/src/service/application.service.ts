import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AircraftEntity } from "src/models/aircraft.entity";
import { NewsEntity } from "src/models/news.entity";
import { UserApplicationEntity } from "src/models/userapplication.entity";
import { Repository } from "typeorm";

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(UserApplicationEntity) private repo:Repository<UserApplicationEntity>,
        @InjectRepository(AircraftEntity) private aircraftRepo:Repository<AircraftEntity>,

    ){
    }

    async getAircrafts(){
        return await this.aircraftRepo.find({ where: { availableForApplications: true }, order: { name: 'ASC' }});
    }

    async save(item:UserApplicationEntity){
        await this.repo.save(item);
    }
}