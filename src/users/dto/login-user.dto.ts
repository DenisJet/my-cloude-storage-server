import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ default: 'test@test.com', uniqueItems: true })
  email: string;

  @ApiProperty({ default: 'test' })
  password: string;
}
