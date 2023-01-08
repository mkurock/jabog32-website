import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LogbookEntity } from "src/models/logbook.entity";
import { Repository } from "typeorm";

@Injectable()
export class DeploymentService {
    constructor(
        @InjectRepository(LogbookEntity) private logbookRepo:Repository<LogbookEntity>
    ) {}

    async getAllDeployments(){
        let result = await this.logbookRepo.find({ relations: ['logbookDetails'], order: { departure: "DESC" } });
        return result;
    }

    async getDeployment(id:number){
        return await this.logbookRepo.findOne(id, { relations: ['logbookDetails', 'logbookDetails.aircraft', 'logbookDetails.pilot', 'logbookDetails.pilot.user'] });
    }
}