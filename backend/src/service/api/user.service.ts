import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/models/user.entity";

@Injectable()
export class UserApiService extends TypeOrmCrudService<UserEntity> {
    constructor(@InjectRepository(UserEntity) repo:Repository<UserEntity>){
        super(repo);
    }

}