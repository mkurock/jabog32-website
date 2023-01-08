import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Actions, State, StateContext } from "@ngxs/store";
import { Badge } from "../model/badge";

export class GetBadges {
    static readonly type = "[Badge] GetBadges";
}

export class RemoveBadge {
    static readonly type = '[Badge] RemoveBadge';
    constructor(public id:number) {}
}
export class CreateOrUpdateBadge {
    static readonly type = '[Badge] CreateOrUpdateBadge';
    constructor(public item:Badge) {}
}

@State<Badge[]>({
    name: 'badge',
    defaults: []
})
@Injectable()
export class BadgeState {
    constructor(private http:HttpClient) {}
    @Action(GetBadges)
    async GetAbsences(ctx: StateContext<Badge[]>){
        let badges = await this.http.get('/api/badge').toPromise() as Badge[];
        ctx.setState(badges);
    }

    @Action(CreateOrUpdateBadge)
    async CreateOrUpdate(ctx: StateContext<Badge[]>, action:CreateOrUpdateBadge){
        let result:Badge;
        let state = ctx.getState();
        if(action.item.id == null){
            result = await this.http.post('/api/badge?sort=name,ASC', action.item).toPromise() as Badge;
        } else {
            result = await this.http.patch('/api/badge/' + action.item.id, action.item).toPromise() as Badge;
            state = state.filter(x => x.id != result.id);
        }
        ctx.setState([...state, result].sort((a, b) => a.name?.toUpperCase() > b.name?.toUpperCase() ? 1 : -1));
    }
    @Action(RemoveBadge)
    async RemoveBadge(ctx: StateContext<Badge[]>, action:RemoveBadge){
        let result = await this.http.delete('/api/badge/' + action.id).toPromise();
        let state = ctx.getState();
        ctx.setState([...state.filter(x => x.id != action.id)]);
    }
}