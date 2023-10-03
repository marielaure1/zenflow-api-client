import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamService } from '@/team/services/team.service';
import { TeamController } from '@/team/controllers/team.controller';
import { Team } from '@/team/entities/team.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: Team }])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
