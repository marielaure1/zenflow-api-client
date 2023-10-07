import { User } from '@/users/entities/user.entity';
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto extends User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  password: string;
}