import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    UnauthorizedException,
    ForbiddenException,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
import { LoginFailedException } from '../exceptions/loginfailed.exception';
import { PasswordExpiredException } from '../exceptions/passwordexpired.exception';
  
  @Catch(HttpException)
  export class AuthExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      if (
        exception instanceof UnauthorizedException ||
        exception instanceof ForbiddenException
      ) {
        (request as any).flash('loginError', 'Please try again!');
        response.redirect('/accounts/login');
      } else if(exception instanceof LoginFailedException){
        response.redirect('/accounts/login?failed=true');
      } else if(exception instanceof PasswordExpiredException){ 
        response.redirect('/accounts/passwordexpired/' + (exception as PasswordExpiredException).userId);
      } else if(exception.getStatus() == 404) {
        console.log(exception.message);
        response.status(404).send('Not found!')
      } else {
        console.error(exception);
        response.redirect('/error');
      }
    }
  }