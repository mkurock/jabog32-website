import { Controller, Req, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { BaseEntity } from "src/common/base.entity";
import { AbsenceEntity } from "src/models/absence.entity";
import { AbsenceApiService } from "src/service/api/absence.service";

@Crud({
    model: {
        type: AbsenceEntity,
    },
    query: {
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            createdBy: { eager: true, allow: ['id', 'userId', 'email', 'userName']},
            user: { eager: true, allow: ['id', 'userId', 'email', 'userName'] }
        }
    }
})
@ApiTags('absence')
@Roles('Interner Bereich')
@UseGuards(AuthenticatedGuard)
@Controller('api/absences')
export class AbsenceApiController implements CrudController<AbsenceEntity> {
    get base(): CrudController<AbsenceEntity> {
        return this;
      }
    constructor(public service:AbsenceApiService) {}

    @Override('createOneBase')
    async createOne(
        @Req() rr,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: AbsenceEntity
    ) {
        dt.createdBy = rr.user;
        dt.user = rr.user;
        dt.modifiedBy = rr.user;
        return (this as CrudController<BaseEntity>).createOneBase(req, dt);
    }
    @Override('updateOneBase')
    async updateOne(
        @Req() rr,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: BaseEntity
    ) {
        dt.modifiedBy = rr.user;
        return (this as CrudController<BaseEntity>).updateOneBase(req, dt);
    }
}