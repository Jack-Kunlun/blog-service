import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/getUser")
  async getUser() {
    const data = await this.userService.findAll();
    console.log("data", data);

    return data;
  }

  @Post("/addUser")
  @HttpCode(200)
  async addUser(@Body() userDto: UserDto) {
    console.log("userDto:", userDto);

    try {
      throw "直接错";
      const res = await this.userService.addUser();

      return res;
    } catch (err) {
      return { code: 400, message: err };
    }
  }
}
