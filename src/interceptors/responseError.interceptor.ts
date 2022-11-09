import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

/**
 * 捕获未处理的错误，并按格式统一返回
 */
@Injectable()
export class ResponseErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError(async (err) => {
        return {
          code: err.status || 400,
          message: err.message,
          data: null,
        };
      }),
    );
  }
}
