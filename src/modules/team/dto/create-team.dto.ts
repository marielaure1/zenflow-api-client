import { IsNotEmpty, IsOptional, IsDate } from 'class-validator';
import { PhoneDto } from '~/dtos/champs/phone.dto';
import { EmailDto } from '~/dtos/champs/email.dto';
import { RoleEnum } from '~/enums/role.enum';

export class CreateTeamDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  picture?: string;

  @IsNotEmpty()
  phones: Array<PhoneDto>;

  @IsNotEmpty()
  emails: Array<EmailDto>;

  @IsOptional()
  address?: string;

  @IsOptional()
  notes?: string;

  @IsNotEmpty()
  role: RoleEnum;

  @IsNotEmpty()
  domains: Array<String>;

  @IsNotEmpty()
  jobs: Array<String>;

  @IsNotEmpty()
  permissions: Array<Object>;

  @IsNotEmpty()
  user: Object;

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
