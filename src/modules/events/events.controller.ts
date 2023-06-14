import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEvent } from './dto/create-event.dto';
import { UpdateEvent } from './dto/update-event.dto';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('api/events')
export class EventsController {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  @Post()
  async create(@Body() input: CreateEvent) {
    return await this.repository.save({
      ...input,
    });
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() input: UpdateEvent) {
    const olrEvent = await this.repository.findOne({ where: { id } });
    return await this.repository.save({
      ...olrEvent,
      ...input,
    });
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.repository.delete(id);
  }
}
