import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { NewsEntity } from "src/models/news.entity";
import { Repository } from "typeorm";

@Injectable()
export class NewsApiService extends TypeOrmCrudService<NewsEntity> {
    constructor(@InjectRepository(NewsEntity) repo:Repository<NewsEntity>){
        super(repo);
    }

}