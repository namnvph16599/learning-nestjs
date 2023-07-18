import { IsNotEmpty, Length, IsDateString, IsString } from 'class-validator';

export class CreateEvent {
  @Length(10, 255)
  name: string;

  @IsString()
  address: string;

  @IsDateString()
  date_event: string;
}
