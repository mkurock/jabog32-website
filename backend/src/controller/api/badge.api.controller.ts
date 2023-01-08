import { Controller, Req, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { BaseEntity } from "src/common/base.entity";
import { BadgeEntity } from "src/models/badge.entity";
import { BadgeApiService } from "src/service/api/badge.service";

@Crud({
    model: {
        type: BadgeEntity,
    },
    query: {
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            createdBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] }
        }
    }
})
@ApiTags('badges')
@Roles('Geschwaderverwaltung')
@UseGuards(AuthenticatedGuard)
@Controller('api/badge')
export class BadgeApiController implements CrudController<BadgeEntity> {
    constructor(public service:BadgeApiService) {}

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