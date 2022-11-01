import { Controller, Get, Post } from "@nestjs/common";
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
  async addUser() {
    try {
      const res = await this.userService.addUser();

      console.log(res);

      return res;
    } catch (err) {
      console.error("error", err);

      return "报错了！";
    }
  }
}
