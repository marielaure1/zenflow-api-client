import { Document } from 'mongoose';

export class AuthDto extends Document {
  email: string;
  password: string;
}