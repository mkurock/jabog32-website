import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, createSelector, Selector, State, StateContext } from "@ngxs/store";
import { PilotsStat } from "../model/pilotstat";

export class GetPilotStats {
    static readonly type = '[PilotStats] Get Stats';
    constructor(public map:string){}
}

@State<{[map:string]:PilotsStat[]}>({
    name: 'pilotstats',
    defaults: {}
})
@Injectable()
export class PilotStatsState {
    constructor(private http:HttpClient){}

    static getStats(map:string){
        return createSelector([PilotStatsState], (state: {[map:string]:PilotsStat[]}) => {
            return state[map];
        })
    }

    @Action(GetPilotStats)
    async getPilotStats(ctx:StateContext<PilotsStat[]>, action: GetPilotStats){
        let url = action.map == '' ? '/api/data/pilotstats' : '/api/data/pilotstats/' + action.map;
        let data = await this.http.get(url).toPromise() as PilotsStat[];
        data = data.sort((a, b) => a.Einsaetze > b.Einsaetze ? -1 : 1);
        let newState = {...ctx.getState()};
        let key = action.map == '' ? 'default' : action.map;
        newState[key] = data;
        ctx.setState(newState);
    }
}