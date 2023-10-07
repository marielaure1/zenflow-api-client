import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UpdateUserEmailDto } from '@/users/dto/update-user-email.dto';
import { UpdateUserPasswordDto } from '@/users/dto/update-user-password.dto';
import { User } from '@/users/entities/user.entity';
import { AppService } from '@/app.service';

@Injectable()
export class UsersService extends AppService<User, CreateUserDto, CreateUserDto>{
  
  private usersModel: Model<User>

    async findOneByEmail(email: string): Promise<User> {
      try{
        const findOne = await this.usersModel.findOne({email}).exec();

        return findOne;

      }catch(error){
        console.log(error);  
      }
    }

    async updateEmail(email: string, updateUserEmailDto: UpdateUserEmailDto): Promise<User> {
      try{
        const findOne = await this.usersModel.findOne({email}).exec();

          return this.usersModel.findOneAndUpdate({email}, updateUserEmailDto).exec();


      }catch(error){
        console.log(error);  
      }
    }

    async updatePassword(password: string, updateUserPasswordDto: UpdateUserPasswordDto): Promise<User> {
      try{
        const findOne = await this.usersModel.findOne({password}).exec();

          return this.usersModel.findOneAndUpdate({password}, updateUserPasswordDto).exec();


      }catch(error){
        console.log(error);  
      }
    }
}