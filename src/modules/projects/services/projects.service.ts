import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '@/projects/entities/projects.entity';
import { CreateProjectDto } from '@/projects/dto/create-projects.dto';
import { UpdateProjectDto } from '@/projects/dto/update-projects.dto';
import { AppService } from '@/app.service';

@Injectable()
export class ProjectsService extends AppService<Project, CreateProjectDto, UpdateProjectDto>{
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<Project>
    ) {
      super(projectModel);
    }
}
