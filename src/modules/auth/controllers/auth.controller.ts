import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthService } from '@/auth/services/auth.service';
import { AuthDto } from "@/auth/dto/auth.dto"
import { AuthGuard } from '@/auth/guard/auth.guard';
import { Public } from '~/decorators/public.decorator';
import { User } from '@/users/entities/user.entity'
import { Model } from 'mongoose'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto.email, authDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto.email, authDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(@Body() authDto: AuthDto) {
    return this.authService.logout(authDto.email, authDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: Model<User>) {
    return req;
  }
}
