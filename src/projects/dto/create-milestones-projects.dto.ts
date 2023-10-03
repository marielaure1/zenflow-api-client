import { Document } from 'mongoose';

export class CreateMilestonesProjectsDto extends Document {
  readonly title: string;
  readonly notes: string;
  readonly dueDate: Date;
  readonly position: Number;
}