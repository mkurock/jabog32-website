import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserEntity } from 'src/models/user.entity';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext) {
    const methodRoles = this.reflector.get<string[]>('roles', context.getHandler());
    const controllerRoles = this.reflector.get<string[]>('roles', context.getClass());
    const request = context.switchToHttp().getRequest();
    let roles = methodRoles ? methodRoles : controllerRoles;
    if(!roles){
      return request.isAuthenticated();
    } else {
      if(request.isAuthenticated()){
        let user = request.user as UserEntity;
        let result = user.roles.filter(x => roles.indexOf(x.name) != -1);
        return result.length > 0;
      } else {
        return false;
      }
    }
  }
}