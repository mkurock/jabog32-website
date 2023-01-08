import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Select, State, StateContext } from "@ngxs/store";
import { Absence } from "../model/absence";

export class GetAbsences {
    static readonly type = '[Absence] GetAbsende';
    constructor(public filter:string) {}
}
export class RemoveAbsence {
    static readonly type = '[Absence] RemoveAbsence';
    constructor(public id:number){}
}
export class CreateAbsence {
    static readonly type = '[Absence] Create Absence';
    constructor(public model:Absence) {}
}

@State<Absence[]>({
    name: 'absence',
    defaults: []
})
@Injectable()
export class AbsenceState {
    constructor(private http:HttpClient) {}

    @Action(GetAbsences)
    async GetAbsences(ctx: StateContext<Absence[]>, action: GetAbsences){
      if(action.filter == 'all'){
        let absences = await this.http.get('/api/absences?sort=end,DESC').toPromise() as Absence[];
        ctx.setState(absences);
      } else {
        let now = new Date();
        now.setHours(0, 0, 0, 0);
        let absences = await this.http.get('/api/absences?sort=end,DESC&filter=end||$gte||' + now.toISOString()).toPromise() as Absence[];
        ctx.setState(absences);
      }
    }
    @Action(RemoveAbsence)
    async RemoveAbsence(ctx: StateContext<Absence[]>, action:RemoveAbsence){
        try {
            await this.http.delete('/api/absences/' + action.id).toPromise();
            const state = ctx.getState();
            let newState = state.filter(x => x.id != action.id);
            ctx.setState(newState);
        } catch(err){

        }
    }
    @Action(CreateAbsence)
    async createAbsence(ctx: StateContext<Absence[]>, action:CreateAbsence){
        try {
            let result = await this.http.post('/api/absences', action.model).toPromise() as Absence;
            const state = ctx.getState();
            let newState = [...state, result];
            newState = newState.sort((a, b) => a.begin > b.begin ? -1 : 1);
            ctx.setState(newState);
        } catch(err){

        }
    }
}
