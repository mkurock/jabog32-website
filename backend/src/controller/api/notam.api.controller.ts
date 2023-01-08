import { Controller, Get, Param, Req, Res, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { NotamEntity } from "src/models/notam.entity";
import { NotamAcknoledgementEntity } from "src/models/notamAck.entity";
import { NotamApiService } from "src/service/api/notam.service";

@Crud({
    model: {
        type: NotamEntity,
    },
    query: {
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            createdBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            notamAcks: { eager: true, allow: ['id', 'userId' ] }
        }
    }
})
@ApiTags('notam')
@Roles('Interner Bereich')
@UseGuards(AuthenticatedGuard)
@Controller('api/notams')
export class NotamApiController implements CrudController<NotamEntity> {
    constructor(public service:NotamApiService) {}

    @Roles('NOTAMs')
    @UseGuards(AuthenticatedGuard)
    @Override('createOneBase')
    async createOne(@ParsedRequest() crudReq:CrudRequest, @Req() req, @ParsedBody() dto:NotamEntity){
        dto.modifiedBy = req.user;
        dto.createdBy = req.user;
        return (this as CrudController<NotamEntity>).createOneBase(crudReq, dto);
    }
    @Roles('NOTAMs')
    @UseGuards(AuthenticatedGuard)
    @Override('deleteOneBase')
    async deleteOne(@ParsedRequest() crudReq:CrudRequest, @Req() req, @Param('id') stringid){
        let id = parseInt(stringid);
        await this.service.ackRepo.delete({ notamId: id });
        return (this as CrudController<NotamEntity>).deleteOneBase(crudReq);
    }


    @Get('acknowledge/:id')
    async acknowledge(@Param('id') id:number, @Req() req, @Res() res){
        let userId = req.user.userId;
        let notam = await this.service.repo.findOne(id, { relations: ['notamAcks'] });
        if(notam.notamAcks.find(x => x.userId == userId) == null){
            let newAck = new NotamAcknoledgementEntity();
            newAck.notamId = id;
            newAck.userId = userId;
            await this.service.ackRepo.save(newAck);
            res.status(200).send(newAck);
        } else {
            res.status(200).send(null);
        }
    }
}