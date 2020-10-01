import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TokenAuthGuard } from 'auth/token-auth.guard'

@Controller()
export class AppController {

    @Post('login')
    @UseGuards(AuthGuard('login'))
    async login(@Request() request) {
        let user = request.user
        return {
            username: user.username,
            name: user.name,
            token: '3434'
        }
    }

    @Get('checkAuthToken')
    @UseGuards(TokenAuthGuard)
    async checkAuthToken(@Request() request) {}

}
