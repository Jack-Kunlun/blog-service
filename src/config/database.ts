import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "124.222.4.200",
  port: 5432,
  username: "admin",
  password: "admin123",
  database: "blog",
  entities: [`${__dirname}/../entity/*.entity.{js,ts}`],
  // 警告：设置 synchronize: true 不能被用于生产环境，否则您可能会丢失生产环境数据
  synchronize: false,
  logging: ["error"],
};
