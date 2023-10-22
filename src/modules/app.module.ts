import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from '@/projects/projects.module';
import { TeamModule } from '@/team/team.module';
import { UsersModule } from '@/users/users.module';
// import { ClientsModule } from '@/clients/clients.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ProjectsModule,
    TeamModule,
    UsersModule,
    // ClientsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
  exports: [AppModule]
})
export class AppModule {}
