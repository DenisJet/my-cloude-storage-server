import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'test@test.com', uniqueItems: true })
  email: string;

  @ApiProperty({ default: 'test' })
  fullName: string;

  @ApiProperty({ default: 'test' })
  password: string;
}
