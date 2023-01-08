import { Controller, Get, Param, Render, Req, Res } from "@nestjs/common";
import { BaseController } from "src/common/controller/base.controller";
import { AnalysisService } from "src/service/analysis.service";
import { DeploymentService } from "src/service/deployment.service";

@Controller('squadron')
export class SquadronController extends BaseController {
    constructor(
        private deploymentService:DeploymentService,
        private analysisService:AnalysisService
    ){
        super();
    }

    @Get('deployments')
    @Render('squadron/deployments')
    async deployments(@Req() req:Express.Request, @Res() res:Express.Response) {
        let deployments = await this.deploymentService.getAllDeployments();
        return this.setResponse('squadron/deployments', req, { deployments });
    }
    @Get('deployments/:id')
    @Render('squadron/deploymentsdetail')
    async deploymentsDetail(@Param('id') id, @Req() req:Express.Request, @Res() res:Express.Response) {
        let deployment = await this.deploymentService.getDeployment(id);
        return this.setResponse('squadron/deployments', req, { deployment });
    }

    @Get('statistics')
    @Render('squadron/statistics')
    async statistics(@Req() req:Express.Request, @Res() res:Express.Response) {
        let ranks = await this.analysisService.getRanking();
        return this.setResponse('squadron/statistics', req, { ranks });
    }

}