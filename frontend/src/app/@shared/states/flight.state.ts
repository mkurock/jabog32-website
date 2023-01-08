import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Actions, State, StateContext } from "@ngxs/store";
import { Flight } from "../model/flight";

export class GetFlights {
    static readonly type = "[Flight] GetFlights";
}

export class RemoveFlight {
    static readonly type = '[Flight] RemoveFlight';
    constructor(public id:number) {}
}
export class CreateOrUpdateFlight {
    static readonly type = '[Flight] CreateOrUpdateFlight';
    constructor(public item:Flight) {}
}

@State<Flight[]>({
    name: 'flight',
    defaults: []
})
@Injectable()
export class FlightState {
    constructor(private http:HttpClient) {}
    @Action(GetFlights)
    async GetAbsences(ctx: StateContext<Flight[]>){
        let badges = await this.http.get('/api/flights?sort=squadron.number,ASC&sort=name,ASC').toPromise() as Flight[];
        ctx.setState(badges);
    }

    @Action(CreateOrUpdateFlight)
    async CreateOrUpdate(ctx: StateContext<Flight[]>, action:CreateOrUpdateFlight){
        let result:Flight;
        let state = ctx.getState();
        if(action.item.id == null){
            result = await this.http.post('/api/flights', action.item).toPromise() as Flight;
        } else {
            result = await this.http.patch('/api/flights/' + action.item.id, action.item).toPromise() as Flight;
            state = state.filter(x => x.id != result.id);
        }
        ctx.setState([...state, result].sort((a, b) => a.name?.toUpperCase() > b.name?.toUpperCase() ? 1 : -1));
    }
    @Action(RemoveFlight)
    async RemoveBadge(ctx: StateContext<Flight[]>, action:RemoveFlight){
        let result = await this.http.delete('/api/flights/' + action.id).toPromise();
        let state = ctx.getState();
        ctx.setState([...state.filter(x => x.id != action.id)]);
    }
}