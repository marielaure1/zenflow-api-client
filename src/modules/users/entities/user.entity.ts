import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
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