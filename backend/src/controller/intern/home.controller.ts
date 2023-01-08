import { Controller, Get, Render, Req, Res, UseGuards } from "@nestjs/common";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { Roles } from "src/auth/roles.decorator";
import { BaseController } from "src/common/controller/base.controller";

@Controller('intern')
export class InternHomeController extends BaseController {
    constructor() {
        super();
    }

    @Get('*')
    @Render('intern/home')
    @Roles('Interner Bereich')
    @UseGuards(AuthenticatedGuard)
    async index(@Req() req, @Res() res){
        return this.setResponse('intern', req, {})
    }
}