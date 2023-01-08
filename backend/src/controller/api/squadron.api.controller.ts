import { Controller, Req, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { BaseEntity } from "src/common/base.entity";
import { SquadronEntity } from "src/models/squadron.entity";
import { SquadronApiService } from "src/service/api/squadron.service";

@Crud({
    model: {
        type: SquadronEntity,
    },
    query: {
        join: {
            modifiedBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            createdBy: { eager: true, allow: ['id', 'userId', 'email', 'userName'] },
            flights: { eager: true },
            'flights.leadPilot' : { eager: true, alias: 'lead' },
            'flights.leadPilot.user' : { eager: true, alias: 'leadUser' },
            'flights.leadPilot.firstAircraft' : { eager: true, alias: 'leadAc' },
            'flights.leadRio' : { eager: true, alias: 'leadRio' },
            'flights.leadRio.user' : { eager: true, alias: 'leadRioUser' },
            'flights.leadRio.firstAircraft' : { eager: true, alias: 'leadRioAc' },

            'flights.leadWingPilot' : { eager: true, alias: 'wing' },
            'flights.leadWingPilot.user' : { eager: true, alias: 'wingUser' },
            'flights.leadWingPilot.firstAircraft' : { eager: true, alias: 'wingAc' },
            'flights.leadWingRio' : { eager: true, alias: 'wingrio' },
            'flights.leadWingRio.user' : { eager: true, alias: 'wingrioUser' },
            'flights.leadWingRio.firstAircraft' : { eager: true, alias: 'wingrioAc' },

            'flights.secondElementLeadPilot' : { eager: true, alias: 'secLead' },
            'flights.secondElementLeadPilot.user' : { eager: true, alias: 'secLeadUser' },
            'flights.secondElementLeadPilot.firstAircraft' : { eager: true, alias: 'secLeadAc' },
            'flights.secondElementLeadRio' : { eager: true, alias: 'secLeadRio' },
            'flights.secondElementLeadRio.user' : { eager: true, alias: 'secLeadRioUser' },
            'flights.secondElementLeadRio.firstAircraft' : { eager: true, alias: 'secLeadRioAc' },

            'flights.secondElementWingPilot' : { eager: true, alias: 'secWing' },
            'flights.secondElementWingPilot.user' : { eager: true, alias: 'secWingUser' },
            'flights.secondElementWingPilot.firstAircraft' : { eager: true, alias: 'secWingAc' },
            'flights.secondElementWingRio' : { eager: true, alias: 'secWingRio' },
            'flights.secondElementWingRio.user' : { eager: true, alias: 'secWingRioUser' },
            'flights.secondElementWingRio.firstAircraft' : { eager: true, alias: 'secWingRioAc' },
        }
    }
})
@ApiTags('squadron')
@Roles('Geschwaderverwaltung')
@UseGuards(AuthenticatedGuard)
@Controller('api/squadrons')
export class SquadronApiController implements CrudController<SquadronEntity> {
    constructor(public service:SquadronApiService) {}

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