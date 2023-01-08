import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NewsEntity } from "src/models/news.entity";
import { Repository } from "typeorm";

@Injectable()
export class NewsService {
    constructor(@InjectRepository(NewsEntity) private repo:Repository<NewsEntity>){
    }

    async getNews(){
        return await this.repo.find({ relations: ['createdBy' ], order: { createdAt : 'DESC' }});
    }
    async getLatestNews(){
        return await this.repo.findOne({ relations: ['createdBy' ], order: { createdAt : 'DESC' }});
    }
}