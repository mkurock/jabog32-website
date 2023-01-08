import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Logbook } from "../model/logbook";

export class GetLogbook {
    static readonly type = "[Logbook] GetLogbook"
    constructor(public start?:Date, public end?:Date) {}
}
export class CreateOrUpdateLogbook {
    static readonly type = "[Logbook] CreateOrUpdateLogbook"
    constructor(public item:Logbook) {}
}


@State<Logbook[]>({
    name: 'logbook',
    defaults: []
})
@Injectable()
export class LogbookState {
    constructor(private http:HttpClient){}

    @Action(CreateOrUpdateLogbook)
    async CreateOrUpdateLogbook(ctx:StateContext<Logbook[]>, action:CreateOrUpdateLogbook){
        if(action.item.id == null){
            let result = await this.http.post('/api/logbooks', action.item).toPromise() as Logbook;
            let state = [...ctx.getState()];
            state.push(result);
            ctx.setState(state.sort((a,b) => a.id > b.id ? -1 : 1));
        } else {
            let result = await this.http.patch('/api/logbooks/' + action.item.id, action.item).toPromise() as Logbook;
            let state = [...ctx.getState()].filter(x => x.id != action.item.id);
            state.push(result);
            ctx.setState(state.sort((a,b) => a.id > b.id ? -1 : 1));
        }
    }

    @Action(GetLogbook)
    async GetLogbook(ctx:StateContext<Logbook[]>, action: GetLogbook){
        if(action.start && action.end){
            let result = await this.http.get(`/api/logbooks?` +
            `filter=departure||$gte||${action.start.toISOString()}` +
            `&filter=departure||$lte||${action.end.toISOString()}` +
            `&sort=id,DESC&limit=100`).toPromise() as Logbook[];
            ctx.setState(result);
        } else {
            let result = await this.http.get('/api/logbooks?sort=id,DESC&limit=100').toPromise() as Logbook[];
            ctx.setState(result);

        }
    }
}