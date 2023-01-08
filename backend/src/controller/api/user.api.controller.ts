import { Controller, Get, Param, Req, Res, SerializeOptions, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { InjectRepository } from "@nestjs/typeorm";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { Request, Response } from "express";
import * as moment from "moment";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { BaseEntity } from "src/common/base.entity";
import { CommonService } from "src/common/common.service";
import { AbsenceEntity } from "src/models/absence.entity";
import { LogbookEntity } from "src/models/logbook.entity";
import { NotamEntity } from "src/models/notam.entity";
import { NotamAcknoledgementEntity } from "src/models/notamAck.entity";
import { PageEntity } from "src/models/page.entity";
import { RoleEntity } from "src/models/roles.entity";
import { UserEntity } from "src/models/user.entity";
import { UserApplicationEntity } from "src/models/userapplication.entity";
import { LogbookApiService } from "src/service/api/logbook.service";
import { UserApiService } from "src/service/api/user.service";
import { UsersService } from "src/service/user.service";
import { Repository } from "typeorm";
import { serialize } from "class-transformer";
import { Roles } from "src/auth/roles.decorator";

@Crud({
    model: {
        type: UserEntity,
    },
    query: {
        exclude: ['passwordHash', 'salt'],
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            createdBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            roles: { eager: true }
        }
    }
})
@ApiTags('user')
@Roles('Interner Bereich')
@UseGuards(AuthenticatedGuard)
@Controller('api/users')
export class UserApiController implements CrudController<UserEntity> {
    constructor(public service:UserApiService,
        private userService:UsersService,
        @InjectRepository(UserEntity) private userRepo:Repository<UserEntity>,
        @InjectRepository(RoleEntity) private roleRepo:Repository<RoleEntity>,
        @InjectRepository(NotamEntity) private notamRepo:Repository<NotamEntity>,
        @InjectRepository(AbsenceEntity) private absenceRepo:Repository<AbsenceEntity>,
        @InjectRepository(LogbookEntity) private logbookRepo:Repository<LogbookEntity>,
        private logbookService:LogbookApiService,
        @InjectRepository(UserApplicationEntity) private applicationRepo:Repository<UserApplicationEntity>
    ) {}

    @Get('dashboard')
    async getDashboard(@Req() req){
        let user = req.user as UserEntity;
        let notams = await this.notamRepo.createQueryBuilder("notam")
            .leftJoinAndSelect("notam.notamAcks", "notamAcks")
            .where(qb => {
                const subQ = qb.subQuery()
                    .select("COUNT(id)")
                    .from(NotamAcknoledgementEntity, "acks")
                    .where("userId = :userId", { userId: user.userId })
                    .andWhere("notamId = notamAcks.notamId")
                    .getQuery();
                return subQ + ' = 0';
            })
            .orderBy("notam.createdAt", "DESC")
            .getMany();
        

        // let nextTraining = CommonService.getNextTraining(moment("11.01.2021", "DD.MM.YYYY"));
        let nextTraining = CommonService.getNextTraining();
        let absences = await this.absenceRepo.createQueryBuilder("absence")
            .addSelect("user.userName")
            .addSelect("user.userId")
            .leftJoin("absence.user", "user")
            .where("absence.begin <= :training AND absence.end >= :training", {  training: nextTraining.format('YYYY-MM-DD') })
            .getMany();
        

        let userapplications = await this.applicationRepo.createQueryBuilder("userapplication")
            .select("userapplication.firstName")
            .addSelect("userapplication.lastName")
            .addSelect("userapplication.callsign")
            .addSelect("userapplication.status")
            .addSelect("userapplication.createdAt")
            .leftJoinAndSelect("userapplication.aircraft", "aircraft")
            .orderBy("userapplication.createdAt", "DESC")
            .limit(5)
            .getMany();

        //Logbooks
        let logbooks = await this.logbookService.find({ 
            order: {
                id: "DESC"
            },
            skip: 0,
            take: 5,
            relations:[
                'logbookDetails',
                'logbookDetails.pilot',
                'logbookDetails.pilot.user',
                'logbookDetails.aircraft'
            ]
        });
        return serialize({
            notams,
            absences,
            userapplications,
            logbooks
        });
    }

    @Roles('Benutzerverwaltung')
    @UseGuards(AuthenticatedGuard)
    @Override('createOneBase')
    async createOne(
        @Req() rr,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: UserEntity
    ) {
        return (this as CrudController<UserEntity>).createOneBase(req, dt);
    }

    @Roles('Benutzerverwaltung')
    @UseGuards(AuthenticatedGuard)
    @Override('deleteOneBase')
    async deleteOne(
        @Req() rr:Express.Request,
        @Param('id') stringid,
        @ParsedRequest() req: CrudRequest
    ) {
        let id = parseInt(stringid);
        let db = await this.userRepo.findOne(id);
        db.deleted = true;
        db.userName = db.userName + "_deleted_" + (Math.random() * 1000)
        await this.userRepo.save(db);
        return true;
    }

    @Roles('Benutzerverwaltung')
    @UseGuards(AuthenticatedGuard)
    @Override('updateOneBase')
    async updateOne(
        @Req() rr,
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dt: UserEntity
    ) {
        let userName = dt.userName;
        if(dt.forumUserId == 0){
            let forumUser:any = await this.userService.getForumUserFromName(userName);
            if(forumUser){
                dt.forumUserId = forumUser.user_id;
            }
        }
        return await this.userService.updateUser(dt);
    }

    @Get('roles')
    async getRoles(@Req() req:Request){
        return await this.roleRepo.find();
    }
    

    @Get('config')
    @UseGuards(AuthenticatedGuard)
    async currentUser(@Req() req:Express.Request){
        return req.user;
    }

}