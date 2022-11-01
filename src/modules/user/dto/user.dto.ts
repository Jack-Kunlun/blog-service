import { IsNotEmpty } from "class-validator";

export class UserDto {
  @IsNotEmpty({ message: "用户名不能为空" })
  username: string;

  @IsNotEmpty({ message: "密码不能为空" })
  password: string;

  phone?: string;

  email?: string;
}
