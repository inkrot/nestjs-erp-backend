import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { AuthService } from 'auth/auth.service';

@Injectable()
export class TokenAuthStrategy extends PassportStrategy(Strategy, 'token-auth') {
    constructor() {
        super();
    }

    async validate(req, done): Promise<any> {
        console.log('sssss')
        throw new BadRequestException()
    }

}
