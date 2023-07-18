import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import typeorm from './config/typeorm';
import { EventsModule } from './modules/event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({ useFactory: typeorm }),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
