import { Injectable } from '@nestjs/common';
import { PasswordExpiredException } from 'src/common/exceptions/passwordexpired.exception';
import { UsersService } from 'src/service/user.service';
import * as crypto from 'crypto';
import * as uuid from 'uuid';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from 'src/models/user.entity';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
  private secret:string;
  constructor(
      private usersService: UsersService,
      private configService: ConfigService
    ) {
      this.secret = configService.get('RESET_PASSWORD_SECRET');
    }

  async validateUser(username: string, pass: string): Promise<any> {
   
    const user = await this.usersService.findOne(username);
    //user found in local db
    if(user){
      let forumUser:any = await this.usersService.getForumUserFromId(user.forumUserId);
      if(bcrypt.compareSync(pass, forumUser.user_password.replace(/^\$2y/, "$2a"))){
        //userpassword matched
        return user;
      }
    } else {
      //user not found. First Login.
      let forumUser:any = await this.usersService.getForumUserFromName(username);
      if(forumUser){
        //user in forum found
        if(bcrypt.compareSync(pass, forumUser.user_password.replace(/^\$2y/, "$2a"))){
          //password correct
          let newUser = new UserEntity();
          newUser.userName = forumUser.username;
          newUser.email = forumUser.user_email;
          newUser.userId = uuid.v4();
          newUser.forumUserId = forumUser.user_id;
          await this.usersService.service.save(newUser);

          return await this.usersService.findOne(username);
        }
      }
    }
    return null;
  }
  

  static hashPassword(password:string, salt:string){
    let pwHash = crypto.createHash("sha256").update(salt + password).digest("hex");
    return pwHash;
  }

  static generateNewSalt(){
    let newSalt = uuid.v4();
    return newSalt;
  }

  createResetPasswordToken(userName:string):string{
    let payload = {
      userName,
      timestamp: new Date().toISOString()
    };
    return jwt.sign(payload, this.secret, { expiresIn: '24h'});
  }
  checkResetPasswordToken(token:string):any{
    try {
      let data:any = jwt.verify(token, this.secret, { ignoreExpiration: false });
      return data?.userName;
    } catch(err){
      return null;
    }
  }
  async resetPassword(username:string, newPassword:string){
    let salt = AuthService.generateNewSalt();
    let pwHash = AuthService.hashPassword(newPassword, salt);
    await this.usersService.updateUserPassword(username, pwHash, salt);

  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

 async checkIfUserNameIsFree(username:string){
   return await this.usersService.findOne(username) ? false : true;
 }

 async registerUser(username:string, email:string, password:string){
   let user = new UserEntity();
   user.userName = username;
   user.email = email;
   user.userId = uuid.v4();
   await this.usersService.save(user);
 }
}