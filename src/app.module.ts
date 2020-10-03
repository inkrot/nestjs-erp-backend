import { Module } from '@nestjs/common';
import { AuthController } from 'auth/auth.controller';
import {AuthModule} from "auth/auth.module";
import { UsersModule } from 'users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [AuthModule, UsersModule,
    TypeOrmModule.forRoot()],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
