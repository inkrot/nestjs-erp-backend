import { Module } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { UsersModule } from 'users/users.module';
import { LocalStrategy } from 'auth/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [UsersModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
