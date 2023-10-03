import { Document } from 'mongoose';
import { IsNotEmpty, IsOptional, IsDate } from 'class-validator';
import { PhoneDto } from '@/dtos/champs/phone.dto';
import { EmailDto } from '@/dtos/champs/email.dto';
import { RoleEnum } from '@/enums/role.enum';
import { EnumType } from 'typescript';

export class CreateTeamDto extends Document {

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    picture: string;

    @IsNotEmpty()
    phone: Array<PhoneDto>;
    
    @IsNotEmpty()
    email: Array<EmailDto>;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    notes: string;

    @IsNotEmpty()
    rôle: RoleEnum;

    @IsNotEmpty()
    domaines: string;

    @IsNotEmpty()
    metiers: string;

    @IsNotEmpty()
    userId: string;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}