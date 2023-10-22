import { User } from '@/users/entities/user.entity';
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto extends User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  statut: string;

  @IsOptional()
  token?: string;

  @IsOptional()
  createdAt?: Number;

  @IsOptional()
  updatedAt?: Number;
}