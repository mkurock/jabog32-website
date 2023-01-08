import { Body, Controller, Get, Param, Post, Render, Req, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response, response } from 'express';
import { LoginGuard } from 'src/auth/guards/login.guard';
import { BaseController } from 'src/common/controller/base.controller';
import { UserApplicationEntity } from 'src/models/userapplication.entity';
import { ApplicationService } from 'src/service/application.service';
import { MailService } from 'src/service/mail.service';
import { NewsService } from 'src/service/news.service';
import { PageService } from 'src/service/page.service';
import { PilotService } from 'src/service/pilot.service';

@Controller()
export class HomeController extends BaseController {
  constructor(
    private pageService:PageService,
    private newsService:NewsService,
    private mailService:MailService,
    private applicationService:ApplicationService
  ){
    super();
  }

  @Get('/error')
  @Render('error')
  error(){
    return;
  }

  @Get()
  @Render('home/index')
  async index(@Res() res, @Req() req){
    //News
    let news = await this.newsService.getLatestNews();
    if(news != null && (news.preview == "" || news.preview == null)){
      news.preview = news.body;
    }
    //Docs and Mods
    let docs = await this.pageService.getPage('DocsMods');

    //archiv
    let archiv = await this.pageService.getPage('Archiv');


    return this.setResponse('index', req, {
      news,
      docs,
      archiv
    });
  }

  @Get('news')
  @Render('home/news')
  async news(@Res() res, @Req() req){
    let news = await this.newsService.getNews();
    return this.setResponse('news', req, { news });
  }

  @Get('/page/:name')
  @Render('home/page')
  async page(@Param() params, @Req() req, @Res() res){
    let page = await this.pageService.getPage(params.name);
    if(page){
      return this.setResponse(params.name, req, page);
    } else {
      res.redirect('/error');
    }
  }

  @Get('/home/application')
  @Render('home/application')
  async application(@Req() req) {
    let aircrafts = await this.applicationService.getAircrafts();
    let experienceDCS = ['Keine Erfahrung vorhanden', 'Ich kenne die Grundlagen', 'Ich bin ein erfahrener Benutzer', 'Ich besitze weitreichende Kenntnisse']
    let experienceSim = ['Bin Neueinsteiger', '1 - 2 Jahre', '2 - 4 Jahre', '4 - 6 Jahre', '6 - 8 Jahre', 'Über 8 Jahre']
    return this.setResponse('application', req, { aircrafts, experienceDCS, experienceSim });
  }

  @Post('/home/application')
  async postApplication(@Req() req, @Res() res:Response, @Body() body:any){
    body.aircraftId = parseInt(body.aircraftId);
    body.acceptedRules = body.acceptedRules == "true";
    body.commercialAviation = body.commercialAviation == "true";
    let entity = body as UserApplicationEntity;
    entity.status = "Neu";
    await this.applicationService.save(entity);
    let ac = (await this.applicationService.getAircrafts()).find(x => x.id == body.aircraftId)
    let now = new Date()
    let date = `${now.getDay()}.${now.getMonth()+1}.${now.getFullYear()}`
    let message = `
Eingang neue Bewerbung:
Vorname: ${body.firstName}
Nachname: ${body.lastName}
Muster: ${ac.name}
Callsign: ${body.callsign}

Kommentar:
${body.additionalInfo}`
    let messageApplicant = `
Guten Tag ${body.firstName},

Deine Bewerbung wurde am ${date} registriert.
Der Stab wird sich in den nächsten Tagen mit Deiner Bewerbung auseinandersetzen und Dich eventuell zu einem Bewerbungsgespräch einladen.

Mit freundlichen Grüßen.
Virtuelles Jagdbombergeschwader 32
`
    await this.mailService.sendMail("stab@virtual-jabog32.de", `Neue Bewerbung von ${body.callsign} auf ${true}`, message)
    await this.mailService.sendMail(body.email, `Eingangsbestätigung Bewerbung vJaBoG32`, messageApplicant, false)
    res.render('home/applicationSuccess.hbs', this.setResponse('application', req, {}));
  }


}
