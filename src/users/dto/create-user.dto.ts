import { Document } from 'mongoose';
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto extends Document {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  password: string;
}