import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MaxLengthValidator } from "@angular/forms";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { NavBuilder, NavGroup } from "../model/navigation";
import { Role, User } from "../model/user";
import { UserService } from "../services/user.service";

export class GetUserConfig {
    static readonly type = '[User] GetConfig';
}

export class GetUsers {
    static readonly type = '[User] GetUsers';
}

export class GetRoles {
    static readonly type = '[User] GetRoles';
}

export class UpdateUser {
    static readonly type = '[User] UpdateUser';
    constructor(public user:User) {}
}
export class RemoveUser {
    static readonly type = '[User] RemoveUser';
    constructor(public userId:number) {}
}

export class BuildUserNavigation {
    static readonly type = '[User] ' + BuildUserNavigation.name;
}

@State<UserStateModel>({
    name: 'user',
    defaults: {
        currentUser: null,
        users: [],
        navigation: [],
        roles: []
    }
})
@Injectable()
export class UserState {
    constructor(private userService:UserService, private http:HttpClient) {}

    @Selector()
    static currentUser(state: UserStateModel){
        return state.currentUser;
    }

    @Selector()
    static users(state: UserStateModel){
        return state.users;
    }
    @Selector()
    static roles(state: UserStateModel){
        return state.roles;
    }

    @Selector()
    static navigation(state: UserStateModel){
        return state.navigation;
    }

    @Action(GetRoles)
    async GetRoles(ctx: StateContext<UserStateModel>){
        let roles = await this.http.get('/api/users/roles').toPromise() as Role[];
        ctx.patchState({ roles });
    }

    @Action(RemoveUser)
    async RemoveUser(ctx: StateContext<UserStateModel>, action:RemoveUser){
        let result = await this.http.delete('/api/users/' + action.userId).toPromise() as User;
        let state = ctx.getState();
        ctx.patchState({ users: state.users.filter(x => x.id != action.userId )});
    }

    @Action(UpdateUser)
    async UpdateUser(ctx: StateContext<UserStateModel>, action:UpdateUser){
        let user = { ...action.user };
        delete user.userId;
        let result = await this.http.patch('/api/users/' + action.user.id, user).toPromise() as User;
        let state = [...ctx.getState().users];
        let i = state.findIndex(x => x.id == result.id);
        state[i] = result;
        ctx.patchState({ users: state });
    }

    @Action(GetUsers)
    async GetUsers(ctx: StateContext<UserStateModel>){
        let users = await this.http.get('/api/users?filter=deleted||$ne||true&sort=userName,ASC').toPromise() as User[];
        ctx.patchState({ users });
    }

    @Action(GetUserConfig)
    async getUserConfig(ctx:StateContext<UserStateModel>){
        let cfg = await this.userService.getUserConfig();
        const state = ctx.getState();
        ctx.setState({
            ...state,
            currentUser: cfg
        })
        ctx.dispatch(new BuildUserNavigation());
        return cfg;
    }

    @Action(BuildUserNavigation)
    buildUserNavigation(ctx:StateContext<UserStateModel>){
        const state = ctx.getState();
        let nav:NavBuilder = new NavBuilder();
        let userRoles = state.currentUser?.roles;
        nav.addNavItem('Home', 'Dateien', '/files', 'folder-open');
        for(let role of userRoles){
            switch(role.name){
                case 'Einsatzberichte':
                    nav.addNavItem('Logbuch', 'Einsatzberichte', '/logbook', 'journal-whills');
                    break;
                case 'Benutzerverwaltung':
                    nav.addNavItem('Benutzer / Piloten', 'Benutzer', '/users', 'users');
                    nav.addNavItem('Benutzer / Piloten', 'Piloten', '/pilots', 'user-tie');
                    break;
                case 'Bewerbungsverwaltung':
                    nav.addNavItem('Home', 'Bewerbungen', '/applications', 'file-alt');
                    break;
                case 'Statische Seiten':
                    nav.addNavItem('Home', 'Statische Seiten', '/pages', 'columns');
                    break;
                case 'Newsverwaltung':
                    nav.addNavItem('Home', 'News', '/news', 'newspaper');
                    break;
                case 'Geschwaderverwaltung':
                    nav.addNavItem('Benutzer / Piloten', 'Ränge', '/ranks', 'sitemap');
                    nav.addNavItem('Benutzer / Piloten', 'Auszeichnungen', '/badges', 'medal');
                    nav.addNavItem('Geschwaderverwaltung', 'Staffeln', '/squadrons', 'cog');
                    nav.addNavItem('Geschwaderverwaltung', 'Schwärme', '/flights', 'cogs');
                    nav.addNavItem('Geschwaderverwaltung', 'Muster', '/aircrafts', 'fighter-jet');
                    nav.addNavItem('Geschwaderverwaltung', 'Pilotenzuordnung', '/pilot-positions', 'user-plus');
                    break;
            }
        }
        ctx.setState({
            ...state,
            navigation: nav.navigation
        })
    }
}

export class UserStateModel {
    currentUser: User;
    users:User[];
    navigation:NavGroup[];
    roles:Role[]
}
