import { Module } from "@nestjs/common";
import { AppController } from "./modules/app/app.controller";
import { AppService } from "./modules/app/app.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "124.222.4.200",
      port: 5432,
      username: "admin",
      password: "admin123",
      database: "blog",
      entities: [`${__dirname}/../modules/**/entity/*.{js,ts}`],
      // 警告：设置 synchronize: true 不能被用于生产环境，否则您可能会丢失生产环境数据
      synchronize: false,
      logging: ["error"],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
