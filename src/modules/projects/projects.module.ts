import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from '@/projects/controllers/projects.controller';
import { ProjectsService } from '@/projects/services/projects.service';
import { Project, ProjectSchema } from '@/projects/entities/projects.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }])],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [ProjectsModule]
})
export class ProjectsModule {}