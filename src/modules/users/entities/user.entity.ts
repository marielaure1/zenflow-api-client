import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  createdAt: Date;

  @Prop({ default: new Date()})
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);