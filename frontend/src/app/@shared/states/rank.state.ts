import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Actions, State, StateContext } from "@ngxs/store";
import { Rank } from "../model/rank";

export class GetRanks {
    static readonly type = "[Rank] GetRanks";
}

export class RemoveRank {
    static readonly type = '[Rank] RemoveRank';
    constructor(public id:number) {}
}
export class CreateOrUpdateRank {
    static readonly type = '[Rank] CreateOrUpdateRank';
    constructor(public item:Rank) {}
}

@State<Rank[]>({
    name: 'rank',
    defaults: []
})
@Injectable()
export class RankState {
    constructor(private http:HttpClient) {}
    @Action(GetRanks)
    async GetAbsences(ctx: StateContext<Rank[]>){
        let badges = await this.http.get('/api/ranks?sort=order,ASC').toPromise() as Rank[];
        ctx.setState(badges);
    }

    @Action(CreateOrUpdateRank)
    async CreateOrUpdate(ctx: StateContext<Rank[]>, action:CreateOrUpdateRank){
        let result:Rank;
        let state = ctx.getState();
        if(action.item.id == null){
            result = await this.http.post('/api/ranks?sort=name,ASC', action.item).toPromise() as Rank;
        } else {
            result = await this.http.patch('/api/ranks/' + action.item.id, action.item).toPromise() as Rank;
            state = state.filter(x => x.id != result.id);
        }
        ctx.setState([...state, result].sort((a, b) => a.order > b.order ? 1 : -1));
    }
    @Action(RemoveRank)
    async RemoveBadge(ctx: StateContext<Rank[]>, action:RemoveRank){
        let result = await this.http.delete('/api/ranks/' + action.id).toPromise();
        let state = ctx.getState();
        ctx.setState([...state.filter(x => x.id != action.id)]);
    }
}