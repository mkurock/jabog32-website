import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PageEntity } from "src/models/page.entity";
import { Repository } from "typeorm";

@Injectable()
export class PageApiService extends TypeOrmCrudService<PageEntity> {
    constructor(@InjectRepository(PageEntity) repo:Repository<PageEntity>){
        super(repo);
    }

}