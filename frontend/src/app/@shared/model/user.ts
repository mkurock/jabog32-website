export class User {
    userName:string;
    userId:string;
    roles:Role[];
    email:string;
    id:number;
    hasRole(role:string):boolean{
        return this.roles.find(x => x.name == role) != null;
    }
    constructor(result?:any){
        this.roles = result.roles;
        this.id = result.id;
        this.email = result.email;
        this.userId = result.userId;
        this.userName = result.userName;
    }
}
export class Role {
    id:number;
    name:string;
    roleId:string;
    checked:boolean = false;
}