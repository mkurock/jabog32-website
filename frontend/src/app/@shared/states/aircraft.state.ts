import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Actions, State, StateContext } from "@ngxs/store";
import { Aircraft } from "../model/aircraft";
import { Rank } from "../model/rank";

export class GetAircrafts {
    static readonly type = "[Aircrafts] GetRanks";
}

export class RemoveAircraft {
    static readonly type = '[Aircrafts] RemoveRank';
    constructor(public id:number) {}
}
export class CreateOrUpdateAircraft {
    static readonly type = '[Aircrafts] CreateOrUpdateRank';
    constructor(public item:Rank) {}
}

@State<Aircraft[]>({
    name: 'aircraft',
    defaults: []
})
@Injectable()
export class AircraftState {
    constructor(private http:HttpClient) {}
    @Action(GetAircrafts)
    async GetAbsences(ctx: StateContext<Aircraft[]>){
        let badges = await this.http.get('/api/aircrafts?sort=name,ASC').toPromise() as Aircraft[];
        ctx.setState(badges);
    }

    @Action(CreateOrUpdateAircraft)
    async CreateOrUpdate(ctx: StateContext<Aircraft[]>, action:CreateOrUpdateAircraft){
        let result:Aircraft;
        let state = ctx.getState();
        if(action.item.id == null){
            result = await this.http.post('/api/aircrafts', action.item).toPromise() as Aircraft;
        } else {
            result = await this.http.patch('/api/aircrafts/' + action.item.id, action.item).toPromise() as Aircraft;
            state = state.filter(x => x.id != result.id);
        }
        ctx.setState([...state, result].sort((a, b) => a.name?.toUpperCase() > b.name?.toUpperCase() ? 1 : -1));
    }
    @Action(RemoveAircraft)
    async RemoveBadge(ctx: StateContext<Rank[]>, action:RemoveAircraft){
        let result = await this.http.delete('/api/aircrafts/' + action.id).toPromise();
        let state = ctx.getState();
        ctx.setState([...state.filter(x => x.id != action.id)]);
    }
}