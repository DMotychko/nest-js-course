import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: false })
  firstName: string;
  @ApiProperty({
    default: 'Lviv',
    required: false,
    description: 'user city',
    example: 'Poltava',
  })
  city: string;
  @ApiProperty({ required: true })
  password: string;
  @ApiProperty({ required: true })
  age: number;
}

export class UserDto {
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: false })
  firstName: string;
  @ApiProperty({
    default: 'Lviv',
    required: false,
    description: 'user city',
    example: 'Poltava',
  })
  city: string;
  @ApiProperty({ required: true })
  password: string;
  @ApiProperty({ required: true })
  age: number;
  @ApiProperty({required: true})
  id: number;
}