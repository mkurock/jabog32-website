import { Module } from '@nestjs/common';
import { AuthService } from './auth/authentication.service';
import { LocalStrategy } from './auth/local.strategy';
import { SessionSerializer } from './auth/serializer/session.serializer';
import { HomeController } from './controller/home.controller';
import { AccountsController } from './controller/accounts.controller';
import { UsersService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailService } from './service/mail.service';
import { PageEntity } from './models/page.entity';
import { PageService } from './service/page.service';
import { RoleEntity } from './models/roles.entity';
import { InternHomeController } from './controller/intern/home.controller';
import { NewsEntity } from './models/news.entity';
import { AircraftEntity } from './models/aircraft.entity';
import { UserApplicationEntity } from './models/userapplication.entity';
import { RankEntity } from './models/rank.entity';
import { NewsService } from './service/news.service';
import { PilotEntity } from './models/pilot.entity';
import { SquadronEntity } from './models/squadron.entity';
import { FlightEntity } from './models/flight.entity';
import { PilotService } from './service/pilot.service';
import { LogbookEntity } from './models/logbook.entity';
import { LogbookDetailEntity } from './models/logbookdetail.entity';
import { SquadronController } from './controller/squadron.controller';
import { DeploymentService } from './service/deployment.service';
import { BadgeEntity } from './models/badge.entity';
import { PilotController } from './controller/pilot.controller';
import { AnalysisService } from './service/analysis.service';
import { BadgeApiService } from './service/api/badge.service';
import { BadgeApiController } from './controller/api/badge.api.controller';
import { AircraftApiService } from './service/api/aircraft.service';
import { ApplicationApiService } from './service/api/application.service';
import { LogbookApiService } from './service/api/logbook.service';
import { LogbookDetailApiService } from './service/api/logbookdetail.service';
import { NewsApiService } from './service/api/news.service';
import { PageApiService } from './service/api/pages.service';
import { PilotApiService } from './service/api/pilot.service';
import { RankApiService } from './service/api/rank.service';
import { SquadronApiService } from './service/api/squadron.service';
import { UserApiService } from './service/api/user.service';
import { AircraftApiController } from './controller/api/aircraft.api.controller';
import { ApplicationApiController } from './controller/api/applications.api.controller';
import { FlightApiController } from './controller/api/flights.api.controller';
import { LogbookApiController } from './controller/api/logbook.api.controller';
import { LogbookDetailApiController } from './controller/api/logbookdetail.api.controller';
import { FlightApiService } from './service/api/flights.service';
import { NewsApiController } from './controller/api/news.api.controller';
import { PageApiController } from './controller/api/page.api.controller';
import { PilotApiController } from './controller/api/pilot.api.controller';
import { RankApiController } from './controller/api/rank.api.controller';
import { SquadronApiController } from './controller/api/squadron.api.controller';
import { UserApiController } from './controller/api/user.api.controller';
import { AbsenceEntity } from './models/absence.entity';
import { NotamEntity } from './models/notam.entity';
import { AbsenceApiController } from './controller/api/absence.api.controller';
import { NotamApiController } from './controller/api/notam.api.controller';
import { AbsenceApiService } from './service/api/absence.service';
import { NotamApiService } from './service/api/notam.service';
import { NotamAcknoledgementEntity } from './models/notamAck.entity';
import { UserApplicationCommentEntity } from './models/userapplicationcomment.entity';
import { ApplicationCommentApiService } from './service/api/applicationcomment.service';
import { ApplicationCommentsApiController } from './controller/api/applicationscomment.api.controller';
import { ApplicationService } from './service/application.service';
import { FilesApiController } from './controller/api/files.api.controller';
import { DataApiController } from './controller/api/data.api.controller';

const entitis = [
  UserEntity,
  PageEntity,
  RoleEntity,
  NewsEntity,
  AircraftEntity,
  UserApplicationEntity,
  UserApplicationCommentEntity,
  RankEntity,
  PilotEntity,
  SquadronEntity,
  FlightEntity,
  LogbookEntity,
  LogbookDetailEntity,
  BadgeEntity,
  AbsenceEntity,
  NotamEntity,
  NotamAcknoledgementEntity
]
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfg:ConfigService) => ({
        type: 'mysql',
        host: cfg.get("DATABASE_HOST"),
        port: 3306,
        username: cfg.get("DATABASE_USER"),
        password: cfg.get("DATABASE_PWD"),
        database: cfg.get("DATABASE_NAME"),
        entities: entitis,
        synchronize: true,
        ssl: true
      }),
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature(entitis)
  ],
  controllers: [
    HomeController,
    AccountsController,
    InternHomeController,
    SquadronController,
    PilotController,

    AbsenceApiController,
    AircraftApiController,
    ApplicationApiController,
    ApplicationCommentsApiController,
    BadgeApiController,
    FlightApiController,
    LogbookApiController,
    LogbookDetailApiController,
    NewsApiController,
    NotamApiController,
    PageApiController,
    PilotApiController,
    RankApiController,
    SquadronApiController,
    UserApiController,
    FilesApiController,
    DataApiController
  ],
  providers: [
    LocalStrategy,
    SessionSerializer,
    UsersService,
    PageService,
    AuthService,
    MailService,
    NewsService,
    PilotService,
    DeploymentService,
    AnalysisService,
    ApplicationService,

    BadgeApiService,
    AircraftApiService,
    ApplicationApiService,
    ApplicationCommentApiService,
    BadgeApiService,
    FlightApiService,
    LogbookApiService,
    LogbookDetailApiService,
    NewsApiService,
    PageApiService,
    PilotApiService,
    RankApiService,
    SquadronApiService,
    UserApiService,
    AbsenceApiService,
    NotamApiService
  ],
})
export class AppModule {}
