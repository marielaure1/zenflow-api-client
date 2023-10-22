import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeamDto } from '@/team/dto/create-team.dto';
import { UpdateTeamDto } from '@/team/dto/update-team.dto';
import { Team, TeamDocument } from '@/team/entities/team.entity';
import { AppService } from '@/app.service';

@Injectable()
export class TeamService extends AppService<TeamDocument, CreateTeamDto, UpdateTeamDto>{
  
  constructor(
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>
  ) {
    super(teamModel);
  }

  async getTeamWithUser(teamId: string): Promise<TeamDocument | null> {
    try {
      const team = await this.teamModel
        .findById(teamId)
        .populate('user')
        .exec();
  
      return team;
    } catch (error) {
      console.error(error);
    }
  }

}