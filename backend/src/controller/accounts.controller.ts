import { Controller, Get, HttpException, Param, Post, Render, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, response, Response } from "express";
import { AuthService } from "src/auth/authentication.service";
import { AuthenticatedGuard } from "src/auth/guards/authenticated.guard";
import { LoginGuard } from "src/auth/guards/login.guard";
import { BaseController } from "src/common/controller/base.controller";
import { MailService } from "src/service/mail.service";
import { UsersService } from "src/service/user.service";


@Controller('accounts')
export class AccountsController extends BaseController{
    constructor(
        private authService:AuthService,
        private userService:UsersService,
        private mailService:MailService
    ){
        super();
    }

    @Get('/login')
    @Render('accounts/login')
    loginPage(@Req() req){
        let payload = {
            loginFailed: req.query.failed == 'true'
        }
        return this.setResponse('login', req, payload)
    }

    @Get('/profile')
    @UseGuards(AuthenticatedGuard)
    @Render('accounts/profile')
    profile(@Req() req){
        return this.setResponse('profile', req, {})
    }

    @Get('/logout')
    logout(@Req() req, @Res() res){
        req.logout();
        res.redirect('/');
    }

    @UseGuards(LoginGuard)
    @Post('/login')
    async login(@Req() req, @Res() res:Response) {
        res.redirect("/");
    }   

    // @Get('/passwordexpired/:userid')
    // @Render('accounts/passwordexpired')
    // async resetPassword(@Param() params, @Req() req, @Res() res){
    //     let user = await this.userService.getUserById(params.userid);
    //     if(!user)
    //         throw new HttpException("User not found", 400);
    //     let token = this.authService.createResetPasswordToken(user.userName);
    //     let resetLink = req.headers.host + '/accounts/resetpassword/token/' + token;
    //     let r = await this.mailService.sendMail(user.email, 'Testmail', "Reset password: " + resetLink);
    //     return this.setResponse('passwordexpired', req, {});
    // }

    // @Get('/resetpassword/token/:token')
    // @Render('accounts/resetpassword')
    // resetPasswordSetNew(@Param() params, @Req() req, @Res() res){
    //     let token = params.token;
    //     let username = this.authService.checkResetPasswordToken(token);
    //     return this.setResponse('resetpassword', req, {});
    // }

    // @Post('/resetpassword/token/:token')
    // @Render('accounts/resetpasswordsuccess')
    // resetPasswordSetNewPost(@Param() params, @Req() req, @Res() res){
    //     let pw1 = req.body.password;
    //     let pw2 = req.body.password2;
    //     if(pw1 != pw2) {
    //         req.redirect('/accounts/resetpassword/token/' + params.token + "?error=passwordsdontmatch");
    //     } else if(pw1.length <=5){
    //         req.redirect('/accounts/resetpassword/token/' + params.token + "?error=passwordnotgoodenough");
    //     } else {
    //         let username = this.authService.checkResetPasswordToken(params.token);
    //         if(username){
    //             this.authService.resetPassword(username, pw1);
    //         }
    //         return this.setResponse('passwordexpired', req, {});
    //     }
    // }


    // @Get('/changepassword')
    // @UseGuards(AuthenticatedGuard)
    // @Render('accounts/changepassword')
    // changePassword(@Req() req){
    //     return this.setResponse('changepassword', req, {});
    // }

    // @Post('/changepassword')
    // @UseGuards(AuthenticatedGuard)
    // async changePasswordPost(@Req() req, @Res() res){
    //     let oldPw = req.body.oldPassword;
    //     let new1 = req.body.password;
    //     let new2 = req.body.password2;
    //     if(await this.authService.validateUser(req.user.UserName, oldPw) != null){
    //         if(new1 == new2){
    //             //update pw
    //             await this.authService.resetPassword(req.user.UserName, new1);
    //             res.redirect('/accounts/changepassword?msg=Passwort geändert&mode=info')
    //         } else {
    //             res.redirect('/accounts/changepassword?msg=Passwörter stimmen nicht überein&mode=error')
    //         }
    //     } else {
    //         req.flash("Error");
    //         res.redirect('/accounts/changepassword?msg=Das aktuelle Passwort ist nicht korrekt&mode=error')
    //     }

    //     // req.redirect('/accounts/profile?msg="Passwort erfolgreich geändert."&mode=info');
    // }


    // @Get('/register')
    // @Render('accounts/register')
    // register(@Req() req) {
    //     return this.setResponse('register', req, {});
    // }

    // @Get('/registercomplete')
    // @Render('accounts/registercomplete')
    // registerComplete(@Req() req) {
    //     return this.setResponse('registercomplete', req, {});
    // }

    // @Post('/register')
    // async registerPost(@Req() req, @Res() res) {
    //     let userName = req.body.userName;
    //     let email = req.body.email;
    //     let error;
    //     let userIsFree = await this.authService.checkIfUserNameIsFree(req.body.userName);
    //     if(userIsFree) {
    //         if(this.authService.validateEmail(req.body.Email)) {
    //             if(req.body.password.length > 5 && req.body.password == req.body.confirmPassword){
    //                 await this.authService.registerUser(userName, email, req.body.password);
    //                 return res.redirect('registercomplete');
    //             } else {
    //                 error = "Passwörter stimmen nicht überein oder ist zu kurz";
    //             }
    //         } else {
    //             error = "Email nicht gültig";
    //         }
    //     } else {
    //         error = "Benutzername bereits vergeben"
    //     }
    //     res.render('accounts/register', this.setResponse('register', req, { error, userName, email }));
    // }
}