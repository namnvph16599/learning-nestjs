import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  console.log('SERVER RUNNING PORT: ' + PORT);

  await app.listen(PORT);
}
bootstrap();
