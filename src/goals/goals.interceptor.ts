import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { type } from 'os';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GoalDto } from './dto/create-goal';
import { Goal } from './goals.entity';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  generateDto(object: Goal): GoalDto {
    return new GoalDto(object);
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((resposta) => {
        let result;

        console.log(typeof type);

        if (resposta instanceof Array) {
          result = resposta.map((e) => this.generateDto(e));
        } else if (resposta instanceof Goal) {
          result = this.generateDto(resposta);
        } else {
          result = resposta;
        }

        return result;
      }),
    );
  }
}
