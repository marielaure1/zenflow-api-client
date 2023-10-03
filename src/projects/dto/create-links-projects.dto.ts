import { Document } from 'mongoose';

export class CreateLinksProjectsDto extends Document {
  title: string;
  value: string;
  dueDate: Date;
  position: Number;
}