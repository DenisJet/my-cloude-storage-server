import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'test2@test.com' })
  email: string;

  @ApiProperty({ default: 'test2' })
  fullName: string;

  @ApiProperty({ default: 'test2' })
  password: string;
}
