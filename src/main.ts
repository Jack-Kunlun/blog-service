import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ResponseErrorInterceptor } from "./interceptors/responseError.interceptor";
import { ResponseFormatInterceptor } from "./interceptors/responseFormat.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get("port");

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  app.useGlobalInterceptors(new ResponseErrorInterceptor());

  await app.listen(port);
}
bootstrap();
