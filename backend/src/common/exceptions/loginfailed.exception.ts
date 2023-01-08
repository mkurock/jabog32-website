import { HttpException } from "@nestjs/common";

export class LoginFailedException extends HttpException {
    constructor(){
        super(null, 401);
    }
}