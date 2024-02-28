import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'test@test.com' })
  email: string;

  @ApiProperty({ default: 'Test Name' })
  fullName: string;

  @ApiProperty({ default: 1234 })
  password: string;
}
