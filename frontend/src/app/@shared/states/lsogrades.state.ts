import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { PilotsStat } from '../model/pilotstat';

export class GetLSOGrades {
  static readonly type = '[LSOGradesState] GetLSOGrades';
  constructor(public map: string) {}
}

@State<{ [map: string]: any[] }>({
  name: 'lsogrades',
  defaults: {
    default: [],
  },
})
@Injectable()
export class LSOGradesState {
  constructor(private http: HttpClient) {}

  static getLsoGrades(map: string) {
    return createSelector(
      [LSOGradesState],
      (state: { [map: string]: any[] }) => {
        return state[map];
      },
    );
  }

  @Action(GetLSOGrades)
  async getLsoGrades(
    ctx: StateContext<{ [map: string]: any[] }>,
    action: GetLSOGrades,
  ) {
    let url = '/api/data/lsogrades/' + action.map;
    let data = (await this.http.get(url).toPromise()) as any[];
    let state = { ...ctx.getState() };
    state[action.map] = data;
    ctx.setState(state);
  }
}
