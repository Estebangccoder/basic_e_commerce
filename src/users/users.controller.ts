import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { get } from 'http';

@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService){}

    @Post()
    createUser(@Body() newUser:CreateUserDto){
       return this.usersService.createUser(newUser)
    }

    @Get()
    getUsers() {
        return this.usersService.getUsers()
    }

}
