import { Module } from '@nestjs/common';
import { AppController } from 'auth/auth.controller';
import { AuthModule } from 'auth/auth.module';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
