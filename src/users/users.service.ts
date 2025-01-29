import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { BaseQueryDto } from '../common/validator/base-query.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

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
    return newUser;
  }

  async findAll(query: BaseQueryDto) {
    const options = {
      page: +query?.page || 1,
      limit: +query?.limit || 10,
    };
    // const queryBuilder = await this.userRepository
    //   .createQueryBuilder('user')
    //   .leftJoinAndSelect('user.posts', 'posts')
    //   .skip((options.page - 1) * options.limit)
    //   .take(options.limit);
    //
    // // queryBuilder.select('email, "firstName", age, id, "created"');
    //
    // // if (query.search) {
    // //   queryBuilder.where(`LOWER("firstName") LIKE '%${query.search}%'`);
    // // }
    //
    // // const [pagination, rawEntities] = await paginateRawAndEntities(
    // //   queryBuilder,
    // //   options,
    // // );
    // const count = await queryBuilder.getCount();
    // return {
    //   page: options.page,
    //   pages: Math.ceil(count / options.limit),
    //   countItems: count,
    //   entities: await queryBuilder.getMany(),
    // };
    //{
    //   page: pagination.meta.currentPage,
    //   pages: pagination.meta.totalPages,
    //   countItems: pagination.meta.totalItems,
    //   entities: rawEntities,
    // };

    const [entities, total] = await this.userRepository.findAndCount({
      select: {
        email: true,
        firstName: true,
        id: true,
      },
      relations: {
        posts: true,
      },
      skip: (options.page - 1) * options.limit,
      take: options.limit,
    });

    return {
      page: options.page,
      pages: Math.ceil(total / options.limit),
      countItems: total,
      entities: entities,
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
