import { HttpException } from "@nestjs/common";

export class PasswordExpiredException extends HttpException {
    constructor(public userId:string){
        super(null, 200);
    }
}