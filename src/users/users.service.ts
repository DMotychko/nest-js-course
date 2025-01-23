import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { BaseQueryDto } from '../common/validator/base-query.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { paginateRawAndEntities } from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private userList = [];
  create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: new Date().getSeconds().toString(),
    };
    return this.userList.push(newUser);
  }

  async findAll(query: BaseQueryDto) {
    const options = {
      page: query?.page || 1,
      limit: query?.limit || 10,
    };
    const queryBuilder = await this.userRepository.createQueryBuilder('user');
    queryBuilder.select('email, "firstName", age, id, "created"');

    // if (query.search) {
    //   queryBuilder.where(`LOWER("firstName") LIKE '%${query.search}%'`);
    // }

    const [pagination, rawEntities] = await paginateRawAndEntities(
      queryBuilder,
      options,
    );
    return {
      page: pagination.meta.currentPage,
      pages: pagination.meta.totalPages,
      countItems: pagination.meta.totalItems,
      entities: rawEntities,
    };
  }

  findOne(id: string) {
    return this.userList.find((user) => user.id === id);
  }

  // update(id: number, updateUserDto: UsersDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
