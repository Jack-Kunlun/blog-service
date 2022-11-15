import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ResponseErrorInterceptor } from "./interceptors/responseError.interceptor";
import { ResponseFormatInterceptor } from "./interceptors/responseFormat.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get("port");

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseErrorInterceptor());
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(port);
}
bootstrap();
