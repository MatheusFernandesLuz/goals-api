import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GoalDto } from './dto/create-goal';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private service: GoalsService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.service.findOne(params.id);
  }

  @Post()
  create(@Body() goal: GoalDto) {
    return this.service.create(goal);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.service.remove(params.id);
  }
}
