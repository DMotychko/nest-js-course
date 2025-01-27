import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';

export class BaseQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumberString()
  sort: string;

  @ApiProperty({ required: false, default: 'ASC', enum: ['ASC', 'DESC'] })
  @IsEnum(['ASC', 'DESC'])
  @IsOptional()
  order: string = 'ASC';

  @ApiProperty({ required: false, default: 1 })
  @IsOptional()
  page: number = 1;

  @ApiProperty({ required: false, default: 10 })
  @IsOptional()
  limit: number = 10;

  @ApiProperty({ required: false })
  @IsString()
  search: string;
}
