import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoalDto } from './dto/create-goal';
import { Goal } from './goals.entity';

@Injectable()
export class GoalsService {
  constructor(
    @InjectRepository(Goal)
    private goalRepository: Repository<Goal>,
  ) {}

  async findAll(): Promise<GoalDto[]> {
    return await this.goalRepository.find();
  }

  async findOne(id: string): Promise<GoalDto> {
    return await this.goalRepository.findOne(id);
  }

  create(goal: GoalDto) {
    return this.goalRepository.insert({ ...goal });
  }

  async remove(id: number): Promise<void> {
    await this.goalRepository.delete(id);
  }
}
