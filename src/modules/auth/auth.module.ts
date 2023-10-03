import { Module } from '@nestjs/common';
import { AuthService } from '@/auth/services/auth.service';
import { AuthController } from '@/auth/controllers/auth.controller';
import { UsersModule } from '@/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '@/auth/guard/auth.guard'
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
