import { Body, Controller, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { BaseEntity } from "src/common/base.entity";
import { UserApplicationEntity } from "src/models/userapplication.entity";
import { UserApplicationCommentEntity } from "src/models/userapplicationcomment.entity";
import { ApplicationApiService } from "src/service/api/application.service";
import { ApplicationCommentApiService } from "src/service/api/applicationcomment.service";

@Crud({
    model: {
        type: UserApplicationEntity,
    },
    query: {
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            aircraft: { eager: true },
            comments: { eager: true },
            'comments.createdBy': { eager: true }
        }
    }
})
@ApiTags('applications')
@Roles('Bewerbungsverwaltung')
@UseGuards(AuthenticatedGuard)
@Controller('api/applications')
export class ApplicationApiController implements CrudController<UserApplicationEntity> {
    constructor(public service:ApplicationApiService, private commentService:ApplicationCommentApiService) {}

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
        @ParsedBody() dt: UserApplicationEntity
    ) {
        dt.modifiedBy = rr.user;
        delete dt.comments
        return (this as CrudController<BaseEntity>).updateOneBase(req, dt);
    }

    @Post('comment/:id')
    async createComment(@Param('id') applicationId, @Req() req, @Body() body){
        let id = parseInt(applicationId);
        let entity = new UserApplicationCommentEntity();
        entity.userApplication = { id } as any;
        entity.text = body.text;
        entity.createdBy = req.user;
        let result = await this.commentService.repo.save(entity);
        return result;
    }
}