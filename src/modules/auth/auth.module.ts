import { Module } from '@nestjs/common';
import { AuthService } from '@/auth/services/auth.service';
import { UsersService } from '@/users/services/users.service';
import { TeamService } from '@/team/services/team.service';
import { UserDocument } from '@/users/entities/user.entity';
import { AuthController } from '@/auth/controllers/auth.controller';
import { UsersModule } from '@/users/users.module';
import { TeamModule } from '@/team/team.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '@/auth/guard/auth.guard'
import { APP_GUARD } from '@nestjs/core';
import { User, UserSchema } from '@/users/entities/user.entity';
import { Team, TeamSchema } from '@/team/entities/team.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    TeamModule,
    // JwtModule.register({
    //   global: true,
    //   secret: process.env.JWT_SECRET,
    //   signOptions: { expiresIn: '60s' },
    // }),
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    UsersService,
    TeamService,
  ],
})
export class AuthModule {}

