import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'This field is unique on DB and using for querys',
    example: 'jhondoe@exemple.com',
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    name: 'This field is not unique on DB and using for Identification char',
    example: 'Jhon Doe',
  })
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    description: 'This field is save in a HashCode on DB and using for auth',
    example:
      'user input is 123465, on bd its save like s!!w323$2%#$@(#aaadWOIKAD2312321mnmmjhaio14563',
  })
  @IsNotEmpty()
  password: string;
  @ApiProperty({
    description:
      'This field is not unique on DB and using for setRoutes and indentification',
    example: '01',
  })
  @IsNotEmpty()
  corporation_id: number;
}
