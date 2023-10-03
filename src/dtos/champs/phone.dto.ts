import { Document } from 'mongoose';
import { IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class PhoneDto extends Document {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    value: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}