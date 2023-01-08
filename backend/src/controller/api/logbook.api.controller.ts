import { Controller, Req, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { BaseEntity } from "src/common/base.entity";
import { LogbookEntity } from "src/models/logbook.entity";
import { LogbookApiService } from "src/service/api/logbook.service";

@Crud({
    model: {
        type: LogbookEntity,
    },
    query: {
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            createdBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            logbookDetails: { eager: true, alias: 'details' },
            'logbookDetails.aircraft': { eager: true },
            'logbookDetails.pilot': { eager: true, alias: 'pilot' },
            'logbookDetails.pilot.user': { eager: true, alias: 'pilotUser', allow: ['userName', 'userId', 'id'] },
        }
    }
})
@ApiTags('logbooks')
@Roles('Einsatzberichte')
@UseGuards(AuthenticatedGuard)
@Controller('api/logbooks')
export class LogbookApiController implements CrudController<LogbookEntity> {
    constructor(public service:LogbookApiService) {}

    @Override('createOneBase')
    async createOne(
        @Req() rr,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: LogbookEntity
    ) {
        dt.createdBy = rr.user;
        dt.modifiedBy = rr.user;
        let savedItem = await this.service.repo.save(dt);
        for(let l of dt.logbookDetails){
            l.logbook = savedItem;
            await this.service.detailRepo.save(l);
        }
        return await this.service.repo.findOne(savedItem.id, { relations: [
                'logbookDetails',
                'logbookDetails.pilot',
                'logbookDetails.pilot.user',
                'logbookDetails.aircraft',
            ] 
        });
    }
    @Override('updateOneBase')
    async updateOne(
        @Req() rr,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: LogbookEntity
    ) {
        dt.modifiedBy = rr.user;
        let item = await this.service.findOne(dt.id, { relations: [
            'logbookDetails'
        ]});
        //create
        for(let l of dt.logbookDetails.filter(x => x.id == null)){
            l.logbook = dt;
            await this.service.detailRepo.save(l);
        }
        //update
        for(let l of dt.logbookDetails.filter(x => item.logbookDetails.find(y => y.id == x.id) != null)){
            await this.service.detailRepo.save(l);
        }
        //delete
        for(let l of item.logbookDetails.filter(x => dt.logbookDetails.find(y => y.id == x.id) == null)) {
            await this.service.detailRepo.delete(l.id);
        }

        let savedItem = await this.service.repo.save(dt);
        return await this.service.findOne(savedItem.id, { relations: [
                'logbookDetails',
                'logbookDetails.pilot',
                'logbookDetails.pilot.user',
                'logbookDetails.aircraft',
            ] 
        });
    }
}