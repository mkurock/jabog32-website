import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Select, State, StateContext } from "@ngxs/store";
import { Notam, NotamAck } from "../model/notam";
import { NotificationService } from "../services/notification.service";

export class GetNotam {
    static readonly type = '[Notam] GetNotam';
}
export class AcknowledgeNotam {
    static readonly type = '[Notam] AcknowledgeNotam';
    constructor(public id:number) {}
}
export class DeleteNotam {
    static readonly type = '[Notam] DeleteNotam';
    constructor(public id:number) {}
}

export class CreateNotam {
    static readonly type = '[Notam] CreateNotam';
    constructor(public payload: Notam) {}
}


@State<Notam[]>({
    name: 'notam',
    defaults: []
})
@Injectable()
export class NotamState {
    constructor(
        private http:HttpClient,
        private notify:NotificationService
        ) {}

    @Action(GetNotam)
    async GetNotams(ctx: StateContext<Notam[]>){
        let notams = await this.http.get('/api/notams?sort=createdAt,DESC').toPromise() as Notam[];
        ctx.setState(notams);
    }

    @Action(AcknowledgeNotam)
    async AcknowledgeNotam(ctx: StateContext<Notam[]>, action:AcknowledgeNotam){
        let notamAck = await this.http.get('/api/notams/acknowledge/' + action.id).toPromise() as NotamAck;
        if(notamAck){
            let state = ctx.getState().map(x => { return {...x }});
            let notam = state.find(x => x.id == action.id);
            notam.notamAcks = [...notam.notamAcks];
            notam.notamAcks.push(notamAck);
            ctx.setState(state);
        }
    }
    @Action(DeleteNotam)
    async DeleteNotam(ctx: StateContext<Notam[]>, action:DeleteNotam){
        await this.http.delete('/api/notams/' + action.id).toPromise();
        const state = ctx.getState();
        return ctx.setState(state.filter(x => x.id != action.id));
    }

    @Action(CreateNotam)
    async CreateNotam(ctx: StateContext<Notam[]>, action:CreateNotam){
        let notam = await this.http.post('/api/notams', action.payload).toPromise() as Notam;
        const state = ctx.getState();
        let newState = [...state, notam].sort((a, b) => a.modifiedAt > b.modifiedAt ? -1 : 1);

        return ctx.setState(newState);
    }
    
}