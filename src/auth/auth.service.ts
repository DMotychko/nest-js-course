import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthDto, CreateAuthDto } from './dto/auth.dto';
import { CreateUserDto, UserDto } from '../users/dto/user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async signUpUser(data: CreateUserDto) {
    const findUser = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (findUser) {
      throw new BadRequestException('user email is already exist');
    }
    const password = await bcrypt.hash(data.password, 10);
    console.log(data);
    const user = await this.userRepository.save(
      this.userRepository.create({
        ...data,
        password,
      }),
    );

    return {
      id: user.id,
      email: user.email,
      createdAt: user.created,
    };
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: AuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
