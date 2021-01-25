import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GoalDto {
  id: number;

  @Expose({ name: 'description' })
  @IsString()
  @IsNotEmpty({ message: 'Descrição é obrigatório' })
  descricao: string;

  @Expose({ name: 'goal' })
  @IsNumber()
  @IsNotEmpty({ message: 'Valor da meta é obrigatório' })
  meta: number;

  constructor(props) {
    Object.assign(this, props);
  }
}
