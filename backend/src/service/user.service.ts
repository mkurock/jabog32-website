import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/authentication.service';
import { UserEntity } from 'src/models/user.entity';
import { Repository } from 'typeorm';
import * as mysql from 'mysql';


// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) public service:Repository<UserEntity>,
    private configService: ConfigService,
  ) {}
  async findOne(username: string): Promise<UserEntity | undefined> {
    // return this.service.findOne({ where: { userName: username }, relations: ['roles'] }); 
    return this.service.createQueryBuilder('user')
      .where("LOWER(userName) = :userName", { userName: username })
      .andWhere("deleted = 0")
      .leftJoinAndSelect("user.roles", "roles")
      .getOne();
  }

  getForumUserFromId(userId:number){
    let con = mysql.createConnection({
      host: this.configService.get("DATABASE_HOST"),
      user: this.configService.get("DATABASE_USER"),
      password: this.configService.get("DATABASE_PWD"),
      database: this.configService.get("DATABASE_NAME_FORUM")
    });
    con.connect();
    return new Promise((res, rej) => {
      con.query(`SELECT user_id, username, username_clean, user_email, user_password FROM jabog32_forum.phpbb_users WHERE user_id = ${userId};`,
        (err, results, fields) => {
          if(err) {
            rej(err);
            con.end();
            console.log(err);
          } else {
            con.end();
            res(results[0]);
          }
        }
      );
    });
  }

  getForumUserFromName(username:string){
    let con = mysql.createConnection({
      host: this.configService.get("DATABASE_HOST"),
      user: this.configService.get("DATABASE_USER"),
      password: this.configService.get("DATABASE_PWD"),
      database: this.configService.get("DATABASE_NAME_FORUM")
    });
    con.connect();
    return new Promise((res, rej) => {
      con.query(`SELECT user_id, username, username_clean, user_email, user_password FROM jabog32_forum.phpbb_users WHERE username_clean = '${username.toLowerCase()}';`,
        (err, results, fields) => {
          if(err) {
            rej(err);
            con.end();
            console.log(err);
          } else {
            con.end();
            res(results[0]);
          }
        }
      );
    });
  }

  async getUserById(userid:string){
    return await this.service.findOne({ userId: userid });
  }

  async updateUserPassword(username, hash, salt){
    let user = await this.service.findOne({ userName: username });
    if(user){
      await this.service.save(user);
      return true;
    } else {
      return false;
    }
  }
  async updateUser(user:UserEntity){
    if(user.newPassword != "" && user.newPassword != null){
      let salt = AuthService.generateNewSalt();
      await this.updateUserPassword(user.userName, AuthService.hashPassword(user.newPassword, salt), salt);
    }
    let dbUser = await this.service.findOne(user.id);
    dbUser.userName = user.userName;
    dbUser.forumUserId = user.forumUserId;
    dbUser.roles = [];
    await this.service.save(dbUser);
    dbUser.roles = user.roles;
    await this.service.save(dbUser);
    return dbUser;
  }

  async save(user:UserEntity){
    await this.service.save(user);
  }
}