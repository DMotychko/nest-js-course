import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty({ required: true })
  message: string;

  @ApiProperty({ required: true })
  userId: number;
}
