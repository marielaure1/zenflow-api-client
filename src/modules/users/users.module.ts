import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from '@/users/services/users.service';
import { UsersController } from '@/users/controllers/users.controller';
import { User, UserSchema } from '@/users/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersModule],
})
export class UsersModule {}

