import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ type: 'double' })
  meta: number;

  @Column({ type: 'double', default: 0 })
  saldo_inicial: number;

  @Column({
    type: 'date',
    default: new Date().toLocaleString(),
    nullable: true,
  })
  prazo: Date;

  @Column()
  motivacao: string;
}
