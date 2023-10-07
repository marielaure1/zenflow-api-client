import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamService } from '@/team/services/team.service';
import { TeamController } from '@/team/controllers/team.controller';
import { Team, TeamSchema} from '@/team/entities/team.entity';
// import { UsersModule } from '@/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [TeamModule]
})
export class TeamModule {}
