import { Controller, Get, Param, Render, Req, Res } from "@nestjs/common";
import { BaseController } from "src/common/controller/base.controller";
import { SquadronEntity } from "src/models/squadron.entity";
import { PilotService } from "src/service/pilot.service";

@Controller('pilots')
export class PilotController extends BaseController {
  constructor(
    private pilotService: PilotService
  ) {
    super();
  }


  @Get('/')
  @Render('pilots/index')
  async pilots(@Req() req: Express.Request, @Res() res: Express.Response) {
    let model = await this.pilotService.getPilots();
    return this.setResponse('pilots', req, model);
  }

  @Get('/detail/:id')
  @Render('pilots/detail')
  async pilotDetail(@Param('id') id, @Req() req: Express.Request, @Res() res: Express.Response) {
    let pilot = await this.pilotService.getPilotDetail(id);
    let squadron = new SquadronEntity()
    if(pilot.leadPilotFlights.length > 0){
      squadron = pilot.leadPilotFlights[0].squadron
    }
    if(pilot.leadRioFlights.length > 0) {
      squadron = pilot.leadRioFlights[0].squadron;
    }
    if(pilot.leadWingPilotFlights.length > 0) {
      squadron = pilot.leadWingPilotFlights[0].squadron;
    }
    if(pilot.leadWingRioFlights.length > 0) {
      squadron = pilot.leadWingRioFlights[0].squadron;
    }
    if(pilot.secondElementLeadPilotFlights.length > 0) {
      squadron = pilot.secondElementLeadPilotFlights[0].squadron;
    }
    if(pilot.secondElementLeadRioFlights.length > 0) {
      squadron = pilot.secondElementLeadRioFlights[0].squadron;
    }
    if(pilot.secondElementWingPilotFlights.length > 0) {
      squadron = pilot.secondElementWingPilotFlights[0].squadron;
    }
    if(pilot.secondElementWingRioFlights.length > 0) {
      squadron = pilot.secondElementWingRioFlights[0].squadron;
    }
    let deployments = pilot.logbookDetails.sort((a, b) => b.logbook?.departure?.getTime() - a.logbook?.departure?.getTime()).slice(0, 15);
    return this.setResponse('pilots/detail', req, { pilot, deployments, squadron });
  }
}
