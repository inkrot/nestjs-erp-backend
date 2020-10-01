import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                id: 1,
                username: 'test',
                name: 'Фамилия Имя',
                password: '123',
            },
            {
                id: 2,
                username: 'server',
                name: 'Фамилия Имя Отчество',
                password: '321',
            }
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
