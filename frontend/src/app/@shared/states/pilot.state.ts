import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Actions, State, StateContext } from "@ngxs/store";
import { Pilot } from "../model/pilot";
import { Rank } from "../model/rank";

export class GetPilots {
    static readonly type = "[Pilot] GetPilots";
}

export class RemovePilot {
    static readonly type = '[Pilot] RemovePilot';
    constructor(public id:number) {}
}
export class CreateOrUpdatePilot {
    static readonly type = '[Pilot] CreateOrUpdatePilot';
    constructor(public item:Pilot) {}
}
export class UpdateBadgesPilot {
    static readonly type = '[Pilot] UpdateBadgesPilot';
    constructor(public item:Pilot){}
}

@State<Pilot[]>({
    name: 'pilot',
    defaults: []
})
@Injectable()
export class PilotState {
    constructor(private http:HttpClient) {}
    @Action(GetPilots)
    async GetPilots(ctx: StateContext<Pilot[]>){
        let pilots = await this.http.get('/api/pilots?filter=deleted||$ne||true&sort=user.userName,ASC').toPromise() as Pilot[];
        ctx.setState(pilots);
    }

    @Action(CreateOrUpdatePilot)
    async CreateOrUpdate(ctx: StateContext<Pilot[]>, action:CreateOrUpdatePilot){
        let result:Pilot;
        let state = ctx.getState();
        if(action.item.id == null){
            result = await this.http.post('/api/pilots?sort=user.userName,ASC', action.item).toPromise() as Pilot;
        } else {
            result = await this.http.patch('/api/pilots/' + action.item.id, action.item).toPromise() as Pilot;
            state = state.filter(x => x.id != result.id);
        }
        ctx.setState([...state, result].sort((a, b) => a.user?.userName?.toUpperCase() > b.user?.userName?.toUpperCase() ? 1 : -1));
    }
    @Action(RemovePilot)
    async RemoveBadge(ctx: StateContext<Pilot[]>, action:RemovePilot){
        let result = await this.http.delete('/api/pilots/' + action.id).toPromise();
        let state = ctx.getState();
        ctx.setState([...state.filter(x => x.id != action.id)]);
    }
    @Action(UpdateBadgesPilot)
    async UpdateBadgesPilot(ctx: StateContext<Pilot[]>, action:UpdateBadgesPilot){
        let result = await this.http.patch('/api/pilots/badges/' + action.item.id, action.item.badges).toPromise() as Pilot;
        let state = ctx.getState().map(x => { return {...x }});
        let pilot = state.find(x => x.id == action.item.id);
        pilot.badges = [...result.badges];
        ctx.setState([...state]);
    }
}