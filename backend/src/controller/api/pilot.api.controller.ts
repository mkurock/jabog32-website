import { Body, Controller, Get, HttpException, Param, Patch, Post, Req, Res, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { BaseEntity } from "src/common/base.entity";
import { PilotEntity } from "src/models/pilot.entity";
import { PilotApiService } from "src/service/api/pilot.service";

@Crud({
    model: {
        type: PilotEntity,
    },
    query: {
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            createdBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            user: { eager: true, allow: ['id', 'userId', 'userName' ]},
            rank: { eager: true },
            badges: { eager: true },
            firstAircraft: { eager: true },
            secondAircraft: { eager: true }
        }
    }
})
@ApiTags('pilot')
@Roles('Benutzerverwaltung', 'Einsatzberichte')
@UseGuards(AuthenticatedGuard)
@Controller('api/pilots')
export class PilotApiController implements CrudController<PilotEntity> {
    constructor(public service:PilotApiService) {}

    @Roles('Benutzerverwaltung')
    @UseGuards(AuthenticatedGuard)  
    @Override('createOneBase')
    async createOne(
        @Req() rr,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: BaseEntity
    ) {
        dt.createdBy = rr.user;
        dt.modifiedBy = rr.user;
        return (this as CrudController<BaseEntity>).createOneBase(req, dt);
    }
    @Roles('Benutzerverwaltung')
    @UseGuards(AuthenticatedGuard)
    @Override('updateOneBase')
    async updateOne(
        @Req() rr,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: PilotEntity
    ) {
        dt.modifiedBy = rr.user;
        //prevent user from being changed on pilot
        delete dt.user;
        return (this as CrudController<BaseEntity>).updateOneBase(req, dt);
    }
    @Roles('Benutzerverwaltung')
    @UseGuards(AuthenticatedGuard)
    @Override('deleteOneBase')
    async deleteOne(
        @Req() rr:Express.Request,
        @Param('id') stringid,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: PilotEntity
    ) {
        let id = parseInt(stringid);
        let db = await this.service.repo.findOne(id);
        db.deleted = true;
        await this.service.repo.save(db);
        return true;
    }

    @Roles('Benutzerverwaltung')
    @UseGuards(AuthenticatedGuard)
    @Patch('badges/:pilotId')
    async batches(@Param('pilotId') idStr:string, @Body() body) {
        let id = parseInt(idStr);
        let pilot = await this.service.findOne(id);
        if(pilot){
            pilot.badges = [];
            await this.service.repo.save(pilot);
            pilot.badges = body;
            let result = await this.service.repo.save(pilot);
            return result;
        } else {
            throw new HttpException("Pilot not found", 400);
        }
    }
}