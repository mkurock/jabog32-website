import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { News } from "../model/news";
import { DeleteNotam } from "./notam.state";

export class NewsStateModel {
    items:News[];
    editItem:News;
}

export class GetNews {
    static readonly type = '[News] GetNews'
}
export class GetSingleNews {
    static readonly type = '[News] GetSingleNews'
    constructor(public id:number){}
}
export class CreateOrUpdateNews {
    static readonly type = '[News] CreateOrUpdateNews'
    constructor(public item:News){}
}

export class DeleteNews {
    static readonly type = '[News] DeleteNews'
    constructor(public id:number){}
}

@State<NewsStateModel>({
    name: 'news',
    defaults: {
        items: [],
        editItem: new News()
    }
})
@Injectable()
export class NewsState {
    constructor(private http:HttpClient){}

    @Selector()
    static allNews(state:NewsStateModel){
        return state.items;
    }
    @Selector()
    static editItem(state:NewsStateModel){
        return state.editItem;
    }

    @Action(GetNews)
    async getNews(ctx:StateContext<NewsStateModel>, action:GetNews){
        let items = await this.http.get('/api/news?sort=modifiedAt,DESC').toPromise() as News[];
        return ctx.patchState({ items });
    }
    @Action(DeleteNews)
    async deleteNews(ctx:StateContext<NewsStateModel>, action:DeleteNews){
        let r = await this.http.delete('/api/news/' + action.id).toPromise();
        const state = ctx.getState();
        let items = state.items.filter(x => x.id != action.id);
        return ctx.patchState({ items });
    }
    @Action(GetSingleNews)
    async getSingleNews(ctx:StateContext<NewsStateModel>, action:GetSingleNews){
        let editItem = await this.http.get('/api/news/' + action.id).toPromise() as News;
        return ctx.patchState({ editItem });
    }
    @Action(CreateOrUpdateNews)
    async createOrUpdateNews(ctx:StateContext<NewsStateModel>, action:CreateOrUpdateNews){
        if(action.item.id != null && action.item.id != 0){
            let editItem = await this.http.patch('/api/news/' + action.item.id, action.item).toPromise() as News;
            return ctx.patchState({ editItem: new News() });
        } else {
            let editItem = await this.http.post('/api/news', action.item).toPromise() as News;
            return ctx.patchState({ editItem: new News() });
        }
    }
}