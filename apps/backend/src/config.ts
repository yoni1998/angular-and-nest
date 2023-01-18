import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(<string>process.env.POSTGRES_PORT),
  username: 'postgres',
  password: 'herfst123456789',
  database: process.env.POSTGRES_DATABASE,
  autoLoadEntities: true,
  synchronize: true,
};
