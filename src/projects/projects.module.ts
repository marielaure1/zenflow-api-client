import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectsService } from '@/projects/services/projects.service';
import { Project } from './entities/projects.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Project', schema: Project }])],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [ProjectsService]
})
export class ProjectsModule {}