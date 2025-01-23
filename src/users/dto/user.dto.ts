import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: false })
  @IsNotEmpty()
  firstName: string;
  @ApiProperty({
    default: 'Lviv',
    required: false,
    description: 'user city',
    example: 'Poltava',
  })

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  password: string;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  age: number;
}

export class UserDto {
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: true })
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
  @ApiProperty({ required: true })
  id: string;
}

export class ForgotPassword {
  password: string;
  repeatPassword: string;
}
