import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as parse from 'csv-parse/lib/sync';
import * as fs from 'fs';
import * as request from 'request';

@Controller('api/data')
export class DataApiController {
  basePath = '../gdrive/stats';
  constructor() {}

  @Get('lsogrades/:map')
  getLSOGrades(
    @Req() req: Request,
    @Res() res: Response,
    @Param('map') map: string,
  ) {
    let filePath = this.basePath + '/LSOGrades';
    switch (map) {
      case 'mariannas':
        filePath += '_Mariannas.csv';
        break;
      case 'ettr':
        filePath += '_ETTR.csv';
        break;
      default:
        filePath += '.csv';
        break;
    }
    const content = fs.readFileSync(filePath);
    let data = parse(content, {
      delimiter: ',',
      columns: false,
      relaxColumnCount: true,
    });
    res.send(data);
  }

  @Get('pilotstats/:map?')
  getPilotStats(
    @Req() req: Request,
    @Res() res: Response,
    @Param('map') map: string,
  ) {
    let filePath = this.basePath + '/PilotsStats';
    switch (map) {
      case 'mariannas':
        filePath += '_Mariannas.csv';
        break;
      // case 'nttr':
      //   filePath += 'NTTR.csv';
      //   break;
      case 'ettr':
        filePath += '_ETTR.csv';
        break;
      default:
        filePath += '.csv';
        break;
    }
    const content = fs.readFileSync(filePath);
    let data = parse(content, {
      delimiter: ',',
      columns: true,
      relaxColumnCount: true,
    });
    res.send(data);
  }
}

interface PilotsStat {
  Pilotenname: string;
  Einsaetze: number;
  LandingStreak: number;
  Tode: number;
  Ejections: number;
  Startzeit: number;
  Landezeit: number;
  Flugzeit: number;
  Starts: number;
  Landungen: number;
  Verdienst: number;
  'Missionen gestartet': number;
  'erfolgreiche Missionen': number;
  'zuletzt gestartet von': string;
  'zuletzt gelandet in': string;
  Flugzeugtyp: string;
  'zerstoerte Bodeneinheiten': number;
  'zerstoerte Strukturen': number;
  'zerstoerte Flugzeuge': number;
  'zerstoerte Helikopter': number;
  'zerstoerte Schiffe': number;
  Bittersweet: number;
  'LSO Bewertungen': string;
  Platzhalter1;
  Platzhalter2;
  Platzhalter3;
  Platzhalter4;
  Platzhalter6;
}
