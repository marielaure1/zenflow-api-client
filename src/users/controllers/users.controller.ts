import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from '@/users/services/users.service';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UpdateUserPasswordDto } from '@/users/dto/update-user-password.dto';
import { UpdateUserEmailDto } from '@/users/dto/update-user-email.dto';
import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { User } from '@/users/entities/user.entity';
import { AppController } from '@/app.controller';

@ApiTags('users')
@Controller('users')
export class UsersController extends AppController<UsersService, User, CreateUserDto, CreateUserDto>{
    constructor(
        private readonly usersService: UsersService
    ) {
        super(usersService);
    }

    @Patch('email/:id')
    updateEmail(@Param('id') id: string, @Body() UpdateUserEmailDto: UpdateUserEmailDto) {
      return this.usersService.updateEmail(id, UpdateUserEmailDto);
    }

    @Patch('password/:id')
    updatePassword(@Param('id') id: string, @Body() UpdateUserPasswordDto: UpdateUserPasswordDto) {
      return this.usersService.updatePassword(id, UpdateUserPasswordDto);
    }
}