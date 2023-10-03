import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CreateLinksProjectsDto } from '@/projects/dto/create-links-projects.dto';
import { CreateMilestonesProjectsDto } from '@/projects/dto/create-milestones-projects.dto';

@Schema()
export class Project extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  dueDate: Date;

  @Prop()
  logo: string;

  @Prop({ default: 0 })
  progress: number;

  @Prop()
  milestones: Array<CreateMilestonesProjectsDto>;

  @Prop()
  links: Array<CreateLinksProjectsDto>;

  @Prop()
  note: string;

  @Prop()
  createdAt: Date;

  @Prop({ default: new Date()})
  updatedAt: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);