import { EnumType } from 'typescript';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types  } from 'mongoose';
import { PhoneDto } from '~/dtos/champs/phone.dto';
import { EmailDto } from '~/dtos/champs/email.dto';
import { AddressDto } from '~/dtos/champs/address.dto';
import { RoleEnum } from '~/enums/role.enum';

export type TeamDocument = Team & Document;

@Schema()
export class Team extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  picture?: string;

  @Prop({ required: true })
  phones: Array<PhoneDto>;
  
  @Prop({ required: true })
  emails: Array<EmailDto>;

  @Prop()
  address?: AddressDto;

  @Prop()
  notes?: string;

  @Prop({ required: true, type: String, enum: RoleEnum, default: "GUEST"  })
  role: RoleEnum;

  @Prop({ required: true })
  domains: Array<String>;

  @Prop({ required: true })
  jobs: Array<String>;

  @Prop({ required: true })
  permissions: Array<Object>;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;

  @Prop()
  createdAt?: Date;

  @Prop({ default: new Date()})
  updatedAt?: Date;
}

export const TeamSchema = SchemaFactory.createForClass(Team);