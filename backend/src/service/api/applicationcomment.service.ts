import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { UserApplicationCommentEntity } from "src/models/userapplicationcomment.entity";
import { Repository } from "typeorm";

@Injectable()
export class ApplicationCommentApiService extends TypeOrmCrudService<UserApplicationCommentEntity> {
    constructor(@InjectRepository(UserApplicationCommentEntity) public repo:Repository<UserApplicationCommentEntity>){
        super(repo);
    }
}