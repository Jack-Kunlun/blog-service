import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";

@Injectable()
export class UserService {
  // 在构造方法中注入实体
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 在这里新增一个getAll方法，测试配置是否正确
  async getAllUserTest(): Promise<User[]> {
    // 其实这里也可以使用BaseEntity里提供的Read方法，不过建议还是自己写SQL比较好
    return await this.userRepository.query("select * from user");
  }
}
