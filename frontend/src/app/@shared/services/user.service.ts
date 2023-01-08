import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http:HttpClient){}

    async getUserConfig(){
        let result = await this.http.get('/api/users/config').toPromise();
        return new User(result);

    }
}