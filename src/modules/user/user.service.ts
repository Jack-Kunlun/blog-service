import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  login(username: string, password: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username, password } });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async addUser(
    username: string,
    password: string,
    phone?: string,
    email?: string,
  ): Promise<User> {
    const user = new User();

    user.username = username;
    user.password = password;
    user.phone = phone;
    user.email = email;

    return await this.usersRepository.save(user);
  }
}
