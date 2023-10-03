import { Document } from 'mongoose';
import { IsNotEmpty, IsOptional, IsDate, IsEmail } from 'class-validator';

export class EmailDto extends Document {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsEmail()
    value: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}