import { Expose } from 'class-transformer';
import {
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class GoalDto {
  id: number;

  @Expose({ name: 'description' })
  @IsString()
  @IsNotEmpty({ message: 'Descrição é obrigatório' })
  descricao: string;

  @Expose({ name: 'goal_value' })
  @IsNumber()
  @IsNotEmpty({ message: 'Valor da meta é obrigatório' })
  meta: number;

  @Expose({ name: 'initial_value' })
  @IsNumber()
  saldo_inicial: number;

  @Expose({ name: 'term' })
  @IsDateString()
  prazo: Date;

  @Expose({ name: 'motivation' })
  @IsString()
  motivacao: string;

  constructor(props) {
    Object.assign(this, props);
  }
}
