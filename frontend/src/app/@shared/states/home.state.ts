import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Absence } from "../model/absence";
import { UserApplication } from "../model/application";
import { Logbook } from "../model/logbook";
import { Notam, NotamAck } from "../model/notam";

export class GetHomeData {
    static readonly type = '[Home] GetHomeData'
}

export class AcknowledgeNotamFromHome {
       static readonly type = '[Home] AcknowledgeNotamFromHome'
       constructor(public id:number){}
}

@State<HomeStateModel>({
    name: 'home',
    defaults: {
        notams: [],
        absences: [],
        userapplications: [],
        logbooks: []
    }
})
@Injectable()
export class HomeState {
    constructor(private http:HttpClient){}

    @Action(GetHomeData)
    async GetHomeData(ctx:StateContext<HomeStateModel>){
        let result = await this.http.get('/api/users/dashboard').toPromise() as HomeStateModel;
        ctx.setState(result);
    }
    @Action(AcknowledgeNotamFromHome)
    async AcknowledgeNotam(ctx: StateContext<HomeStateModel>, action:AcknowledgeNotamFromHome){
        let notamAck = await this.http.get('/api/notams/acknowledge/' + action.id).toPromise() as NotamAck;
        if(notamAck){
            let state = ctx.getState().notams;
            ctx.patchState({ notams: state.filter(x => x.id != action.id) });
        }
    }
}
export class HomeStateModel {
    notams:Notam[];
    absences:Absence[];
    userapplications:UserApplication[];
    logbooks:Logbook[]
}