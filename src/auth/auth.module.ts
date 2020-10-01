import { Module } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { UsersModule } from 'users/users.module';
import { LoginStrategy } from 'auth/login.strategy';
import { PassportModule } from '@nestjs/passport';
import { TokenAuthStrategy } from "auth/token-auth.strategy";

@Module({
    imports: [UsersModule, PassportModule],
    providers: [AuthService, LoginStrategy, TokenAuthStrategy],
})
export class AuthModule {}
