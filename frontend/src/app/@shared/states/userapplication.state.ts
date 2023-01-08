import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { UserApplication, UserApplicationComment } from "../model/application";

export class GetUserApplciations {
    static readonly type = '[UserApplciations] GetUserApplciations';
}

export class UpdateUserApplciations {
    static readonly type = '[UserApplciations] UpdateUserApplciations';
    constructor(public id:number, public item:UserApplication){}
}

export class CreateApplciationComment {
    static readonly type = '[UserApplciations] AddApplciationComment';
    constructor(public id:number, public text:string){}
}

@State<UserApplication[]>({
    name: 'userapplications',
    defaults: []
})
@Injectable()
export class UserApplicationState {
    constructor(private http:HttpClient) {}
    @Action(GetUserApplciations)
    async GetUserApplciations(ctx:StateContext<UserApplication[]>){
        let items = await this.http.get('/api/applications?sort=createdAt,DESC').toPromise() as UserApplication[];
        ctx.setState(items);
    }

    @Action(UpdateUserApplciations)
    async UpdateUserApplciations(ctx:StateContext<UserApplication[]>, action:UpdateUserApplciations){
        let result = await this.http.patch('/api/applications/' + action.id, action.item).toPromise() as UserApplication;
        let state = ctx.getState().map(x => { return {...x} });
        let item = state.find(x => x.id == action.id);
        item.status = action.item.status;
        item.aircraft = action.item.aircraft;
        ctx.setState(state);
    }

    @Action(CreateApplciationComment)
    async CreateApplciationComment(ctx:StateContext<UserApplication[]>, action:CreateApplciationComment){
        let result = await this.http.post('/api/applications/comment/' + action.id, {text: action.text }).toPromise() as UserApplicationComment;
        let state = ctx.getState().map(x => { return {...x} });
        let item = state.find(x => x.id == action.id);
        item.comments = [...item.comments];
        item.comments.push(result);
        ctx.setState(state);
    }
}