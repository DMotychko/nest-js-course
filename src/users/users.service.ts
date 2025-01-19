import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private userList = [];
  create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: new Date().getSeconds().toString(),
    };
    return this.userList.push(newUser);
  }

  findAll() {
    return this.userList;
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
