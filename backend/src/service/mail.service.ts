import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

@Injectable()
export class MailService {
    host:string;
    port:number;
    secure:boolean;
    user:string;
    pass:string;
    fromMail:string;
    replyMail:string;
    client:Mail;
    constructor(configService:ConfigService){
        this.host = configService.get("MAIL_HOST");
        this.port = configService.get<number>("MAIL_PORT");
        this.secure = configService.get<boolean>("MAIL_SECURE");
        this.user = configService.get("MAIL_USER");
        this.pass = configService.get("MAIL_PASS");
        this.fromMail = configService.get("MAIL_FROM_MAIL");
        this.replyMail = configService.get("MAIL_REPLY_MAIL");
        this.client = nodemailer.createTransport({
            host: this.host,
            secure: true,
            tls: { rejectUnauthorized: false },
            auth: {
                user: this.user,
                pass: this.pass
            },
            debug: true
        });
        this.client.verify((err, _) => {
            console.error(err);
        });
    }

    async sendMail(to:string, subject:string, message:string, isHtml:boolean = false){
        let mailObj:Mail.Options = {
            from: this.fromMail,
            replyTo: this.replyMail,
            to: to,
            subject: subject
        };
        if(isHtml)
            mailObj.html = message;
        else
            mailObj.text = message;

        console.log(mailObj);
        let info = await this.client.sendMail(mailObj);
        return info;
    }


}
