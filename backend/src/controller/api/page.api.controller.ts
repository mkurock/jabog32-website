import { Controller, Req, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { BaseEntity } from "src/common/base.entity";
import { AbsenceEntity } from "src/models/absence.entity";
import { PageEntity } from "src/models/page.entity";
import { UserApplicationEntity } from "src/models/userapplication.entity";
import { ApplicationApiService } from "src/service/api/application.service";
import { PageApiService } from "src/service/api/pages.service";

@Crud({
    model: {
        type: PageEntity,
    },
    query: {
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            createdBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] }
        }
    }
})
@ApiTags('pages')
@Roles('Statische Seiten')
@UseGuards(AuthenticatedGuard)
@Controller('api/pages')
export class PageApiController implements CrudController<PageEntity> {
    get base(): CrudController<PageEntity> {
        return this;
    }
    constructor(public service:PageApiService) {}

    
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