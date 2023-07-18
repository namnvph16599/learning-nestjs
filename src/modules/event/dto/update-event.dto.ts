import { PartialType } from '@nestjs/mapped-types';
import { CreateEvent } from './create-event.dto';

export class UpdateEvent extends PartialType(CreateEvent) {}
