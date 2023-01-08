import { Injectable }  from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUserConfig, UserState, UserStateModel } from '../states/user.state';
 
@Injectable()
export class AppInitService {
 
    constructor(private store: Store) {
    }
    
    async init() {
        let state= await this.store.dispatch(new GetUserConfig()).toPromise();
        let currentUser = state?.user?.currentUser;
        if(currentUser?.roles?.find(x => x.name == 'Interner Bereich') == null){
            window.location.href = '/';
        }
    }
}
 