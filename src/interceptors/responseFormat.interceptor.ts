import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface Response<T = any> {
  code: 200;
  message: "success";
  data: T;
}

@Injectable()
export class ResponseFormatInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<Response> | Promise<Observable<Response>> {
    return next.handle().pipe(
      // 将原有的 `data` 转化为统一的格式后返回
      map((data) => {
        const code = data?.code || 200;

        const message = data?.message || "success";

        if (code !== 200) {
          return {
            code,
            message,
            data: null,
          };
        }

        return {
          code,
          message,
          data,
        };
      }),
    );
  }
}
