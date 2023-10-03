import { Document } from 'mongoose';

export class CreateProjectDto extends Document {
  name: string;
  description: string;
  logo: string;
  startDate: Date;
  endDate: Date;
  dueDate: Date;
  progress: number;
  jalons: JSON;
  links: JSON;
  note: string;
  createdAt: Date;
  updatedAt: Date;
}