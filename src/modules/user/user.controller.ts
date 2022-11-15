import { Body, Controller, Get, Post, HttpCode } from "@nestjs/common";
import { encryptPassword, makeSalt } from "src/utils/cryptogram";
import { LoginDto, UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("login")
  @HttpCode(200)
  async login(@Body() { username, password }: LoginDto) {
    try {
      const user = await this.userService.login(username);

      if (!user) {
        throw "该用户不存在！";
      }

      const encryptedPassword = encryptPassword(password, user.passwordSalt);

      if (encryptedPassword !== user.password) {
        throw "密码错误！";
      }

      return user;
    } catch (err) {
      return { code: 400, message: err };
    }
  }

  @Get("getUser")
  async getUser() {
    const data = await this.userService.findAll();

    return data;
  }

  @Post("register")
  @HttpCode(200)
  async addUser(@Body() { username, password, phone, email }: UserDto) {
    try {
      const salt = makeSalt();

      const encryptionPassword = encryptPassword(password, salt);

      const res = await this.userService.addUser(
        username,
        encryptionPassword,
        salt,
        phone,
        email,
      );

      return res;
    } catch (err) {
      return { code: 400, message: err };
    }
  }
}
