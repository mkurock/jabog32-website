import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { CrudConfigService } from '@nestjsx/crud'
CrudConfigService.load({
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase'
    ]
  }
})

import { AppModule } from './app.module';
import * as hbs from 'hbs';

import * as session from 'express-session';
import * as cookieSession from 'cookie-session';
var FileStore = require('session-file-store')(session);
import flash = require('connect-flash');
import * as passport from 'passport';
import { AuthExceptionFilter } from './common/filters/authexception.filter';
import { UserEntity } from './models/user.entity';
import { HandlebarsHelpers } from './common/hbs.helper';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useStaticAssets(process.env.FILESPATH);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));
  HandlebarsHelpers.registerHelpers();
  app.setViewEngine('hbs'); 
  app.useGlobalFilters(new AuthExceptionFilter())
  app.use(express.json({limit: '50mb'}));
  app.use(cookieSession({
    name: 'session',
    maxAge: 30 * 24 * 3600 * 1000,
    keys: ['*******************8'] 
  }));
  // app.use(
  //   session({
  //     store: new FileStore({ path: './sss' }),
  //     secret: 'JABOGjabogJABO32SuperCra', 
  //     resave: true,
  //     saveUninitialized: true,
  //     cookie: {
  //       maxAge: 30 * 24 * 3600 * 1000 
  //     }
  //   }),
  // );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  const options = new DocumentBuilder()
  .setTitle('JaBoG32')
  .setDescription('JaBoG32 intern API')
  .setVersion('1.0')
  .addTag('jabog32')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT); 
}
bootstrap();
