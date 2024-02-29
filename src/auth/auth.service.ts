import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async register(dto: CreateUserDto) {
    const hash = await bcrypt.hash(dto.password, 10);
    try {
      const userData = await this.userService.create({
        ...dto,
        password: hash,
      });

      return {
        token: this.jwtService.sign({ id: userData.id }),
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Registration error');
    }
  }

  async login(user: UserEntity) {
    try {
      const thisUser = await this.userService.findByEmail(user.email);
      const isPasswordMatching = await bcrypt.compare(
        user.password,
        thisUser.password,
      );
      if (!isPasswordMatching) {
        throw new ForbiddenException('Wrong credentials provided_1');
      }
      return {
        token: this.jwtService.sign({ id: thisUser.id }),
      };
    } catch (error) {
      throw new ForbiddenException('Wrong credentials provided_2');
    }
  }
}
