import { Document } from 'mongoose';

export class UpdateProjectDto extends Document {
  title: string;
  email: string;
}