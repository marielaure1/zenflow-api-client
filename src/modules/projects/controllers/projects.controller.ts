import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Patch, 
    Delete, 
    Body,
    Res,
    HttpStatus
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { ProjectsService } from '@/projects/services/projects.service';
import { CreateProjectDto }  from '@/projects/dto/create-projects.dto';
import { UpdateProjectDto } from '@/projects/dto/update-projects.dto';
import { AppController } from '@/app.controller';
import { Project } from '@/projects/entities/projects.entity';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController extends AppController<ProjectsService, Project, CreateProjectDto, UpdateProjectDto>{
    constructor(
        private readonly projectsService: ProjectsService
    ) {
        super(projectsService);
    }

}


