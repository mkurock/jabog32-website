import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, actionMatcher, Selector, State, StateContext } from "@ngxs/store";
import { Page } from "../model/page";

export class GetPages {
    static readonly type = '[Pages] GetPages';
}
export class EditPage {
    static readonly type = '[Pages] EditPage';
    constructor(public id:number) {}
}

export class UpdatePage {
    static readonly type = '[Pages] UpdatePage';
    constructor(public item:Page) {}
}

export class PageStateModel {
    pages:Page[];
    editItem:Page;
}

@State<PageStateModel>({
    name: 'pages',
    defaults: {
        pages: [],
        editItem: new Page()
    }
})
@Injectable()
export class PageState {
    constructor(private http:HttpClient) {}

    @Selector()
    static pages(state:PageStateModel){
        return state.pages;
    }
    @Selector()
    static editItem(state:PageStateModel){
        return state.editItem;
    }
    @Action(GetPages)
    async GetPages(ctx:StateContext<PageStateModel>){
        let result = await this.http.get('/api/pages').toPromise() as Page[];
        return ctx.patchState({ pages: result });
    }
    @Action(EditPage)
    async EditPage(ctx:StateContext<PageStateModel>, action:EditPage){
        const state = ctx.getState();
        let item = await this.http.get('/api/pages/' + action.id).toPromise() as Page;
        ctx.patchState({ editItem: item });
    }
    @Action(UpdatePage)
    async UpdatePage(ctx:StateContext<PageStateModel>, action:UpdatePage){
        const state = ctx.getState();
        let item = await this.http.patch('/api/pages/' + action.item.id, action.item).toPromise() as Page;
        ctx.patchState({ editItem: new Page() });
    }
}