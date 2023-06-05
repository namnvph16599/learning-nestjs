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

@Controller('api/events')
export class EventsController {
  @Get()
  findAll() {
    return 1;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  @Post()
  create(@Body() input: CreateEvent) {
    return input;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: any) {
    return input;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return id;
  }
}
