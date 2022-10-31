import { Module } from "@nestjs/common";
import { AppController } from "./modules/app/app.controller";
import { AppService } from "./modules/app/app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/database";
import { ConfigModule, ConfigService } from "@nestjs/config";

console.log(typeOrmConfig);

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get("database"),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
