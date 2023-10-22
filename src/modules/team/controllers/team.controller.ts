import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamService } from '@/team/services/team.service';
import { CreateTeamDto } from '@/team/dto/create-team.dto';
import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { TeamDocument } from '@/team/entities/team.entity';
import { AppController } from '@/app.controller';
import { log } from 'console';

@ApiTags('team')
@Controller('team')
export class TeamController extends AppController<TeamService, TeamDocument, CreateTeamDto, CreateTeamDto>{
    constructor(
        private readonly teamService: TeamService
    ) {
        super(teamService);
    }

  
}
