import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Event } from 'src/modules/event/event.entity';

export default (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Event],
  autoLoadEntities: true,
  synchronize: true,
});
