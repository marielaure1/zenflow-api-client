import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { UsersService } from '@/users/services/users.service';
import { User } from "@/users/entities/user.entity";
import { JwtService } from '@nestjs/jwt';
import Hash from '@/utils/hash.utils';


@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private hash: Hash
  ) {}

  async login(identifiant: string, pass: string): Promise<Object> {
    const user = await this.usersService.findOne(identifiant);

    const passCompare = await  this.hash.hashCompareData(pass, user?.password);

    if (!passCompare) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, username: user.email };

    const token = await this.jwtService.signAsync(payload);

    return {
      token
    };
  }

  async register(identifiant: string, pass: string): Promise<Object> {
    const user = await this.usersService.findOne(identifiant);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, username: user.email };

    const token = await this.jwtService.signAsync(payload);
    return {
      token,
    };
  }

  async logout(identifiant: string, pass: string): Promise<Object> {
    const user = await this.usersService.findOne(identifiant);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, username: user.email };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
    };
  }
}
