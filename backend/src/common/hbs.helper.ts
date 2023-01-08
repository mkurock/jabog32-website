import * as hbs from 'hbs';
import { UserEntity } from "src/models/user.entity";
import * as moment from 'moment'

export class HandlebarsHelpers {
  static registerHelpers() {
    hbs.registerHelper('is', (p1: string, p2: string, opts) => {
      if (p1?.toLowerCase() == p2?.toLowerCase()
        || p1 == p2) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });

    hbs.registerHelper('ifEq', (v1:number, v2:number, opts) => {
      if(v1 == v2) {
        return opts.fn(this)
      } else {
        return opts.inverse(this)
      }
    })
    hbs.registerHelper('ifGt', (v1:number, v2:number, opts) => {
      if(v1 > v2) {
        return opts.fn(this)
      } else {
        return opts.inverse(this)
      }
    })

    hbs.registerHelper('isjabog', (p1: UserEntity, opts) => {
      if (p1?.roles?.find(x => x.roleId == 'K14B461C-8AFD-48B2-B380-4FBD5SEDF0F7') != null) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });


    hbs.registerHelper('date', (p1: Date, opts) => {

      return moment(p1).format("DD.MM.yy HH:mm")
    });
    hbs.registerHelper('incr', (p1: string, opts) => {

      return parseInt(p1) + 1;
    });
    hbs.registerHelper('round', (p1: string, p2: number, opts) => {

      return parseFloat(p1).toFixed(p2);
    });
  }
}
