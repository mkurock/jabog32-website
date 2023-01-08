import * as moment from 'moment';

export class CommonService {
    static getNextTraining(date?:moment.Moment){
        let today = date ? date : moment();
        today.hours(0);
        today.minutes(0);
        today.seconds(0);
        today.milliseconds(0);
        switch(today.isoWeekday()){
            case 1:
                return today.isoWeekday(1);
                break;
            case 2:
            case 3:
            case 4:
                return today.isoWeekday(4);
                break;
            default:
                return today.isoWeekday(8);

        }
    }
}