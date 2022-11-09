import { Body, Controller, Get, Post, HttpCode } from "@nestjs/common";
import { LoginDto, UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("login")
  @HttpCode(200)
  async login(@Body() { username, password }: LoginDto) {
    try {
      const user = await this.userService.login(username, password);

      if (!user) {
        throw "用户名或密码错误！";
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

  @Post("addUser")
  @HttpCode(200)
  async addUser(@Body() { username, password, phone, email }: UserDto) {
    try {
      const res = await this.userService.addUser(
        username,
        password,
        phone,
        email,
      );

      return res;
    } catch (err) {
      return { code: 400, message: err };
    }
  }
}
