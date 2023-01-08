import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { UserApplicationEntity } from "src/models/userapplication.entity";
import { Repository } from "typeorm";

@Injectable()
export class ApplicationApiService extends TypeOrmCrudService<UserApplicationEntity> {
    constructor(@InjectRepository(UserApplicationEntity) repo:Repository<UserApplicationEntity>){
        super(repo);
    }

}