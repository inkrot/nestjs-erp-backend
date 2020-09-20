import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        //console.log(req)
        return req.user;
    }

    @Get()
    getHello() {
        //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        //return this.appService.getHello();
        return ''
    }
}
