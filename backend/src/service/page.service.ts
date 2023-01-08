import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PageEntity } from "src/models/page.entity";
import { Repository } from "typeorm";

@Injectable()
export class PageService {
    constructor(@InjectRepository(PageEntity) private pageService:Repository<PageEntity>) {}

    async getPage(name:string){
        return await this.pageService.findOne({ name: name });
    }
}