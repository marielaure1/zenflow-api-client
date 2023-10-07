import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PhoneDto } from '~/dtos/champs/phone.dto';
import { EmailDto } from '~/dtos/champs/email.dto';
import { AddressDto } from '~/dtos/champs/address.dto';

export type TeamDocument = Team & Document;

@Schema()
export class Team extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  phone: Array<PhoneDto>;
  
  @Prop({ required: true })
  email: Array<EmailDto>;

  @Prop({ required: true })
  address: AddressDto;

  @Prop({ required: true })
  notes: string;

  @Prop({ required: true })
  rôle: string;

  @Prop({ required: true })
  domaines: string;

  @Prop({ required: true })
  metiers: string;

  @Prop({ required: true })
  userId: string;

  @Prop()
  createdAt: Date;

  @Prop({ default: new Date()})
  updatedAt: Date;
}

export const TeamSchema = SchemaFactory.createForClass(Team);