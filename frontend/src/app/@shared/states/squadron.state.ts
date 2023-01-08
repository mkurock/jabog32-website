import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Actions, State, StateContext } from "@ngxs/store";
import { Squadron } from "../model/squadron";

export class GetSquadrons {
    static readonly type = "[Squadron] GetSquadrons";
}

export class RemoveSquadron {
    static readonly type = '[Squadron] RemoveSquadron';
    constructor(public id:number) {}
}
export class CreateOrUpdateSquadron {
    static readonly type = '[Squadron] CreateOrUpdateSquadron';
    constructor(public item:Squadron) {}
}

@State<Squadron[]>({
    name: 'squadron',
    defaults: []
})
@Injectable()
export class SquadronState {
    constructor(private http:HttpClient) {}
    @Action(GetSquadrons)
    async GetAbsences(ctx: StateContext<Squadron[]>){
        let badges = await this.http.get('/api/squadrons').toPromise() as Squadron[];
        ctx.setState(badges);
    }

    @Action(CreateOrUpdateSquadron)
    async CreateOrUpdate(ctx: StateContext<Squadron[]>, action:CreateOrUpdateSquadron){
        let result:Squadron;
        let state = ctx.getState();
        if(action.item.id == null){
            result = await this.http.post('/api/squadrons?sort=name,ASC', action.item).toPromise() as Squadron;
        } else {
            result = await this.http.patch('/api/squadrons/' + action.item.id, action.item).toPromise() as Squadron;
            state = state.filter(x => x.id != result.id);
        }
        ctx.setState([...state, result].sort((a, b) => a.name?.toUpperCase() > b.name?.toUpperCase() ? 1 : -1));
    }
    @Action(RemoveSquadron)
    async RemoveBadge(ctx: StateContext<Squadron[]>, action:RemoveSquadron){
        let result = await this.http.delete('/api/squadrons/' + action.id).toPromise();
        let state = ctx.getState();
        ctx.setState([...state.filter(x => x.id != action.id)]);
    }
}