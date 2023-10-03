import { Document } from 'mongoose';
import { IsNotEmpty, IsOptional, IsDate, IsInt } from 'class-validator';

export class AddressDto extends Document {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    @IsInt()
    postalCode: string;

    @IsNotEmpty()
    city: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}